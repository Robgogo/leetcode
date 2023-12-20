const isPalindrome = (s) => {
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
