# Completion Timer Not Starting Bugfix Design

## Overview

Ketika user pertama kali login ke aplikasi GEUWAT TOWER, completion timer pada halaman Global Ranks dan Generation Ranks menampilkan "--:--:--" dan tidak mulai berjalan. Bug ini terjadi karena sistem tidak menginisialisasi `time_sec` di tabel `leaderboard_entries` untuk user baru, dan tidak menghitung elapsed time untuk user yang sedang dalam progress journey.

**Fix Strategy**: Menambahkan logika untuk menghitung completion time secara real-time berdasarkan `journeyStartedAt` untuk user yang belum menyelesaikan journey, dan memastikan leaderboard entry diinisialisasi dengan benar saat user pertama kali login atau menyelesaikan stage pertama.

## Glossary

- **Bug_Condition (C)**: Kondisi dimana user memiliki `journeyStartedAt` yang valid (sudah login) tetapi `time_sec` di `leaderboard_entries` bernilai `null`, menyebabkan timer tidak ditampilkan
- **Property (P)**: Behavior yang diharapkan - completion timer harus menampilkan elapsed time yang berjalan untuk user yang sedang dalam progress, dan final time untuk user yang sudah complete
- **Preservation**: Behavior existing yang harus tetap tidak berubah - final completion time untuk user yang sudah complete, ranking logic, dan stage-level time tracking
- **journeyStartedAt**: Timestamp (milliseconds) saat user pertama kali login atau mulai journey, disimpan di local storage
- **journeyCompletedAt**: Timestamp (milliseconds) saat user menyelesaikan semua stage (mencapai Royal King), disimpan di local storage
- **time_sec**: Field integer di tabel `leaderboard_entries` yang menyimpan completion time dalam detik
- **rank_stage_id**: Field enum di tabel `leaderboard_entries` yang menunjukkan stage tertinggi yang telah diselesaikan user
- **getJourneyCompletionTimeSeconds**: Function di `lib/progress.ts` yang menghitung elapsed time berdasarkan `journeyStartedAt` dan waktu sekarang atau `journeyCompletedAt`

## Bug Details

### Bug Condition

Bug ini muncul ketika user baru login dan melihat leaderboard. Sistem tidak menginisialisasi `time_sec` di database, sehingga nilai tetap `null` dan UI menampilkan "--:--:--" tanpa timer yang berjalan.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { userId: string, journeyStartedAt: number | null, journeyCompletedAt: number | null, timeSec: number | null }
  OUTPUT: boolean
  
  RETURN input.journeyStartedAt IS NOT NULL
         AND input.journeyCompletedAt IS NULL
         AND input.timeSec IS NULL
