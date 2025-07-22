// Leetcode Problem:- 34
// Brute force approach:
// Approach:-
// use of two pointers, 'first' and 'last', which are initialized to -1.
// iterates through the array, and check if the current element equals the target.
// If the current element equals the target check then:-
//    - if first is still -1, it indicates that we have found the first occurrence of the target; hence, update 'first' 
//      with the current index.
//    - but if first not equals to -1, update 'last' with the current index to ensure the latest occurrence of the target.
// TC:- O(N), as we iterate through the given array 'nums' once.
// SC:- O(1), since no additional space is used apart from few pointers.
var searchRange = function (nums, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }

    return [first, last];

};

// Optimal Approach: Using Binary Search
// Approach:
// use two binary searches to find the first and last occurrence of the target in the sorted array.
// First, two pointers 'low' and 'high' are initialized to the start and end of the array to find the first occurrence.
// In the first while loop, perform binary search to find the first index where the target element is present.
//    - If 'mid' equals the target, update 'left' to the current 'mid' and move 'high' to 'mid - 1' to search for any 
//      earlier occurrences of the target.
//    - If 'mid' is less than the target, move 'low' to 'mid + 1', and if 'mid' is greater than the target, move 'high' 
//     to 'mid - 1'.
// After the first search, the second while loop finds the last occurrence of the target in a similar manner.
//    - If 'mid' equals the target, update 'right' to the current 'mid' and move 'low' to 'mid + 1' to search for any 
//       later occurrences of the target.
// after both loops, 'left' holds the first occurrence and 'right' holds the last occurrence of the target.
// TC:- O(LOGN), as we are performing binary search in both loops.
// SC:- O(1), since no additional space is used apart from a few pointers.

var searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let left = -1, right = -1;
    let mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] == target) {
            left = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    low = 0, high = nums.length - 1;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] == target) {
            right = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [left, right];
}