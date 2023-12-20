const productExceptSelf = (nums) => {
  let result = [];
  let front = [];
  let back = [];

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

const productExceptSelfWithReduce = (nums) => {
  const answer = Array(nums.length).fill(1);

  const accumulator = (acc, cur, i) => {
    answer[i] *= acc;
    return acc * cur;
  };

  nums.reduce(accumulator, 1);
  nums.reduceRight(accumulator, 1);

  return answer;
};

console.log(productExceptSelfWithReduce([-1, 1, 0, -3, 3]));
