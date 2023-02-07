/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

*/

const compress = (s) => {
  // todo

  const arrHolder = [];
  let firstIndex = 0;
  let secondIndex = firstIndex + 1;
  while (firstIndex <= s.length && secondIndex <= s.length) {
    if (s.charAt(secondIndex) !== s.charAt(firstIndex)) {
      let num = secondIndex - firstIndex;
      arrHolder.push(`${num == 1 ? '' : num}${s.charAt(firstIndex)}`);
      firstIndex = secondIndex;
    }
    secondIndex++;
  }
  return arrHolder.join('');
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
