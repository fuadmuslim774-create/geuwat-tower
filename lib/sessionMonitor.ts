import { getCurrentUser } from './auth';

let heartbeatInterval: NodeJS.Timeout | null = null;
let isMonitoring = false;

/**
 * Start monitoring session validity
 * Sends heartbeat every 2 minutes to keep session alive
 * If session becomes invalid, redirects to login
 */
export function startSessionMonitor() {
  if (isMonitoring) return;
  
  isMonitoring = true;
  console.log('[SessionMonitor] Starting session monitor');

  // Send heartbeat every 2 minutes
  heartbeatInterval = setInterval(async () => {
    const user = getCurrentUser();
    if (!user || !user.sessionToken) {
      console.warn('[SessionMonitor] No user or session token found');
      stopSessionMonitor();
      return;
    }

    try {
      const response = await fetch('/api/session/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          sessionToken: user.sessionToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.sessionValid) {
        console.error('[SessionMonitor] Session invalid:', data);
        
        // Check if session expired (24 hours)
        if (data.code === 'SESSION_EXPIRED') {
          handleSessionExpired();
        } else {
          handleSessionInvalid();
        }
      } else {
        console.log('[SessionMonitor] Session valid, heartbeat sent');
      }
    } catch (error) {
      console.error('[SessionMonitor] Heartbeat failed:', error);
      // Don't kick user on network errors, only on explicit session invalid
    }
  }, 2 * 60 * 1000); // 2 minutes

  // Also send initial heartbeat
  sendHeartbeat();
}

/**
 * Stop monitoring session
 */
export function stopSessionMonitor() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
  isMonitoring = false;
  console.log('[SessionMonitor] Stopped session monitor');
}

/**
 * Send immediate heartbeat
 */
async function sendHeartbeat() {
  const user = getCurrentUser();
  if (!user || !user.sessionToken) return;

  try {
    const response = await fetch('/api/session/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        sessionToken: user.sessionToken,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.sessionValid) {
      console.error('[SessionMonitor] Session invalid on initial heartbeat:', data);
      
      // Check if session expired (24 hours)
      if (data.code === 'SESSION_EXPIRED') {
        handleSessionExpired();
      } else {
        handleSessionInvalid();
      }
    }
  } catch (error) {
    console.error('[SessionMonitor] Initial heartbeat failed:', error);
  }
}

/**
 * Handle invalid session - show alert and redirect to login
 */
function handleSessionInvalid() {
  stopSessionMonitor();
  
  // Clear local storage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('geuwat_user');
    localStorage.removeItem('geuwat_profile');
    
    // Show alert
    alert('Akun Anda sedang digunakan di perangkat lain. Anda akan diarahkan ke halaman login.');
    
    // Redirect to login
    window.location.href = '/login';
  }
}

/**
 * Handle expired session (24 hours) - show alert and redirect to login
 */
function handleSessionExpired() {
  stopSessionMonitor();
  
  // Clear local storage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('geuwat_user');
    localStorage.removeItem('geuwat_profile');
    
    // Show alert
    alert('Sesi Anda telah kadaluarsa (24 jam). Silakan login kembali.');
    
    // Redirect to login
    window.location.href = '/login';
  }
}
