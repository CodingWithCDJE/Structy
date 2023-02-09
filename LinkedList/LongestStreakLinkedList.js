/*
Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
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
const longestStreak = (head) => {
  // todo
  let currHead = head;
  let prevVal = null;
  let currCounter = 0;
  let maxCounter = 0;

  while (currHead !== null) {
    if (currHead.val === prevVal) {
      currCounter++;
    } else {
      currCounter = 1;
    }

    if (currCounter > maxCounter) {
      maxCounter = currCounter;
    }
    prevVal = currHead.val;
    currHead = currHead.next;
  }

  return maxCounter;
};

// Recursive:
// Time: O(n)
// Space: O(n)

//   const longestStreak = (head, prevVal= null, prevCount=0, maxCount=0) => {
//     if(head === null) return maxCount;
//     if(head.val !== prevVal && prevVal !== null) {
//       maxCount = prevCount;
//       prevCount = 1;
//     } else {
//       prevCount++;
//     }
//     if(prevCount > maxCount) maxCount = prevCount;
//     prevVal = head.val
//     return longestStreak(head.next, prevVal, prevCount, maxCount)

//   }

const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

longestStreak(a); // 3
