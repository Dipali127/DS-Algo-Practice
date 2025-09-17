// Leetcode Problem: 55
// Optimal Approach:
// Approach:
// - Initialize a variable 'reachable' = 0, which represents the farthest position we can reach  
//   while iterating through the array.
// - Traverse the array from left to right:
//   - If the current index 'i' is greater than 'reachable', it means we cannot even reach
//     the current index, so return false immediately.
//   - Otherwise, update 'reachable = max(reachable, i + nums[i])' to extend the maximum range 
//     we can reach. Here, 'i + nums[i]' represents the farthest index we can jump to from the 
//     current index 'i'.
// - After traversing the array, if we never encounter a case where 'i > reachable', it means
//   the last index is reachable, so return true.
//
// Time Complexity: O(N), because we traverse the array once.
// Space Complexity: O(1), since we only use one variable 'reachable'.

var canJump = function(nums) {
    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) {
            return false;
        } else {
            reachable = Math.max(reachable, i + nums[i]);
        }
    }
    return true;
};
