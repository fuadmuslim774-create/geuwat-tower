'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../lib/auth';
import { restoreProgressFromDatabase } from '../lib/progress';

const PUBLIC_PATHS = ['/login'] as const;

function isPublicPath(pathname: string) {
  return (PUBLIC_PATHS as readonly string[]).some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

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
      restoreProgressFromDatabase().then((restored) => {
        if (restored) {
          console.log('[AuthGate] Progress restored from database');
          window.dispatchEvent(new Event('gt_progress_changed'));
        } else {
          console.log('[AuthGate] No progress found in database or restore failed');
        }
        // Mark as restored (even if failed) to prevent repeated attempts
        sessionStorage.setItem('progress_restored', 'true');
      });
    }
    
    setAllowed(true);
  }, [pathname, router]);

  if (!allowed) return null;
  return children;
}
