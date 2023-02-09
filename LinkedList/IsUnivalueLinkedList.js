/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative:
// Time: O(n)
// Space: O(1)
const isUnivalueList = (head) => {
  // todo
  let currHead = head.next;
  let prevVal = head.val;

  while (currHead !== null) {
    if (currHead.val !== prevVal) return false;
    prevVal = currHead.val;
    currHead = currHead.next;
  }

  return true;
};

// Recursive:
// Time: O(n)
// Space: O(n)

// const isUnivalueList = (head, prevVal = null) => {
//   if(head === null) return true;
//   if(head.val !== prevVal && prevVal !== null) return false;
//   return isUnivalueList(head.next, head.val);
// }

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false
