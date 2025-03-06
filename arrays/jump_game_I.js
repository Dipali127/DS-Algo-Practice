// Leetcode Problem: 55
// Optimal Approach:-
// initialise max with 0 which will track the furthest index we can reach as we iterate through the array.
// iterate through the array, and for each index i, update max to be the greater of the current max or the 
// sum of the current index and the maximum jump length from this index (nums[i] + i).
// if max is greater than or equal to the last index (nums.length - 1), return true because we can reach or 
// exceed the end of the array.
// if max is equal to the current index i and nums[i] is 0, it means we are stuck at this position (we can't move forward).
// in this case, return false.
// if the loop completes without reaching the last index, return false because we cannot reach the end.
// TC:- O(N), in worst case we traverse the whole array.
// SC:- O(1), as there is no additional space used.

var canJump = function(nums) {
    let max = 0;
    for(let i = 0; i<nums.length;i++){
        max = Math.max(nums[i] + i,max);
        if(max >= nums.length-1) return true;
        if(max == i && nums[i] == 0) return false;
    }

    return false;
};