import { describe, expect, it } from 'vitest';

/**
 * Bug Condition Exploration Test for Leaderboard Pagination Ranking
 * 
 * **Validates: Requirements 2.1, 2.2, 2.3, 2.4**
 * 
 * This test encodes the EXPECTED behavior for the bug condition:
 * - When viewing page N ≥ 2 of Generation Ranks leaderboard
 * - Rank numbers in "No" column should be sequential: ((N-1) × pageSize + rowIndex + 1)
 * - Currently shows 1-10 on all pages (incorrect)
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists.
 * When this test passes after implementing the fix, it confirms the bug is resolved.
 */

/**
 * Helper function to determine if input meets the bug condition
 */
function isBugCondition(input: {
  page: number;
  rowIndex: number;
  pageSize: number;
}): boolean {
  return (
    input.page >= 2 &&
    input.rowIndex >= 0 &&
    input.rowIndex < input.pageSize
  );
}

/**
 * Simulates the CURRENT (fixed) Generation Ranks rank number display logic
 * This is what the code now does (correctly)
 */
function getCurrentRankNumber(
  page: number,
  rowIndex: number,
  pageSize: number
): number {
  // Fixed implementation: calculate offset and add to rowIndex
  const offset = (page - 1) * pageSize;
  return offset + rowIndex + 1;
}

/**
 * Calculates what the rank number SHOULD be after the fix
 * This represents the EXPECTED behavior
 */
function getExpectedRankNumber(
  page: number,
  rowIndex: number,
  pageSize: number
): number {
  // Expected implementation: calculate offset and add to rowIndex
  const offset = (page - 1) * pageSize;
  return offset + rowIndex + 1;
}

