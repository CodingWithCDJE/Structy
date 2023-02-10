/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Iterative:
// Time: O(n)
// Space: O(1)

const removeNode = (head, targetVal) => {
  // todo
  // Base case removing from the front
  if (head.val == targetVal) return head.next;
  let currHead = head;
  let prev = null;

  while (currHead !== null) {
    if (currHead.val === targetVal) {
      prev.next = currHead.next;
      break;
    }
    prev = currHead;
    currHead = currHead.next;
  }
  return head;
};

// Recursive:
// Time: O(n)
// Space: O(n)

// const removeNode = (head, targetVal) => {
//   if(head === null) return null;
//   if(head.val === targetVal) return head.next;
//   head.next = removeNode(head.next, targetVal)
//   return head;
// }

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.next = y;
y.next = z;

// x -> y -> z

removeNode(x, 'z');
// x -> y
