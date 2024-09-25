// Leetcode Problem:- 342
// Brute force approach:
// approach:-
// check if the given 'n' is less than or equal to 0. If it is, return false since powers of 4 are always positive.
// run a while loop that continues as long as 'n' is divisible by 4 (i.e., n % 4 === 0).
// inside the loop, keep dividing 'n' by 4 to reduce it.
// once the loop exits, check if 'n' is equal to 1. If it is, then the original 'n' 
// was a power of 2, so return true. Otherwise, return false.
// TC:- O(N), as the number is halved in each iteration, so it runs in logarithmic time.
// SC:- O(1), since no additional space is used.

var isPowerOfFour = function(n) {
    if(n <= 0){
        return false;
    }

    while(n % 4 === 0){
        n = n/4;
    }

    return n === 1;
};

// Optimal Approach:
// approach:-
// check if any number 'n' is a power of 4 by following these properties:
// - If 'n' is a power of 4, it must first be a power of 2. 
// This is checked by verifying that 'n' has only one bit set (n & (n - 1)) === 0.
// - Additionally, (n - 1) must be divisible by 3. This works because powers of 4 (such as 1, 4, 16, 64) 
// minus 1 are  divisible by 3.
// TC:- O(1), as only constant time bitwise operations and modulus are used.
// SC:- O(1), since no additional space is required.

var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
};