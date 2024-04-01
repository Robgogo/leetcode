/**
 * 125. Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

const isPalindrome = (s: string) => {
  const strippedString = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  let i = 0;
  let j = strippedString.length - 1;

  while (i <= j) {
    if (strippedString[i] !== strippedString[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
