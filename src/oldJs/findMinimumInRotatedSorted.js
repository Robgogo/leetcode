const findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let m = Math.ceil((l + r) / 2);
  let currentMin = nums[l];
  while (l <= r) {
    if (nums[l] < nums[m]) {
      currentMin = Math.min(currentMin, nums[l], nums[m]);
      l = m + 1;
    } else {
      currentMin = Math.min(currentMin, nums[r], nums[m]);
      r = m - 1;
    }
    m = Math.ceil((l + r) / 2);
  }
  return nums.index0f(currentMin);
};

const nums = [3, 1, 2];

console.log(findMin(nums));
