/*

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

*/

const uncompress = (s) => {
  // todo
  // Takes a string as argument
  // The string consisted of numbers and letters in which tells
  // the amount of times that the letter should be repeated

  const output = [];

  let firstIndex = 0;
  let secondIndex = firstIndex + 1;

  while (firstIndex < s.length && secondIndex < s.length) {
    let charInSearch = s.charAt(secondIndex);
    if (charInSearch.match(/[a-z]/i)) {
      let numSubStr = parseInt(s.substring(firstIndex, secondIndex));
      output.push(charInSearch.repeat(numSubStr));
      firstIndex = secondIndex + 1;
    }
    secondIndex++;
  }
  return output.join('');
};

uncompress('2c3a1t'); // -> 'ccaaat'
uncompress('4s2b'); // -> 'ssssbb'
uncompress('2p1o5p'); // -> 'ppoppppp'
uncompress('3n12e2z'); // -> 'nnneeeeeeeeeeeezz'
uncompress('127y');
