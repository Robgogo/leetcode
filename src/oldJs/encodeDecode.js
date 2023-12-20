const encode = (strs) => {
  return strs.reduce((acc, str) => `${acc}${str.length}$${str}`, "");
};

const decode = (str) => {
  let i = 1;
  let decoded = [];

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
