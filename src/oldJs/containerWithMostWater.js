const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left < right) {
    result = Math.max(
      result,
      (right - left) * Math.min(height[left], height[right])
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