END FUNCTION
```

**Explanation**: Bug condition terpenuhi ketika:
1. User sudah memiliki `journeyStartedAt` (sudah login dan mulai journey)
2. User belum menyelesaikan journey (`journeyCompletedAt` masih `null`)
3. Database entry `time_sec` masih `null` (tidak terinisialisasi)

### Examples

- **Example 1**: User baru login pertama kali
  - `journeyStartedAt`: 1704067200000 (valid timestamp)
  - `journeyCompletedAt`: null
  - `time_sec` di database: null
  - **Expected**: Timer menampilkan elapsed time (misalnya "00:00:05" setelah 5 detik)
  - **Actual**: Menampilkan "--:--:--" dan tidak berjalan

- **Example 2**: User sudah menyelesaikan 3 stage
  - `journeyStartedAt`: 1704067200000
  - `journeyCompletedAt`: null
  - `time_sec` di database: null
  - **Expected**: Timer menampilkan elapsed time sejak login (misalnya "00:15:30" setelah 15 menit 30 detik)
  - **Actual**: Menampilkan "--:--:--" dan tidak berjalan

- **Example 3**: User sudah complete semua stage
  - `journeyStartedAt`: 1704067200000
  - `journeyCompletedAt`: 1704070800000
  - `time_sec` di database: 3600
  - **Expected**: Menampilkan "01:00:00" (final time, tidak berubah)
  - **Actual**: Menampilkan "01:00:00" ✓ (CORRECT - tidak terpengaruh bug)

- **Edge Case**: User login tetapi belum ada `journeyStartedAt`
  - `journeyStartedAt`: null
  - `journeyCompletedAt`: null
  - `time_sec` di database: null
  - **Expected**: Menampilkan "--:--:--" (belum mulai journey)
  - **Actual**: Menampilkan "--:--:--" ✓ (CORRECT)

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- User yang sudah menyelesaikan journey (Royal King) harus tetap menampilkan final completion time yang tersimpan di database tanpa perubahan
- Ranking logic di leaderboard harus tetap mengurutkan berdasarkan `rank_stage_id` (descending) kemudian `time_sec` (ascending)
- Stage-level time tracking (`bestTimeSeconds`, `lastTimeSeconds`) di local storage harus tetap berfungsi seperti sebelumnya
- Format display time "HH:MM:SS" harus tetap konsisten
- Leaderboard pagination dan filtering by batch harus tetap berfungsi

**Scope:**
Semua inputs yang TIDAK melibatkan user dengan bug condition (user yang sedang dalam progress dengan `time_sec` null) harus tidak terpengaruh oleh fix ini. Ini termasuk:
- User yang sudah complete journey (memiliki `journeyCompletedAt` dan `time_sec` valid)
- User yang belum login atau belum mulai journey (`journeyStartedAt` null)
- Operasi database lainnya (insert profile, update username, dll)

## Hypothesized Root Cause

Berdasarkan analisis bug description dan code review, kemungkinan penyebab utama adalah:

1. **Missing Leaderboard Entry Initialization**: Sistem tidak membuat atau mengupdate entry di tabel `leaderboard_entries` saat user pertama kali login atau menyelesaikan stage pertama
   - Function `updateOnStageComplete` di `lib/progress.ts` hanya mengupdate local storage
   - Tidak ada mekanisme untuk sync progress ke database leaderboard
   - Server-side code yang menghandle leaderboard update mungkin belum diimplementasi

2. **Missing Real-Time Calculation**: UI leaderboard hanya menampilkan `time_sec` dari database tanpa menghitung elapsed time untuk user yang sedang dalam progress
   - Function `fetchGlobalRanks` dan `fetchBatchRanks` di `lib/supabase/leaderboard.ts` hanya membaca `time_sec` dari database
   - Tidak ada logika untuk menghitung elapsed time berdasarkan `journeyStartedAt` untuk user yang belum complete
   - Function `getJourneyCompletionTimeSeconds` sudah ada di `lib/progress.ts` tetapi tidak digunakan di leaderboard

3. **Client-Server Data Sync Gap**: Progress disimpan di local storage (client-side) tetapi leaderboard dibaca dari database (server-side)
   - `journeyStartedAt` dan `journeyCompletedAt` hanya ada di local storage
   - Database tidak memiliki field untuk menyimpan timestamps ini
   - Tidak ada mekanisme untuk sync data dari client ke server

4. **RLS Policy Restrictions**: Row Level Security di database mencegah client-side writes
   - Schema SQL menunjukkan policy `leaderboard_deny_inserts` dan `leaderboard_deny_updates` untuk client roles
   - Semua writes harus melalui server-side API dengan service role key
   - Belum ada API endpoint untuk update leaderboard entry dari client

## Correctness Properties

Property 1: Bug Condition - Real-Time Completion Timer

_For any_ user where the bug condition holds (journeyStartedAt is not null, journeyCompletedAt is null, and time_sec is null), the fixed system SHALL calculate and display elapsed time based on the difference between journeyStartedAt and current time, updating every second to show a running timer in HH:MM:SS format.

**Validates: Requirements 2.1, 2.2, 2.3**

Property 2: Preservation - Final Completion Time

_For any_ user where the bug condition does NOT hold (journeyCompletedAt is not null and time_sec is not null), the fixed system SHALL produce exactly the same display as the original system, preserving the final completion time without recalculation or modification.

**Validates: Requirements 3.1, 3.2, 3.3**

## Fix Implementation

### Changes Required

Berdasarkan root cause analysis, kita perlu implementasi multi-layer fix:

**Phase 1: Add Server-Side API for Leaderboard Sync**

**File**: `app/api/leaderboard/sync/route.ts` (NEW FILE)

**Purpose**: Create API endpoint untuk sync progress dari client ke database

**Specific Changes**:
1. **Create POST endpoint** yang menerima payload:
   - `userId`: string (from authenticated session)
   - `rankStageId`: StageId (highest completed stage)
   - `timeSec`: number | null (calculated completion time)

2. **Implement upsert logic** menggunakan Supabase service role client:
   - Insert new entry jika belum ada
   - Update existing entry jika sudah ada
   - Validate input data sebelum write

3. **Add authentication check** untuk memastikan user hanya bisa update entry mereka sendiri

**Phase 2: Modify Client-Side Progress Tracking**

**File**: `lib/progress.ts`

**Function**: `updateOnStageComplete`

**Specific Changes**:
1. **Add API call** setelah writeProgress untuk sync ke database:
   - Calculate `timeSec` menggunakan `getJourneyCompletionTimeSeconds`
   - Get `rankStageId` menggunakan `getRankStageId`
   - Call `/api/leaderboard/sync` dengan payload

2. **Add error handling** untuk API call failure:
   - Log error tetapi tidak block user flow
   - Retry logic optional (bisa di-implement later)

**Phase 3: Enhance Leaderboard Display Logic**

**File**: `lib/supabase/leaderboard.ts`

**Function**: `fetchRanksBase`

**Specific Changes**:
1. **Add real-time calculation** untuk user dengan `time_sec` null:
   - Fetch `journeyStartedAt` dari local storage untuk current user
   - Calculate elapsed time jika `time_sec` null dan `journeyStartedAt` valid
   - Format menggunakan `formatHMS`

2. **Modify return mapping** untuk include calculated time:
   - Check if `time_sec` is null AND user is in progress
   - Use calculated elapsed time instead of "--:--:--"
   - Keep "--:--:--" hanya untuk user yang belum mulai journey

**Phase 4: Add Client-Side Timer Update**

**File**: `app/ranks/page.tsx` dan `app/generation-ranks/page.tsx`

**Specific Changes**:
1. **Add useEffect hook** untuk update timer setiap detik:
   - Calculate elapsed time untuk current user
   - Update state untuk trigger re-render
   - Cleanup interval on unmount

2. **Add real-time display** untuk current user row:
   - Show running timer jika user sedang dalam progress
   - Show static time jika user sudah complete

**Phase 5: Database Schema Enhancement (Optional)**

**File**: `supabase/schema.sql`

**Purpose**: Add fields untuk menyimpan journey timestamps di database (untuk future consistency)

**Specific Changes**:
1. **Add columns** ke tabel `leaderboard_entries`:
   - `journey_started_at`: timestamptz null
   - `journey_completed_at`: timestamptz null

2. **Update view** `v_global_ranks_ordered` untuk include new fields

3. **Modify API** untuk sync timestamps juga (not just `time_sec`)

## Testing Strategy

### Validation Approach

Testing strategy menggunakan two-phase approach: pertama, surface counterexamples yang mendemonstrasikan bug pada unfixed code untuk memahami root cause, kemudian verify bahwa fix bekerja dengan benar dan preserve existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples yang mendemonstrasikan bug SEBELUM implementing fix. Confirm atau refute root cause analysis. Jika refute, kita perlu re-hypothesize.

**Test Plan**: Simulate user journey dari login pertama hingga complete, observe behavior pada UNFIXED code untuk identify exact failure points.

**Test Cases**:
1. **New User Login Test**: Create new user, login, check leaderboard immediately (will show "--:--:--" on unfixed code)
2. **First Stage Complete Test**: Complete first stage, check if leaderboard entry created (will fail on unfixed code - no API endpoint)
3. **Multiple Stages Progress Test**: Complete 3 stages, check if timer shows elapsed time (will show "--:--:--" on unfixed code)
4. **Journey Complete Test**: Complete all stages, check if final time saved correctly (may work if manual DB insert, but not via app flow)

**Expected Counterexamples**:
- Leaderboard menampilkan "--:--:--" untuk user baru yang sudah login
- Database query menunjukkan `time_sec` null untuk user yang sedang dalam progress
- Tidak ada API call ke server saat stage complete (network tab kosong)
- Possible causes: missing API endpoint, missing client-side sync logic, missing real-time calculation

### Fix Checking

**Goal**: Verify bahwa untuk semua inputs dimana bug condition terpenuhi, fixed system menghasilkan expected behavior.

**Pseudocode:**
```
FOR ALL user WHERE isBugCondition(user) DO
  elapsedTime := calculateElapsedTime(user.journeyStartedAt, currentTime)
  displayedTime := getDisplayedTimeOnLeaderboard(user.userId)
  ASSERT displayedTime = formatHMS(elapsedTime)
  ASSERT displayedTime IS NOT "--:--:--"
  ASSERT timerIsRunning(user.userId) = true
