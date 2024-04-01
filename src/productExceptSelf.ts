/**
 * 238. Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

const productExceptSelf = (nums: number[]) => {
  let result: number[] = [];
  let front: number[] = [];
  let back: number[] = [];

  front[0] = 1;

  back[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    front[i] = nums[i - 1] * front[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    back[i] = nums[i + 1] * back[i + 1];
  }

  for (let i = 0; i < front.length; i++) {
    result[i] = front[i] * back[i];
  }

  return result;
};

// const productExceptSelf = (nums) => {
//     return nums.map((_, i) => {
//       return nums.reduce((acc, curr, j) => {
//         return acc * (i === j ? 1 : curr);
//       }, 1);
//     });
//   };

const productExceptSelfWithReduce = (nums: number[]) => {
  const answer = Array(nums.length).fill(1);

  const accumulator = (acc: number, cur: number, i: number) => {
    answer[i] *= acc;
    return acc * cur;
  };

  nums.reduce(accumulator, 1);
  nums.reduceRight(accumulator, 1);

  return answer;
};

console.log(productExceptSelfWithReduce([-1, 1, 0, -3, 3]));
