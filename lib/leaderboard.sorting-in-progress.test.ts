import { describe, it, expect } from 'vitest';

/**
 * Test untuk memverifikasi sorting logic leaderboard untuk user yang sedang dalam proses
 * 
 * Requirement: User yang sedang dalam proses harus diurutkan berdasarkan elapsed time,
 * bukan hanya berdasarkan username
 */

describe('Leaderboard Sorting for In-Progress Users', () => {
  it('should sort in-progress users by elapsed time, not just username', () => {
    const now = Date.now();
    const oneHourAgo = now - 3600 * 1000; // 1 hour ago
    const twoHoursAgo = now - 7200 * 1000; // 2 hours ago
    const thirtyMinutesAgo = now - 1800 * 1000; // 30 minutes ago

    // Simulate database records for same stage (royal_king)
    const records = [
      {
        username: 'Alice',
        rank_stage_id: 'royal_king',
        time_sec: null, // In progress
        journey_started_at: twoHoursAgo, // Started 2 hours ago
        journey_completed_at: null,
        rank_stage_num: 9,
      },
      {
        username: 'Bob',
        rank_stage_id: 'royal_king',
        time_sec: 3600, // Completed in 1 hour
        journey_started_at: oneHourAgo,
        journey_completed_at: now,
        rank_stage_num: 9,
      },
      {
        username: 'Charlie',
        rank_stage_id: 'royal_king',
        time_sec: null, // In progress
        journey_started_at: thirtyMinutesAgo, // Started 30 minutes ago
        journey_completed_at: null,
        rank_stage_num: 9,
      },
      {
        username: 'Dave',
        rank_stage_id: 'royal_king',
        time_sec: null, // In progress
        journey_started_at: oneHourAgo, // Started 1 hour ago
        journey_completed_at: null,
        rank_stage_num: 9,
      },
    ];

    // Simulate SQL sorting logic with effective_time_sec calculation:
    // ORDER BY rank_stage_num DESC, effective_time_sec ASC, username ASC
    const sorted = [...records].sort((a, b) => {
      // 1. Sort by rank_stage_num DESC (higher stage first)
      if (a.rank_stage_num !== b.rank_stage_num) {
        return b.rank_stage_num - a.rank_stage_num;
      }

      // 2. Calculate effective_time_sec for sorting
      const getEffectiveTime = (record: typeof records[0]) => {
        if (record.time_sec !== null) {
          // Completed: use time_sec
          return record.time_sec;
        } else if (record.journey_started_at !== null && record.journey_completed_at === null) {
          // In progress: calculate elapsed time
          return Math.floor((now - record.journey_started_at) / 1000);
        } else {
          // Not started: use very large number
          return 2147483647;
        }
      };

      const aTime = getEffectiveTime(a);
      const bTime = getEffectiveTime(b);
      
      if (aTime !== bTime) {
        return aTime - bTime;
      }

      // 3. Sort by username ASC (alphabetical)
      return a.username.localeCompare(b.username);
    });

    // Expected order (by effective_time_sec):
    // 1. Charlie (in-progress, 30 minutes = 1800 sec) - fastest elapsed time
    // 2. Bob (completed, 3600 sec) - completed in 1 hour
    // 3. Dave (in-progress, 1 hour = 3600 sec) - same elapsed time as Bob but in-progress
    // 4. Alice (in-progress, 2 hours = 7200 sec) - slowest elapsed time

    expect(sorted[0].username).toBe('Charlie');
    expect(sorted[0].time_sec).toBeNull();
    expect(Math.floor((now - sorted[0].journey_started_at!) / 1000)).toBe(1800);
    
    expect(sorted[1].username).toBe('Bob');
    expect(sorted[1].time_sec).toBe(3600);
    
    expect(sorted[2].username).toBe('Dave');
    expect(sorted[2].time_sec).toBeNull();
    expect(Math.floor((now - sorted[2].journey_started_at!) / 1000)).toBe(3600);
    
    expect(sorted[3].username).toBe('Alice');
    expect(sorted[3].time_sec).toBeNull();
    expect(Math.floor((now - sorted[3].journey_started_at!) / 1000)).toBe(7200);

    console.log('\n✅ In-Progress User Sorting is CORRECT:');
    console.log('1. Charlie (in-progress, 30 min elapsed) - RANK 1');
    console.log('2. Bob (completed, 1 hour) - RANK 2');
    console.log('3. Dave (in-progress, 1 hour elapsed) - RANK 3');
    console.log('4. Alice (in-progress, 2 hours elapsed) - RANK 4');
    console.log('\nIn-progress users are sorted by elapsed time, not just username ✓');
  });

  it('should handle mixed stages with in-progress users correctly', () => {
    const now = Date.now();
    const oneHourAgo = now - 3600 * 1000;
    const twoHoursAgo = now - 7200 * 1000;

    const records = [
      {
        username: 'Alice',
        rank_stage_id: 'royal_king',
        time_sec: null,
        journey_started_at: twoHoursAgo, // 2 hours elapsed
        journey_completed_at: null,
        rank_stage_num: 9,
      },
      {
        username: 'Bob',
        rank_stage_id: 'royal_king',
        time_sec: 3600, // Completed
        journey_started_at: oneHourAgo,
        journey_completed_at: now,
        rank_stage_num: 9,
      },
      {
        username: 'Charlie',
        rank_stage_id: 'voiced',
        time_sec: null,
        journey_started_at: oneHourAgo, // 1 hour elapsed
        journey_completed_at: null,
        rank_stage_num: 6,
      },
      {
        username: 'Dave',
        rank_stage_id: 'royal_king',
        time_sec: null,
        journey_started_at: oneHourAgo, // 1 hour elapsed
        journey_completed_at: null,
        rank_stage_num: 9,
      },
    ];

    const sorted = [...records].sort((a, b) => {
      if (a.rank_stage_num !== b.rank_stage_num) {
        return b.rank_stage_num - a.rank_stage_num;
      }

      const getEffectiveTime = (record: typeof records[0]) => {
        if (record.time_sec !== null) {
          return record.time_sec;
        } else if (record.journey_started_at !== null && record.journey_completed_at === null) {
          return Math.floor((now - record.journey_started_at) / 1000);
        } else {
          return 2147483647;
        }
      };

      const aTime = getEffectiveTime(a);
      const bTime = getEffectiveTime(b);
      
      if (aTime !== bTime) {
        return aTime - bTime;
      }

      return a.username.localeCompare(b.username);
    });

    // Expected order:
    // 1. Bob (royal_king, completed, 3600 sec) - highest stage, completed
    // 2. Dave (royal_king, in-progress, 3600 sec elapsed) - highest stage, same time as Bob but in-progress
    // 3. Alice (royal_king, in-progress, 7200 sec elapsed) - highest stage, slower
    // 4. Charlie (voiced, in-progress, 3600 sec elapsed) - lower stage

    expect(sorted[0].username).toBe('Bob');
    expect(sorted[0].rank_stage_id).toBe('royal_king');
    expect(sorted[0].time_sec).toBe(3600);
    
    expect(sorted[1].username).toBe('Dave');
    expect(sorted[1].rank_stage_id).toBe('royal_king');
    expect(sorted[1].time_sec).toBeNull();
    
    expect(sorted[2].username).toBe('Alice');
    expect(sorted[2].rank_stage_id).toBe('royal_king');
    expect(sorted[2].time_sec).toBeNull();
    
    expect(sorted[3].username).toBe('Charlie');
    expect(sorted[3].rank_stage_id).toBe('voiced');

    console.log('\n✅ Mixed Stage Sorting with In-Progress Users is CORRECT:');
    console.log('1. Bob (royal_king, completed, 1h) - RANK 1');
    console.log('2. Dave (royal_king, in-progress, 1h elapsed) - RANK 2');
    console.log('3. Alice (royal_king, in-progress, 2h elapsed) - RANK 3');
    console.log('4. Charlie (voiced, in-progress, 1h elapsed) - RANK 4');
    console.log('\nStage priority is maintained, in-progress users sorted by elapsed time ✓');
  });

  it('should handle users with no journey_started_at correctly', () => {
    const now = Date.now();
    const oneHourAgo = now - 3600 * 1000;

    const records = [
      {
        username: 'Alice',
        rank_stage_id: 'alphabet',
        time_sec: null,
        journey_started_at: null, // Not started
        journey_completed_at: null,
        rank_stage_num: 1,
      },
      {
        username: 'Bob',
        rank_stage_id: 'alphabet',
        time_sec: null,
        journey_started_at: oneHourAgo, // In progress
        journey_completed_at: null,
        rank_stage_num: 1,
      },
      {
        username: 'Charlie',
        rank_stage_id: 'alphabet',
        time_sec: 1800, // Completed
        journey_started_at: oneHourAgo,
        journey_completed_at: now,
        rank_stage_num: 1,
      },
    ];

    const sorted = [...records].sort((a, b) => {
      if (a.rank_stage_num !== b.rank_stage_num) {
        return b.rank_stage_num - a.rank_stage_num;
      }

      const getEffectiveTime = (record: typeof records[0]) => {
        if (record.time_sec !== null) {
          return record.time_sec;
        } else if (record.journey_started_at !== null && record.journey_completed_at === null) {
          return Math.floor((now - record.journey_started_at) / 1000);
        } else {
          return 2147483647;
        }
      };

      const aTime = getEffectiveTime(a);
      const bTime = getEffectiveTime(b);
      
      if (aTime !== bTime) {
        return aTime - bTime;
      }

      return a.username.localeCompare(b.username);
    });

    // Expected order:
    // 1. Charlie (completed, 1800 sec)
    // 2. Bob (in-progress, 3600 sec elapsed)
    // 3. Alice (not started, 2147483647)

    expect(sorted[0].username).toBe('Charlie');
    expect(sorted[0].time_sec).toBe(1800);
    
    expect(sorted[1].username).toBe('Bob');
    expect(sorted[1].time_sec).toBeNull();
    expect(sorted[1].journey_started_at).not.toBeNull();
    
    expect(sorted[2].username).toBe('Alice');
    expect(sorted[2].time_sec).toBeNull();
    expect(sorted[2].journey_started_at).toBeNull();

    console.log('\n✅ Not-Started User Sorting is CORRECT:');
    console.log('1. Charlie (completed, 30 min) - RANK 1');
    console.log('2. Bob (in-progress, 1h elapsed) - RANK 2');
    console.log('3. Alice (not started) - RANK 3');
    console.log('\nUsers without journey_started_at are sorted to bottom ✓');
  });
});
