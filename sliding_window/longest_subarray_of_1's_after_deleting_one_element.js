// Leetcode Problem: 1493
// Brute Force Approach:
// Approach:
// Consider each possible subarray, and for each subarray take a variable `countZero` initially 
// initialized to 0 to keep track of the number of zeroes in the current subarray.
// Iterate through the current subarray, and while iterating:
// Check if the current number in the subarray is 0. If it is, increment `countZero` by 1.
// Then check if `countZero` is greater than 1. If so, break the current subarray loop, 
// since we are allowed to remove only one element from the array (as per the given problem).
// But if `countZero` is less than or equal to 1, then update `maxLength` with the maximum 
// between `maxLength` and `j - i`, where `j - i` gives the length of the current subarray after removing
//  one element (since we need to delete one element).
// Time Complexity: O(N^2), since we use a nested loop to calculate the longest subarray of 1's after 
// deleting one element.
// Space Complexity: O(1), as no additional space is used apart from a few variables.

var longestSubarray = function(nums){
    let maxLength =  0;
    for(let i = 0; i < nums.length; i++){
        let countZero = 0;
        for(let j = i; j < nums.length; j++){
            if(nums[j] === 0){
                countZero++;
            }
                
            if(countZero > 1){
                break;
            }

            maxLength = Math.max(maxLength, j - i);
        }
    }

    return maxLength;  
}


// Optimal Approach:
// approach:
// extend the window by moving the pointer 'j' to the right of the array 'nums'. 
// and check if the value at 'nums[j]' is zero, increment the 'countZero'.
// shrink the window if 'countZero' is greater than 1 (i.e., there are more than one zero in the current
//  window), move the pointer 'i' to the right until 'countZero' becomes 1. it ensures that the window 
// contains at most one zero, which is valid for finding the longest subarray of 1's after deleting one 
// zero because that one zero again deleted from current window while computing length using j - i.
// for each position of 'j', calculate the length of the current valid window as 'j - i' which gives the 
// exact number of 1's in the current window after removing one element (i.e., the zero).
// update 'maxLength' with the maximum value between the current 'maxLength' and the length of the current window(j-i). 
// TC:- O(N), since we traverse the array once with two pointers (i and j).
// SC:- O(1), since no additional space is used other than the few variables.

var longestSubarray = function(nums) {
    let i = 0, j = 0, countZero = 0, maxLength = 0;
    while (j < nums.length) {
        if (nums[j] === 0) {
            countZero++;
        }
        while (countZero > 1) {
            if (nums[i] === 0) {
                countZero--;
            }
            i++; 
        }
        maxLength = Math.max(maxLength, j - i);

        j++; 
    }

    return maxLength;
};


