// Leetcode Problem:- 322
// Problem Statement:-
// You are given an array 'coins' of different denominations and an integer 'amount'.
// You need to return the number of coins that sum up to the given 'amount'.
// You may assume that you have an infinite number of each kind of coin (i.e., you can take any coin any number of times).
// Example:
// coins = [1, 2, 5], amount = 5
// Possible combinations to make amount 5 are:
// - 1 + 1 + 1 + 1 + 1 = 5
// - 1 + 1 + 1 + 2 = 5
// - 1 + 2 + 2 = 5
// - 5 = 5
// these are valid combinations that sum up to 5, and you need to return the minimum number of coins which is 1()i.e, 5.

// Brute force appraoch:
// we use a recursive function 'solve' to explore all possible combinations of coins since we can use each coins 
// infinite number of time.
// Inside the 'solve' function:
// if amount === 0, it means we have found a valid way to make the exact amount, so we return 0 because 
// no more coins are needed.
// if amount < 0, return Infinity (indicating it's not possible to make the amount with this coin). 
// Explanation: A negative amount indicates that we have taken more coins than required, leading to an invalid solution, 
// so we return Infinity to avoid this path.
// if i >= n, where 'n' is the length of the coins array, return Infinity because we’ve explore all available coins, 
// and no valid combination is possible. 
// Explanation: Returning 0 here would be incorrect, as it would suggest we have successfully formed the amount even 
// when no more coins are left.
// if the value of the current coin at coins[i] is greater than the remaining amount, we skip this coin and move to the 
// next one by recursively calling the solve function with i + 1.
// Otherwise, if the current coin is less than or equal to the remaining amount, there are two possible choices:
//  - Take the current coin: Reduce the amount by the value of coins[i] and keep the index i the same
//  (as we can use the same coin multiple times).
//  - Skip the current coin: Move to the next coin by incrementing the index i, leaving the amount unchanged.
// the result is the minimum of both choices (i.e., taking the current coin and skipping the current coin), 
// which ensures that we find the minimum number of coins required.
// TC:- O(2^N), where 'N' is the number of coins as for each coin, we have two choices (take or skip).
// SC:- O(N), where, 'N' is the maximum depth of the recursion stack.

var coinChange = function(coins, amount) {
    let n = coins.length;
    let result = solve(coins, 0, amount, n);
    return result === Infinity ? -1 : result;
};

function solve(coins, i, amount, n) {
    if (amount === 0) {
        return 0; 
    }
    if (i >= n || amount < 0) {
        return Infinity; 
    }

    let take = 1 + solve(coins, i, amount - coins[i], n); 
    let skip = solve(coins, i + 1, amount, n);

    return Math.min(take, skip);
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// use a 'dp' array to store the results of already solved subproblems to avoid redundant calculations.
// use a recursive function 'solve' to explore all possible combinations of coins to make up the given 'amount'.
// Inside the 'solve' function:
// if amount === 0, it means we have found a valid way to make the exact amount, so we return 0 because no more coins are needed.
// if amount < 0, return Infinity (indicating it's not possible to make the amount with this coin). 
// Explanation: A negative amount indicates that we have taken more coins than required, leading to an invalid solution, 
// so we return Infinity to avoid this path.
// if i >= n, where 'n' is the length of the coins array, return Infinity because we’ve explore all available coins, 
// and no valid combination is possible. 
// Explanation: Returning 0 here would be incorrect, as it would suggest we have successfully formed the amount even 
// when no more coins are left.
// before solving a subproblem, check if it is already solved by looking into 'dp[i][amount]', 
// if 'dp[i][amount] !== -1', return the precomputed result of subproblem to avoid recalculating.
// if the value of the current coin at coins[i] is greater than the remaining amount, we skip this coin and move to the next
// one by recursively calling the solve function with i + 1.
// Otherwise, if the current coin is less than or equal to the remaining amount, there are two possible choices:
//  - Take the current coin: Reduce the amount by the value of coins[i] and keep the index i the same (as we can use the same coin multiple times).
//  - Skip the current coin: Move to the next coin by incrementing the index i, leaving the amount unchanged.
// the result is the minimum of both choices (i.e., taking the current coin and skipping the current coin), 
// which ensures that we find the minimum number of coins required.
// - Store the result of these choices in 'dp[i][amount]' to avoid recomputation for the same subproblem later.
// TC:- O(N * M), where 'N' is the number of coins and 'M' is the total amount as we fill an N+1 x M+1 'dp' array.
// SC:- O(N * M), due to the 2D 'dp' array and the recursion stack space is O(N), so overall SC is O(N * M).

var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, () => Array(amount+1).fill(-1))
    let result = solve(coins, 0, amount, n, dp);
    return result === Infinity ? -1 : result;
};

function solve(coins, i, amount, n, dp) {
    if (amount === 0) {
        return 0; 
    }
    if (i >= n || amount < 0) {
        return Infinity; 
    }
    
    if(dp[i][amount] !== -1){
        return dp[i][amount];
    }
    let take = 1 + solve(coins, i, amount - coins[i], n, dp);
    let skip = solve(coins, i + 1, amount, n, dp);

    return dp[i][amount] = Math.min(take, skip);
}

// Optimal Approach (Best Approach): [Iterative Approach]
// Use a 'dp' array to store the minimum number of coins required for each amount from 0 to the target amount.
// Base case: For amount 0, it takes 0 coins, so we initialize dp[0] = 0.
// For all other amounts, initially set their values to Infinity, indicating that those amounts cannot yet be formed 
// with the given coins.
// Iterate through each amount from 1 to the target amount.
// For each amount, iterate through all coins.
// If the current coin is less than or equal to the amount,
// update dp[i] using: dp[i] = Math.min(dp[i], dp[i - coin] + 1).
// Here, dp[i] represents the minimum number of coins needed to make up the current amount.
// dp[i - coin] is the minimum number of coins required to make up the remaining amount before the current amount.
// Adding 1 to dp[i - coin] accounts for including the current coin in the total number of coins required.
// After processing all amounts, dp[amount] will contain the minimum number of coins required to form the target amount.
// If dp[amount] is still Infinity, it means it's not possible to form that amount with the given coins, so return -1.
// Time Complexity: O(N * M), where 'N' is the number of coins and 'M' is the target amount, since we use a nested loop.
// Space Complexity: O(M), where 'M' is the target amount, since we have created a dp array of size M.

// In recursion, we start with the big problem and break it down into smaller subproblems (top-down approach).
// In iterative DP, we solve smaller subproblems first and build up to the big one (bottom-up approach).
// In the coin change problem, the iterative approach processes each amount from 1 to the target amount.
// For each amount, we iterate through all coins and explore the smaller remaining amount (amount - coin) to find the 
// minimum number of coins needed for the current amount.

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; 

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
