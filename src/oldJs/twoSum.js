function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const indexOfSecond = nums.indexOf(target - first);
    if (indexOfSecond !== -1 && indexOfSecond !== i) {
      return [i, indexOfSecond];
    }
  }
}

const twoSum2 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let current = nums[left] + nums[right];

    if (current < target) {
      left++;
    } else if (current > target) {
      right--;
    } else {
      return [left, right];
    }
  }
};

export { twoSum, twoSum2 };

console.log(twoSum2([2, 7, 11, 15], 9));
