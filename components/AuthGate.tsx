'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../lib/auth';
import { restoreProgressFromDatabase, initializeJourneyStartOnFirstLogin } from '../lib/progress';

const PUBLIC_PATHS = ['/login'] as const;

function isPublicPath(pathname: string) {
  return (PUBLIC_PATHS as readonly string[]).some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    if (isPublicPath(pathname)) {
      setAllowed(true);
      return;
    }
    const user = getCurrentUser();
    if (!user) {
      router.replace('/login');
      setAllowed(false);
      return;
    }
    
    // Restore progress from database on first load
    const hasRestoredProgress = sessionStorage.getItem('progress_restored');
    if (!hasRestoredProgress) {
      console.log('[AuthGate] First load, attempting to restore progress from database');
      setIsInitializing(true);
      
      // Make initialization blocking - await both restore and initialization
      (async () => {
        try {
          // Step 1: Restore progress from database
          const restored = await restoreProgressFromDatabase();
          if (restored) {
            console.log('[AuthGate] Progress restored from database');
            window.dispatchEvent(new Event('gt_progress_changed'));
          } else {
            console.log('[AuthGate] No progress found in database or restore failed');
          }
          
          // Mark as restored (even if failed) to prevent repeated attempts
          sessionStorage.setItem('progress_restored', 'true');
          
          // Step 2: Initialize journey_started_at on first login if not set
          console.log('[AuthGate] Initializing journey start on first login...');
          const syncSuccess = await initializeJourneyStartOnFirstLogin();
          
          if (!syncSuccess) {
            console.warn('[AuthGate] Journey start initialization returned false (already initialized or sync failed)');
            // Note: syncSuccess = false could mean either:
            // 1. Journey already started (not an error)
            // 2. Sync failed (error)
            // We allow navigation in both cases, but log for debugging
          }
          
          console.log('[AuthGate] Initialization complete, allowing navigation');
          setIsInitializing(false);
          setAllowed(true);
        } catch (error) {
          console.error('[AuthGate] Error during initialization:', error);
          setIsInitializing(false);
          setSyncError(error instanceof Error ? error.message : 'Initialization failed');
          // Allow navigation even on error to prevent blocking user
          // The sync can be retried later or done manually
          setAllowed(true);
        }
      })();
    } else {
      // Already restored in this session, allow immediately
      setAllowed(true);
    }
  }, [pathname, router]);

  // Show loading indicator while initializing
  if (isInitializing) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          fontSize: '24px',
          marginBottom: '16px'
        }}>
          Initializing...
        </div>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(255, 255, 255, 0.3)',
          borderTop: '4px solid #ffffff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show error message if sync failed (but still allow navigation)
  if (syncError) {
    console.warn('[AuthGate] Sync error occurred, but allowing navigation:', syncError);
    // Clear error after showing it once
    setSyncError(null);
  }

  if (!allowed) return null;
  return children;
}
