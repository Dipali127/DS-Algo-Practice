// GeeksforGeeks: Asked in Google, Amazon, Facebook, and Visa

// Brute Force Approach:
// Approach:
// Consider each possible subarray and for each subarray, compute the sum and check if the sum equals the target.
// If it does, return the indices [i+1, j+1], since the given array uses 1-based indexing.
// If no such subarray is found, return [-1].
// TC: O(N^2), due to the nested loops
// SC: O(1), since no additional space is used.
class Solution {
    subarraySum(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                if (sum === target) {
                    return [i + 1, j + 1];
                }
            }
        }

        return [-1];
    }
}

// Optimal Approach:
// Approach:
// Use the sliding window technique with two pointers, `start` and `end`.
// Extend the window using the `end` pointer and add the current number to the `sum`.
// Meanwhile, check if the `sum` equals the target. If it does, return the current window indices [start + 1, end + 1].
// If the `sum` becomes greater than the target, shrink the window by subtracting the number at the `start` pointer
// and increment `start`. Continue this until the `sum` is no longer greater than the target.
// After iterating through the array, if no such subarray is found, return [-1].
// TC: O(N), since each element is added to and removed from the sum once by the `start` and `end` pointers.
// SC: O(1), since no additional space is used.
class Solution {
    subarraySum(arr, target) {
        let start = 0, end = 0;
        let sum = 0;
        while (end < arr.length) {
            sum += arr[end];

            while (sum > target) {
                sum -= arr[start];
                start++;
            }

            if (sum === target) {
                return [start + 1, end + 1];
            }

            end++;
        }

        return [-1];
    }
}
