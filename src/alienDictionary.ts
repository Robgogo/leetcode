/**
 * 953. Verifying an Alien Dictionary
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
 */

const isAlienSorted = (words: string[], order: string): boolean => {
  const orderDictionary = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    orderDictionary.set(order[i], i);
  }

  const compareStrings = (str1: string, str2: string): boolean => {
    let idx = 0;

    while (idx < str1.length && idx < str2.length) {
      const str1Order = orderDictionary.get(str1[idx])!;
      const str2Order = orderDictionary.get(str2[idx])!;
      idx++;

      console.log({ str1Order, str2Order, idx });
      if (str1Order > str2Order) {
        return false;
      } else if (str1Order < str2Order) {
        return true;
      }
    }
    if (idx < str1.length) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < words.length - 1; i++) {
    if (!compareStrings(words[i], words[i + 1])) {
      return false;
    }
  }

  return true;
};

/**
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
 */

const inputWords = ["apple", "app"];
const order = "abcdefghijklmnopqrstuvwxyz";

console.log(isAlienSorted(inputWords, order));
