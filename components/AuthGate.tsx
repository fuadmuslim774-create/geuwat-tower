'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../lib/auth';

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
    setAllowed(true);
  }, [pathname, router]);

  if (!allowed) return null;
  return children;
}
