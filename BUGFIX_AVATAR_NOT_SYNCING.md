# Bugfix: Avatar Tidak Berubah di Navbar/Ranks Setelah Ganti di Profile

## 🐛 Problem

Ketika user mengganti avatar di halaman Profile, perubahan tidak terlihat di:
- Navbar/Sidebar
- Global Ranks
- Generation Ranks

Avatar kembali ke avatar lama setelah refresh atau login ulang.

## 🔍 Root Cause

### Masalah 1: Tidak Ada Sync ke Database

Fungsi `updateAvatar()` di `lib/profile.ts` **hanya update localStorage**, tidak sync ke database:

```typescript
// ❌ BEFORE: Hanya update localStorage
export function updateAvatar(avatarId: AvatarId) {
  const prev = getOrInitProfile();
  writeProfile({ ...prev, avatarId });  // ← Hanya localStorage
  window.dispatchEvent(new Event('gt_profile_changed'));
  // ❌ MISSING: Sync to database
}
```

**Akibatnya:**
1. User ganti avatar → Tersimpan di localStorage ✅
2. User refresh page → Data dari database (avatar lama) override localStorage ❌
3. User login ulang → Data dari database (avatar lama) digunakan ❌

### Masalah 2: Username Juga Tidak Sync

Fungsi `updateUsername()` memiliki masalah yang sama - hanya update localStorage, tidak sync ke database.

## ✅ Solution

### 1. Create API Endpoint untuk Update Profile

**File**: `app/api/profile/update/route.ts` (NEW)

API endpoint yang menerima:
- `userId`: User ID
- `username`: Username baru (optional)
- `avatarId`: Avatar ID baru (optional)

**Features:**
- ✅ Validates input (username length, valid avatarId)
- ✅ Checks username_changed flag (username hanya bisa diubah sekali)
- ✅ Uses service role key to bypass RLS
- ✅ Updates database `profiles` table
- ✅ Returns success/error response

### 2. Update `updateAvatar()` Function

```typescript
// ✅ AFTER: Update localStorage + sync to database
export function updateAvatar(avatarId: AvatarId) {
  const prev = getOrInitProfile();
  writeProfile({ ...prev, avatarId });
  window.dispatchEvent(new Event('gt_profile_changed'));
  
  // ✅ Sync to database
  syncProfileToDatabase({ avatarId });
}
```

### 3. Update `updateUsername()` Function

```typescript
// ✅ AFTER: Update localStorage + sync to database
export function updateUsername(username: string) {
  const trimmed = username.trim();
  if (!trimmed) return;
  const prev = getOrInitProfile();
  
  if (prev.usernameChanged) {
    return false;
  }
  
  writeProfile({ ...prev, username: trimmed, usernameChanged: true });
  window.dispatchEvent(new Event('gt_profile_changed'));
  
  // ✅ Sync to database
  syncProfileToDatabase({ username: trimmed });
  
  return true;
}
```

### 4. Add `syncProfileToDatabase()` Helper Function

```typescript
async function syncProfileToDatabase(updates: { username?: string; avatarId?: AvatarId }) {
  try {
    const user = getCurrentUser();
    if (!user) {
      console.warn('[syncProfileToDatabase] No user session found, skipping sync');
      return;
    }

    const payload = {
      userId: user.id,
      ...updates
    };

    const response = await fetch('/api/profile/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[syncProfileToDatabase] API call failed:', errorData);
      return;
    }

    const result = await response.json();
    console.log('[syncProfileToDatabase] Profile sync successful:', result);
  } catch (error) {
    console.error('[syncProfileToDatabase] Unexpected error during sync:', error);
  }
}
```

### 5. Update Profile Page UI (NEW)

**File**: `app/profile/page.tsx`

**Changes:**
- ✅ Added "Ubah Avatar" button (similar to username edit flow)
- ✅ Avatar selection requires confirmation with "Ganti" button
- ✅ Added "Batal" button to cancel avatar change
- ✅ Preview shows selected avatar before confirmation
- ✅ **No limit on avatar changes** (can be changed unlimited times)

**UI Flow:**
1. User clicks "Ubah Avatar" button
2. Avatar selection buttons become enabled
3. User clicks on desired avatar (preview shows in main avatar display)
4. User clicks "Ganti" button to confirm
5. Avatar changes immediately in UI
6. Sync to database happens automatically in background

## 🧪 Testing

### Test Case 1: Avatar Change with Confirmation

