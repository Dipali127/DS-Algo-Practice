// Leetcode Problem:- 209
// Brute force approach:
// approach:-
// consider each possible subarray and calculate the sum for each subarray meanwhile check that sum is 
// greater than equal to target then find the minLength.
// once, find the minLength whose subarray sum is greater than equal to target return it. 
// after iterating through all possible subarrays, return `minLength` if a valid subarray was found. 
// if no such subarray is found, return 0.
// Optimization in Brute Force: If we find a subarray with a sum greater than or equal to target,
// there is no need to check further elements in that subarray, so we break the inner loop early.
// TC: O(N^2), Explanation:-
// O(N) for the outer loop to iterate through the start index of subarrays.
// O(N) for the inner loop to iterate through the end index of subarrays from the start index for calculating the sum.
// Since we break the loop early when sum >= target, it improves efficiency slightly, but worst-case TC remains O(N^2).
// Overall, TC: O(N) * O(N) = O(N^2).
// SC: O(1), as no additional space is used apart from a few variables.

var minSubArrayLen = function(target, nums) {
    let minWindow = Infinity;

    for (let i = 0; i < nums.length; i++) { 
        let sum = 0;
        for (let j = i; j < nums.length; j++) { 
            sum += nums[j]; 

            if (sum >= target) { 
                minWindow = Math.min(minWindow, j - i + 1);
                break; // No need to check further, as we need the minimum window.
            }
        }
    }

    return minWindow === Infinity ? 0 : minWindow;
};

// Optimal Approach: Using Sliding Window and Two-Pointer Technique
// Approach:
// Extend the window by moving the `end` pointer to the right and adding `nums[end]` to `sum`.
// If the `sum` of the current window is greater than or equal to the target,
// update `minWindow` with the smaller value between `minWindow` and the current window size (`end - start + 1`).
// Then, try to find a smaller window that still meets the condition (i.e., sum is greater than or equal to the target)
// by shrinking the window by moving the `start` pointer to the right. Before shrinking the window, subtract `nums[start]` from `sum`.
// Continue this process until the `end` pointer reaches the end.
// After iterating through all possible subarrays, return `minWindow` if a valid subarray is found.
// If no such subarray is found, return 0.
//
// TC: O(N), since both the `start` and `end` pointers traverse the array at most once.
// Even though a while loop is used, the total number of operations is still O(N) because each element
// is added to and removed from `sum` at most once.
//
// SC: O(1), since no additional space is used apart from a few variables.

var minSubArrayLen = function (target, nums) {
    let start = 0, end = 0;
    let minWindow = Infinity;
    let sum = 0;
    while (end < nums.length) {
        sum+= nums[end];

        while (sum >= target) {
            minWindow = Math.min(minWindow, end - start + 1);
            sum-= nums[start];
            start++;
        }
         end++;
    }

    return minWindow === Infinity ? 0 : minWindow;
}
