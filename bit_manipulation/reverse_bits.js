// Leetcode Problem:- 190
// Problem:- we have given number 'n' and we have to reverse the bits of the number 'n' and return decimal
// the reversed bits of given number 'n'.
// Example:- 5, Binary of 5 = 00000000000000000000000000000101, Reversed bits = 10100000000000000000000000000000
// Decimal Value of Reversed bits = 2684354560.
// 
// Optimal Approach:
// Approach:
// Take a 'reversed' variable that will store the reversed binary representation of the given number 'n'.
// Traverse through all 32 bits of the given number starting from i = 0 to 31.
// While traversing, for each bit perform the following steps:
// (i)  Extract the rightmost bit from the binary representation of 'n' using (n & 1).
// (ii) Create space (room) for the extracted bit by shifting 'reversed' left using (reversed << 1).
// (iii) Add the extracted bit to the 'reversed' variable in reverse order by combining with bitwise OR.
// (iv) Remove the extracted bit from 'n' by shifting it right (n >> 1). This effectively discards the
//      bit since it is already added in the 'reversed' variable. After the shift, the next bit of 'n'
//      moves into the rightmost position, making it easy to extract in the next iteration.
// 
// Example: Let's say initially n = 5 (binary 000...0101).
// - The rightmost bit is 1. Performing (n >> 1) discards it, and now n becomes 2 (binary 10).
// - Now the rightmost bit is 0, which is the second bit of the original binary representation of 5.
// - This process continues until all 32 bits are processed.
// 
// Dry Run for n = 5 (binary: 000...0101) up to 10 steps:
// i = 0 → extractBit = 1, reversed = 1, n = 2
// i = 1 → extractBit = 0, reversed = 2, n = 1
// i = 2 → extractBit = 1, reversed = 5, n = 0
// i = 3 → extractBit = 0, reversed = 10, n = 0
// i = 4 → extractBit = 0, reversed = 20, n = 0
// i = 5 → extractBit = 0, reversed = 40, n = 0
// i = 6 → extractBit = 0, reversed = 80, n = 0
// i = 7 → extractBit = 0, reversed = 160, n = 0
// i = 8 → extractBit = 0, reversed = 320, n = 0
// i = 9 → extractBit = 0, reversed = 640, n = 0
//
// After 32 steps, the reversed bits become: 10100000000000000000000000000000
// Which is 2684354560 in decimal.
//
// Time Complexity: O(1), since the loop always runs for exactly 32 iterations.
// Space Complexity: O(1), as no extra space is used.
var reverseBits = function(n) {
    let reversed = 0;
    for (let i = 0; i < 32; i++) {
        let extractBit = n & 1;           // Step (i): extract rightmost bit
        reversed = (reversed << 1) | extractBit; // Step (ii) + (iii): shift left and add bit
        n >>= 1;                          // Step (iv): remove extracted bit
    }
    return reversed >>> 0; // force unsigned 32-bit result
};