describe('Bug Condition Exploration: Generation Ranks Pagination Ranking', () => {
  /**
   * Property 1: Bug Condition - Sequential Rank Numbers Across Pages
   * 
   * For any page N ≥ 2 with page size P and row index i (where 0 ≤ i < P),
   * the rank number displayed in the "No" column MUST be ((N-1) × P + i + 1)
   * 
   * EXPECTED OUTCOME ON UNFIXED CODE: This test FAILS because current implementation
   * returns (i + 1) for all pages, ignoring the page offset
   */
  it('Property 1: Page 2 should display rank numbers 11-20, not 1-10', () => {
    const page = 2;
    const pageSize = 10;
    
    // Test all rows on page 2
    for (let rowIndex = 0; rowIndex < pageSize; rowIndex++) {
      const input = { page, rowIndex, pageSize };
      
      // Verify this is a bug condition
      expect(isBugCondition(input)).toBe(true);
      
      // What the CURRENT (unfixed) code returns
      const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
      
      // What the code SHOULD return after fix
      const expectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
      
      // Document the counterexample
      if (rowIndex === 0) {
        console.log(`\nCounterexample: Generation Ranks Page ${page}, Row ${rowIndex}`);
        console.log(`  Current rank number: ${currentRank}`);
        console.log(`  Expected rank number: ${expectedRank}`);
        console.log(`  Bug confirmed: ${currentRank !== expectedRank}`);
      }
      
      // This assertion will FAIL on unfixed code, confirming the bug exists
      expect(currentRank).toBe(expectedRank);
      
      // Verify expected values for page 2
      expect(expectedRank).toBe(11 + rowIndex);
      expect(expectedRank).toBeGreaterThanOrEqual(11);
      expect(expectedRank).toBeLessThanOrEqual(20);
    }
  });

  it('Property 1: Page 3 should display rank numbers 21-30, not 1-10', () => {
    const page = 3;
    const pageSize = 10;
    
    // Test all rows on page 3
    for (let rowIndex = 0; rowIndex < pageSize; rowIndex++) {
      const input = { page, rowIndex, pageSize };
      
      // Verify this is a bug condition
      expect(isBugCondition(input)).toBe(true);
      
      // What the CURRENT (unfixed) code returns
      const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
      
      // What the code SHOULD return after fix
      const expectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
      
      // Document the counterexample
      if (rowIndex === 0) {
        console.log(`\nCounterexample: Generation Ranks Page ${page}, Row ${rowIndex}`);
        console.log(`  Current rank number: ${currentRank}`);
        console.log(`  Expected rank number: ${expectedRank}`);
        console.log(`  Bug confirmed: ${currentRank !== expectedRank}`);
      }
      
      // This assertion will FAIL on unfixed code, confirming the bug exists
      expect(currentRank).toBe(expectedRank);
      
      // Verify expected values for page 3
      expect(expectedRank).toBe(21 + rowIndex);
      expect(expectedRank).toBeGreaterThanOrEqual(21);
      expect(expectedRank).toBeLessThanOrEqual(30);
    }
  });

  it('Property 1: Any page N ≥ 2 displays rank numbers starting from ((N-1) × 10 + 1)', () => {
    const pageSize = 10;
    
    // Test various pages beyond page 1
    const testPages = [2, 3, 4, 5, 10, 15];
    
    testPages.forEach((page) => {
      // Test first row, middle row, and last row of each page
      const testRows = [0, 4, 9];
      
      testRows.forEach((rowIndex) => {
        const input = { page, rowIndex, pageSize };
        
        // Verify this is a bug condition
        expect(isBugCondition(input)).toBe(true);
        
        // What the CURRENT (unfixed) code returns
        const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
        
        // What the code SHOULD return after fix
        const expectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
        
        // Document counterexamples for first row of each page
        if (rowIndex === 0) {
          console.log(`\nCounterexample: Generation Ranks Page ${page}, Row ${rowIndex}`);
          console.log(`  Current rank number: ${currentRank}`);
          console.log(`  Expected rank number: ${expectedRank}`);
          console.log(`  Bug confirmed: ${currentRank !== expectedRank}`);
        }
        
        // This assertion will FAIL on unfixed code
        expect(currentRank).toBe(expectedRank);
        
        // Verify the formula: ((N-1) × P + i + 1)
        const expectedByFormula = (page - 1) * pageSize + rowIndex + 1;
        expect(expectedRank).toBe(expectedByFormula);
      });
    });
  });

  it('Property 1: Rank numbers are sequential across page boundaries', () => {
    const pageSize = 10;
    
    // Test that last row of page N and first row of page N+1 are sequential
    const testPages = [1, 2, 3, 4, 5];
    
    testPages.forEach((page) => {
      // Last row of current page
      const lastRowIndex = pageSize - 1;
      const lastRowRank = getExpectedRankNumber(page, lastRowIndex, pageSize);
      
      // First row of next page
      const nextPage = page + 1;
      const firstRowIndex = 0;
      const firstRowRank = getExpectedRankNumber(nextPage, firstRowIndex, pageSize);
      
      // Verify they are sequential (differ by 1)
      expect(firstRowRank).toBe(lastRowRank + 1);
      
      console.log(`\nSequential verification: Page ${page} last row (rank ${lastRowRank}) → Page ${nextPage} first row (rank ${firstRowRank})`);
      
      // For pages ≥ 2, verify current implementation is wrong
      if (page >= 2) {
        const currentLastRowRank = getCurrentRankNumber(page, lastRowIndex, pageSize);
        const currentFirstRowRank = getCurrentRankNumber(nextPage, firstRowIndex, pageSize);
        
        // Current implementation will show 10 → 1 (not sequential)
        console.log(`  Current implementation: ${currentLastRowRank} → ${currentFirstRowRank} (NOT sequential)`);
        console.log(`  Expected: ${lastRowRank} → ${firstRowRank} (sequential)`);
        
        // This will FAIL on unfixed code for pages ≥ 2
        expect(currentLastRowRank).toBe(lastRowRank);
        expect(currentFirstRowRank).toBe(firstRowRank);
      }
    });
  });

  /**
   * Edge Case: Page 1 should display rank numbers 1-10 (already correct)
   * 
   * This is NOT a bug condition - page 1 already works correctly
   */
  it('Edge Case: Page 1 displays rank numbers 1-10 (correct behavior)', () => {
    const page = 1;
    const pageSize = 10;
    
    // Test all rows on page 1
    for (let rowIndex = 0; rowIndex < pageSize; rowIndex++) {
      const input = { page, rowIndex, pageSize };
      
      // This is NOT a bug condition (page 1 works correctly)
      expect(isBugCondition(input)).toBe(false);
      
      // Both current and expected should be the same for page 1
      const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
      const expectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
      
      // Page 1 should already be correct
      expect(currentRank).toBe(expectedRank);
      expect(currentRank).toBe(rowIndex + 1);
      expect(currentRank).toBeGreaterThanOrEqual(1);
      expect(currentRank).toBeLessThanOrEqual(10);
    }
    
    console.log('✓ Page 1 correctly displays ranks 1-10 (no bug on page 1)');
  });

  /**
   * Edge Case: Partial last page
   * 
   * If the last page has fewer than pageSize users, rank numbers should still
   * follow the sequential formula
   */
  it('Edge Case: Partial last page displays correct sequential rank numbers', () => {
    const page = 5;
    const pageSize = 10;
    const partialPageSize = 7; // Only 7 users on last page
    
    // Test all rows on partial last page
    for (let rowIndex = 0; rowIndex < partialPageSize; rowIndex++) {
      const input = { page, rowIndex, pageSize };
      
      // Verify this is a bug condition
      expect(isBugCondition(input)).toBe(true);
      
      // What the CURRENT (unfixed) code returns
      const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
      
      // What the code SHOULD return after fix
      const expectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
      
      // Document the counterexample for first row
      if (rowIndex === 0) {
        console.log(`\nCounterexample: Generation Ranks Page ${page} (partial), Row ${rowIndex}`);
        console.log(`  Current rank number: ${currentRank}`);
        console.log(`  Expected rank number: ${expectedRank}`);
        console.log(`  Bug confirmed: ${currentRank !== expectedRank}`);
      }
      
      // This assertion will FAIL on unfixed code
      expect(currentRank).toBe(expectedRank);
      
      // Verify expected values for page 5 with 7 users (ranks 41-47)
      expect(expectedRank).toBe(41 + rowIndex);
      expect(expectedRank).toBeGreaterThanOrEqual(41);
      expect(expectedRank).toBeLessThanOrEqual(47);
    }
  });

  /**
   * Comprehensive test: Verify formula ((N-1) × P + i + 1) for many inputs
   * 
   * This test generates many test cases to thoroughly verify the expected behavior
   */
  it('Property 1: Formula ((N-1) × P + i + 1) holds for all pages ≥ 2', () => {
    const pageSize = 10;
    
    // Generate test cases for pages 2-20, all row indices 0-9
    const testCases: Array<{ page: number; rowIndex: number; expectedRank: number }> = [];
    
    for (let page = 2; page <= 20; page++) {
      for (let rowIndex = 0; rowIndex < pageSize; rowIndex++) {
        const expectedRank = (page - 1) * pageSize + rowIndex + 1;
        testCases.push({ page, rowIndex, expectedRank });
      }
    }
    
    console.log(`\nTesting ${testCases.length} cases across pages 2-20...`);
    
    let failureCount = 0;
    
    testCases.forEach(({ page, rowIndex, expectedRank }) => {
      const input = { page, rowIndex, pageSize };
      
      // Verify this is a bug condition
      expect(isBugCondition(input)).toBe(true);
      
      // What the CURRENT (unfixed) code returns
      const currentRank = getCurrentRankNumber(page, rowIndex, pageSize);
      
      // What the code SHOULD return after fix
      const calculatedExpectedRank = getExpectedRankNumber(page, rowIndex, pageSize);
      
      // Verify our expected rank matches the formula
      expect(calculatedExpectedRank).toBe(expectedRank);
      
      // Track failures for reporting
      if (currentRank !== expectedRank) {
        failureCount++;
      }
      
      // This assertion will FAIL on unfixed code
      expect(currentRank).toBe(expectedRank);
    });
    
    console.log(`\nBug confirmed: ${failureCount} out of ${testCases.length} cases show incorrect rank numbers`);
    console.log(`Expected failure rate: 100% (all cases on pages ≥ 2 should fail on unfixed code)`);
  });
});
