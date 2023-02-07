/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

*/
const mostFrequentChar = (s) => {
  // todo
  const countObj = {};

  for (let char of s) {
    char in countObj ? countObj[char]++ : (countObj[char] = 1);
  }

  let count = 0;
  let charKey;

  for (let [key, value] of Object.entries(countObj)) {
    if (value > count) {
      count = value;
      charKey = key;
    }
  }
  return charKey;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar('riverbed'); // -> 'r'
