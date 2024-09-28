// Leetcode Problem:- 198
// Problem Says:- We are given an array of houses where each house contains a certain amount of money.
// You are a professional robber planning to steal money from houses, but the only constraint is that 
// adjacent houses have security systems connected, so you cannot rob two adjacent houses on the same night.

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// - The idea is to recursively decide whether to "rob" the current house or "skip" it.
// - If we rob the current house, we cannot rob the next adjacent house (i+1), so we move to house (i+2).
// - If we skip the current house, we move to the next house (i+1).
// - We'll use a DP array to store intermediate results and avoid recalculating the maximum profit 
//   for houses that we've already processed.
// from main function 'rob', we are calling the 'solve' function which will return the maximum amount of money that a robber robbed.
// Inside 'solve' function:-
// Base Case: If 'i' exceeds or equals the number of houses, return 0 (no more houses to rob) 
// if the result for the current house 'i' is already computed, return it from dp array
// Option 1: Rob the current house 'i' and move to the house 'i + 2' (since adjacent houses can't be robbed).
// Option 2: Skip the current house and move to the next house 'i + 1'.
// Store the maximum of the two options (either rob or skip) in the DP array and return it.
// TC: O(N), since each house is processed only once due to memoization, making the time complexity linear.
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


// Optimal Approach2:- [Using Bottom Up DP] (Iterative Solution)
// Approach:-
// Base Case:- If the length of the given array nums is equal to 1, return the value of the first and
// only house (nums[0]), as there are no other houses to consider.
// use a dp array to store the maximum amount of money that can be stolen up to the i-th house.
// dp[0] is initialized to 0, representing no houses to rob.
// dp[1] is initialized to nums[0], representing the money stolen from the first house
// (since you can't rob more than one house when only one house exists).
// start iterating from index '2' and compute the maximum money that can be robbed for each house.
// for each house i, there are two choices:-
// if we steal money from current house i.e; (i-1 in the nums array) then we cannot rob the previous 
// house, so we add the value of the current house (i-1 in the nums array) to dp[i-2] (i.e., nums[i-1] + dp[i-2]).
// if we skip the current house, the maximum amount up to the previous house (i-1) remains the same (i.e., dp[i-1]).
// the maximum amount up to the previous house i-1 remains the same (i.e., dp[i-1]).
// store the maximum of these two options in dp[i].
// The value stored in dp[n] gives the maximum amount of money that can be stolen from all houses; So, return dp[n].
// TC:- O(N), as each house is processed exactly once.
// SC:- O(N), due to the dp array used to store computed values.

var rob = function (nums) {
    let n = nums.length;
    if(n === 1){
        return nums[0];
    }
    let dp = new Array(n+1).fill(-1);

    // No House before i = 0
    dp[0] = 0;

    // One House before i = 1 i.e house '0'
    dp[1] = nums[0];

    for(let i = 2; i <= n; i++){
        let steal = nums[i-1] + dp[i-2];
        let skip = dp[i-1];

        dp[i] = Math.max(steal, skip); 
    }

    return dp[n];
};

