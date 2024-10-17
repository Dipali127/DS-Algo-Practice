// Leetcode Problem:- 228
// Optimal Approach:
// approach:-
// traverse through the 'nums' array and for each element, treat it as the start of a range.
// while traversing, check if the next element is consecutive (difference of 1).
// if consecutive numbers are found, continue moving through the array.
// Once a range ends or if there's no consecutive number, push the range or the single number into the 'range' array.
// TC:- O(N), as the function traverses the array once, and each element is processed at most once, even with the
// inner while loop.
// SC:- O(N), space used by the 'range' array, which can store up to n elements in the worst case, where no
// consecutive numbers are found.
var summaryRanges = function(nums) {
    let range = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        // Check if consecutive numbers form a range
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
        }

        // If start is different from the current number, we have a range
        if (start !== nums[i]) {
            range.push(`${start}->${nums[i]}`);
        } else {
            range.push(`${start}`);
        }
    }

    return range;
};
