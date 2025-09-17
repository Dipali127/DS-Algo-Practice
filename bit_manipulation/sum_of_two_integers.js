// Leetcode Problem:- 371
// Brute force approach:
var getSum = function(a, b) {
    return a + b;
};

// Optimal approach:
// first, I will calculate the partial sum between the two numbers' bits using the XOR (^) operator not do the addition 
// between actual number and this gives us the sum without considering the carry.
// Next, I will compute the carry using the AND (&) operator, followed by a left shift (<<) operator, which will give the
// carry bits that is required for next step addition.
// In each step, the carry is reduced, and the process continues until the carry becomes zero.
// I will continue this process by updating 'a' with the partial sum and 'b' with the carry until the carry (b) becomes 0.
// once the carry is 0, the value of 'a' will hold the sum of the two numbers.
// This approach simulates the process of adding two numbers bit by bit without using the + or - operators.
// TC:- O(LOG(max(a,b))), as the number of steps depends on the number of bits required to represent the larger of the 
// two numbers, a or b. 
// Since the carry shrinks with each iteration, the number of iterations is proportional to the bit length
// of the larger number. 
// SC:- O(1), since no additional space is required.

var getSum = function(a, b){
    let partialSum, carry;
    while(b!=0){
        partialSum = a ^ b;
        carry = (a & b) << 1;
        a = partialSum;
        b = carry 
    }

    return a;
}