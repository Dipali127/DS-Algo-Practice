// Leetcode Problem: 53 - Maximum Subarray
// Brute Force Approach:
// approach:
// - Initialize a variable `longSub = -Infinity` to store the maximum subarray sum found so far.
// - Consider each possible subarray, and for each subarray, calculate the sum of its elements.
// - Update `longSub` with the maximum value between `longSub` and the current subarray sum.
// - After checking all possible subarrays, return `longSub` as the result.
// Time Complexity: O(N^2), since for each index, we calculate the sum of subarrays starting from it.
// Space Complexity: O(1), as no extra space is used.

var maxSubArray = function(nums) {
    let longSub = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            longSub = Math.max(longSub, sum);
        }
    }
    return longSub;
};


// Optimal Approach (Kadane’s Algorithm):
// Optimal Approach (Kadane’s Algorithm):
// - Initialize a variable `longSub = -Infinity` to keep track of the maximum subarray sum found so far.
// - Also initialize a variable `sum = 0` to maintain the running sum.
// - Traverse the array from left to right:
//   - Add the current element to `sum`.
//   - Update `longSub = max(longSub, sum)`.
//   - If `sum` becomes negative, reset it to 0 because a negative sum will not help maximize 
//     future subarray sums.
// - After traversing the entire array, return `longSub` as the maximum subarray sum.
// Time Complexity: O(N), since we traverse the array once.
// Space Complexity: O(1), as no additional space is used.

var maxSubArray = function(nums) {
    let longSub = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        longSub = Math.max(longSub, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return longSub;
};
