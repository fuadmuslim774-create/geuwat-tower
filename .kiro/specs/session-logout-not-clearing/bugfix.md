# Bugfix Requirements Document

## Introduction

User melaporkan bahwa setelah logout di perangkat lain, mereka masih tidak bisa login kembali dengan akun yang sama di perangkat lain. Sistem menampilkan error "Akun sedang digunakan di perangkat lain" meskipun user sudah melakukan logout. Bug ini mencegah user untuk login kembali immediately setelah logout, yang merusak user experience dan membuat fitur session management tidak berfungsi dengan benar.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN user melakukan logout di perangkat A THEN session token masih tersimpan di database (`active_session_token` tidak di-clear menjadi NULL)

1.2 WHEN user mencoba login di perangkat B setelah logout di perangkat A THEN sistem menolak login dengan error "Akun sedang digunakan di perangkat lain" karena `active_session_token` masih ada di database

1.3 WHEN user melakukan logout THEN `last_activity_at` tidak di-clear menjadi NULL sehingga sistem masih menganggap session aktif

### Expected Behavior (Correct)

2.1 WHEN user melakukan logout di perangkat A THEN sistem SHALL clear `active_session_token` menjadi NULL di database

2.2 WHEN user mencoba login di perangkat B setelah logout di perangkat A THEN sistem SHALL mengizinkan login immediately tanpa error karena tidak ada active session token

2.3 WHEN user melakukan logout THEN sistem SHALL clear `last_activity_at` menjadi NULL sehingga tidak ada timestamp yang menunjukkan session aktif

2.4 WHEN logout API dipanggil dengan valid userId dan sessionToken THEN sistem SHALL mengembalikan response success dan session harus benar-benar di-clear dari database

### Unchanged Behavior (Regression Prevention)

3.1 WHEN user belum logout dan session masih aktif (last activity < 5 menit) THEN sistem SHALL CONTINUE TO menolak concurrent login attempt dengan error "Akun sedang digunakan di perangkat lain"

3.2 WHEN user login dengan credentials yang valid dan tidak ada active session THEN sistem SHALL CONTINUE TO generate session token baru dan menyimpannya di database

3.3 WHEN heartbeat API dipanggil dengan valid session token THEN sistem SHALL CONTINUE TO update `last_activity_at` timestamp untuk menjaga session tetap aktif

3.4 WHEN session timeout tercapai (> 5 menit inactivity) THEN sistem SHALL CONTINUE TO mengizinkan login baru karena session dianggap expired

3.5 WHEN logout API dipanggil dengan sessionToken yang tidak match dengan database THEN sistem SHALL CONTINUE TO tidak mengubah session token di database (security measure)
