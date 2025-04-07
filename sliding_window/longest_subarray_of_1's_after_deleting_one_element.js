// Leetcode Problem:- 1493
// Brute force approach:-
// approach:-
// iterate through each possible subarray and for each subarray, check if the starting element of each subarray 
// contain value zero. if it is, increment countZero, which tracks the total number of zeros in the array.
// and we need this count because if there are no zeros in the array, the longest subarray of 1's after
// deleting one element will be array.length - 1, as deleting any element will give us the entire array of 1's.
// but if the starting index of the current subarray contain value zero, compute the longest subarray of 1's by skipping 
// that particular zero meanwhile update the maximum length for current subarrays.
// finally, return the longest subarray of 1's after deleting one element.
// TC:- O(N^2), since we use nested loop to calculate the longest subarray of 1's after deleting one element.
// SC:- O(1), as there is no additional space is used apart from few variables. 

var longestSubarray = function (nums) {
    const n = nums.length;
    let result = 0;
    let countZero = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            countZero++;
            let currLength = 0;
            let maxLength = 0;

            for (let j = 0; j < n; j++) {
                if (j === i) continue;

                if (nums[j] === 1) {
                    currLength++;
                    maxLength = Math.max(maxLength, currLength);
                } else {
                    currLength = 0;
                }
            }

            result = Math.max(result, maxLength);
        }
    }

    if (countZero === 0) {
        return n - 1;
    }

    return result;
};

// Optimal Approach:
// approach:
// extend the window by moving the pointer 'j' to the right of the array 'nums'. 
// and check if the value at 'nums[j]' is zero, increment the 'countZero'.
// shrink the window if 'countZero' is greater than 1 (i.e., there are more than one zero in the current window),
// move the pointer 'i' to the right until 'countZero' becomes 1. it ensures that the window contains at most one zero,
// which is valid for finding the longest subarray of 1's after deleting one zero because that one zero again deleted from
// current window while computing length using j - i.
// for each position of 'j', calculate the length of the current valid window as 'j - i'.
// update 'maxLength' with the maximum value between the current 'maxLength' and the length of the current window. 
// Note that if there are no zeros in the array, the longest subarray will be 'n-1' because we need to delete one element.
// after processing the entire array, 'maxLength' will hold the length of the longest subarray of 1's possible after deleting one zero.
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


