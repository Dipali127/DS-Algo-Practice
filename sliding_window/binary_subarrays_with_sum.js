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
// Instead of solving the problem using a brute force approach with a time complexity of O(N²), 
// I will use a sliding window with a two-way calling method, where I will:
// 1. Call the slidingWindowAtmost function first with the sum at most equal to 'goal', 
//    which includes subarrays with sums 0, 1, 2, ..., up to 'goal'.
// 2. Then, call the slidingWindowAtmost function again with the sum at most equal to 'goal - 1', 
//    which includes subarrays with sums 0, 1, 2, ..., up to 'goal - 1'. 
//    This is because there's no direct way using the sliding window to count subarrays with exactly 'goal' sum.
// 3. Subtracting slidingWindowAtmost(nums, goal - 1) from slidingWindowAtmost(nums, goal) 
//    eliminates all common subarrays between both calls, leaving only the count of subarrays 
//    with an exact sum equal to 'goal'.

// Inside slidingWindowAtmost(nums, goal):
// - I will use two pointers, 'i' and 'j', both initialized to 0, which represent the start and end of the sliding window.
// - A variable countSubarray is initialized to 0 to keep track of the number of valid subarrays ending at index 'j'.
// - A variable sum is used to track the current sum of the window.
// While iterating through the array 'nums', I will add nums[j] to sum.
// - If the sum exceeds the goal, I will move pointer 'i' forward while subtracting nums[i] from the sum, 
//   until the window sum is at most equal to the goal.
// - After adjusting the window, I will add (j - i + 1) to countSubarray, representing all valid subarrays ending at index 'j'.
// - Continue expanding the window by moving 'j' forward.
// Time Complexity: O(N), since each element is processed at most twice (once by 'j' expanding the window 
//   and once by 'i' shrinking the window).
// Space Complexity: O(1), since no extra space is used—only a few integer variables.



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