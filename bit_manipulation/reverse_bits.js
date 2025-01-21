// Leetcode Problem:- 190
// below is the example of how it work:-
// Step-by-Step Breakdown:
// Initialization:
// n = 5 (binary: 00000101)
// reversed = 0 (this will hold the reversed number).
// Iteration 1 (i = 0):
// reversed = (reversed << 1) | (n & 1)
// reversed = (0 << 1) | (5 & 1)
// 5 & 1 gives the rightmost bit of 5, which is 1.
// So, reversed = 1 (binary: 00000001).
// n >>>= 1 (shift n right by 1):
// n = 5 >>> 1 = 2 (binary: 00000010).
// Iteration 2 (i = 1):
// reversed = (reversed << 1) | (n & 1)
// reversed = (1 << 1) | (2 & 1)
// 2 & 1 gives the rightmost bit of 2, which is 0.
// So, reversed = 2 (binary: 00000010).
// n >>>= 1 (shift n right by 1):
// n = 2 >>> 1 = 1 (binary: 00000001).
// Iteration 3 (i = 2):
// reversed = (reversed << 1) | (n & 1)
// reversed = (2 << 1) | (1 & 1)
// 1 & 1 gives the rightmost bit of 1, which is 1.
// So, reversed = 5 (binary: 00000101).
// n >>>= 1 (shift n right by 1):
// n = 1 >>> 1 = 0 (binary: 00000000).
// Iterations 4 to 7 (i = 3, 4, 5, 6):
// Since n is now 0, there are no more bits to process.
// reversed remains unchanged (still 5 in binary: 00000101).

// About unsigned right shift (>>>) and unsigned left shift(<<<).
// Unsigned Right Shift (>>>):
// Shifts all bits to the right.
// Removes the rightmost bit.
// Adds 0 to the leftmost bit, ensuring no sign extension (useful for unsigned integers).
// Unsigned Left Shift (<<):
// Shifts all bits to the left.
// Removes the leftmost bit.
// Adds 0 to the rightmost bit.

// initialize a variable 'reversed' to 0, which will hold the result of the reversed bits.
// iterate over all 32 bits of the input number.
// shift 'reversed' left by 1 position to make space for the next bit, and extract the rightmost bit from the given
// number 'n' and add it to the 'reversed' variable.
// shift 'n' to the right by 1 position to remove the rightmost bit and process the next one.
// The unsigned right shift (>>>) ensures no sign extension for negative numbers.
// return the result, forcing it to be treated as an unsigned 32-bit integer.
// TC: O(1) because the loop runs for exactly 32 iterations (since we're always dealing with a 32-bit integer).
// SC: O(1) because no additional space is used.
var reverseBits = function(n) {
    let reversed = 0;
    for (let i = 0; i < 32; i++) {
        // Shift reversed to the left by 1 bit to make room for the next bit
        reversed = (reversed << 1) | (n & 1); 
        
        // Perform an unsigned right shift on n to process the next bit
        n >>>= 1;
    }

    // Ensure the result is treated as an unsigned 32-bit integer
    return reversed >>> 0; // This forces the result to be unsigned
};