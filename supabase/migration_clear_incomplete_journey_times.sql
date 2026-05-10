-- Migration: Clear completion times for incomplete journeys
-- 
-- Problem: Before the fix, users with incomplete journeys (not all 9 stages completed)
-- had completion times synced to the database. This migration clears those invalid times.
--
-- Fix: Set time_sec = NULL for all users where journey_completed_at IS NULL
-- (journey not complete means they haven't finished all 9 stages)
--
-- Date: 2026-05-10
-- Related Bug: leaderboard-completion-time-incomplete-journey

BEGIN;

-- Update leaderboard_entries: Clear time_sec for incomplete journeys
UPDATE leaderboard_entries
SET 
  time_sec = NULL,
  updated_at = NOW()
WHERE 
  journey_completed_at IS NULL  -- Journey not complete
  AND time_sec IS NOT NULL;     -- But has a completion time (invalid)

-- Log the number of rows updated
DO $$
DECLARE
  rows_updated INTEGER;
BEGIN
  GET DIAGNOSTICS rows_updated = ROW_COUNT;
  RAISE NOTICE 'Migration completed: % rows updated (time_sec cleared for incomplete journeys)', rows_updated;
END $$;

COMMIT;

-- Verification query (run after migration to verify)
-- SELECT 
--   COUNT(*) as total_incomplete_journeys,
--   COUNT(CASE WHEN time_sec IS NOT NULL THEN 1 END) as incomplete_with_time,
--   COUNT(CASE WHEN time_sec IS NULL THEN 1 END) as incomplete_without_time
-- FROM leaderboard_entries
-- WHERE journey_completed_at IS NULL;
--
-- Expected result after migration:
-- - incomplete_with_time should be 0
-- - incomplete_without_time should equal total_incomplete_journeys
