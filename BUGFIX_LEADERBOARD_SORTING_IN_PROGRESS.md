# Bugfix: Leaderboard Sorting untuk User yang Sedang Dalam Proses

## Masalah

Ketika user sedang dalam proses menyelesaikan journey (belum selesai semua stage), mereka seharusnya diurutkan berdasarkan **elapsed time** (waktu yang sudah berjalan sejak mulai), bukan hanya berdasarkan username.

### Contoh Masalah

Sebelum fix:
- **User A**: Royal King, sudah selesai, completion time = 1 jam → **RANK 1** ✅
- **User B**: Royal King, masih proses, sudah 30 menit → **RANK 2** (diurutkan berdasarkan username)
- **User C**: Royal King, masih proses, sudah 2 jam → **RANK 3** (diurutkan berdasarkan username)

**Masalah**: User B dan User C seharusnya diurutkan berdasarkan elapsed time mereka, bukan username. User B (30 menit) seharusnya di atas User C (2 jam).

## Solusi

Mengubah sorting logic di database view `v_global_ranks_ordered` untuk menghitung elapsed time secara real-time untuk user yang sedang dalam proses.

### Perubahan

**File**: `supabase/migration_fix_leaderboard_sorting_for_in_progress_users.sql`

**Logic Baru**:
```sql
-- Calculate effective_time_sec for sorting:
case
  when le.time_sec is not null then le.time_sec
  when le.journey_started_at is not null and le.journey_completed_at is null then
    -- Calculate elapsed time in seconds for in-progress users
    extract(epoch from (now() - le.journey_started_at))::integer
  else 2147483647
end as effective_time_sec
```

**Sorting**:
```sql
order by
  rank_stage_num desc,        -- Stage tertinggi di atas
  effective_time_sec asc,      -- Waktu tercepat di atas (termasuk elapsed time untuk in-progress)
  p.username asc;              -- Alphabetical jika sama
```

### Hasil Setelah Fix

Setelah fix:
- **User A**: Royal King, sudah selesai, completion time = 1 jam → **RANK 1** ✅
- **User B**: Royal King, masih proses, elapsed time = 30 menit → **RANK 2** ✅ (lebih cepat dari User C)
- **User C**: Royal King, masih proses, elapsed time = 2 jam → **RANK 3** ✅ (lebih lambat dari User B)

## Cara Menjalankan Migration

1. Buka Supabase SQL Editor
2. Copy isi file `supabase/migration_fix_leaderboard_sorting_for_in_progress_users.sql`
3. Paste dan jalankan di SQL Editor
4. Verifikasi bahwa view `v_global_ranks_ordered` sudah ter-update

## Testing

Test sudah dibuat di `lib/leaderboard.sorting-in-progress.test.ts` dan sudah pass:

```
✓ should sort in-progress users by elapsed time, not just username
✓ should handle mixed stages with in-progress users correctly
✓ should handle users with no journey_started_at correctly
```

## Catatan

- Migration ini **tidak mengubah data** di tabel, hanya mengubah view untuk sorting
- Elapsed time dihitung secara real-time menggunakan `now() - journey_started_at`
- User yang sudah selesai tetap menggunakan `time_sec` yang tersimpan di database
- User yang belum mulai journey tetap di urutan paling bawah

