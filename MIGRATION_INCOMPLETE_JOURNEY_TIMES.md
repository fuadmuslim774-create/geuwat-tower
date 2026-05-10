# Migration: Clear Completion Times for Incomplete Journeys

## Problem

Before the bugfix, users with incomplete journeys (not all 9 stages completed with 100%) had completion times synced to the leaderboard database. This caused incorrect ranking where users who haven't completed the journey showed completion times.

## Solution

The code fix prevents **new** incomplete journey/stage times from being displayed. However, **old data** in the database and local storage still needs to be cleaned up.

### Code Fixes Applied:

1. **Overall Leaderboard** (`lib/progress.ts`):
   - `getCompletionTimeSeconds()` now checks `isJourneyComplete()` before calculating completion time
   - Returns `null` if journey is not complete (all 9 stages not completed)

2. **Per-Stage Leaderboard** (`lib/supabase/leaderboard.ts`):
   - `fetchPerStageRanks()` now checks `completed: true` flag before including user in rankings
   - Previously only checked if `bestTimeSeconds` exists (which can be set even for incomplete attempts)
   - Now requires both `completed === true` AND `bestTimeSeconds > 0`

## Migration Steps

### 1. Backup Database (Recommended)

Before running any migration, create a backup of your `leaderboard_entries` table:

```sql
-- Create backup table
CREATE TABLE leaderboard_entries_backup_20260510 AS 
SELECT * FROM leaderboard_entries;
```

### 2. Run Migration Script

Execute the migration script to clear invalid completion times:

```bash
# Using psql
psql -h <your-supabase-host> -U postgres -d postgres -f supabase/migration_clear_incomplete_journey_times.sql

# Or using Supabase SQL Editor
# Copy and paste the contents of supabase/migration_clear_incomplete_journey_times.sql
# into the Supabase SQL Editor and run it
```

### 3. Verify Migration

After running the migration, verify that all incomplete journeys have `time_sec = NULL`:

```sql
SELECT 
  COUNT(*) as total_incomplete_journeys,
  COUNT(CASE WHEN time_sec IS NOT NULL THEN 1 END) as incomplete_with_time,
  COUNT(CASE WHEN time_sec IS NULL THEN 1 END) as incomplete_without_time
FROM leaderboard_entries
WHERE journey_completed_at IS NULL;
```

**Expected result:**
- `incomplete_with_time` should be **0**
- `incomplete_without_time` should equal `total_incomplete_journeys`

### 4. Check Affected Users

To see which users were affected by the migration:

```sql
SELECT 
  le.user_id,
  p.username,
  le.rank_stage_id,
  le.journey_started_at,
  le.journey_completed_at,
  le.updated_at
FROM leaderboard_entries le
JOIN profiles p ON le.user_id = p.id
WHERE 
  le.journey_completed_at IS NULL
  AND le.updated_at >= NOW() - INTERVAL '1 hour'  -- Updated in last hour
ORDER BY le.updated_at DESC;
```

## What This Migration Does

1. **Identifies invalid entries**: Finds all `leaderboard_entries` where:
   - `journey_completed_at IS NULL` (journey not complete)
   - `time_sec IS NOT NULL` (but has a completion time - invalid!)

2. **Clears invalid times**: Sets `time_sec = NULL` for these entries

3. **Updates timestamp**: Sets `updated_at = NOW()` to track when the fix was applied

## Impact

- **Overall Leaderboard**:
  - Users with incomplete journeys (< 9 stages completed) will no longer show completion times
  - Only users who completed all 9 stages with 100% will have completion times displayed
  
- **Per-Stage Leaderboard**:
  - Users who played a stage but didn't complete it (game over) will no longer appear in that stage's rankings
  - Only users who completed the specific stage with 100% will appear in per-stage rankings
  - Example: User plays "Lax Vowel" and gets 80% (game over) → will NOT appear in Lax Vowel leaderboard
  
- **Leaderboard ranking**: Will now correctly show only users who completed stages/journey with 100%

## Rollback (If Needed)

If you need to rollback the migration:

```sql
-- Restore from backup
INSERT INTO leaderboard_entries
SELECT * FROM leaderboard_entries_backup_20260510
ON CONFLICT (user_id) DO UPDATE SET
  rank_stage_id = EXCLUDED.rank_stage_id,
  time_sec = EXCLUDED.time_sec,
  journey_started_at = EXCLUDED.journey_started_at,
  journey_completed_at = EXCLUDED.journey_completed_at,
  updated_at = EXCLUDED.updated_at;
```

## Related Files

- **Migration Script**: `supabase/migration_clear_incomplete_journey_times.sql`
- **Code Fixes**: 
  - `lib/progress.ts` - `getCompletionTimeSeconds()` function (Overall leaderboard)
  - `lib/supabase/leaderboard.ts` - `fetchPerStageRanks()` function (Per-stage leaderboard)
- **Bug Spec**: `.kiro/specs/leaderboard-completion-time-incomplete-journey/`
- **Tests**: 
  - `lib/progress.getCompletionTimeSeconds.bugfix.test.ts` (Overall leaderboard)
  - `lib/progress.getCompletionTimeSeconds.preservation.test.ts` (Overall leaderboard)
  - `lib/supabase/leaderboard.perStage.bugfix.test.ts` (Per-stage leaderboard)

## Notes

- This migration is **idempotent** - safe to run multiple times
- The migration only affects entries where `journey_completed_at IS NULL`
- Complete journeys (all 9 stages with 100%) are not affected
- After migration, the code fix will prevent new invalid times from being synced
