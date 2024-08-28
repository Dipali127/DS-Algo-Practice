// Leetcode Problme: 45
// optimal approach:-
// initialize 'jump' to keep track of the minimum number of jumps needed to reach the end.
// 'farthest' tracks the farthest point that can be reached with the current number of jumps.
// 'current' represents the farthest point that can be reached with the current jump count before needing to jump again.
// iterate through the array from the first element to the second-to-last element (i < nums.length - 1), 
// as we don't need to consider the last element because we are calculating the jumps needed to reach it.
// in each iteration, update 'farthest' to be the maximum of its current value and the index 'i' plus the jump length from 'nums[i]'.
// if the current index 'i' reaches 'current', it means we need to make a jump, so update 'current' to 'farthest' and increment 'jump'.
// finally, return the total number of jumps needed to reach the end of the array.
// TC:- O(N), in worst case we traverse the whole array.
// SC:- O(1), as there is no additional space used.

var jump = function (nums) {
    let jump = 0;
    let farthest = 0;
    let current = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, nums[i] + i);
        if (i === current) {
            current = farthest;
            jump++;
        }
    }

    return jump;
};