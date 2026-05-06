'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import AppShell from '../../../components/AppShell';
import { getOrInitProfile } from '../../../lib/profile';
import { canPlayStage, getOrInitProgress, updateOnGameOver, updateOnStageComplete } from '../../../lib/progress';
import { applyMatchAttempt } from '../../../lib/royal-engine';
import { playCorrectSfx, playWrongSfx, vibrateWrong } from '../../../lib/sfx';
import { createNewRun } from '../../../lib/run';
import { STAGE_BY_ID, getNextStageId } from '../../../lib/stages';
import { stopSpeaking, speak, speakSpelling } from '../../../lib/tts';
import {
  readRunState,
  readStageResult,
  removeRunState,
  writeRunState,
  writeStageResult,
} from '../../../lib/storage';
import type {
  AlphabetChoiceQuestion,
  AlphabetSpellingQuestion,
  FinalSoundQuestion,
  PhoneticSymbolQuestion,
  QuizRunState,
  RoyalRunState,
  RunState,
  StageId,
  StageQuestion,
  StageResult,
} from '../../../types/geuwat';

function isStageId(value: string): value is StageId {
  return value in STAGE_BY_ID;
}

type FeedbackState = {
  kind: 'correct' | 'wrong' | 'timeout';
  label: string;
};

const FEEDBACK_DELAY_MS = 650;

function computePercentage(correct: number, total: number) {
  return total <= 0 ? 0 : Math.round((correct / total) * 100);
}

