// Leetcode Problem:- 213
// Problem says:-
// You are a professional robber planning to rob houses along a street, but all houses are arranged in a circle,
// meaning the first house is a neighbor of the last one. Also, adjacent houses have a security system connected, 
// and you cannot rob two adjacent houses on the same night.
// The goal is to determine the maximum amount of money you can rob without alerting the police.

// Brute force approach:- [Top - Down Approach](Using Recursion)
// Approach:-
// - The idea is to recursively decide whether to "rob" the current house or "skip" it.
// - If we rob the current house i, we cannot rob the next house (i + 1), so we move to house i + 2.
// - If we skip the current house, we move to the next house (i + 1).
// To handle the circular arrangement of houses:-
// - If we rob the first house, we cannot rob the last house.
// - If we skip the first house, we can rob the last house.
// We solve the problem in two cases:-
// - Case 1: Rob the first house (0th index) and skip the last house.
// - Case 2: Skip the first house and consider the last house (n-1 index).
// Base Case:- 
// if there’s only one house, return its value (nums[0]).
// if there are only two houses, return the maximum of the two (Math.max(nums[0], nums[1])), as we can only rob one of them.
// use of a helper function 'solve' that computes the maximum money that can be robbed from house i to the last valid
// house (based on the circular constraint).
// In the 'solve' function:-
// Base Case: If 'i' exceeds or equals the number of houses, return 0 (no more houses to rob). Otherwise, we have two options;
// Option 1: Rob the current house 'i' and move to the house 'i + 2' (since adjacent houses can't be robbed).
// Option 2: Skip the current house and move to the next house 'i + 1'.
// And return the maximum of take and skip.
// TC:- O(2^N), as for each house, we are making two recursive calls (either rob or skip), and this leads to an 
// exponential number of recursive calls.
// SC:- O(N), because the maximum depth of the recursion stack is proportional to n.

var rob = function(nums) {
    let n = nums.length;
    // if there is only one house then stole money from there.
    if(n === 1){
        return nums[0];
    }
     if(n === 2){
        return Math.max(nums[0], nums[1]);
     }

     // case 1:- if we will take 0rth house then we can't take the last house ATQ.
     let take_0rth_index_house = solve(nums, 0, n-2);

    // case 2:- if we will not take 0rth house then we can take the last house ATQ.
    let take_1st_index_house = solve(nums, 1, n-1); 

    return Math.max(take_0rth_index_house, take_1st_index_house); 
};

function solve(nums, i, n) {
    if (i > n) {
        return 0;
    }
    
    let steal = nums[i] + solve(nums, i + 2, n);
    let skip = solve(nums, i + 1, n);

    return Math.max(steal, skip);
}

// Optimal Approach 1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// - The idea is to recursively decide whether to "rob" the current house or "skip" it.
// - If we rob the current house i, we cannot rob the next house (i + 1), so we move to house i + 2.
// - If we skip the current house, we move to the next house (i + 1).
// To handle the circular arrangement of houses:-
// - If we rob the first house, we cannot rob the last house.
// - If we skip the first house, we can rob the last house.
// We solve the problem in two cases:-
// - Case 1: Rob the first house (0th index) and skip the last house.
// - Case 2: Skip the first house and consider the last house (n-1 index).
// Base Case:- 
// if there’s only one house, return its value (nums[0]).
// if there are only two houses, return the maximum of the two (Math.max(nums[0], nums[1])), as we can only
// rob one of them.
// use of a helper function 'solve' that computes the maximum money that can be robbed from house i to the last 
// valid house (based on the circular constraint).
// Use a 'dp' array to store intermediate results and avoid recalculating the maximum profit for houses that 
// have already been processed.
// In the 'solve' function:-
// Base Case: If 'i' exceeds or equals the number of houses, return 0 (no more houses to rob) 
// if the result for the current house 'i' is already computed, return it from dp array
// Option 1: Rob the current house 'i' and move to the house 'i + 2' (since adjacent houses can't be robbed).
// Option 2: Skip the current house and move to the next house 'i + 1'.
// Store the maximum of the two options (either rob or skip) in the DP array and return it.
// TC: O(N), since each house is processed only once due to memoization, making the time complexity linear.
// SC: O(N), due to the 'dp' array storing computed results and recursion depth in the worst case can go up to n.

var rob = function(nums) {
    let n = nums.length;
    // if there is only one house then stole money from there.
    if(n === 1){
        return nums[0];
    }
     if(n === 2){
        return Math.max(nums[0], nums[1]);
     }

     let dp1 = new Array(n+1).fill(-1);
     // case 1:- if we will take 0rth house then we can't take the last house ATQ.
     let take_0rth_index_house = solve(nums, 0, dp1, n-2);

     let dp2 = new Array(n+1).fill(-1);
    // case 2:- if we will not take 0rth house then we can take the last house ATQ.
    let take_1st_index_house = solve(nums, 1, dp2, n-1); 

    return Math.max(take_0rth_index_house, take_1st_index_house); 
};

