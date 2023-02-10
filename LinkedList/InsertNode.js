/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

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
const insertNode = (head, value, index) => {
  // todo
  let idxCount = 0;
  let currHead = head;
  if (index === 0) {
    let newNode = new Node(value);
    newNode.next = head;
    return head;
  }
  while (currHead !== null) {
    if (index - 1 === idxCount) {
      let newNode = new Node(value);
      newNode.next = currHead.next;
      currHead.next = newNode;
    }
    currHead = currHead.next;
    idxCount++;
  }
  return head;
};

//   const insertNode = (head, value, index, counter=0) =>{
//     if(head === null) return null;
//     if(index === 0) {
//       let newNode = new Node(value);
//       newNode.next = head;
//       return newNode;
//     }

//     if(index-1 == counter){
//       let newNode = new Node(value);
//       newNode.next = head.next;
//       head.next = newNode;
//     }

//     insertNode(head.next, value, index, counter + 1)
//     return head;

//   }

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
