/**
 * 659 · Encode and Decode Strings
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * Please implement encode and decode
 */

const encode = (strs: string[]): string => {
  return strs.reduce((acc, str) => `${acc}${str.length}$${str}`, "");
};

const decode = (str: string): string[] => {
  let i = 1;
  let decoded: string[] = [];

  while (i < str.length) {
    if (str[i] === "$" && !isNaN(Number(str[i - 1]))) {
      let wordLength = Number(str[i - 1]);
      decoded.push(str.slice(i + 1, i + wordLength + 1));
    }
    i++;
  }

  return decoded;
};

// console.log(encode(["lint", "code", "love", "you"]));
console.log(decode(encode(["lint", "code", "love", "you"])));
// console.log(encode(["we", "say", ":", "yes"]));
console.log(decode(encode(["we", "say", "$", "yes"])));
