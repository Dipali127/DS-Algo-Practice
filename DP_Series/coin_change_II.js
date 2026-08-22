// Leetcode Problem:- 518
// Problem Statement:-
// You are given an array 'coins' of different denominations and an integer 'amount'.
// You need to return the number of combinations that sum up to the given 'amount'.
// You may assume that you have an infinite number of each kind of coin (i.e., you can take any coin any number of times).
// Example:
// coins = [1, 2, 5], amount = 5
// Possible combinations to make amount 5 are:
// - 1 + 1 + 1 + 1 + 1 = 5
// - 1 + 1 + 1 + 2 = 5
// - 1 + 2 + 2 = 5
// - 5 = 5
// these are valid combinations that sum up to 5, and you need to return the count of such combinations.

// Brute Force Approach: [Top-Down Approach] (Using Recursion)
// we use a recursive function 'solve' to explore all possible combinations of coins.
// Inside the 'solve' function:
// - if 'amount === 0', it means we have found one valid way to make the exact 'amount', so we return 1 to count 
//   this combination.
// - if the index 'i' is greater than or equal to 'n', it means we have already checked all available coins, 
//   and no valid way was found for the remaining 'amount', so we return 0.
// - if the amount becomes negative it means that we have taken more coins than required, leading to an 
//      invalid solution, so we return 0 to avoid this path.
// - Otherwise, if the current coin is less than or equal to the remaining 'amount', there are two possible choices:
//   1. Take the current coin:- reduce the 'amount' by the value of 'coins[i]' and keep the index the same 
//      (as we can use the same coin again).
//   2. Skip the current coin:- move to the next coin by incrementing the index 'i' and leaving the 'amount' unchanged.
//   - The total number of ways is the sum of both above choices i.e (1. taking the current coin and 2. skipping the current coin).
// TC:- O(2^M), where 'M' is the given amount, because at each step we have two choices:
// take the coin or skip the coin. If we keep taking the same coin, the recursive call goes deeper
// until the amount becomes 0 or negative.
//
// SC:- O(M), where 'M' is the given amount, because the depth of the recursion stack is proportional
// to the deepest recursive call when we keep taking the same coin until the amount becomes 0 or negative.

var change = function(amount, coins) {
    return solve(0, amount, coins);
    function solve(i, amount, coins){
        if(amount === 0) return 1;
        if(amount < 0 || i >= coins.length) return 0;

        let take = solve(i, amount-coins[i], coins);
        let skip = solve(i+1, amount, coins);

        return take + skip;
    }
};

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// use a 'dp' array to store the results of already solved subproblems to avoid redundant calculations.
// use a recursive function 'solve' to explore all possible combinations of coins to make up the given 'amount'.
// Inside the 'solve' function:
// - if 'amount === 0', it means we have found a valid way to make up the exact 'amount', so we return 1 to count this combination.
// - if the index 'i' is greater than or equal to 'n', it means we have already checked all available coins, 
//   and no valid way was found for the remaining 'amount', so we return 0.
// - before solving a subproblem, check if it is already solved by looking into 'dp[i][amount]', 
//   if 'dp[i][amount] !== -1', return the precomputed result of subproblem to avoid recalculating.
// - if the value of the current coin at 'coins[i]' is greater than the remaining 'amount', skip that coin
//   and recursively call the 'solve' function with the next coin (i.e., increment the index 'i').
// - otherwise, if the current coin is less than or equal to the remaining 'amount', there are two possible choices:
//   1. Take the current coin:- reduce the 'amount' by the value of 'coins[i]' and keep the index the same 
//      (as we can use the same coin again).
//   2. Skip the current coin:- move to the next coin by incrementing the index 'i' and leaving the 'amount' unchanged.
// - The total number of ways to form the amount is the sum of the two choices: (1. taking the current coin and 2. skipping the coin).
// - Store the result of these choices in 'dp[i][amount]' to avoid recomputation for the same subproblem later.
// TC:- O(N * M), where 'N' is the number of coins and 'M' is the total amount as we fill an N+1 x M+1 'dp' array.
// SC:- O(N * M), due to the 2D 'dp' array and the recursion stack space is O(N), so overall SC is O(N * M).

var change = function(amount, coins) {
    let dp = Array.from({length: amount+1}, () => new Array(coins.length).fill(Infinity));
    return solve(0, amount, coins, dp);
    function solve(i, amount, coins, dp){
        if(amount === 0) return 1;
        if(amount < 0 || i >= coins.length) return 0;
        
        if(dp[amount][i] !== Infinity){
            return dp[amount][i];
        }

        let take = solve(i, amount-coins[i], coins, dp);
        let skip = solve(i+1, amount, coins, dp);

        return dp[amount][i] = take + skip;
    }
};


// Optimal Approach 2 (Best Approach): [Iterative Approach] 
// Use a 'dp' array to store the number of ways to make each amount from 0 to the target amount.
// Base case: for amount 0, there is only one way to make amount 0 that is by taking no coins, so we initialize dp[0] to
// 1. 
// For all other amounts, initially set their values to 0, indicating they cannot be formed yet.
// Iterate through each coin available. 
// For each coin, iterate through each amount starting from that coin, which ensures that we do not consider amounts 
// less than the current coin.
// For each amount (starting from the current coin), update that amount. Since the coin is less than or equal to the
// amount, it means we can include the current coin to make all amounts from the current coin up to the target amount.
// This effectively counts how many ways we can form the current amount by including the current coin. 
// Once all coins have been processed, return dp[amount], which represents the total number of ways to make the target amount.
// TC: O(N * M), where 'N' is the number of coins and 'M' is the target amount, due to the use of a nested loop.
// SC: O(M), where 'M' is the target amount.
// Note: Counting the number of all possible ways means counting each unique way, which refers to combinations, not permutations.
// Example:
// Permutations: To make amount 5 with coins [1, 2], both [1, 1, 2] and [2, 1, 1] are different.
// Combinations: To make amount 5 with coins [1, 2], [1, 1, 2] and [2, 1, 1] are considered the same — only one is counted.
// In this problem, to ensure that we count each combination only once, we iterate through each coin first,
// then for each amount starting from that coin to the target amount, we update the dp array.
// dp[i - coin] tells us how many ways we can make the remaining amount after taking the current coin. We add those
// ways to dp[i] because we are using the current coin in those combinations.


var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1; 
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]; 
        }
    }

    return dp[amount];
};
