const isAnagram = (s, t) => {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

const groupAnagram = (strs) => {
  const map = {};

  for (const str of strs) {
    const hashString = Array(26).fill(0);
    for (const c of str) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      hashString[index] += 1;
    }
    let key = hashString.join(",");
    if (map[key]) {
      const existing = map[key];
      existing.push(str);
      map[key] = existing;
    } else {
      map[key] = [str];
    }
  }

  return Object.values(map);
};

console.log(groupAnagram(["bdddddddddd", "bbbbbbbbbbc"]));
