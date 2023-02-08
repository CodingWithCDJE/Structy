/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// Iterative version:
const linkedListValues = (head) => {
  // todo
  let current = head;
  const arrHolder = [];

  while (current !== null) {
    arrHolder.push(current.val);
    current = current.next;
  }
  return arrHolder;
};

// Recursive version:
//   const linkedListValues = (head) => {
//     const arrHolder = []
//     fillValues(head, arrHolder)

//     return arrHolder;

//   }

//     const fillValues = (head, arrHolder) => {
//       if (head === null) return;
//       arrHolder.push(head.val)
//       fillValues(head.next, arrHolder);
//   }

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

const x = new Node('x');
const y = new Node('y');

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

const q = new Node('q');

// q

linkedListValues(q); // -> [ 'q' ]

linkedListValues(null); // -> [ ]
