/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const indexOfSecond = nums.indexOf(target - first);
    if (indexOfSecond !== -1 && indexOfSecond !== i) {
      return [i, indexOfSecond];
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
