/* 
Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

const pairProduct = (numbers, targetProduct) => {
  // todo
  // Shown approach
  //   const numsObj = {};
  //   for(let i = 0; i<numbers.length; i++){
  //     let num = numbers[i];
  //     let remainder = targetProduct / num;
  //     if(remainder in numsObj) return [i, numsObj[remainder]];

  //     numsObj[num] = i;
  //   }

  // My APPROACH (Using two pointers)
  // Lowers space complexity to O(1), instead of O(n)
  // Time complexity remains the same O(n)
  let firstPointer = 0;
  let secondPointer = firstPointer + 1;
  while (firstPointer < numbers.length && secondPointer < numbers.length) {
    let product = numbers[firstPointer] * numbers[secondPointer];
    if (product === targetProduct) return [firstPointer, secondPointer];
    secondPointer++;
    if (secondPointer == numbers.length) {
      firstPointer++;
      secondPointer = firstPointer + 1;
    }
  }
};

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
