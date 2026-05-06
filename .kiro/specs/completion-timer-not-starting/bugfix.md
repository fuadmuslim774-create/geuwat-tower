# Bugfix Requirements Document

## Introduction

Ketika user pertama kali login ke aplikasi GEUWAT TOWER, completion timer pada halaman Global Ranks dan Generation Ranks menampilkan "--:--:--" dan tidak mulai berjalan. Timer ini seharusnya mulai menghitung waktu dari pertama kali user login hingga user menyelesaikan semua stage (mencapai Royal King). Bug ini menyebabkan user yang baru login tidak memiliki completion time yang valid di leaderboard, sehingga progress mereka tidak tercatat dengan benar.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN user pertama kali login dan belum menyelesaikan stage apapun THEN field `time_sec` di tabel `leaderboard_entries` bernilai `null`

1.2 WHEN field `time_sec` bernilai `null` THEN sistem menampilkan "--:--:--" pada kolom Completion Time di halaman Global Ranks dan Generation Ranks

1.3 WHEN user baru login dan melihat leaderboard THEN completion timer tidak mulai berjalan dan tetap menampilkan "--:--:--"

1.4 WHEN user menyelesaikan stage pertama THEN `time_sec` masih `null` karena tidak ada mekanisme untuk menginisialisasi timer berdasarkan `journeyStartedAt`

### Expected Behavior (Correct)

2.1 WHEN user pertama kali login THEN sistem SHALL menginisialisasi entry di tabel `leaderboard_entries` dengan `time_sec` yang dihitung dari `journeyStartedAt` (waktu pertama kali login)

2.2 WHEN user yang sedang dalam progress journey melihat leaderboard THEN sistem SHALL menampilkan completion time yang berjalan (elapsed time) berdasarkan selisih waktu antara `journeyStartedAt` dan waktu sekarang

2.3 WHEN user belum menyelesaikan semua stage THEN completion timer SHALL terus berjalan dan menampilkan waktu yang bertambah setiap detik

2.4 WHEN user menyelesaikan semua stage (mencapai Royal King) THEN sistem SHALL menyimpan final completion time berdasarkan selisih antara `journeyStartedAt` dan `journeyCompletedAt`

### Unchanged Behavior (Regression Prevention)

3.1 WHEN user sudah menyelesaikan semua stage (journey complete) THEN sistem SHALL CONTINUE TO menampilkan final completion time yang tersimpan tanpa perubahan

3.2 WHEN user yang sudah memiliki `time_sec` valid di database melihat leaderboard THEN sistem SHALL CONTINUE TO menampilkan completion time mereka dengan format HH:MM:SS yang benar

3.3 WHEN sistem menghitung ranking di leaderboard THEN sistem SHALL CONTINUE TO mengurutkan berdasarkan rank_stage_id (descending) dan time_sec (ascending)

3.4 WHEN user menyelesaikan stage individual THEN sistem SHALL CONTINUE TO menyimpan `bestTimeSeconds` dan `lastTimeSeconds` untuk setiap stage di local storage
