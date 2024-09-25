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
// was a power of 2, so return true. Otherwise, return false.
// TC:- O(N), as the number is halved in each iteration, so it runs in logarithmic time.
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
// A number 'n' is a power of two if it has exactly one bit set to 1 in its binary representation.
// For example: 
//  - 2 (10 in binary) has one bit set.
//  - 4 (100 in binary) has one bit set.
// in binary, powers of two are of the form '1000...0'. Subtracting 1 from such a number 
// flips all the bits after the rightmost set bit, resulting in a number with all bits set to 1 before the rightmost set bit.
// Thus, the expression (n & (n - 1)) clears the rightmost set bit.  
// If the result is 0, it means that 'n' is a power of two. Additionally, 'n' must be positive.
// TC:- O(1), as the operation only involves a few bitwise checks, independent of input size.
// SC:- O(1), since no additional space is used.

class Solution {
    isPowerofTwo(n) {
        return n > 0 && (n & (n - 1)) === 0;
    }
}

