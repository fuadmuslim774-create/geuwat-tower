/**
 * Force sync journey timestamps from local storage to database
 * Run this in browser console to manually sync your journey_started_at
 * 
 * Usage:
 * 1. Open browser console (F12)
 * 2. Copy and paste this entire file
 * 3. Call: await forceSyncJourneyTimestamps()
 */

async function forceSyncJourneyTimestamps() {
  try {
    // Get progress from local storage
    const progressStr = localStorage.getItem('gt_progress_v1');
    if (!progressStr) {
      console.error('❌ No progress found in local storage');
      return;
    }

    const progress = JSON.parse(progressStr);
    console.log('📊 Progress from local storage:', progress);

    // Get user from local storage
    const userStr = localStorage.getItem('geuwat_user');
    if (!userStr) {
      console.error('❌ No user found in local storage');
      return;
    }

    const user = JSON.parse(userStr);
    console.log('👤 User:', user);

    // Check if journey_started_at exists
    if (!progress.journeyStartedAt) {
      console.error('❌ No journeyStartedAt in progress');
      console.log('💡 Try completing a stage first to initialize journey timestamps');
      return;
    }

    // Calculate highest completed stage
    const stageOrder = [
      'alphabet',
      'lax_vowel',
      'tense_vowel',
      'diphthong',
      'voiceless',
      'voiced',
      'final_s_es',
      'final_d_ed',
      'royal_king',
    ];

    let rankStageId = 'alphabet';
    for (const stageId of stageOrder.reverse()) {
      if (progress.stages[stageId]?.completed) {
        rankStageId = stageId;
        break;
      }
    }

    // Calculate time_sec
    let timeSec = null;
    if (progress.journeyCompletedAt) {
      timeSec = Math.floor((progress.journeyCompletedAt - progress.journeyStartedAt) / 1000);
    } else {
      timeSec = Math.floor((Date.now() - progress.journeyStartedAt) / 1000);
    }

    // Prepare payload
    const payload = {
      userId: user.id,
      rankStageId,
      timeSec,
      journeyStartedAt: progress.journeyStartedAt,
      journeyCompletedAt: progress.journeyCompletedAt,
    };

    console.log('📤 Syncing to database:', payload);

    // Call API
    const response = await fetch('/api/leaderboard/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Sync failed:', error);
      return;
    }

    const result = await response.json();
    console.log('✅ Sync successful:', result);
    console.log('🔄 Please refresh the leaderboard page to see updated ranking');
  } catch (error) {
    console.error('❌ Error during sync:', error);
  }
}

// Auto-run
console.log('🚀 Force sync script loaded. Running sync...');
forceSyncJourneyTimestamps();
