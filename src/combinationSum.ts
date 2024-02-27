/**
 * 39. Combination Sum
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  const backtrack = (combination: number[], idx: number, sum: number) => {
    if (sum > target || idx === candidates.length) return;

    if (sum === target) {
      result.push([...combination]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, i, sum + candidates[i]);
      combination.pop();
    }
  };

  backtrack([], 0, 0);

  return result;
};

/**
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 */

const candidates = [2, 3, 6, 7];
const target = 7;

const result = combinationSum(candidates, target);

console.log(result);
