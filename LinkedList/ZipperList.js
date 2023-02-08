/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative:
// Time: O(min(n,m))
// Space: O(1)
const zipperLists = (head1, head2) => {
  // todo
  let currentListOne = head1.next;
  let currentListTwo = head2;
  // Use a counter to determine which of the two list to grab from
  let counter = 0;
  // This will be the variable that will continue to merge it
  // together
  let tail = head1;

  while (currentListOne !== null && currentListTwo !== null) {
    if (counter % 2 == 0) {
      tail.next = currentListTwo;
      currentListTwo = currentListTwo.next;
    } else {
      tail.next = currentListOne;
      currentListOne = currentListOne.next;
    }
    tail = tail.next;
    counter++;
  }

  if (currentListOne !== null) tail.next = currentListOne;
  if (currentListTwo !== null) tail.next = currentListTwo;

  return head1;
};
// Recursive:
// Time: O(n)
// Space: O(n)
//   const zipperLists = (head1, head2) => {
//     if(head1 === null && head2 === null) return null;
//     if(head1 === null) return head2;
//     if(head2 === null) return head1;

//     let nextOne = head1.next;
//     let nextTwo = head2.next;

//     head1.next = head2;
//     head2.next = zipperLists(nextOne, nextTwo)

//     return head1
//   }

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
