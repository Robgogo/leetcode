// const longestConsecutive = (nums) => {
const sorted = nums.sort((a, b) => a - b); //nlogn
let counter = 1;
for (let i = 0; i < sorted.length - 1; i++) {
  if (sorted[i + 1] - sorted[i] === 1) {
    counter++;
  } else if (sorted[i + 1] - sorted[i] === 0) {
    continue;
  } else {
    counter = 1;
  }
}
return counter;
// };

// const longestConsecutive = (nums) => {
const set = new Set();

let result = 0;

for (let i = 0; i < nums.length; i++) {
  set.add(nums[i]);
}

for (let i = 0; i < nums.length; i++) {
  if (!set.has(nums[i] - 1)) {
    let num = nums[i];
    while (set.has(num)) num++;
    result = Math.max(result, num - nums[i]);
  }
}
return result;
// };

const longestConsecutive = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  return sorted.reduce((acc, curr, i) => {
    if (sorted[i + 1] && sorted[i + 1] - curr === 1) {
      return acc + 1;
    } else if (nums[i + 1] && nums[i + 1] - curr === 0) {
      return acc;
    } else {
      return Math.max(1, acc);
    }
  }, 0);
};

console.log(longestConsecutive([100, 4, 200, 0, 3, 2]));
console.log(longestConsecutive([0, 1, 1, 1, 1, 2, 3]));
console.log(longestConsecutive([]));