function formatTimeMMSS(totalSeconds: number) {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const mm = Math.floor(clamped / 60);
  const ss = clamped % 60;
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

function stageClue(stageId: StageId): string {
  switch (stageId) {
    case 'alphabet':
      return 'ALPHABET';
    case 'lax_vowel':
      return 'LAX VOWEL';
    case 'tense_vowel':
      return 'TENSE VOWEL';
    case 'diphthong':
      return 'DIPHTHONG';
    case 'voiceless':
      return 'VOICELESS';
    case 'voiced':
      return 'VOICED';
    case 'final_s_es':
      return 'FINAL S/ES';
    case 'final_d_ed':
      return 'FINAL D/ED';
    case 'royal_king':
      return 'ROYAL KING';
    default:
      return String(stageId).toUpperCase();
  }
}

function royalClue(pair: { sourceStageId?: StageId; id: string }): string {
  // Robust fallback for older sessionStorage runs: parse from id rk:${stageId}:...
  const fromField = pair.sourceStageId;
  if (fromField) return stageClue(fromField);
  if (pair.id.startsWith('rk:')) {
    const parts = pair.id.split(':');
    const maybeStage = parts[1] as StageId | undefined;
    if (maybeStage) return stageClue(maybeStage);
  }
  return 'SCAN';
}

function QuizPlay({
  username,
  run,
  setRun,
  onFinish,
}: {
  username: string;
  run: QuizRunState;
  setRun: (next: QuizRunState) => void;
  onFinish: (result: StageResult) => void;
}) {
  const router = useRouter();
  const currentQuestion = run.questions[run.index] as StageQuestion | undefined;
  const total = run.questions.length;
  const [timeLeft, setTimeLeft] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [spellingValue, setSpellingValue] = useState('');
  const answerLockRef = useRef(false);
  const feedbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      stopSpeaking();
      if (feedbackTimeoutRef.current !== null) {
        window.clearTimeout(feedbackTimeoutRef.current);
        feedbackTimeoutRef.current = null;
      }
      answerLockRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!currentQuestion) return;
    setFeedback(null);
    setSelectedChoice(null);
    setIsAnswering(false);
    answerLockRef.current = false;
    setSpellingValue('');
    stopSpeaking();

    const tick = () => {
      const seconds = currentQuestion.seconds;
      const elapsedSec = Math.floor((Date.now() - run.questionStartedAt) / 1000);
      const next = Math.max(0, seconds - elapsedSec);
      setTimeLeft(next);
      if (next <= 0 && !answerLockRef.current) {
        handleTimeout();
      }
    };

    tick();
    const timer = window.setInterval(tick, 250);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.id, run.questionStartedAt]);

  const finishGameOver = (percentage: number) => {
    const durationSeconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));
    const result: StageResult = {
      stageId: run.stageId,
      percentage,
      correct: run.correctCount,
      total,
      didComplete: false,
      durationSeconds,
      finishedAt: Date.now(),
    };
    onFinish(result);
    router.push(`/result/${run.stageId}`);
  };

  const finishComplete = () => {
    const durationSeconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));
    const result: StageResult = {
      stageId: run.stageId,
      percentage: 100,
      correct: total,
      total,
      didComplete: true,
      durationSeconds,
      finishedAt: Date.now(),
    };
    onFinish(result);
    router.push(`/result/${run.stageId}`);
  };

  const applyNext = (nextRun: QuizRunState) => {
    writeRunState(nextRun.stageId, nextRun);
    setRun(nextRun);
  };

  const handleResolved = (isCorrect: boolean, kind: FeedbackState['kind']) => {
    if (!currentQuestion || answerLockRef.current) return;
    answerLockRef.current = true;
    setIsAnswering(true);
    stopSpeaking();

    if (isCorrect) {
      setFeedback({ kind: 'correct', label: 'Benar' });
      playCorrectSfx();
    } else {
      setFeedback({ kind, label: kind === 'timeout' ? 'Timeout' : 'Salah' });
      playWrongSfx();
      vibrateWrong();
    }

    const isLast = run.index >= total - 1;
    if (!isCorrect) {
      const percentage = computePercentage(run.correctCount, total);
      if (feedbackTimeoutRef.current !== null) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
      feedbackTimeoutRef.current = window.setTimeout(() => finishGameOver(percentage), FEEDBACK_DELAY_MS);
      return;
    }

    if (feedbackTimeoutRef.current !== null) {
      window.clearTimeout(feedbackTimeoutRef.current);
    }

    feedbackTimeoutRef.current = window.setTimeout(() => {
      feedbackTimeoutRef.current = null;
      setFeedback(null);
      setIsAnswering(false);
      answerLockRef.current = false;

      if (isLast) {
        finishComplete();
        return;
      }

      const next: QuizRunState = {
        ...run,
        index: run.index + 1,
        correctCount: run.correctCount + 1,
        questionStartedAt: Date.now(),
      };
      applyNext(next);
    }, FEEDBACK_DELAY_MS);
  };

  const handleTimeout = () => {
    setSelectedChoice(null);
    handleResolved(false, 'timeout');
  };

  const renderAlphabetChoice = (q: AlphabetChoiceQuestion) => (
    <div className="grid gap-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="font-headline text-5xl sm:text-6xl font-black tracking-[0.15em] text-neon-pink drop-shadow-[0_0_18px_rgba(255,0,255,0.6)]">
          {q.letter}
        </h2>
        <button
          type="button"
          onClick={() => speak(q.letter)}
          disabled={isAnswering}
          className="px-4 py-3 bg-black/60 border border-white/10 text-neon-cyan font-headline font-black text-xs uppercase tracking-widest hover:border-neon-cyan/40"
        >
          Play Audio
        </button>
      </div>
      <p className="text-white/60 text-sm">Pilih IPA yang benar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {q.choices.map((choice) => {
          const isPicked = selectedChoice === choice;
          const stateClass =
            feedback && isPicked ? (feedback.kind === 'correct' ? 'border-neon-green/60' : 'border-neon-red/60') : '';
          return (
            <button
              key={choice}
              type="button"
              disabled={isAnswering}
              onClick={() => {
                setSelectedChoice(choice);
                handleResolved(choice === q.correctIpa, 'wrong');
              }}
              className={`px-4 py-4 rounded bg-black/50 border border-white/10 font-headline font-black tracking-widest text-white hover:border-neon-cyan/40 transition-colors ${stateClass}`}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderPhonetic = (q: PhoneticSymbolQuestion) => (
    <div className="grid gap-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-[0.12em] text-neon-cyan drop-shadow-[0_0_18px_rgba(0,240,255,0.6)]">
          {q.word}
        </h2>
        <button
          type="button"
          onClick={() => speak(q.word)}
          disabled={isAnswering}
          className="px-4 py-3 bg-black/60 border border-white/10 text-neon-cyan font-headline font-black text-xs uppercase tracking-widest hover:border-neon-cyan/40"
        >
          Play
        </button>
      </div>
      <p className="text-white/60 text-sm">Pilih simbol IPA yang benar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {q.choices.map((choice) => {
          const isPicked = selectedChoice === choice;
          const stateClass =
            feedback && isPicked ? (feedback.kind === 'correct' ? 'border-neon-green/60' : 'border-neon-red/60') : '';
          return (
            <button
              key={choice}
              type="button"
              disabled={isAnswering}
              onClick={() => {
                setSelectedChoice(choice);
                handleResolved(choice === q.correctSymbol, 'wrong');
              }}
              className={`px-4 py-4 rounded bg-black/50 border border-white/10 font-headline font-black tracking-widest text-white hover:border-neon-cyan/40 transition-colors ${stateClass}`}
            >
              /{choice}/
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-white/40">Hint IPA: {q.ipa}</p>
    </div>
  );

  const renderFinalSound = (q: FinalSoundQuestion) => (
    <div className="grid gap-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-[0.12em] text-neon-amber drop-shadow-[0_0_18px_rgba(255,191,0,0.55)]">
          {q.word}
        </h2>
        <button
          type="button"
          onClick={() => speak(q.word)}
          disabled={isAnswering}
          className="px-4 py-3 bg-black/60 border border-white/10 text-neon-amber font-headline font-black text-xs uppercase tracking-widest hover:border-neon-amber/40"
        >
          Play
        </button>
      </div>
      <p className="text-white/60 text-sm">Pilih bunyi akhir yang benar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {q.choices.map((choice) => {
          const isPicked = selectedChoice === choice;
          const stateClass =
            feedback && isPicked ? (feedback.kind === 'correct' ? 'border-neon-green/60' : 'border-neon-red/60') : '';
          return (
            <button
              key={choice}
              type="button"
              disabled={isAnswering}
              onClick={() => {
                setSelectedChoice(choice);
                handleResolved(choice === q.correctSound, 'wrong');
              }}
              className={`px-4 py-4 rounded bg-black/50 border border-white/10 font-headline font-black tracking-widest text-white hover:border-neon-amber/40 transition-colors ${stateClass}`}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderAlphabetSpelling = (q: AlphabetSpellingQuestion) => {
    const maxLen = q.answer.length;
    const cleaned = spellingValue.replace(/[^a-zA-Z]/g, '').slice(0, maxLen).toLowerCase();
    const didFill = cleaned.length === maxLen && maxLen > 0;

    return (
      <div className="grid gap-5">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="font-headline text-2xl sm:text-3xl font-black tracking-[0.08em] text-neon-pink drop-shadow-[0_0_18px_rgba(255,0,255,0.35)]">
            {q.meaning.toUpperCase()}
          </h2>
          <button
            type="button"
            onClick={() => speakSpelling(q.answer)}
            disabled={isAnswering}
            className="px-4 py-3 bg-black/60 border border-white/10 text-neon-pink font-headline font-black text-xs uppercase tracking-widest hover:border-neon-pink/40"
          >
            Play Spelling
          </button>
        </div>

        <p className="text-white/60 text-sm">Ketik kata English yang benar.</p>
        <input
          value={cleaned}
          onChange={(e) => {
            const next = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, maxLen).toLowerCase();
            setSpellingValue(next);
            if (next.length === maxLen && maxLen > 0) {
              handleResolved(next === q.answer.toLowerCase(), 'wrong');
            }
          }}
          disabled={isAnswering}
          className="w-full bg-black/60 border border-white/10 rounded px-4 py-4 text-white font-headline font-black tracking-[0.25em] uppercase outline-none focus:border-neon-pink/50"
          placeholder={`${maxLen} letters`}
          inputMode="text"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />

        <div className="flex items-center justify-between text-[11px] text-white/40">
          <span>Topic: {q.topicId}</span>
          <span>
            {cleaned.length}/{maxLen}
          </span>
        </div>

        <button
          type="button"
          disabled={isAnswering || !didFill}
          onClick={() => handleResolved(cleaned === q.answer.toLowerCase(), 'wrong')}
          className="px-4 py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 disabled:opacity-40 disabled:pointer-events-none"
        >
          Submit
        </button>
      </div>
    );
  };

  if (!currentQuestion) {
    return (
      <div className="text-center text-white/60 p-6">
        Loading questions...
      </div>
    );
  }

  return (
    <section className="w-full max-w-3xl border border-white/10 bg-black/50 backdrop-blur-md rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Player: {username}
          </span>
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Q: {run.index + 1}/{total}
          </span>
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Stage: {run.stageId}
          </span>
        </div>
        <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest text-neon-amber">
          Time: {timeLeft}s
        </span>
      </div>

      <div className="mt-6">
        {currentQuestion.variant === 'alphabet_choice'
          ? renderAlphabetChoice(currentQuestion)
          : currentQuestion.variant === 'phonetic_symbol'
            ? renderPhonetic(currentQuestion)
            : currentQuestion.variant === 'final_sound'
              ? renderFinalSound(currentQuestion)
              : renderAlphabetSpelling(currentQuestion)}
      </div>

      {feedback ? (
        <p
          className={`mt-6 text-center font-headline font-black tracking-widest uppercase ${
            feedback.kind === 'correct' ? 'text-neon-green' : 'text-neon-red'
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback.label}
        </p>
      ) : null}
    </section>
  );
}

function RoyalPlay({
  username,
  run,
  setRun,
  onFinish,
}: {
  username: string;
  run: RoyalRunState;
  setRun: (next: RoyalRunState) => void;
  onFinish: (result: StageResult) => void;
}) {
  const router = useRouter();
  const [selectedHandId, setSelectedHandId] = useState<string | null>(null);
  const [shakeTargetId, setShakeTargetId] = useState<string | null>(null);
  const [shakeHandId, setShakeHandId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const lockRef = useRef(false);
  const feedbackTimeoutRef = useRef<number | null>(null);

  const deckTotal = run.deck.length;
  const totalSeconds = deckTotal * 20;
  const percentage = computePercentage(run.correctCount, deckTotal);

  const activeById = useMemo(() => Object.fromEntries(run.activePairs.map((p) => [p.id, p])), [run.activePairs]);
  const handPairs = useMemo(() => run.handOrder.map((id) => activeById[id]).filter(Boolean), [activeById, run.handOrder]);

  useEffect(() => {
    // Ensure we always have a selected card in hand (helps mobile UX).
    if (handPairs.length === 0) return;
    if (!selectedHandId || !handPairs.some((p) => p.id === selectedHandId)) {
      setSelectedHandId(handPairs[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handPairs.map((p) => p.id).join('|')]);

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current !== null) {
        window.clearTimeout(feedbackTimeoutRef.current);
        feedbackTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setFeedback(null);

    const tick = () => {
      const elapsedSec = Math.floor((Date.now() - run.startedAt) / 1000);
      const next = Math.max(0, totalSeconds - elapsedSec);
      setTimeLeft(next);
      if (next <= 0 && !lockRef.current) {
        handleTimeout();
      }
    };

    tick();
    const timer = window.setInterval(tick, 250);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run.startedAt, totalSeconds]);

  const finishGameOver = () => {
    const durationSeconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));
    const result: StageResult = {
      stageId: 'royal_king',
      percentage,
      correct: run.correctCount,
      total: deckTotal,
      didComplete: false,
      durationSeconds,
      finishedAt: Date.now(),
    };
    onFinish(result);
    router.push('/result/royal_king');
  };

  const finishComplete = (nextCorrectCount: number) => {
    const durationSeconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));
    const result: StageResult = {
      stageId: 'royal_king',
      percentage: 100,
      correct: nextCorrectCount,
      total: deckTotal,
      didComplete: true,
      durationSeconds,
      finishedAt: Date.now(),
    };
    onFinish(result);
    router.push('/result/royal_king');
  };

  const handleTimeout = () => {
    if (lockRef.current) return;
    lockRef.current = true;
    stopSpeaking();
    setFeedback({ kind: 'timeout', label: 'Timeout' });
    playWrongSfx();
    vibrateWrong();

    if (feedbackTimeoutRef.current !== null) {
      window.clearTimeout(feedbackTimeoutRef.current);
    }
    feedbackTimeoutRef.current = window.setTimeout(() => {
      feedbackTimeoutRef.current = null;
      lockRef.current = false;
      finishGameOver();
    }, FEEDBACK_DELAY_MS);
  };

  const attempt = (targetId: string, handId: string) => {
    if (lockRef.current) return;
    lockRef.current = true;
    stopSpeaking();

    const res = applyMatchAttempt(run, targetId, handId);
    if (!res.isCorrect) {
      playWrongSfx();
      vibrateWrong();
      setShakeTargetId(targetId);
      setShakeHandId(handId);
      window.setTimeout(() => {
        setShakeTargetId(null);
        setShakeHandId(null);
      }, 350);
      window.setTimeout(() => {
        lockRef.current = false;
        finishGameOver();
      }, 500);
      return;
    }

    playCorrectSfx();
    const next = res.nextRun;
    const now = Date.now();
    const nextWithTimer: RoyalRunState = { ...next, pairStartedAt: now };
    writeRunState('royal_king', nextWithTimer);
    setRun(nextWithTimer);
    setSelectedHandId(null);
    lockRef.current = false;

    if (res.didFinish) {
      finishComplete(next.correctCount);
    }
  };

  return (
    <section className="w-full max-w-4xl border border-white/10 bg-black/50 backdrop-blur-md rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Player: {username}
          </span>
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Boss: ROYAL KING
          </span>
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest">
            Progress: {run.correctCount}/{deckTotal}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest text-neon-amber">
            Time: {formatTimeMMSS(timeLeft)}
          </span>
          <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-headline font-black uppercase tracking-widest text-neon-amber">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-20">
              <div className="absolute inset-0 rounded bg-black/40 border border-neon-amber/25 shadow-[0_0_18px_rgba(255,191,0,0.15)]" />
              <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded bg-black/30 border border-neon-amber/10" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-headline text-[10px] font-black uppercase tracking-widest text-neon-amber/80">DECK</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-headline uppercase tracking-widest text-white/50">Remaining</p>
              <p className="font-headline font-black tracking-widest text-neon-amber">{Math.max(0, deckTotal - run.correctCount)}</p>
            </div>
          </div>
          <p className="text-[11px] text-white/50">
            Total timer: {formatTimeMMSS(totalSeconds)} (20s/soal). Satu salah langsung game over.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" aria-label="Answer targets">
          {run.activePairs.map((pair) => {
            const isShaking = shakeTargetId === pair.id;
            return (
              <button
                key={pair.id}
                type="button"
                onClick={() => {
                  if (!selectedHandId) return;
                  attempt(pair.id, selectedHandId);
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  event.dataTransfer.dropEffect = 'move';
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  const handId = event.dataTransfer.getData('application/x-gt-hand');
                  if (!handId) return;
                  attempt(pair.id, handId);
                }}
                className={`p-3 rounded bg-black/40 border border-neon-amber/20 text-white/85 font-headline font-black tracking-wide hover:border-neon-amber/50 transition-colors shadow-[inset_0_0_18px_rgba(0,0,0,0.35)] ${
                  isShaking ? 'gt-shake border-neon-red/60' : ''
                }`}
              >
                {pair.answer}
              </button>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[11px] text-white/50 mb-3">
            Mobile: tap prompt lalu tap jawabannya. Desktop: drag prompt ke jawaban.
          </p>
          <div className="flex flex-wrap gap-3" aria-label="Prompt cards">
            {handPairs.map((pair) => {
              const isSelected = selectedHandId === pair.id;
              const isShaking = shakeHandId === pair.id;
              const clueText = royalClue(pair);
              return (
                <button
                  key={pair.id}
                  type="button"
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData('application/x-gt-hand', pair.id);
                    event.dataTransfer.effectAllowed = 'move';
                    setSelectedHandId(pair.id);
                  }}
                  onDragEnd={() => setSelectedHandId(null)}
                  onClick={() => setSelectedHandId((prev) => (prev === pair.id ? null : pair.id))}
                  className={`px-4 py-3 rounded border bg-black/50 font-headline font-black tracking-wide transition-colors ${
                    isSelected ? 'border-neon-cyan/60 text-neon-cyan' : 'border-white/10 text-white/80 hover:border-neon-cyan/40'
                  } ${isShaking ? 'gt-shake border-neon-red/60' : ''}`}
                >
                  <div className="grid gap-1 text-left">
                    <div className="truncate">{pair.prompt}</div>
                    <div
                      className={`text-[9px] font-label font-black uppercase tracking-[0.35em] ${
                        isSelected ? 'text-neon-amber/80' : 'text-neon-amber/80 invisible'
                      }`}
                    >
                      {clueText}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {feedback ? (
          <p
            className={`mt-4 text-center font-headline font-black tracking-widest uppercase ${
              feedback.kind === 'timeout' ? 'text-neon-amber' : 'text-neon-red'
            }`}
            role="status"
            aria-live="polite"
          >
            {feedback.label}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default function PlayClient({ stageId }: { stageId: string }) {
  const router = useRouter();
  const [username, setUsername] = useState('LEARNER_01');
  const [run, setRun] = useState<RunState | null>(null);
  const resolvedStageId = useMemo(() => (isStageId(stageId) ? (stageId as StageId) : null), [stageId]);

  useEffect(() => {
    if (!resolvedStageId) return;

    const profile = getOrInitProfile();
    setUsername(profile.username);

    const progress = getOrInitProgress();
    if (!canPlayStage(resolvedStageId, progress)) {
      router.replace(`/stage/${resolvedStageId}`);
      return;
    }

    const existing = readRunState(resolvedStageId);
    if (existing && existing.stageId === resolvedStageId) {
      setRun(existing);
      return;
    }

    // If user is coming from a finished run, keep result but start fresh.
    void readStageResult(resolvedStageId);

    const fresh = createNewRun(resolvedStageId);
    writeRunState(resolvedStageId, fresh);
    setRun(fresh);
  }, [resolvedStageId, router]);

  const onFinish = (result: StageResult) => {
    if (!resolvedStageId) return;
    writeStageResult(resolvedStageId, result);
    removeRunState(resolvedStageId);

    if (result.didComplete) {
      updateOnStageComplete(resolvedStageId, result.durationSeconds);
    } else {
      updateOnGameOver(resolvedStageId, result.percentage, result.durationSeconds);
    }
  };

  if (!resolvedStageId) {
    return (
      <AppShell>
        <main className="min-h-screen flex items-center justify-center p-4 sm:p-10">
          <div className="max-w-lg text-center bg-black/50 border border-white/10 rounded-lg p-6">
            <h1 className="font-headline text-2xl font-black text-neon-cyan tracking-widest uppercase">Unknown Stage</h1>
            <p className="text-white/60 mt-3">Stage tidak ditemukan.</p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center px-4 py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest"
            >
              Back to Journey
            </Link>
          </div>
        </main>
      </AppShell>
    );
  }

  if (!run) {
    return (
      <AppShell>
        <main className="min-h-screen flex items-center justify-center p-4 sm:p-10">
          <div className="text-white/60">Loading run...</div>
        </main>
      </AppShell>
    );
  }

  const stage = STAGE_BY_ID[resolvedStageId];
  const nextStageId = getNextStageId(resolvedStageId);

  return (
    <AppShell>
      <main className="min-h-screen pt-14 md:pt-16 px-4 sm:px-6 md:px-12 pb-12 relative flex flex-col items-center">
        <div className="w-full max-w-4xl mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs text-white/50 font-headline uppercase tracking-widest">
                Stage {stage.number.toString().padStart(2, '0')}
              </p>
              <h1 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-[0.22em]" style={{ color: stage.accentColor }}>
                {stage.title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/stage/${resolvedStageId}`}
                className="px-3 py-2 bg-black/60 border border-white/10 text-white/80 font-headline font-black text-xs uppercase tracking-widest hover:border-white/20"
              >
                Stage
              </Link>
              {nextStageId ? (
                <Link
                  href={`/stage/${nextStageId}`}
                  className="px-3 py-2 bg-black/60 border border-white/10 text-white/70 font-headline font-black text-xs uppercase tracking-widest hover:border-white/20"
                >
                  Next
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        {run.kind === 'quiz' ? (
          <QuizPlay username={username} run={run} setRun={(v) => setRun(v)} onFinish={onFinish} />
        ) : (
          <RoyalPlay username={username} run={run} setRun={(v) => setRun(v)} onFinish={onFinish} />
        )}
      </main>
    </AppShell>
  );
}
