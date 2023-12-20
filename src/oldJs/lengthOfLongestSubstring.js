const lengthOfLongestSubstring = (s) => {
  let result = 0;
  let l = 0;
  let r = 0;

  if (s.length < 2) {
    return s.length;
  }
  const visited = new Set();

  let counter = 0;

  while (r < s.length) {
    if (!visited.has(s[r])) {
      visited.add(s[r]);
      counter++;
      r++;
    } else {
      l++;
      r = l;
      counter = 0;
      visited.clear();
    }
    result = Math.max(result, counter);
  }
  return result;
};

const s = "pwwkew";

console.log(lengthOfLongestSubstring(s));
