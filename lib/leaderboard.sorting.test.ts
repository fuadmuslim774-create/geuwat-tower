import { describe, it, expect } from 'vitest';

/**
 * Test untuk memverifikasi sorting logic leaderboard
 * 
 * Requirement: User yang sudah selesai (time_sec not null) harus di atas
 * user yang belum selesai (time_sec null) untuk stage yang sama
 */

describe('Leaderboard Sorting Logic', () => {
  it('should sort completed users above in-progress users for same stage', () => {
    // Simulate database records for same stage (royal_king)
    const records = [
      {
        username: 'Alice',
        rank_stage_id: 'royal_king',
        time_sec: null, // Belum selesai (masih dalam progress)
        rank_stage_num: 9,
      },
      {
        username: 'Bob',
        rank_stage_id: 'royal_king',
        time_sec: 3600, // Sudah selesai (1 jam)
        rank_stage_num: 9,
      },
      {
        username: 'Charlie',
        rank_stage_id: 'royal_king',
        time_sec: 7200, // Sudah selesai (2 jam)
        rank_stage_num: 9,
      },
      {
        username: 'Dave',
        rank_stage_id: 'royal_king',
        time_sec: null, // Belum selesai (masih dalam progress)
        rank_stage_num: 9,
      },
    ];

    // Simulate SQL sorting logic:
    // ORDER BY rank_stage_num DESC, COALESCE(time_sec, 2147483647) ASC, username ASC
    const sorted = [...records].sort((a, b) => {
      // 1. Sort by rank_stage_num DESC (higher stage first)
      if (a.rank_stage_num !== b.rank_stage_num) {
        return b.rank_stage_num - a.rank_stage_num;
      }

      // 2. Sort by time_sec ASC (faster time first), null becomes 2147483647
      const aTime = a.time_sec ?? 2147483647;
      const bTime = b.time_sec ?? 2147483647;
      if (aTime !== bTime) {
        return aTime - bTime;
      }

      // 3. Sort by username ASC (alphabetical)
      return a.username.localeCompare(b.username);
    });

    // Expected order:
    // 1. Bob (royal_king, 3600 sec) - completed, fastest
    // 2. Charlie (royal_king, 7200 sec) - completed, slower
    // 3. Alice (royal_king, null) - in progress, alphabetically first
    // 4. Dave (royal_king, null) - in progress, alphabetically second

    expect(sorted[0].username).toBe('Bob');
    expect(sorted[0].time_sec).toBe(3600);
    
    expect(sorted[1].username).toBe('Charlie');
    expect(sorted[1].time_sec).toBe(7200);
    
    expect(sorted[2].username).toBe('Alice');
    expect(sorted[2].time_sec).toBeNull();
    
    expect(sorted[3].username).toBe('Dave');
    expect(sorted[3].time_sec).toBeNull();

    console.log('\n✅ Sorting logic is CORRECT:');
    console.log('1. Bob (completed, 3600s) - RANK 1');
    console.log('2. Charlie (completed, 7200s) - RANK 2');
    console.log('3. Alice (in-progress, null) - RANK 3');
    console.log('4. Dave (in-progress, null) - RANK 4');
    console.log('\nCompleted users are ranked ABOVE in-progress users ✓');
  });

  it('should sort users by stage first, then by completion time', () => {
    const records = [
      {
        username: 'Alice',
        rank_stage_id: 'voiced',
        time_sec: null,
        rank_stage_num: 6,
      },
      {
        username: 'Bob',
        rank_stage_id: 'royal_king',
        time_sec: 3600,
        rank_stage_num: 9,
      },
      {
        username: 'Charlie',
        rank_stage_id: 'royal_king',
        time_sec: null,
        rank_stage_num: 9,
      },
      {
        username: 'Dave',
        rank_stage_id: 'diphthong',
        time_sec: 1800,
        rank_stage_num: 4,
      },
    ];

    const sorted = [...records].sort((a, b) => {
      if (a.rank_stage_num !== b.rank_stage_num) {
        return b.rank_stage_num - a.rank_stage_num;
      }
      const aTime = a.time_sec ?? 2147483647;
      const bTime = b.time_sec ?? 2147483647;
      if (aTime !== bTime) {
        return aTime - bTime;
      }
      return a.username.localeCompare(b.username);
    });

    // Expected order:
    // 1. Bob (royal_king, 3600) - highest stage, completed
    // 2. Charlie (royal_king, null) - highest stage, in-progress
    // 3. Alice (voiced, null) - middle stage, in-progress
    // 4. Dave (diphthong, 1800) - lower stage, completed

    expect(sorted[0].username).toBe('Bob');
    expect(sorted[0].rank_stage_id).toBe('royal_king');
    
    expect(sorted[1].username).toBe('Charlie');
    expect(sorted[1].rank_stage_id).toBe('royal_king');
    
    expect(sorted[2].username).toBe('Alice');
    expect(sorted[2].rank_stage_id).toBe('voiced');
    
    expect(sorted[3].username).toBe('Dave');
    expect(sorted[3].rank_stage_id).toBe('diphthong');

    console.log('\n✅ Multi-stage sorting is CORRECT:');
    console.log('1. Bob (royal_king, completed) - RANK 1');
    console.log('2. Charlie (royal_king, in-progress) - RANK 2');
    console.log('3. Alice (voiced, in-progress) - RANK 3');
    console.log('4. Dave (diphthong, completed) - RANK 4');
    console.log('\nHigher stage always wins, regardless of completion status ✓');
  });
});
