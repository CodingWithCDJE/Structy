/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Iterative:
// Time: O(n)
// Space: O(n)

const createLinkedList = (values) => {
  // todo
  const dummyHead = new Node(null);
  let tail = dummyHead;

  for (let value of values) {
    tail.next = new Node(value);
    tail = tail.next;
  }
  return dummyHead.next;
};

//Recursive:
// Time: O(n)
// Space: O(n)
// const createLinkedList = (values, index=0) => {
//   if(values.length === index) return null;
//   const head = new Node(values[index]);
//   head.next = createLinkedList(values, index+1)
//   return head;
// }

createLinkedList(['h', 'e', 'y']);
// h -> e -> y
