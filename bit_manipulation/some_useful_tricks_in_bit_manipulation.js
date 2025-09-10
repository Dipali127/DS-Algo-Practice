// geeksForgeeks problem:
// (1) Question:- Check whether the kth bit is set or not
// Solution:
// approach:- if the 'kth' bit using (n & (1 << k)) is zero means 'kth' bit
// is not set otherwise, it is set.
// TC:- O(1), as constant operation is used in below code.
// SC:- O(1), since no additional space is used.
class Solution {
  checkKthBit (n, k) {
    return (n & (1 << k)) !== 0
  }
}

// geeksForgeeks problem:
// (2) Question:- Set the 'kth' bit
// Solution:
// approach:
// To set the kth bit to 1, do the following steps:-
// (1) Shifts the bit 1 to the left by k positions using (1 << k).
// (2) Perform 'bitwise OR' operation between n and the result of 1 << k will set the k-th bit of n to 1
// without affecting other bits and only the 'k-th bit' is modified.
// TC:- O(1), as constant operation is used in below code.
// SC:- O(1), since no additional space is used.

class Solution {
  setKthBit (n, k) {
    return n | (1 << k)
  }
}

// (3) Question:- Clear the 'kth' bit
// Solution:
// approach:
// To clear (set to 0) the k-th bit of a number n, follow these steps:
// (1) Shift the bit '1' to the left by k positions using (1 << k) to isolate the k-th bit.
// (2) Negate the result using ~(1 << k) to create a mask where the k-th bit is 0 and all others are 1.
// (3) Perform a bitwise AND operation between n and ~(1 << k), which clears the k-th bit of n without affecting other bits.
//
// Time Complexity (TC): O(1), since constant bitwise operations are used.
// Space Complexity (SC): O(1), as no additional space is required.

class Solution {
  clearBit (n, k) {
    return n & ~(1 << k);
  }
}

// (4) Question:- Toggle the 'kth' bit
// Solution:
// approach:
// To toggle (flip) the k-th bit of a number n, follow these steps:
// (1) Shift the bit '1' to the left by 'k' positions using (1 << k) to isolate the k-th bit.
// (2) Perform XOR operation between n and (1 << k) to flip the k-th bit:
//     - If the k-th bit is 1, it becomes 0.
//     - If the k-th bit is 0, it becomes 1.
//
// Time Complexity (TC): O(1), as constant-time bitwise operations are used.
// Space Complexity (SC): O(1), since no extra space is needed.

class Solution {
    toggleKthBit(n, k)
    {
        return (n ^ (1 << (k)));
    }

  }

// (5) Question:- Power of 2
// Solution:
// approach 1:
// check if the given 'n' is less than or equal to 0. If it is, return false since powers of 2 are always positive.
// run a while loop that continues as long as 'n' is divisible by 2 (i.e., n % 2 === 0).
// inside the loop, keep dividing 'n' by 2 to reduce it.
// once the loop exits, check if 'n' is equal to 1. If it is, then the original 'n' 
// is a power of 2, so return true. Otherwise, return false.
// TC:- O(LOGN), as the number is halved in each iteration, so it runs in logarithmic time.
// SC:- O(1), since no additional space is used. 

class Solution {
    isPowerofTwo(n) {
        if(n <= 0){
            return false;
        }
        
        while(n % 2 === 0){
            n /= 2;
        }
        
        return n === 1;
    }
}

// approach 2: Using Bit Manipulation
// Since a power of two has only one set bit in its binary representation,
// performing a bitwise AND operation between n and (n - 1) removes that set bit,
// resulting in 0.
// If (n & (n - 1)) === 0, it means n is a power of two.
//
// TC: O(1), since bitwise operations take constant time.
// SC: O(1), since no extra space is used.
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
};


// Recap:- 
// (1) Check the kth bit set or not :- use (n & 1 << k).
// (2) Set the kth bit :- use (n | 1 << k).
// (3) Clear the kth bit :- n & ~(1 << k).
// (4) Toggle the kth bit :- n ^ (1 << k).
// (5) Power of two :- n & (n-1).


