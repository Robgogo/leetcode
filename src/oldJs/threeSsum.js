const threeSum = (nums) => {
  let sorted = nums.sort((a, b) => a - b);
  let res = [];

  console.log({ sorted });

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
nums = [0, 0, 0, 0];
console.log(threeSum(nums));
