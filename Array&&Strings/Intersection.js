/*
  Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

// Time complexity: O(n+m)
// Space complexity: O(n)

const intersection = (a, b) => {
  // todo
  const setA = new Set(a);

  const intersectedArr = [];

  for (let num of b) {
    if (setA.has(num)) intersectedArr.push(num);
  }

  return intersectedArr;
};

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2,6]
intersection([2, 4, 6], [4, 2]); // -> [2,4]
intersection([4, 2, 1], [1, 2, 4, 6]); // -> [1,2,4]
intersection([0, 1, 2], [10, 11]); // -> []
