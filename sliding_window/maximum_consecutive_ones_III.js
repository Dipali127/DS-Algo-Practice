//leetcode problem:- 1004
// Brute Force Approach: Using nested loops
// Approach:
// Consider each possible subarray using nested loops. For each subarray, count the number of zeroes.
// While iterating through each subarray, if the count of zeroes exceeds 'k', break the loop 
// since we can only flip at most 'k' zeroes.
// Otherwise, update 'maxLength' to store the maximum number of consecutive 1's.
// TC: O(N^2), due to nested loops.
// SC: O(1), as no additional space is used.
var longestOnes = function(nums, k) {
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++){
        let countZero = 0;
        for(let j = i; j < nums.length; j++){
            if(nums[j] === 0){
                countZero++;
            }

            if(countZero > k){
                break;
            }

             maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
};

// Optimal Approach: Using the sliding window technique
// Instead of iterating through all possible subarrays (which increases time complexity to O(N^2)),
// use a sliding window with two pointers. Initially, both pointers point to the start of the array.
// Expand the window using the 'end' pointer. While iterating through the window,
// if the value at 'end' is 0, increment 'countZero' by 1.
// If 'countZero' exceeds 'k', shrink the window from the left by moving the 'start' pointer forward
// and decrement 'countZero' if the element at 'start' is 0.
// Update 'maxLength' with the size of the current valid window.
// Once the iteration completes, return 'maxLength'.
// TC: O(N), as both 'start' and 'end' pointers traverse the array once.
// SC: O(1), since no additional space is used.
var longestOnes = function(nums, k){
    let maxLength = 0, countZero = 0;
    let start = 0, end = 0;
    while(end < nums.length){
        if(nums[end] === 0){
            countZero++;
        }
        
        if(countZero > k){
            if(nums[start] === 0){
                countZero--;
            }

            start++;
        }

        maxLength = Math.max(maxLength, end-start+1);
        end++;
    }

    return maxLength;
}