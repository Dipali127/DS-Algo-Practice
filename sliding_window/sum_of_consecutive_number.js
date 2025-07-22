// Asked in Google, Walmart, and Intuit
// Given an array, we have to find whether there exists a subarray with a sum equal to the target.

// Brute Force Approach:
// Approach:
// Consider each possible subarray, and for each subarray, compute the sum. Meanwhile, check if the sum equals the target.
// If it does, return true immediately.
// If after iterating through each subarray, no such sum is found, return false.
// TC: O(N^2), due to nested loops
// SC: O(1), since no additional space is used.
let arr1 = [1, 2, 3, 5, 2], target1 = 8;
console.log(sumTarget(arr1, target1));
function sumTarget(arr1, target1) {
    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        for (let j = i; j < arr1.length; j++) {
            sum += arr1[j];
            if (sum === target1) {
                return true;
            }
        }
    }
    return false;
}

// Optimal Approach:
// Instead of iterating through each element and computing the sum for each subarray (which increases time complexity to O(N^2)),
// use the sliding window technique with two pointers: start and end.
// Extend the window using the end pointer. While iterating through the array, add the current number to the sum.
// If the sum becomes greater than the target, shrink the window by subtracting the number pointed to by the start pointer
// and incrementing start.
// If the sum equals the target, return true.
// Otherwise, continue adding the current number to the sum.
// After iterating through all elements, if no such sum is found, return false.
// TC: O(N). Although a nested while loop is used, each number is added to the sum by the end pointer once, and removed by the start pointer once.
// SC: O(1), since no additional space is required.
let arr = [1, 2, 3, 5, 2], target = 8;
console.log(sumTarget(arr, target));
function sumTarget(arr, target) {
    let start = 0, end = 0, sum = 0;
    while (end < arr.length) {
        while (sum > target) {
            sum -= arr[start++];
        }

        if (sum === target) {
            return true;
        }

        sum += arr[end];
        end++;
    }

    return false;
}
