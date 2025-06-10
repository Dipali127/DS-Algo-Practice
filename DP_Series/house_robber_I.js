// Leetcode Problem:- 198
// Problem Says:- We are given an array of houses where each house contains a certain amount of money.
// You are a professional robber planning to steal money from houses, but the only constraint is that 
// adjacent houses have security systems connected, so you cannot rob two adjacent houses on the same night.

// Brute force approach:- [Top - Down Approach](Using Recursion)
// Approach:-
// - The idea is to recursively decide whether to "rob" the current house or "skip" it.
// - If we rob the current house, we cannot rob the next adjacent house (i+1), so we move to house (i+2).
// - If we skip the current house, we move to the next house (i+1).
// from main function 'rob', we are calling the 'solve' function which will return the maximum amount of money that a robber robbed.
// Inside 'solve' function:-
// Base Case: If 'i' exceeds or equals the number of houses, return 0 (no more houses to rob).
// Otherwise, we have two options;
// Option 1: Rob the current house 'i' and move to the house 'i + 2' (since adjacent houses can't be robbed).
// Option 2: Skip the current house and move to the next house 'i + 1'.
// And return the maximum of take and skip.
// TC:- O(2^N), as for each house, we are making two recursive calls (either rob or skip), and this leads to an 
// exponential number of recursive calls.
// SC:- O(N), because the maximum depth of the recursion stack is proportional to n.

 var rob = function (nums) {
    let n = nums.length;
    return solve(nums, 0, n);
};

function solve(nums, i, n) {
    if (i >= n) {
        return 0;
    }
    
    let steal = nums[i] + solve(nums, i + 2, n);
    let skip = solve(nums, i + 1, n);

    return Math.max(steal, skip);
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization)
// Approach:-
// - The idea is to recursively decide whether to "rob" the current house or "skip" it.
// - If we rob the current house, we cannot rob the next adjacent house (i+1), so we move to house (i+2).
// - If we skip the current house, we move to the next house (i+1).
// - We'll use a DP array to store intermediate results and avoid recalculating the maximum profit 
//   for houses that we've already processed.
// from main function 'rob', we are calling the 'solve' function which will return the maximum amount of money that
// a robber robbed.
// Inside 'solve' function:-
// Base Case: If 'i' exceeds or equals the number of houses, return 0 (no more houses to rob) 
// if the result for the current house 'i' is already computed, return it from dp array
// Option 1: Rob the current house 'i' and move to the house 'i + 2' (since adjacent houses can't be robbed).
// Option 2: Skip the current house and move to the next house 'i + 1'.
// Store the maximum of the two options (either rob or skip) in the DP array and return it.
// TC: O(N), since each house is processed only once due to memoization, making the time complexity linear or we say that
// 'n' recursive function are called.
// SC: O(N), due to the 'dp' array storing computed results and recursion depth in the worst case can go up to n.


var rob = function (nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(-1);
    return solve(nums, 0, dp, n);
};

function solve(nums, i, dp, n) {
    if (i >= n) {
        return 0;
    }
    
    if (dp[i] !== -1) {
        return dp[i];
    }
    
    let steal = nums[i] + solve(nums, i + 2, dp, n);
    let skip = solve(nums, i + 1, dp, n);

    return dp[i] = Math.max(steal, skip);
}


// Optimal Approach:- [Using Bottom-Up DP] (Iterative Solution)
// Approach:-
// Use a dp array to store the maximum amount of money that can be stolen up to the i-th house.
// dp[0] is initialized to 0, representing no houses to rob.
// dp[1] is initialized to nums[0], representing the money stolen from the first house
// (since you can't rob more than one house when only one house exists).
// Start iterating from index '2' and compute the maximum money that can be robbed for each house.
// For each house i, there are two choices:-
// If the robber robs the money from the current house, then add the maximum money stolen by the robber before the adjacent
// house to the current house and store it in the 'take' variable (since the robber cannot steal money from the adjacent 
// house if he steals money from the current house).
// If the robber skips the current house, then add the maximum money stolen by the robber before the current house to the 'notTake' variable.
// Once you get the 'take' and 'notTake' values, update the current house with the maximum between them.
// The value stored in dp[n] gives the maximum amount of money that can be stolen from all houses; so, return dp[n].
// TC:- O(N), as each house is processed exactly once.
// SC:- O(N), due to the dp array used to store computed values.


var rob = function (nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        let take = nums[i-1] + dp[i - 2];
        let notTake = dp[i - 1];
        dp[i] = Math.max(take, notTake);
    }

    return dp[n];
};

// Optimal Approach (Best Approach): [Constant Space Complexity]
// Approach:
// According to the problem, only two variables are required for each house.
// So, use two variables: 'moneyBeforeCurrentHouse' and 'moneyBeforeAdjacentHouse', where:
// - 'moneyBeforeCurrentHouse' stores the maximum money robbed before the current house.
// - 'moneyBeforeAdjacentHouse' stores the maximum money robbed before the adjacent house.
// As we iterate through the houses, for each house, we calculate the maximum of two choices:
// 1. Skip the current house (thus, keep the max value in 'moneyBeforeCurrentHouse').
// 2. Steal from the current house (add its value to 'moneyBeforeAdjacentHouse').
// After processing all houses, 'maxMoney' will contain the maximum money that can be stolen by the thief
// when they reach the last house.
// TC: O(N), since the given array 'nums' is processed once to find the maximum money stolen.
// SC: O(1), since no additional space is used other than the two variables.


var rob = function (nums) {
    let n = nums.length;
    let moneyBeforecurrentHouse = nums[0], moneyBeforeadjacenthouse = 0;
    let maxMoney;
    for (let i = 1; i < nums.length; i++) {
        let take = nums[i] + moneyBeforeadjacenthouse;
        let skip = moneyBeforecurrentHouse;
        maxMoney = Math.max(take, skip);
        moneyBeforeadjacenthouse = moneyBeforecurrentHouse;
        moneyBeforecurrentHouse = maxMoney;
    }

    return maxMoney;
};