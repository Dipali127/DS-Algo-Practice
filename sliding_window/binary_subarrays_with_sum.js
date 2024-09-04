// Leetcode Problem:- 930
// Brute force approach:
// approach:-
// consider all the possible subarray and for each subarray calculate sum meanwhile check if sum
// equals to goal. if it increment countSubarray.
// once, found all the subarray whose sum equals to goal return countSubarray.
// TC:- O(N^2), Explanation:-
// O(N) for iterating through the starting index of each subarray.
// O(N) for iterating from the starting index to the ending index to calculate the sum.
// Overall, TC:- O(N) + O(N) = O(N^2).
// SC:- O(1), as there is no additional space used apart from few pointers. 

var numSubarraysWithSum = function(nums, goal) {
    let countSubarray = 0;
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j=i;j<nums.length;j++){
            sum+=nums[j];
            if(sum === goal){
                countSubarray++;
            }
        }
    }

    return countSubarray;
};

// Optimal approach: Using Sliding Window
// approach:
// slide the window by moving pointer 'j' to the right of the given array 'nums', 
// while continuously calculating the sum of the current window, check :- 
// if the sum exceeds the goal, shrink the window from the left by moving pointer 'i' to the right,
// and subtract the value at 'i' from the sum. 
// if sum doesn't exceed the goal then find the number of subarray ending at index 'j' is (j-i+1) and
// add it in countSubarray.
// to find the exact number of subarrays with sum equal to the goal, use the function `slidingWindowAtmost` 
// to calculate the number of subarrays with sums at most `goal` and subtract the number of subarrays with 
// sums at most `goal - 1`. this difference gives the count of subarrays with sum exactly equal to `goal`.
// TC: O(N), as we are iterating through the array only once.
// SC: O(1), as we are using a constant amount of extra space.

function slidingWindowAtmost(nums, goal) {
    let countSubarray = 0, sum = 0, i = 0, j = 0;
    while(j < nums.length) {
        sum += nums[j];
 

//TC:O(N) AND SC:O(1) 
function slidingWindowAtmost(nums, goal) {
    let countSubarray = 0, sum = 0, i = 0, j = 0;
    while(j<nums.length) {
        sum += nums[j];
        while (i<=j && sum > goal) {
            sum -= nums[i];
            i++;
        }

        countSubarray += j - i + 1;
        j++;
    }

    return countSubarray;
}

var numSubarraysWithSum = function (nums, goal) {
    let difference = slidingWindowAtmost(nums, goal) - slidingWindowAtmost(nums, goal - 1);
    return difference;
}