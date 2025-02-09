// Leetcode Problem:- 53
/5 
var maxSubArray = function(nums) {
    let longSub = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum+= nums[j];
            longSub = Math.max(longSub, sum);
        }
    }

    return longSub;
}

// Optimal Approach:
// approach:
// i will initialize a variable longSub with -Infinity to keep track of the maximum subarray sum found so far. Additionally, i will use of a sum variable initialized to 0 to compute the sum.
// while iterating through the nums array, i will add the current element to sum. Meanwhile, i will update longSub with the maximum value between longSub and sum. 
// if sum becomes negative, I will reset it to 0 if it becomes negative so that it doesn’t affect any future positive subarrays.
// After iterating through all elements of nums, I will return longSub, which stores the maximum subarray sum.
// TC:- O(N), to iterate through array nums linearly to find the sum.
// SC:- O(1), since no additional space is used. 
var maxSubArray = function(nums) {
    let longSub = -Infinity;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum+= nums[i];
        longSub = Math.max(longSub, sum);
        if(sum < 0){
            sum = 0;
        }  
    }

    return longSub;
};