END FOR
```

**Test Cases**:
1. **New User Timer Test**: Login as new user, verify timer starts from 00:00:00 and increments
2. **Progress User Timer Test**: User with 3 completed stages, verify timer shows correct elapsed time
3. **Timer Update Test**: Wait 5 seconds, verify timer increments by 5 seconds
4. **Leaderboard Refresh Test**: Refresh page, verify timer continues from correct elapsed time (not reset)

### Preservation Checking

**Goal**: Verify bahwa untuk semua inputs dimana bug condition TIDAK terpenuhi, fixed system menghasilkan result yang sama dengan original system.

**Pseudocode:**
```
FOR ALL user WHERE NOT isBugCondition(user) DO
  originalDisplay := getDisplayedTimeOnLeaderboard_original(user.userId)
  fixedDisplay := getDisplayedTimeOnLeaderboard_fixed(user.userId)
  ASSERT originalDisplay = fixedDisplay
END FOR
```

**Testing Approach**: Property-based testing direkomendasikan untuk preservation checking karena:
- Generates banyak test cases secara otomatis across input domain
- Catches edge cases yang mungkin terlewat oleh manual unit tests
- Provides strong guarantees bahwa behavior tidak berubah untuk semua non-buggy inputs

**Test Plan**: Observe behavior pada UNFIXED code untuk completed users dan users yang belum login, kemudian write property-based tests yang capture behavior tersebut.

**Test Cases**:
1. **Completed User Preservation**: Observe bahwa completed users menampilkan final time yang static pada unfixed code, verify ini tetap sama setelah fix
2. **Not Started User Preservation**: Observe bahwa users yang belum login menampilkan "--:--:--" pada unfixed code, verify ini tetap sama setelah fix
3. **Ranking Order Preservation**: Observe urutan ranking pada unfixed code, verify urutan tetap sama setelah fix (sorted by rank_stage_id desc, time_sec asc)
4. **Stage Time Preservation**: Observe bahwa stage-level times (bestTimeSeconds, lastTimeSeconds) tersimpan dengan benar pada unfixed code, verify ini tidak terpengaruh oleh fix

### Unit Tests

- Test `getJourneyCompletionTimeSeconds` dengan berbagai kombinasi `journeyStartedAt`, `journeyCompletedAt`, dan `nowMs`
- Test API endpoint `/api/leaderboard/sync` dengan valid dan invalid payloads
- Test `formatHMS` dengan edge cases (0 seconds, large numbers, negative numbers)
- Test leaderboard fetch dengan mock data untuk user dengan `time_sec` null
- Test authentication check di API endpoint untuk prevent unauthorized updates

### Property-Based Tests

- Generate random journey states (various `journeyStartedAt` timestamps) dan verify elapsed time calculation selalu non-negative dan increasing
- Generate random completed user data dan verify final time tidak berubah setelah fix
- Generate random stage completion sequences dan verify leaderboard entry selalu ter-update dengan benar
- Test bahwa untuk any valid `journeyStartedAt`, calculated time selalu <= current time difference

### Integration Tests

- Test full user flow: login → complete first stage → check leaderboard shows running timer
- Test full journey completion: complete all stages → check leaderboard shows final static time
- Test multi-user scenario: multiple users dengan berbagai progress states, verify leaderboard displays correctly untuk semua
- Test page refresh: verify timer continues dari correct elapsed time setelah refresh
- Test real-time updates: verify timer increments setiap detik tanpa manual refresh
