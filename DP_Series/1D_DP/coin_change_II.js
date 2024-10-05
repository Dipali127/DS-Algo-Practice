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
// - if 'amount === 0', it means we have found one valid way to make the exact 'amount', so we return 1 to count this combination.
// - if the index 'i' is greater than or equal to 'n', it means we have already checked all available coins, 
//   and no valid way was found for the remaining 'amount', so we return 0.
// - if the value of the current coin at 'coins[i]' is greater than the remaining 'amount', skip this coin
//   and recursively call the 'solve' function with the next coin (i.e., increment the index 'i').
// - Otherwise, if the current coin is less than or equal to the remaining 'amount', there are two possible choices:
//   1. Take the current coin:- reduce the 'amount' by the value of 'coins[i]' and keep the index the same 
//      (as we can use the same coin again).
//   2. Skip the current coin:- move to the next coin by incrementing the index 'i' and leaving the 'amount' unchanged.
//   - The total number of ways is the sum of both above choices i.e (1. taking the current coin and 2. skipping the current coin).
// TC:- O(2^N), where 'N' is the number of coins as for each coin, we have two choices (take or skip).
// SC:- O(N), where, 'N' is the maximum depth of the recursion stack.

var change = function (amount, coins) {
    let n = coins.length;
    return solve(coins, 0, amount, n);
};

function solve(coins, i, amount, n) {
    if (amount === 0) {
        return 1;
    }
    if (i >= n) {
        return 0;
    }
    if (amount < coins[i]) {
        return solve(coins, i + 1, amount, n);
    }

    let take = solve(coins, i, amount - coins[i], n);
    let skip = solve(coins, i + 1, amount, n);

    return take + skip;
}

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

var change = function (amount, coins) {
    let n = coins.length;
    let dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(-1));
    return solve(coins, 0, amount, n, dp);
};

function solve(coins, i, amount, n, dp) {
    if (amount === 0) {
        return 1;
    }
    if (i >= n) {
        return 0;
    }
    if(dp[i][amount] !== -1){
        return dp[i][amount];
    }
    if (amount < coins[i]) {
        return dp[i][amount] = solve(coins, i + 1, amount, n, dp);
    }

    let take = solve(coins, i, amount - coins[i], n, dp);
    let skip = solve(coins, i + 1, amount, n, dp);

    return dp[i][amount] = take + skip;
}


// Optimal Approach2 (Best Approach): [Iterative Approach] 
// use a 'dp' array to store the number of ways to make each amount start from 0 to the target amount.
// Base case: for amount 0, there is 1 way to make it (using no coins), so we initialize dp[0] to 1. 
// for all other amounts, initially set their values to 0, indicating they cannot be formed yet.
// iterate through each coin available. 
// for each coin, update the dp array for every amount from the coin's value up to the target amount. 
// the inner loop starts from the value of the current coin to ensure that we do not consider amounts less than the coin value.
// for each amount, update the number of ways to form that amount by adding the number of ways to form (current amount - coin value). 
// this effectively counts how many ways we can form the current amount by including the current coin. 
// once all coins have been processed, return dp[amount], which represents the total number of ways to make the target amount.
// TC: O(N * M), where 'N' is the number of coins and 'M' is the target amount.
// SC: O(M), where 'M' is the target amount.

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
