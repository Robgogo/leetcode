const isValid = (s) => {
  const stack = [];

  const closingBracket = [")", "]", "}"];
  const openingBracket = ["(", "[", "{"];

  for (const char of s) {
    if (openingBracket.includes(char)) {
      stack.push(char);
    }

    if (closingBracket.includes(char)) {
      const opening = stack.pop();
      const indexOfOpening = openingBracket.indexOf(opening);
      const indexOfChar = closingBracket.indexOf(char);
      if (indexOfOpening !== indexOfChar) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const isValid2 = (s) => {
  const stack = [];

  const bracketPairs = { ")": "(", "]": "[", "}": "{" };

  for (const char of s) {
    if (char in bracketPairs) {
      const opening = stack.pop();
      if (opening !== bracketPairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid2("({})"));

console.log(isValid("({}})"));
