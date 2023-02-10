/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Iterative:
// Time: O()
// Space: O()
const addLists = (head1, head2) => {
  // todo
  //   // if(head1 === null && head2 === null) return null;
  let currHeadOne = head1;
  let currHeadTwo = head2;
  let carry = 0;
  let dummyHead = new Node(null);
  let tail = dummyHead;

  while (currHeadOne !== null || currHeadTwo !== null || carry === 1) {
    let val1 = currHeadOne === null ? 0 : currHeadOne.val;
    let val2 = currHeadTwo === null ? 0 : currHeadTwo.val;
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    let digit = sum % 10;

    if (currHeadOne !== null) currHeadOne = currHeadOne.next;
    if (currHeadTwo !== null) currHeadTwo = currHeadTwo.next;

    tail.next = new Node(digit);
    tail = tail.next;
  }

  return dummyHead.next;
};

// Recursive:
// Time: O(n)
// Space: O(n)

// const addLists = (head1, head2, carry=0) => {
//   if(head1 === null && head2 === null && carry === 0) return null;
//   const val1 = head1 === null ? 0 : head1.val;
//   const val2 = head2 === null ? 0 : head2.val
//   let sum = val1 + val2 + carry;
//   let digit = sum % 10;
//   let nextCarry = sum > 9 ? 1 : 0;
//   let resultNode = new Node(digit);

//   let next1 = head1 === null ? null : head1.next
//   let next2 = head2 === null ? null : head2.next

//   resultNode.next = addLists(next1, next2, nextCarry);
//   return resultNode;

// }

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
