// Leetcode Problem:- 371
// Brute force approach:
var getSum = function(a, b) {
    return a + b;
};

/// Optimal approach:
// First, I will calculate the **partial sum** between the two numbers' bits using the XOR (^) operator.
// This gives the sum **without considering the carry**, simulating binary addition starting from the least significant bit (LSB).
// Next, I will compute the **carry bits** using the AND (&) operator, followed by a left shift (<< 1),
// because in binary addition the carry moves to the next higher bit.
// The process continues using a while loop until the carry becomes zero (b != 0).
// In each iteration, I update:
//   - 'a' with the partial sum (a ^ b)
//   - 'b' with the carry bits ((a & b) << 1)
// Once the carry becomes 0, the value of 'a' holds the final sum.
// This approach simulates adding two numbers bit by bit without using + or - operators.
// TC: O(log₂(max(a, b))) ≈ O(k), where 'k' is the bit-length of the larger number,
// because the number of iterations depends on how many bits are needed to resolve the carry.
// Note: This is not a linear loop — the while loop runs only until the carry becomes 0.
// SC: O(1), since no additional space is used.

// About carry:-
// At each step, the carry shifts exactly one bit position to the left.
// In terms of powers of 2, this means it moves to the next greater power of 2 compared to
// the position where it was generated — because binary significance increases as we move left.
// So wherever two 1 bits overlap (a & b), that position creates a carry, and we shift it left (<< 1)
// so it can participate in the addition at the next higher-value bit (the next greater power of 2)
// in the next iteration.

var getSum = function(a, b){
    let partialSum, carry;
    while(b != 0){
        partialSum = a ^ b;
        carry = (a & b) << 1;
        a = partialSum;
        b = carry;
    }
    return a;
}
