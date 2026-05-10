export interface User {
  id: string
  email: string
  name: string
  role: string
  avatar: string
  batchId: string
  username?: string
  avatarId?: string
  sessionToken?: string
}

export interface AuthResult {
  success: boolean
  user?: User
  error?: string
  code?: string
}

export const signIn = async (email: string, password: string): Promise<AuthResult> => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).catch(() => null);

  if (!res) return { success: false, error: 'Tidak bisa terhubung ke server.' };
  const json = (await res.json().catch(() => null)) as any;
  if (!res.ok || !json?.success || !json?.user) {
    return { 
      success: false, 
      error: json?.error ?? 'Email atau kata sandi salah.',
      code: json?.code
    };
  }

  saveUserSession(json.user as User);
  return { success: true, user: json.user as User };
}

export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('geuwat_user')
    return userData ? JSON.parse(userData) : null
  }
  return null
}

export const signOut = async () => {
  if (typeof window !== 'undefined') {
    const user = getCurrentUser();
    
    // Call logout API to clear session from database
    if (user && user.sessionToken) {
      try {
        await fetch('/api/session/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            sessionToken: user.sessionToken,
          }),
        });
      } catch (error) {
        console.error('[signOut] Failed to clear session:', error);
      }
    }
    
    // Clear all user-specific data from localStorage
    localStorage.removeItem('geuwat_user');
    localStorage.removeItem('gt_profile_v1');
    localStorage.removeItem('gt_progress_v1');
    localStorage.removeItem('gt_sfx_enabled_v1');
    localStorage.removeItem('gt_leaderboard_v1');
    
    // Clear session-specific data from sessionStorage
    sessionStorage.removeItem('progress_restored');
    
    // Clear run and result data from sessionStorage
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith('gt_run_v1:') || key.startsWith('gt_result_v1:')) {
        sessionStorage.removeItem(key);
      }
    });
  }
}

export const saveUserSession = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('geuwat_user', JSON.stringify(user))
  }
}
