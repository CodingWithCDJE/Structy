/*
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Iterative:
// Time: O(min(n,m))
// Space: O(1)
const mergeLists = (head1, head2) => {
  // todo
  if (head1 == null) return head2;
  if (head1 == null) return head1;

  let currentListOne = head1;
  let currentListTwo = head2;
  let dummyHead = new Node(null);
  let tail = dummyHead;

  while (currentListOne !== null && currentListTwo !== null) {
    if (currentListOne.val < currentListTwo.val) {
      tail.next = currentListOne;
      currentListOne = currentListOne.next;
    } else {
      tail.next = currentListTwo;
      currentListTwo = currentListTwo.next;
    }
    tail = tail.next;
  }

  if (currentListOne !== null) tail.next = currentListOne;

  if (currentListTwo !== null) tail.next = currentListTwo;

  return dummyHead.next;
};

// Recursive:
// Time: O(min(n,m))
// Space: O(n)

// const mergeLists = (head1, head2) => {
//   if(head1 === null && head2 === null) return null;
//   if(head1 === null) return head2;
//   if(head2 === null) return head1;
//   if(head1.val < head2.val){
//     let nextHeadOne = head1.next
//     head1.next = mergeLists(nextHeadOne, head2)
//     return head1;
//   }else{
//     let nextHeadTwo = head2.next;
//     head2.next = mergeLists(head1, nextHeadTwo);
//     return head2;
//   }
// }

const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67

mergeLists(h, p);
// 15 -> 30 -> 67
