//                                       How built-in sort() work

// (1) Ascending Order:-  nums.sort((a, b) => a - b);

// Suppose the two values being compared are a = 5 and b = 2.
// - The comparator calculates a - b, which is 5 - 2 = 3.
// - Because the result is positive, a should come after b.
// - Therefore, 2 should appear before 5 in ascending order.
// If a = 2 and b = 5, then a - b = -3. Because the result is negative, a should come before b.


// (2) Descending Order:-  nums.sort((a, b) => b - a);

// Suppose a = 5 and b = 2.
// - The comparator calculates b - a, which is 2 - 5 = -3.
// - Because the result is negative, a should come before b.
// - Therefore, 5 should appear before 2 in descending order.