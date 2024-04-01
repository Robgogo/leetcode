/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

const groupAnagrams = (strs: string[]): string[][] => {
  const map: { [key: string]: string[] } = {};

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
