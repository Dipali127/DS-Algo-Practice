// Leetcode Problem:- 209
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

// optimal approach:- using sliding window and two pointer technique
// approach:-
// extending the window by moving pointer 'j' to the right and adding `nums[j]` to `sum`.
// if the `sum` of the current window is greater than or equal to the target, 
// update `minLength` with the smaller value between `minLength` and the current window size (`j - i + 1`).
// then, try to find a smaller window that still meets the condition (i.e sum greater than equal to target),
// by shrink the window by moving pointer 'i' to the right but before shrinking the window subtract`nums[i]` from `sum`.
// continue this process until the pointer 'j' reach to end.
// after iterating through all possible subarrays, return `minLength` if a valid subarray was found. 
// if no such subarray is found, return 0.
// TC: O(N), as the array 'nums' is traversed once using pointers 'i' and 'j'.
// SC: O(1), as there is no additional space used apart from a few variables.

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
