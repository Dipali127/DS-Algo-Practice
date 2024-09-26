// Leetcode Problem:- 2220
// Optimal Approach:-
// approach:-
// - calculate the XOR of `start` and `goal`, which gives us a number that has bits set to 1
//   at the positions where `start` and `goal` differ. This represents the bits that need to be flipped.
// - use a 'bit manipulation' technique to count the number of set bits (1's) in the XOR result,
//   which indicates how many bits need to be flipped to convert `start` into `goal`.
// Steps:-
// 1. Perform the XOR operation:- `result = start ^ goal`.
// 2. Initialize a counter `count` to 0 to keep track of the number of bits to flip.
// 3. While `result` is greater than 0:
//    - Apply the operation `result = result & (result - 1)`, which clears the least significant bit which set to 1.
//    - Increment the `count` by 1 for each bit flipped.
// 4. Return the final count, which represents the minimum number of bits that need to be flipped.
// Time Complexity:- O(k), where 'k' is the number of bits to be flipped from 1 to 0.
// Space Complexity:- O(1), as we are using a constant amount of space for the counter.

var minBitFlips = function(start, goal) {
    let result = start ^ goal;
    let count = 0
    while(result>0){
        result = result & result-1;
        count++;
    }

    return count;
};