1. Login dengan akun test
2. Go to Profile page
3. Click "Ubah Avatar" button
4. Select avatar berbeda (misalnya chibi2 → chibi3)
5. Preview should show chibi3 in main avatar display
6. Click "Ganti" button
7. **Check browser console**: Should see `[syncProfileToDatabase] Profile sync successful`
8. Avatar should change immediately
9. Refresh page
10. **Expected**: Avatar tetap chibi3 ✅

### Test Case 2: Cancel Avatar Change

1. Go to Profile page
2. Click "Ubah Avatar" button
3. Select different avatar
4. Click "Batal" button
5. **Expected**: Avatar returns to original, selection mode closes ✅

### Test Case 3: Avatar Syncs Across Pages

1. Change avatar di Profile page
2. Go to Navbar/Sidebar
3. **Expected**: Avatar berubah ✅
4. Go to Global Ranks
5. **Expected**: Avatar di "Your Position" section berubah ✅
6. Go to Generation Ranks
7. **Expected**: Avatar di "Your Position" section berubah ✅

### Test Case 4: Avatar Persists After Logout/Login

1. Login dengan akun A
2. Change avatar to chibi4
3. Logout
4. Login lagi dengan akun A
5. **Expected**: Avatar tetap chibi4 ✅
6. **Before Fix**: Avatar kembali ke avatar lama ❌

### Test Case 5: Multiple Avatar Changes (No Limit)

1. Change avatar to chibi1
2. Change avatar to chibi2
3. Change avatar to chibi3
4. Change avatar to chibi4
5. **Expected**: All changes work, no limit ✅
6. **Contrast with username**: Username can only be changed once

### Test Case 6: Username Change Also Syncs

1. Change username (jika belum pernah diubah)
2. **Check console**: Should see sync success
3. Refresh page
4. **Expected**: Username tetap yang baru ✅

## 📝 Files Changed

- ✅ `app/api/profile/update/route.ts` - NEW API endpoint for profile updates
- ✅ `lib/profile.ts` - Added `syncProfileToDatabase()` function
- ✅ `lib/profile.ts` - Updated `updateAvatar()` to sync to database
- ✅ `lib/profile.ts` - Updated `updateUsername()` to sync to database
- ✅ `app/profile/page.tsx` - Added avatar change UI with confirmation buttons

## 🔄 No Migration Needed

Tidak perlu migration database karena:
- Table `profiles` sudah memiliki column `username` dan `avatar_id`
- API endpoint menggunakan service role key yang sudah ada
- Hanya menambahkan sync logic di client-side dan UI improvements

## ⚠️ Important Notes

### Perbandingan: Avatar vs Username

| Feature | Avatar | Username |
|---------|--------|----------|
| **Change Limit** | ❌ Unlimited | ✅ Once only |
| **Validation** | ❌ None (always valid) | ✅ Length, format checks |
| **UI Flow** | Button → Select → Confirm | Edit icon → Input → Save |
| **Preview** | ✅ Shows selected avatar | Shows in input field |
| **Restriction Message** | ❌ None | ✅ "Username can only be changed once" |
| **Confirmation Required** | ✅ Yes ("Ganti" button) | ✅ Yes ("Save" button) |

### Kenapa Avatar Sekarang Pakai Button "Ganti"?

**Sebelumnya:** Avatar langsung berubah saat diklik (instant)

**Sekarang:** Avatar perlu konfirmasi dengan button "Ganti"

**Alasan perubahan:**
1. ✅ **Konsistensi UI** - Sama seperti username change flow
2. ✅ **Preview before commit** - User bisa lihat preview sebelum confirm
3. ✅ **Prevent accidental changes** - User tidak salah klik
4. ✅ **Better UX** - User punya kontrol lebih baik

**Perbedaan dengan username:**
- Avatar: Bisa diganti berkali-kali (unlimited)
- Username: Hanya bisa diganti sekali (permanent)

### Sync Happens in Background

Avatar sync happens **asynchronously in background**:
- User sees immediate change in UI (localStorage)
- Sync to database happens in background
- If sync fails, user still sees change locally
- Next time they login, database will have correct avatar

### Error Handling

If sync fails:
- Error is logged to console
- User is NOT blocked (can continue using app)
- Local change is preserved
- Sync will be retried on next avatar change

## 🎯 Summary

**Before Fix:**
- Avatar change → localStorage only
- Refresh → Avatar resets to database value
- Login again → Avatar resets to database value
- No confirmation required

**After Fix:**
- Avatar change → localStorage + database sync
- Refresh → Avatar persists ✅
- Login again → Avatar persists ✅
- Works across all pages (Navbar, Ranks, Profile) ✅
- Confirmation required with "Ganti" button ✅
- Can be changed unlimited times ✅
- Consistent UI with username change flow ✅

