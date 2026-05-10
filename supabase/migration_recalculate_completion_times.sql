-- Migration: Recalculate completion times from elapsed time to sum of best times
-- This script updates all leaderboard_entries.time_sec values to use sum of bestTimeSeconds
-- from user_progress instead of elapsed journey time.
--
-- IMPORTANT: This migration requires the user_progress table to exist with progress JSONB column.
-- Run this migration AFTER deploying the client-side and server-side code changes.

begin;

-- Create temporary function to calculate sum of best times
create or replace function calculate_sum_of_best_times(
  p_user_id uuid,
  p_rank_stage_id public.stage_id
)
returns integer
language plpgsql
as $$
declare
  v_progress jsonb;
  v_stages jsonb;
  v_stage_order text[] := array['alphabet', 'lax_vowel', 'tense_vowel', 'diphthong', 'voiceless', 'voiced', 'final_s_es', 'final_d_ed', 'royal_king'];
  v_rank_stage_index integer;
  v_total_time integer := 0;
  v_has_any boolean := false;
  v_stage_id text;
  v_stage_progress jsonb;
  v_best_time numeric;
  v_completed boolean;
begin
  -- Fetch user progress
  select progress into v_progress
  from public.user_progress
  where user_id = p_user_id;
  
  if v_progress is null then
    return null;
  end if;
  
  -- Get stages object
  v_stages := v_progress->'stages';
  if v_stages is null then
    return null;
  end if;
  
  -- Find rank stage index
  v_rank_stage_index := array_position(v_stage_order, p_rank_stage_id::text);
  if v_rank_stage_index is null then
    return null;
  end if;
  
  -- Sum best times for all stages up to rank_stage_id
  for i in 1..v_rank_stage_index loop
    v_stage_id := v_stage_order[i];
    v_stage_progress := v_stages->v_stage_id;
    
    if v_stage_progress is null then
      continue;
    end if;
    
    -- Check if stage is completed
    v_completed := (v_stage_progress->>'completed')::boolean;
    if not v_completed then
      exit; -- Stop at first incomplete stage
    end if;
    
    -- Get bestTimeSeconds
    v_best_time := (v_stage_progress->>'bestTimeSeconds')::numeric;
    if v_best_time is not null then
      v_total_time := v_total_time + v_best_time::integer;
      v_has_any := true;
    end if;
  end loop;
  
  if v_has_any then
    return v_total_time;
  else
    return null;
  end if;
end;
$$;

-- Update all leaderboard entries
update public.leaderboard_entries le
set time_sec = calculate_sum_of_best_times(le.user_id, le.rank_stage_id),
    updated_at = now()
where true;

-- Log migration results
do $$
declare
  v_total_entries integer;
  v_updated_entries integer;
  v_null_entries integer;
begin
  select count(*) into v_total_entries from public.leaderboard_entries;
  select count(*) into v_updated_entries from public.leaderboard_entries where time_sec is not null;
  select count(*) into v_null_entries from public.leaderboard_entries where time_sec is null;
  
  raise notice 'Migration complete:';
  raise notice '  Total entries: %', v_total_entries;
  raise notice '  Updated with time_sec: %', v_updated_entries;
  raise notice '  Null time_sec (no progress data): %', v_null_entries;
end;
$$;

-- Drop temporary function
drop function calculate_sum_of_best_times(uuid, public.stage_id);

commit;
