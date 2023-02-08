/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//Iterative:
// Time: O(n)
// Space: O(1)
const getNodeValue = (head, index) => {
  // todo
  let current = head;
  let idxCount = 0;

  while (current !== null) {
    if (idxCount === index) return current.val;
    idxCount++;
    current = current.next;
  }

  return null;
};

// Recursive
// Time: O(n)
// Space: O(n)
// const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index - 1)
//   }
