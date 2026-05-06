# Database Migration: Journey Timestamps

## Problem
Completion timer resets to zero every time user logs back in because `journeyStartedAt` was only stored in browser local storage.

## Solution
Add `journey_started_at` and `journey_completed_at` columns to the `leaderboard_entries` table to persist journey timestamps in the database.

## How to Apply Migration

### Option 1: Using Supabase Dashboard (Recommended)
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the contents of `migration_add_journey_timestamps.sql`
5. Click **Run** to execute the migration

### Option 2: Using Supabase CLI
```bash
# If you have Supabase CLI installed
supabase db push
```

## What This Migration Does

1. **Adds two new columns** to `leaderboard_entries`:
   - `journey_started_at` (timestamptz, nullable) - When user first logged in
   - `journey_completed_at` (timestamptz, nullable) - When user completed all stages

2. **Creates indexes** for better query performance:
   - Index on `journey_started_at`
   - Index on `journey_completed_at`

3. **Updates views** to include the new columns:
   - `v_global_ranks` - Includes journey timestamps
   - `v_global_ranks_ordered` - Includes journey timestamps

## After Migration

Once the migration is applied:

1. **Existing users**: Their journey timestamps will be `null` in the database initially
   - On next stage completion, timestamps will be synced from local storage to database
   - Timer will continue to work using local storage as fallback

2. **New users**: Journey timestamps will be persisted to database immediately
   - Timer will persist across login sessions
   - No more reset on re-login

3. **All users**: After completing at least one stage post-migration
   - Journey timestamps will be in database
   - Timer will be consistent across devices (if using same account)
   - Timer will persist even if browser data is cleared

## Verification

After applying the migration, verify it worked:

```sql
-- Check that columns were added
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leaderboard_entries'
  AND column_name IN ('journey_started_at', 'journey_completed_at');

-- Check that indexes were created
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'leaderboard_entries'
  AND indexname LIKE '%journey%';

-- Check that views were updated
SELECT column_name
FROM information_schema.columns
WHERE table_name = 'v_global_ranks_ordered'
  AND column_name IN ('journey_started_at', 'journey_completed_at');
```

Expected output:
- 2 columns added to `leaderboard_entries`
- 2 indexes created
- 2 columns visible in `v_global_ranks_ordered` view

## Rollback (if needed)

If you need to rollback this migration:

```sql
begin;

-- Drop indexes
drop index if exists public.leaderboard_entries_journey_started_at_idx;
drop index if exists public.leaderboard_entries_journey_completed_at_idx;

-- Recreate views without journey timestamps
drop view if exists public.v_global_ranks;
create view public.v_global_ranks
with (security_invoker = true)
as
select
  p.id as user_id,
  p.username,
  p.avatar_id,
  p.batch_id,
  le.rank_stage_id,
  le.time_sec,
  le.updated_at
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id;

drop view if exists public.v_global_ranks_ordered;
create view public.v_global_ranks_ordered
with (security_invoker = true)
as
select
  p.id as user_id,
  p.username,
  p.avatar_id,
  p.batch_id,
  le.rank_stage_id,
  le.time_sec,
  le.updated_at,
  case le.rank_stage_id
    when 'alphabet' then 1
    when 'lax_vowel' then 2
    when 'tense_vowel' then 3
    when 'diphthong' then 4
    when 'voiceless' then 5
    when 'voiced' then 6
    when 'final_s_es' then 7
    when 'final_d_ed' then 8
    when 'royal_king' then 9
    else 0
  end as rank_stage_num
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  rank_stage_num desc,
  coalesce(le.time_sec, 2147483647) asc,
  p.username asc;

-- Drop columns
alter table public.leaderboard_entries
drop column if exists journey_started_at,
drop column if exists journey_completed_at;

commit;
```

## Support

If you encounter any issues:
1. Check Supabase logs for error messages
2. Verify your database user has sufficient permissions
3. Ensure no other migrations are running simultaneously
