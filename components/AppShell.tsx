'use client';

import { useEffect } from 'react';
import Sidebar from './Sidebar';
import AuthGate from './AuthGate';
import { startSessionMonitor, stopSessionMonitor } from '../lib/sessionMonitor';

export default function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Start session monitoring when app loads
    startSessionMonitor();

    // Cleanup on unmount
    return () => {
      stopSessionMonitor();
    };
  }, []);

  return (
    <AuthGate>
      <div className="min-h-screen flex gt-atmo selection:bg-neon-cyan selection:text-black">
        <Sidebar />
        <main className="flex-1 relative min-h-screen overflow-x-hidden overflow-y-auto custom-scrollbar">
          <div className="absolute inset-0 z-0">
            <picture>
              <source media="(max-width: 768px)" srcSet="/bg/GEUWAT-TOWER-9-16.png" />
              <img
                alt="GEUWAT TOWER Background"
                className="w-full h-full object-cover opacity-30 saturate-110"
                src="/bg/GEUWAT-TOWER-16-9.png"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.10),transparent_55%)] opacity-60" />
            <div className="gt-scanline absolute inset-0 opacity-30" />
          </div>

          <div className="relative z-10 min-h-screen">{children}</div>
        </main>
      </div>
    </AuthGate>
  );
}
