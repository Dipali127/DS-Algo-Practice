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

// Optimal approach: Using Sliding Window with two-way calling
// Instead of solving using a brute force approach which uses a time complexity of O(N²), 
// I will use a sliding window with a two-way calling method, where I will:

// 1. Call the slidingWindowAtmost function first with at most 'goal' sum, 
//    which includes subarrays with sum 0, 1, 2, ..., up to 'goal'.
// 2. Call the slidingWindowAtmost function again with at most 'goal - 1' sum, 
//    which includes subarrays with sum 0, 1, 2, ..., up to 'goal - 1'.
// 3. Subtracting slidingWindowAtmost(nums, goal) from slidingWindowAtmost(nums, goal - 1) 
//    eliminates all common subarrays between both counts, leaving only the count of subarrays 
//    with exactly 'goal' sum.

// Inside slidingWindowAtmost(nums, goal):
// - I will use two pointers, 'i' and 'j', both initialized at 0, which point to the starting 
//   index of the window.
// - A variable countSubarray is initialized to 0 to keep track of the number of valid subarrays 
//   ending at index 'j'.
// - A variable sum is used to keep track of the current sum of the sliding window.

// While iterating through the array 'nums', I will check:
// - Add the value at index 'j' to sum.
// - If sum exceeds goal, move 'i' forward while subtracting nums[i] from sum 
//   until the window sum is at most goal.
// - After adjusting the window, add (j - i + 1) to countSubarray, representing all valid subarrays ending at 'j'.
// - Continue expanding the window by moving 'j' forward.

// Time Complexity:
// - O(N): Since each element is processed at most twice (once by 'j' expanding the window 
//   and once by 'i' shrinking the window).
// - O(1) Space: No extra space is used, only a few integer variables.



  
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