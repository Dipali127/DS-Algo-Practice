// Brute force approach:
// Approach :
// - Check if the given 'n' is less than or equal to 0. If it is, return false since powers of 2 are always positive.
// - Run a while loop that continues as long as 'n' is divisible by 2 (i.e., n % 2 === 0).
// - Inside the loop, keep dividing 'n' by 2 to reduce it to the next smaller power of 2.
// - Once the loop exits, check if 'n' is equal to 1. If it is, then the original 'n' 
//   is a power of 2, so return true. Otherwise, return false.
//
// TC: O(log N), because the number is halved in each iteration, so it runs in logarithmic time.
// SC: O(1), since no additional space is used. 

class Solution {
    isPowerofTwo(n) {
        if (n <= 0) {
            return false;
        }
        
        while (n % 2 === 0) {
            n /= 2;
        }
        
        return n === 1;
    }
}

// Optimal Approach:
// approach : Using Bit Manipulation
// Since a power of two has only one set bit in its binary representation,
// performing a bitwise AND operation between n and (n - 1) removes that set bit,
// resulting in 0.
// If (n & (n - 1)) === 0, it means n is a power of two.
// TC: O(1), since bitwise operations take constant time.
// SC: O(1), since no extra space is used.
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
};
