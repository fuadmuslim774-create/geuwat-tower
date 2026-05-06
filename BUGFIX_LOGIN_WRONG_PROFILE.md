# Bugfix: Login Berhasil Tapi Masuk ke Profil yang Salah

## 🐛 Problem

Ketika user login dengan akun berbeda (misalnya `learner150@geuwat.com`) di browser yang sama, login berhasil tetapi aplikasi menampilkan profil user sebelumnya (misalnya `LEARNER_01`).

### Reproduksi

1. Login dengan akun `learner001@geuwat.com` (password: `Pass001!GT`)
2. Logout
3. Login dengan akun `learner150@geuwat.com` (password: `Pass150!GT`)
4. **BUG**: Aplikasi menampilkan username `LEARNER_001` padahal seharusnya `LEARNER_150`

## 🔍 Root Cause

Di file `lib/profile.ts`, fungsi `getOrInitProfile()` memiliki **dua masalah kritis**:

### Masalah 1: Kondisi yang Salah

```typescript
// ❌ WRONG: Hanya update username/avatar jika profileId BERBEDA
if (authed?.id && merged.profileId !== authed.id) {
  merged.profileId = authed.id;
  merged.batchId = typeof authed.batchId === 'string' ? authed.batchId : merged.batchId;
  // Username dan avatar hanya diupdate di sini
}
```

**Problem**: Jika user sudah pernah login sebelumnya, `merged.profileId` sudah sama dengan `authed.id`, sehingga kondisi `!==` tidak terpenuhi dan username/avatar tidak diupdate!

**Scenario**:
1. User login pertama kali dengan learner001 → profileId disimpan
2. User logout
3. User login dengan learner150 → profileId **SUDAH ADA** di localStorage
4. Kondisi `merged.profileId !== authed.id` **FALSE** (karena profileId sudah sama)
5. Username tidak diupdate → tetap LEARNER_001 ❌

### Masalah 2: Write Condition Tidak Lengkap

```typescript
// ❌ WRONG: Tidak check perubahan username/avatar
if (needsWrite || merged.profileId !== existing.profileId || merged.batchId !== (existing as any).batchId) 
  writeProfile(merged);
```

Meskipun username/avatar berubah, perubahan tidak disimpan ke localStorage karena kondisi write tidak mengecek field tersebut.

## ✅ Solution

Update `lib/profile.ts` untuk **SELALU** sync username dan avatarId dari authenticated user, bukan hanya ketika profileId berbeda.

### Fix 1: Always Sync Profile Data

```typescript
const authed = getCurrentUser();
if (authed?.id) {
  // ✅ Always sync profile data from authenticated user
  if (merged.profileId !== authed.id) {
    merged.profileId = authed.id;
  }
  if (authed.batchId && merged.batchId !== authed.batchId) {
    merged.batchId = authed.batchId;
  }
  // ✅ CRITICAL: Always update username and avatar from authenticated user
  // This ensures profile matches the logged-in account
  if (authed.username && merged.username !== authed.username) {
    merged.username = authed.username;
  }
  if (authed.avatarId && merged.avatarId !== authed.avatarId) {
    merged.avatarId = authed.avatarId;
  }
}
```

**Key Changes**:
- Removed condition `merged.profileId !== authed.id` for username/avatar sync
- Now checks each field independently
- Username and avatar are **ALWAYS** synced if authenticated user exists

### Fix 2: Update Write Condition

```typescript
// ✅ Check all fields that might have changed
if (needsWrite || 
    merged.profileId !== existing.profileId || 
    merged.batchId !== (existing as any).batchId ||
    merged.username !== existing.username ||
    merged.avatarId !== existing.avatarId) {
  writeProfile(merged);
}
```

**Key Changes**:
- Added `merged.username !== existing.username` check
- Added `merged.avatarId !== existing.avatarId` check
- Ensures changes are persisted to localStorage

## 🧪 Testing

### Test Case 1: Login dengan Akun Berbeda

1. Clear localStorage atau buka incognito window
2. Login dengan `learner001@geuwat.com` / `Pass001!GT`
3. Verify: Username = `LEARNER_001`, Avatar = `chibi1`
4. Logout
5. Login dengan `learner150@geuwat.com` / `Pass150!GT`
6. **Expected**: Username = `LEARNER_150`, Avatar = `chibi2`
7. **Before Fix**: Username = `LEARNER_001` ❌
8. **After Fix**: Username = `LEARNER_150` ✅

### Test Case 2: Login Ulang dengan Akun yang Sama

1. Login dengan `learner050@geuwat.com` / `Pass050!GT`
2. Verify: Username = `LEARNER_050`, Avatar = `chibi2`
3. Logout
4. Login lagi dengan `learner050@geuwat.com` / `Pass050!GT`
5. **Expected**: Username tetap `LEARNER_050`, Avatar tetap `chibi2`
6. **Result**: ✅ Works correctly

### Test Case 3: Multiple Browser/Device

1. Login di Browser A dengan `learner025@geuwat.com`
2. Login di Browser B dengan `learner075@geuwat.com`
3. **Expected**: Setiap browser menampilkan profil yang sesuai
4. **Result**: ✅ Works correctly

## 📝 Files Changed

- `lib/profile.ts` - Added username and avatarId sync from authenticated user

## 🔄 Migration Notes

**Tidak perlu migration database**. Ini adalah client-side fix yang langsung bekerja setelah deploy.

### User Impact

- Users yang sudah login: Tidak terpengaruh (sudah punya profile yang benar)
- Users yang login dengan akun berbeda: Akan langsung mendapat profile yang benar
- Users baru: Tidak terpengaruh (sudah bekerja dengan benar)

## ✅ Verification

Setelah fix, verify dengan:

```typescript
// 1. Login dengan akun A
// 2. Check localStorage
const profile = JSON.parse(localStorage.getItem('gt_profile_v1'));
console.log(profile.username); // Should match logged in user

// 3. Logout dan login dengan akun B
// 4. Check localStorage lagi
const profile2 = JSON.parse(localStorage.getItem('gt_profile_v1'));
console.log(profile2.username); // Should match new logged in user (not old user)
```

## 🎯 Related Issues

Ini juga memperbaiki masalah terkait:
- Avatar tidak berubah ketika login dengan akun berbeda
- Batch ID tidak sinkron dengan akun yang login
- Profile ID tidak konsisten dengan authenticated user

## 📚 Additional Context

Sistem autentikasi GEUWAT TOWER menggunakan:
- **Server-side**: Supabase database dengan custom auth (bukan Supabase Auth)
- **Client-side**: localStorage untuk cache profile
- **Session**: localStorage key `geuwat_user` untuk authenticated user

Flow yang benar:
1. User login → API `/api/login` verify credentials
2. API return user data (id, username, avatarId, batchId)
3. Client save ke `localStorage.geuwat_user`
4. `getOrInitProfile()` sync profile dari authenticated user
5. Profile disimpan ke `localStorage.gt_profile_v1`

Bug terjadi di step 4 dimana sync tidak lengkap (hanya profileId dan batchId, tidak termasuk username dan avatarId).
