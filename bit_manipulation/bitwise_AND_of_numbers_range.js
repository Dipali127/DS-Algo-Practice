// Leetcode Problem:- 201
// Problem says:
// Given two integers 'left' and 'right' that represent the range [left, right], 
// return the bitwise AND of all the numbers in that range.
// A linear approach (checking every number in the range) does not work efficiently 
// when the range is large, for example, when 'right' is close to INT_MAX (2^31).

// Optimal Approach1:
// approach:-
// use a shift-based approach to remove the different bits between 'left' and 'right'.
// Explanation of the approach:
// 1. initialize a shift counter 'shiftCount' to 0.
// 2. Until the 'left' is not equal to 'right', do a right-shift in both 'left' and 'right'  by 1 bit.
// This process helps us to identify the common prefix of 'left' and 'right'.
// as well as increment the shiftCount
// 4. After finding the common prefix (when 'left' equals 'right'),  
// do a left-shift in either 'left' or 'right'  by 'shiftCount' to restore the bits we removed earlier.
// This gives the result of the bitwise AND of the entire range.

// TC:- O(log(N)), because we are reducing the number of bits with each shift operation. And in worst case
// it may possible that we have to shift all the bits of either left or right to make them equal.
// SC:- O(1), since no additional space is used. 

var rangeBitwiseAnd = function(left, right) {
    let shiftCount = 0;
    while(left !== right){
        left = (left>>1);
        right = (right>>1);
        shiftCount++;
    }

    return (left << shiftCount);
};

// Optimal Approach 2:
// Approach:
// 1. Perform bitwise AND between `right` and `right - 1` to eliminate the least significant set bit in `right`.
// 2. By repeatedly doing this, we reduce `right` until it becomes less than or equal to `left`. 
// 3. This works because when you perform a 'Bitwise AND' on numbers in the range [left, right], any bits that differ across these numbers will turn into 0 in the result.
// 4. Once `right` becomes less than or equal to `left`, it means we have effectively ANDed all numbers in the range [left, right], 
//    and `right` will contain the result of the bitwise AND.
// 5. Return `right` as the result of the bitwise AND of the entire range.
// TC:- O(log N) - Each iteration removes the least significant set bit from `right`, so the number of iterations is proportional to the number of bits in `right`.
// SC:- O(1) - No additional space is used. 

var rangeBitwiseAnd = function(left, right) {
    while(right > left){
        right = right & (right-1);
    }

    return right;
};