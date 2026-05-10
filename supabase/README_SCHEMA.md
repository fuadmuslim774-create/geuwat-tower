# Geuwat Tower - Database Schema

## Overview

This document describes the current database schema for Geuwat Tower. The schema uses custom authentication (not Supabase Auth) and implements a leaderboard system based on **sum of best stage times**.

## Core Tables

### 1. `accounts`
User account identity (UUID-based).
```sql
- id: uuid (primary key)
- created_at: timestamptz
- updated_at: timestamptz
```

### 2. `auth_email_password`
Email/password authentication credentials.
```sql
- account_id: uuid (primary key, references accounts)
- email: text (unique)
- password_hash: text (bcrypt)
- created_at: timestamptz
- updated_at: timestamptz
```

### 3. `profiles`
Game-facing user profiles.
```sql
- id: uuid (primary key, references accounts)
- username: text (3-20 characters)
- username_changed: boolean
- avatar_id: avatar_id enum (chibi1-4)
- batch_id: text (references batches, nullable)
- created_at: timestamptz
- updated_at: timestamptz
```

### 4. `batches`
Cohorts/generations for filtering leaderboards.
```sql
- id: text (primary key)
- title: text
- created_at: timestamptz
```

### 5. `leaderboard_entries`
**Leaderboard rankings based on sum of best stage times.**
```sql
- user_id: uuid (primary key, references profiles)
- rank_stage_id: stage_id enum (highest completed stage)
- time_sec: integer (SUM of bestTimeSeconds for all completed stages)
- journey_started_at: timestamptz (preserved for analytics)
- journey_completed_at: timestamptz (preserved for analytics)
- updated_at: timestamptz
```

**IMPORTANT:** `time_sec` stores the **sum of best stage times** (actual gameplay time), NOT elapsed journey time (calendar time).

### 6. `user_progress` (assumed to exist)
Stores full journey progress including per-stage data.
```sql
- user_id: uuid (primary key)
- progress: jsonb (contains stages with bestTimeSeconds)
- updated_at: timestamptz
```

## Enums

### `stage_id`
```sql
'alphabet' | 'lax_vowel' | 'tense_vowel' | 'diphthong' | 
'voiceless' | 'voiced' | 'final_s_es' | 'final_d_ed' | 'royal_king'
```

### `avatar_id`
```sql
'chibi1' | 'chibi2' | 'chibi3' | 'chibi4'
```

## Views

### `v_global_ranks`
Simple join of profiles and leaderboard entries.
```sql
SELECT user_id, username, avatar_id, batch_id, rank_stage_id, 
       time_sec, journey_started_at, journey_completed_at, updated_at
FROM profiles LEFT JOIN leaderboard_entries
```

### `v_global_ranks_ordered`
**Ordered leaderboard view for pagination.**

**Sorting Logic:**
1. **priority_tier** (ascending): Active users (tier 1) before inactive users (tier 2)
2. **rank_stage_num** (descending): Higher stages first (royal_king=9, alphabet=1)
3. **effective_time_sec** (ascending): Faster times first
4. **username** (ascending): Alphabetical tiebreaker

**effective_time_sec Calculation:**
- If `time_sec` is not null: Use `time_sec` (sum of best stage times)
- If `time_sec` is null: Use 2147483647 (max int, appears last)

**NOTE:** The old logic that calculated elapsed time for in-progress users has been removed. Now all users use `time_sec` directly.

## Key Changes (Completion Time Calculation)

### Before (Old System)
```sql
-- Elapsed time calculation for in-progress users
WHEN journey_started_at IS NOT NULL AND journey_completed_at IS NULL THEN
  extract(epoch from (now() - journey_started_at))::integer
```
- Used calendar time (includes idle time, breaks, days between sessions)
- Could not be improved by replaying stages
- Penalized early registrants

### After (Current System)
```sql
-- Direct use of time_sec (sum of best times)
WHEN time_sec IS NOT NULL THEN time_sec
ELSE 2147483647
```
- Uses actual gameplay time (sum of bestTimeSeconds)
- Can be improved by replaying stages with better times
- Fair comparison across all users

## Files

### Core Schema
- **`schema.sql`** - Complete database schema (run this for fresh setup)

### One-Time Migrations (for existing databases)
- **`migration_recalculate_completion_times.sql`** - Recalculates all existing time_sec values from user_progress data
- **`migration_update_leaderboard_view.sql`** - Updates v_global_ranks_ordered view to new logic

### Seed Data
- **`seed_users.sql`** - Initial seed users
- **`seed_150_users.sql`** - Additional 150 seed users for testing

### Utilities
- **`cleanup_seed_users_leaderboard.sql`** - Remove seed users from leaderboard
- **`delete_all_seed_users.sql`** - Delete all seed users
- **`debug_check_leaderboard_data.sql`** - Check leaderboard data integrity
- **`debug_why_rank_13.sql`** - Debug specific ranking issues

### Documentation
- **`README_MIGRATION.md`** - Migration guide
- **`README_SEED_USERS.md`** - Seed users documentation
- **`README_SCHEMA.md`** - This file

## Setup Instructions

### Fresh Database Setup
```sql
-- Run the complete schema
\i supabase/schema.sql
```

### Migrating Existing Database
```sql
-- Step 1: Recalculate all time_sec values
\i supabase/migration_recalculate_completion_times.sql

-- Step 2: Update the view
\i supabase/migration_update_leaderboard_view.sql
```

### Verify Migration
```sql
-- Check that time_sec values are updated
SELECT user_id, rank_stage_id, time_sec, journey_started_at 
FROM leaderboard_entries 
LIMIT 10;

-- Check view ordering
SELECT user_id, username, rank_stage_id, time_sec, effective_time_sec
FROM v_global_ranks_ordered
LIMIT 20;
```

## Security (Row Level Security)

All tables have RLS enabled with the following policies:

- **batches**: Public read access
- **accounts**: Deny all client access (server-only via service role)
- **auth_email_password**: Deny all client access (server-only)
- **profiles**: Public read, deny client writes (server-only writes)
- **leaderboard_entries**: Public read, deny client writes (server-only writes)

**All writes must go through server-side API routes using Supabase service role key.**

## Helper Functions

### `create_account_with_email_password(email, password)`
Creates account + email/password credential. Server-only (service role).

### `verify_password(password, hash)`
Verifies plaintext password against bcrypt hash. Server-only (service role).

### `touch_updated_at()`
Trigger function to auto-update `updated_at` timestamp.

## Indexes

- `auth_email_password_email_idx` - Email lookup
- `profiles_batch_id_idx` - Batch filtering
- `leaderboard_entries_rank_idx` - Stage filtering
- `leaderboard_entries_updated_at_idx` - Recent updates
- `leaderboard_entries_journey_started_at_idx` - Active user filtering
- `leaderboard_entries_journey_completed_at_idx` - Completion filtering

## Notes

- **time_sec** now represents sum of best stage times, not elapsed journey time
- **journey_started_at** and **journey_completed_at** are preserved for analytics but not used for ranking
- Migration scripts are idempotent and wrapped in transactions
- All timestamps use `timestamptz` (timezone-aware)
- Password hashing uses bcrypt via pgcrypto extension
