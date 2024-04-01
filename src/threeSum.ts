/**
 * 15. 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (nums: number[]): number[][] => {
  let sorted = nums.sort((a, b) => a - b);
  let res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && sorted[i] == sorted[i - 1]) continue;
    else {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = sorted[i] + sorted[left] + sorted[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          res.push([sorted[i], sorted[left], sorted[right]]);
          left++;
          while (sorted[left] === sorted[left - 1] && left < right) {
            left++;
          }
        }
      }
    }
  }

  return res;
};
const numsIn = [0, 0, 0, 0];
console.log(threeSum(numsIn));
