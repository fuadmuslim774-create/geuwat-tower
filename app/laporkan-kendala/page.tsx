'use client';

import AppShell from '../../components/AppShell';

export default function LaporkanKendalaPage() {
  return (
    <AppShell>
      <main className="min-h-screen px-4 sm:px-6 md:px-12 pb-12 relative flex flex-col items-center overflow-auto custom-scrollbar">
        <div className="relative z-30 pt-16 md:pt-12 flex flex-col items-center pointer-events-none w-full mb-10">
          <div className="flex items-center gap-4 md:gap-8 px-16 md:px-0">
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-r from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
            <h1 className="font-headline text-[22px] sm:text-4xl md:text-6xl font-black text-neon-cyan uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] leading-none whitespace-nowrap">
              LAPORKAN KENDALA
            </h1>
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-l from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
          </div>
          <div className="mt-4 px-6 md:px-12 py-1 bg-neon-amber/5 border-x border-neon-amber/20">
            <p className="text-[10px] md:text-[11px] font-black font-headline tracking-[0.45em] md:tracking-[0.8em] uppercase text-neon-amber drop-shadow-[0_0_10px_rgba(255,191,0,0.7)] text-center">
              BANTU KAMI MEMPERBAIKI GEUWAT TOWER
            </p>
          </div>
        </div>

        <section className="w-full max-w-2xl flex flex-col items-center gap-8">
          <div className="w-full p-8 bg-surface-container/60 backdrop-blur-md border border-outline-variant rounded-lg">
            <p className="text-center text-white/80 text-sm mb-6 leading-relaxed">
              Jika Anda mengalami kendala atau menemukan bug saat menggunakan GEUWAT TOWER, 
              silakan laporkan kepada kami melalui formulir di bawah ini. 
              Bantuan Anda sangat berharga untuk meningkatkan pengalaman belajar.
            </p>
            
            <a
              href="https://forms.gle/bgjYKoqwacMPYXsPA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-neon-cyan text-black font-headline font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,240,255,0.35)] border border-neon-cyan/40 rounded text-center"
            >
              BUKA FORMULIR LAPORAN
            </a>
          </div>

          <div className="w-full p-6 bg-surface-container/40 backdrop-blur-md border border-neon-cyan/20 rounded-lg">
            <h3 className="font-headline text-lg font-black text-neon-cyan uppercase tracking-wider mb-4 text-center">
              Informasi yang Diperlukan
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-neon-amber mt-1">•</span>
                <span>Deskripsi kendala yang dialami</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-amber mt-1">•</span>
                <span>Screenshot (jika memungkinkan)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-amber mt-1">•</span>
                <span>Perangkat dan browser yang digunakan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-amber mt-1">•</span>
                <span>Langkah-langkah untuk mereproduksi masalah</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
