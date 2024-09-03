// Leetcode Problem:- 209
// Brute force approach:
// approach:-
// consider each possible subarray and calculate the sum for each subarray meanwhile check that sum is 
// greater than equal to target then find the minLength.
// once, find the minLength whose subarray sum is greater than equal to target return it. 
// after iterating through all possible subarrays, return `minLength` if a valid subarray was found. 
// if no such subarray is found, return 0.
// TC: O(N^2), Explanation:-
// O(N) for the outer loop to iterate through the start index of subarrays.
// O(N) for the inner loop to iterate through the end index of subarrays from the start index for calculating the sum.
// Overall, TC: O(N) * O(N) = O(N^2).
// SC: O(1), as no additional space is used apart from few variables.

var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                minLength = Math.min(minLength, j - i + 1);
            }
        }
    }
    return minLength === Infinity?0:minLength;
}

// optimal approach:- using sliding window
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
    let i = 0; j = 0;
    let sum = 0;
    let minLength = Infinity;
    while (j < nums.length) {
        sum += nums[j];
        while (sum >= target) {
            minLength = Math.min(minLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }

    return minLength === Infinity ? 0 : minLength;

};
