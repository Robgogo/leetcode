const minWindow = (s, t) => {
  let currentMinimumLength = s.length;
  let currentMinimumString = "";
  let l = 0;
  let r = 0;

  const thashMap = {};
  for (const char of t) {
    thashMap[char] = (thashMap[char] || 0) + 1;
  }

  while (l <= r && r < s.length) {
    const tempString = s.substr(l, r + 1);
    if (tempString.length >= t.length && includesAll(tempString, thashMap)) {
      if (tempString.length < currentMinimumLength) {
        currentMinimumString = tempString;
        currentMinimumLength = tempString.length;
      }
      l++;
    } else {
      r++;
    }
  }

  return currentMinimumString;
};

const includesAll = (tempString, { ...thashMap }) => {
  for (const char of tempString) {
    if (thashMap[char] && thashMap[char] > 0) {
      thashMap[char] -= 1;
    }
  }

  for (const val of Object.values(thashMap)) {
    if (val > 0) {
      return false;
    }
  }
  return true;
};

/**
 * 
 * const minWindow = (s, t) => {
  let currentMinimumLength = s.length;
  let currentMinimumString = "";
  let l = 0;
  let r = 0;

  const thashMap = {};
  const temphashMap = {};
  for (const char of t) {
    thashMap[char] = (thashMap[char] || 0) + 1;
  }

  while (r < s.length) {
    temphashMap[s[r]] = (temphashMap[s[r]] || 0) + 1;
    r++;
    while (includesAll(temphashMap, thashMap) && l <= r) {
      if (r - l < currentMinimumLength) {
        currentMinimumString = s.slice(l, r);
      }
      temphashMap[s[l]] -= 1;
      l++;
    }
  }

  return currentMinimumString;
};

const includesAll = (temphashMap, thashMap) => {
  for (const [char, count] of Object.entries(thashMap)) {
    if (!temphashMap[char] || temphashMap[char] < count) {
      return false;
    }
  }
  return true;
};
 * 
 */

// const minWindow2 = (s, t) => {
//   const sHashMap = {};
//   const tHashMap = {};
//   let l = 0;
//   let r = 0;
//   let currentMinimumLength = Infinity;
//   let currentMinimumString = "";

//   for (const char of t) {
//     tHashMap[char] = (tHashMap[char] || 0) + 1;
//   }

//   const includesAll = () => {
//     for (const [char, count] of Object.entries(tHashMap)) {
//       if (!sHashMap[char] || sHashMap[char] < count) {
//         return false;
//       }
//     }
//     return true;
//   };

//   while (r < s.length) {
//     const char = s[r];
//     sHashMap[char] = (sHashMap[char] || 0) + 1;
//     r++;

//     while (includesAll() && l <= r) {
//       const windowLength = r - l;
//       if (windowLength < currentMinimumLength) {
//         currentMinimumString = s.slice(l, r);
//         currentMinimumLength = windowLength;
//       }

//       const char = s[l];
//       sHashMap[char] -= 1;
//       l++;
//     }
//   }

//   return currentMinimumString;
// };

const s = "acbbaca";
const t = "aba";

console.log(minWindow2(s, t));
