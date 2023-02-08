/* 
Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
*/
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// Iterative
// Time: O(n)
// Space: O(1)
const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

// Recursive:
// Time: O(n)
// Space: O(n)
// const linkedListFind = (head, target) => {
//   if(head === null) return false;
//   if(head.val === target) return true;
//   return linkedListFind(head.next, target);
// }
