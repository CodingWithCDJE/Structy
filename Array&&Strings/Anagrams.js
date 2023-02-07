/*
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

*/
const anagrams = (s1, s2) => {
  // todo
  if (s1.length !== s2.length) return false;

  const hashCount = {};

  for (let letter of s1) {
    // O(n)
    letter in hashCount ? hashCount[letter]++ : (hashCount[letter] = 1);
  }

  for (let letter of s2) {
    // O(n)
    if (!(letter in hashCount && hashCount[letter] > 0)) return false;

    hashCount[letter]--;
  }

  return true;
};

anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
