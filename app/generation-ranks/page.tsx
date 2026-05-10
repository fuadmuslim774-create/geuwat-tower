'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import AppShell from '../../components/AppShell';
import { getAvatarSrc } from '../../lib/avatars';
import { getOrInitProfile } from '../../lib/profile';
import { createInitialProgress, getOrInitProgress, getRankStageId, getCompletionTimeSeconds } from '../../lib/progress';
import { fetchBatchRanks, fetchBatches, fetchPerStageRanks } from '../../lib/supabase/leaderboard';
import type { AvatarId, StageId } from '../../types/geuwat';

// Lazy load StageSelector component
const StageSelector = dynamic(() => import('../../components/StageSelector'), {
  loading: () => (
    <div className="w-full flex items-center justify-center py-12">
      <div className="font-headline text-neon-cyan/60 text-lg animate-pulse">
        Loading stage selector...
      </div>
    </div>
  ),
  ssr: false,
});

type RankRow = {
  id: string;
  player: string;
  avatarId: AvatarId;
  rank: string;
  time: string;
  highlight?: boolean;
};

const TABLE_LINE = '#FF8C00';
const TABLE_LINE_SHADOW = 'rgba(255,140,0,0.55)';

export default function GenerationRanksPage() {
  const [selectedGenerationId, setSelectedGenerationId] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<StageId | null | undefined>(undefined); // undefined = selection screen, null = Overall, StageId = specific stage
  const [profileId, setProfileId] = useState('');
  const [batchId, setBatchId] = useState<string | null>(null);
  const [username, setUsername] = useState('LEARNER_01');
  const [avatarId, setAvatarId] = useState<AvatarId>('chibi1');
  const [progress, setProgress] = useState(() => createInitialProgress());
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [batches, setBatches] = useState<Array<{ id: string; title: string }>>([]);
  const [rows, setRows] = useState<RankRow[]>([]);
  const [pageInfo, setPageInfo] = useState<{ page: number; totalPages: number; pageSize: number }>({ page: 1, totalPages: 1, pageSize });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const profile = getOrInitProfile();
    setProfileId(profile.profileId);
    setBatchId(profile.batchId);
    setUsername(profile.username);
    setAvatarId(profile.avatarId);
    setProgress(getOrInitProgress());

    const onChange = () => {
      const nextProfile = getOrInitProfile();
      const nextProgress = getOrInitProgress();
      setProfileId(nextProfile.profileId);
      setBatchId(nextProfile.batchId);
      setUsername(nextProfile.username);
      setAvatarId(nextProfile.avatarId);
      setProgress(nextProgress);
      setPage(1);
    };

    window.addEventListener('storage', onChange);
    window.addEventListener('gt_profile_changed', onChange as EventListener);
    window.addEventListener('gt_progress_changed', onChange as EventListener);
    const tick = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('gt_profile_changed', onChange as EventListener);
      window.removeEventListener('gt_progress_changed', onChange as EventListener);
      window.clearInterval(tick);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchBatches()
      .then((list) => {
        if (cancelled) return;
        setBatches(list);
      })
      .catch(() => {
        if (cancelled) return;
        setBatches([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const availableBatches = useMemo(() => {
    if (typeof batchId === 'string' && batchId.length > 0) {
      return batches.filter((b) => b.id === batchId);
    }
    return batches;
  }, [batchId, batches]);

  const selectedBatch = useMemo(() => {
    return selectedGenerationId ? availableBatches.find((b) => b.id === selectedGenerationId) ?? null : null;
  }, [availableBatches, selectedGenerationId]);

  useEffect(() => {
    let cancelled = false;
    if (!selectedBatch || !profileId || selectedStage === undefined) return () => {}; // Don't fetch if on selection screen
    setLoading(true);
    setError(null);
    
    const fetchData = selectedStage === null
      ? fetchBatchRanks({ page, pageSize, currentUserId: profileId, batchId: selectedBatch.id })
      : fetchPerStageRanks({ stageId: selectedStage, page, pageSize, currentUserId: profileId, batchId: selectedBatch.id });
    
    fetchData
      .then((res) => {
        if (cancelled) return;
        setRows(res.rows as RankRow[]);
        setPageInfo({ page: res.page, totalPages: res.totalPages, pageSize: res.pageSize });
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('[GenerationRanksPage] Error fetching ranks:', err);
        setError('Unable to load rankings. Please try again.');
        setRows([]);
        setPageInfo({ page: 1, totalPages: 1, pageSize });
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [page, pageSize, profileId, selectedBatch, avatarId, selectedStage]); // Added selectedStage dependency

  // Recalculate time display for current user every second
  const displayRows = useMemo(() => {
    return rows.map((row) => {
      if (row.highlight && row.time !== '--:--:--' && selectedStage === null) {
        // Current user in Overall mode - calculate sum of best times from progress
        const rankStageId = getRankStageId(progress);
        const timeSec = getCompletionTimeSeconds(progress, rankStageId);
        
        if (timeSec !== null) {
          const hh = Math.floor(timeSec / 3600);
          const mm = Math.floor((timeSec % 3600) / 60);
          const ss = timeSec % 60;
          const timeDisplay = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
          return { ...row, time: timeDisplay };
        }
      }
      return row;
    });
  }, [rows, progress, selectedStage]);

  const handleStageChange = (stageId: StageId | null) => {
    setSelectedStage(stageId);
    setPage(1); // Reset to page 1 when stage changes
  };

  const handleBackToGenerationSelection = () => {
    setSelectedGenerationId(null);
    setSelectedStage(undefined); // Reset to selection screen when going back
  };

  const handleBackToStageSelection = () => {
    setSelectedStage(undefined);
    setPage(1);
  };

  const offset = (pageInfo.page - 1) * pageInfo.pageSize;

  return (
    <AppShell>
      <main className="min-h-screen px-4 sm:px-6 md:px-12 pb-12 relative flex flex-col items-center overflow-auto custom-scrollbar">
        <div className="relative z-30 pt-16 md:pt-12 flex flex-col items-center pointer-events-none w-full mb-10">
          <div className="flex items-center gap-4 md:gap-8 px-16 md:px-0">
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-r from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
            <h1 className="font-headline text-[22px] sm:text-4xl md:text-6xl font-black text-neon-cyan uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] leading-none whitespace-nowrap">
              GEUWAT TOWER
            </h1>
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-l from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
          </div>
          <div className="mt-4 px-6 md:px-12 py-1 bg-neon-amber/5 border-x border-neon-amber/20">
            <p className="text-[10px] md:text-[11px] font-black font-headline tracking-[0.45em] md:tracking-[0.8em] uppercase text-neon-amber drop-shadow-[0_0_10px_rgba(255,191,0,0.7)] text-center">
              {selectedBatch ? selectedBatch.title : 'CHOOSE YOUR GENERATION'}
            </p>
          </div>
        </div>

        {!selectedBatch ? (
          <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-8 gap-6 shrink-0">
            <div className="w-[min(92vw,420px)] space-y-4">
              {availableBatches.map((gen) => (
                <button
                  key={gen.id}
                  onClick={() => setSelectedGenerationId(gen.id)}
                  className="pointer-events-auto w-full p-6 bg-surface-container/60 backdrop-blur-md border border-outline-variant rounded-lg flex items-center justify-center transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  <span className="font-headline text-neon-cyan text-xl font-black tracking-[0.25em]">{gen.title}</span>
                </button>
              ))}
            </div>
          </div>
        ) : selectedStage === undefined ? (
          /* Stage Selection Screen */
          <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-8 gap-6 shrink-0 pointer-events-auto">
            <div className="w-full max-w-4xl px-4">
              <StageSelector 
                selectedStage={null} 
                onStageChange={(stageId) => {
                  setSelectedStage(stageId);
                  setPage(1);
                }}
              />
            </div>
            <button 
              type="button" 
              onClick={handleBackToGenerationSelection} 
              className="font-headline text-neon-cyan hover:text-white transition-colors text-[15px]"
            >
              &lt; Back to Generations
            </button>
          </div>
        ) : (
          <section className="w-full max-w-4xl pointer-events-auto">
            {/* Your Position Section */}
            {rows.some(r => r.highlight) && (
              <div className="mb-6 p-4 bg-surface-container/60 backdrop-blur-md border border-neon-cyan/30 rounded-lg">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gt-hex flex items-center justify-center border border-neon-cyan/50 overflow-hidden">
                      <img
                        alt="Your avatar"
                        src={getAvatarSrc(rows.find(r => r.highlight)?.avatarId || avatarId)}
                        className="w-full h-full object-cover scale-110"
                        style={{ objectPosition: '50% 25%' }}
                      />
                    </div>
                    <div>
                      <p className="font-headline text-xs text-white/60 uppercase tracking-wider">Your Position</p>
                      <p className="font-headline text-2xl font-black text-neon-cyan tracking-wide">
                        #{rows.findIndex(r => r.highlight) + 1 + (page - 1) * pageSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="font-headline text-xs text-white/60 uppercase tracking-wider">Rank</p>
                      <p className="font-headline text-lg font-black text-neon-amber">
                        {rows.find(r => r.highlight)?.rank || '--'}
                      </p>
                    </div>
                    <div>
                      <p className="font-headline text-xs text-white/60 uppercase tracking-wider">Time</p>
                      <p className="font-headline text-lg font-black text-neon-pink">
                        {displayRows.find(r => r.highlight)?.time || '--:--:--'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="overflow-x-auto custom-scrollbar">
              <div className="min-w-[640px] sm:min-w-[720px]">
                <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.08)] relative">
                  <div className="grid grid-cols-[52px_2fr_2fr_2fr] sm:grid-cols-[60px_2fr_2fr_2fr] gap-px font-headline text-neon-cyan text-[13px] sm:text-[15px] font-medium tracking-wide" style={{ backgroundColor: TABLE_LINE }}>
                    {['No', 'Player', 'Rank', 'Completion Time'].map((label, idx) => (
                      <div
                        key={label}
                        className={`bg-[#0a1114] p-3 text-center ${idx === 0 ? 'rounded-tl-sm' : ''} ${idx === 3 ? 'rounded-tr-sm' : ''}`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div
                    className="grid grid-cols-[52px_2fr_2fr_2fr] sm:grid-cols-[60px_2fr_2fr_2fr] gap-px font-headline text-[13px] sm:text-[15px] tracking-wide mt-px rounded-b-sm overflow-hidden"
                    style={{ backgroundColor: TABLE_LINE }}
                  >
                    {loading ? (
                      <div className="col-span-4 bg-[#0a1114] p-6 text-center text-white/60">Loading ranks…</div>
                    ) : error ? (
                      <div className="col-span-4 bg-[#0a1114] p-6 text-center">
                        <p className="text-red-400 mb-2">{error}</p>
                        <button
                          type="button"
                          onClick={() => setPage(p => p)} // Trigger re-fetch
                          className="text-neon-cyan hover:text-white transition-colors text-sm"
                        >
                          Retry
                        </button>
                      </div>
                    ) : rows.length === 0 ? (
                      <div className="col-span-4 bg-[#0a1114] p-6 text-center text-white/60">
                        {selectedStage ? 'No users have completed this stage yet' : 'No ranks yet.'}
                      </div>
                    ) : (
                      displayRows.map((row, idx) => {
                      const isYou = Boolean(row.highlight);
                      const cyan = '#00F0FF';
                      const pink = '#FF51FA';
                      const gold = '#FF9900';
                      const isTopRank = idx === 0;
                      const isGreatestKing = isTopRank && row.rank === 'Royal King';
                      const displayRank = isGreatestKing ? 'MVP' : row.rank;

                      const fg = isGreatestKing ? cyan : isYou ? pink : '#FFFFFF';
                      const box = isYou
                        ? 'shadow-[inset_0_0_15px_rgba(255,81,250,0.3)] border border-[rgba(255,81,250,0.5)]'
                        : '';
                      const rankColor = isGreatestKing ? cyan : row.rank === 'Royal King' ? gold : '#FFFFFF';

                      return (
                        <div key={row.id} className="contents">
                          <div className={`bg-[#0a1114] p-2 text-center flex items-center justify-center relative overflow-hidden min-w-0 ${box}`} style={{ color: fg }}>
                            <div
                              className="absolute left-0 right-0 top-0 h-[2px]"
                              style={{ backgroundColor: TABLE_LINE, boxShadow: `0 0 10px ${TABLE_LINE_SHADOW}` }}
                              aria-hidden="true"
                            />
                            {offset + idx + 1}
                          </div>
                          <div className={`bg-[#0a1114] p-2 text-center flex items-center justify-center relative overflow-hidden min-w-0 ${box}`} style={{ color: fg }}>
                            <div
                              className="absolute left-0 right-0 top-0 h-[2px]"
                              style={{ backgroundColor: TABLE_LINE, boxShadow: `0 0 10px ${TABLE_LINE_SHADOW}` }}
                              aria-hidden="true"
                            />
                            <div className="grid grid-cols-[36px_1fr] items-center gap-2 w-full max-w-[240px] min-w-0">
                              <div
                                className="w-9 h-9 gt-hex overflow-hidden border bg-black/40"
                                style={{ borderColor: isYou ? 'rgba(255,81,250,0.5)' : 'rgba(0,240,255,0.28)' }}
                                aria-hidden="true"
                              >
                                <img
                                  alt=""
                                  src={getAvatarSrc(row.avatarId)}
                                  className="w-full h-full object-cover scale-110"
                                  style={{ objectPosition: '50% 20%' }}
                                />
                              </div>
                              <span className="truncate text-left min-w-0">{row.player}</span>
                            </div>
                          </div>
                          <div
                            className={`bg-[#0a1114] p-2 text-center flex items-center justify-center relative overflow-hidden min-w-0 ${box}`}
                            style={{
                              color: rankColor,
                              filter: isGreatestKing
                                ? 'drop-shadow(0 0 22px rgba(0,240,255,0.95))'
                                : `drop-shadow(0 0 6px ${row.rank === 'Royal King' ? '#FF9900' : fg})`,
                            }}
                          >
                            <div
                              className="absolute left-0 top-0 bottom-0 w-[2px]"
                              style={{ backgroundColor: TABLE_LINE, boxShadow: `0 0 10px ${TABLE_LINE_SHADOW}` }}
                              aria-hidden="true"
                            />
                            <div
                              className="absolute left-0 right-0 top-0 h-[2px]"
                              style={{ backgroundColor: TABLE_LINE, boxShadow: `0 0 10px ${TABLE_LINE_SHADOW}` }}
                              aria-hidden="true"
                            />
                            {displayRank}
                          </div>
                          <div className={`bg-[#0a1114] p-2 text-center flex items-center justify-center relative overflow-hidden min-w-0 ${box}`} style={{ color: fg }}>
                            <div
                              className="absolute left-0 right-0 top-0 h-[2px]"
                              style={{ backgroundColor: TABLE_LINE, boxShadow: `0 0 10px ${TABLE_LINE_SHADOW}` }}
                              aria-hidden="true"
                            />
                            {row.time}
                          </div>
                        </div>
                      );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 gap-4 font-headline text-[15px] text-neon-cyan">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="hover:text-white transition-colors disabled:opacity-40 disabled:hover:text-neon-cyan"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={pageInfo.page <= 1}
                >
                  Prev
                </button>
                <span className="text-neon-amber font-bold">
                  {pageInfo.page} / {pageInfo.totalPages}
                </span>
                <button
                  type="button"
                  className="hover:text-white transition-colors disabled:opacity-40 disabled:hover:text-neon-cyan"
                  onClick={() => setPage((p) => Math.min(pageInfo.totalPages, p + 1))}
                  disabled={pageInfo.page >= pageInfo.totalPages}
                >
                  Next
                </button>
              </div>
              <button type="button" onClick={handleBackToStageSelection} className="hover:text-white transition-colors">
                &lt; Back to Selection
              </button>
            </div>
          </section>
        )}
      </main>
    </AppShell>
  );
}
