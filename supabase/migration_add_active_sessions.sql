-- Migration: Add active session tracking to prevent concurrent logins
-- This ensures one account can only be played by one user at a time

begin;

-- Add active_session_token and last_activity columns to profiles table
alter table public.profiles
add column if not exists active_session_token text null,
add column if not exists session_started_at timestamptz null,
add column if not exists last_activity_at timestamptz null;

-- Add index for faster session lookups
create index if not exists profiles_active_session_token_idx 
on public.profiles (active_session_token) 
where active_session_token is not null;

-- Add index for session cleanup (find stale sessions)
create index if not exists profiles_last_activity_at_idx 
on public.profiles (last_activity_at) 
where last_activity_at is not null;

commit;
