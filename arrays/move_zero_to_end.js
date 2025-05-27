// Leetcode Problem:- 283
// Optimal approach:
// First, find the correct index for each non-zero element using 'nonZeroIndex'.
// Move each non-zero element to the front of the array.
// Then, iterate from the 'nonZeroIndex' to the end of the array and fill the remaining indices with zeros.

// Time Complexity (TC): O(N), because we iterate through the array twice —
// once to place non-zero elements in their correct positions and once to fill the rest of the array with zeros.

// Space Complexity (SC): O(1), since no additional space is used apart from the 'nonZeroIndex' variable.

var moveZeroes = function (nums) {
    let nonZeroIndex = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
