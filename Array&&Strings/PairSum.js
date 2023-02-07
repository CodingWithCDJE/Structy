/*
Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
  // todo
  let firstPointer = 0;
  let secondPointer = firstPointer + 1;

  while (firstPointer < numbers.length && secondPointer < numbers.length) {
    let total = numbers[firstPointer] + numbers[secondPointer];
    if (total === targetSum) return [firstPointer, secondPointer];
    secondPointer++;
    if (secondPointer == numbers.length) {
      firstPointer++;
      secondPointer = firstPointer + 1;
    }
  }
};
