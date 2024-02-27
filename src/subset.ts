/**
 * 78. Subsets
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const subset: number[] = [];
  const dfs = (i: number) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  return result;
};

/**
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

const nums = [1, 2, 3];

const res = subsets(nums);

console.log(res);