function solve(nums, i, dp, n) {
    if (i > n) {
        return 0;
    }
    
    if (dp[i] !== -1) {
        return dp[i];
    }
    
    let steal = nums[i] + solve(nums, i + 2, dp, n);
    let skip = solve(nums, i + 1, dp, n);

    return dp[i] = Math.max(steal, skip);
}


// Optimal Approach 2: [Using Bottom-Up DP] (Iterative Solution)
// Approach:
// Base Case: If the length of the given array `nums` is equal to 1, return the value of the first and
// only house (nums[0]), as there are no other houses to consider.
// Otherwise, call the helper function twice:
// - First, for the range from index 0 to n - 2 (excluding the last house)
// - Second, for the range from index 1 to n - 1 (excluding the first house)
// This is done because the first and last houses are adjacent, and both cannot be robbed together.
// Inside maxMoney function:-
// Use a 'dp' array to store the maximum amount of money that can be stolen up to the i-th house in the given range.
// dp[0] is initialized with nums[start], representing the maximum if we rob only the first house in the current range.
// If there is more than one house in the range, initialize dp[1] with the maximum of nums[start] and nums[start + 1].
// Then, iterate from index 2 to the end of the range and compute the maximum money that can be robbed for each house.
// For each house i, there are two choices:
//  - If we rob the current house (nums[start + i]), we must skip the previous one. So we add nums[start + i] to dp[i - 2].
//  - If we skip the current house, the total remains the same as dp[i - 1].
// Store the maximum of these two options in dp[i].
// The value stored in dp[len - 1] gives the maximum amount that can be stolen from the selected range of houses.
// Finally, return the maximum of the two computed values.
// Time Complexity: O(N), as each house is processed exactly once.
// Space Complexity: O(N), due to the dp array used to store computed values.


var rob = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    return Math.max(maxMoney(nums, 0, n - 2), maxMoney(nums, 1, n - 1));

    function maxMoney(nums, start, end) {
        let len = end - start + 1;
        let dp = new Array(len);
        dp[0] = nums[start];
        if (len > 1) {
            dp[1] = Math.max(nums[start], nums[start + 1]);
        }

        for (let i = 2; i < len; i++) {
            let take = nums[start + i] + dp[i - 2];
            let skip = dp[i - 1];
            dp[i] = Math.max(take, skip);
        }

        return dp[len - 1];
    }
};


// Optimal Approach 3 (Best Approach):- [Constant Space Complexity] 
// Approach:
// Base Case:- if the length of the given array 'nums' is 1, return the value of the first and
// only house (nums[0]), as there are no other houses to consider.
// if there are two houses, return the maximum of the two, since we can't rob adjacent houses.
// Main Idea:- Since the first and last houses are adjacent in a circular neighborhood,
// robbing the first house excludes the last, and robbing the last excludes the first.
// Therefore, we solve the problem twice:
// - First, by considering the range of houses from index 0 to n-2 (i.e., robbing the first house).
// - Second, by considering the range from index 1 to n-1 (i.e., skipping the first house).
// we then return the maximum result from these two scenarios.
// To solve for each range, we use two variables, 'moneyBeforeCurrent' and 'moneyBeforeAdjacent', where:
// - 'moneyBeforeAdjacent' stores the maximum money robbed before the previous house.
// - 'moneyBeforeCurrent' stores the maximum money robbed up to the previous house.
// As we iterate through the houses in the range, calculate the maximum of two choices for each house:
// 1. Skip the current house (thus, keep the max value in 'moneyBeforeCurrent').
// 2. Steal from the current house (add its value to 'moneyBeforeAdjacent').
// After processing all houses in each scenario, 'max' will contain the maximum money that can be stolen in that range.
// TC:- O(N), since the given array 'nums' is processed twice for two ranges.
// SC:- O(1), since no additional space is used other than the two variables.

var rob = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    return Math.max(maxMoney(nums, 0, n - 2), maxMoney(nums, 1, n - 1));

    function maxMoney(nums, start, end) {
        let moneyBeforeCurrent = 0, moneyBeforeAdjacent = 0;
        for (let i = start; i <= end; i++) {
            let take = nums[i] + moneyBeforeAdjacent;
            let notTake = moneyBeforeCurrent;
            let maxMoney = Math.max(take, notTake);

            moneyBeforeAdjacent = moneyBeforeCurrent;
            moneyBeforeCurrent = maxMoney;
        }
        return moneyBeforeCurrent;
    }
};