/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * n = O(n)
  ) {
    const word = words[i]; // 2 * n = O(n)
    if (!seen[word]) {
      // 3 * n = O(n)
      seen[word] = true; // 1 * 1 = O(n)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n^4)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * n = O(n)
  ) {
    const word = words[i]; // 2 * n = O(n)
    let isUnique = true; // 1 * 1 = O(1)
    for (
      let c = 0; // 1 * 1 = O(1)
      c < i; // 1 * n * n = O(n^2)
      c++ // 2 * n = O(n)
    ) {
      const comparing = words[c]; // 1 * n = O(n)
      if (comparing === word) {
        // 1 * n * n = O(n^2)
        isUnique = false; // 1 * 1 = O(1)
      }
    }
    if (isUnique) {
      // 1 * 1 = O(1)
      unique[unique.length] = word; // 1 * n = O(n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^10)
