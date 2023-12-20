const characterReplacement = (s, k) => {
  const hashMap = new Map();
  let maxFrequency = 0;
  let l = 0;
  let longestSequence = 0;

  for (let r = 0; r < s.length; r++) {
    hashMap[s[r]] = (hashMap[s[r]] || 0) + 1;

    maxFrequency = Math.max(maxFrequency, hashMap[s[r]]);

    if (r - l + 1 - maxFrequency > k) {
      hashMap[s[l]] = hashMap[s[l]] - 1;
      l++;
    }

    longestSequence = Math.max(longestSequence, r - l + 1);
  }
  return longestSequence;
};

const s = "ABBB";
console.log(characterReplacement(s, 2));
