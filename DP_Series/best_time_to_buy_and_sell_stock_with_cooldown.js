// Leetcode Problem:- 309
// Problem Says:-
// You are given an array 'prices' where 'prices[i]' represents the price of a given stock on the ith day.
// Your task is to find the maximum profit you can achieve by buying and selling stocks.
// Conditions:
//  - You can complete as many transactions as you like (i.e., you can buy and sell the stock as many times as you want).
//  - However, you can't buy a stock before selling it (i.e., you need to sell before buying again).
//  - After selling, you have a cooldown period of one day before you can buy again. This means if you sell on the ith day, you can only buy again on the (i+2)th day.
// Brute force approach:- [Top - Down Approach](Using Recursion)
// Approach:-
// call a function 'maxProfits' which return the maximum profit.
// Inside 'maxProfits' function:
//  - Base Case: if 'day' is greater than or equal to 'n' (length of the prices array), return 0 as there are no more days left.
//  otherwise, at each day, you have two choices:
//           - if it's a "buy" day, you can choose to either buy the stock or skip it (buy or not_buy).
//           - if it's a "sell" day, you can choose to either sell the stock or skip it (sell or not_sell).
//           - At each recursive step, calculate and update the maximum profit based on the decisions made (buy, sell, or skip).
// once find the maximum profit, return it.
// TC:- O(2^N), since on each day you have two options:- (buy or skip, sell or skip), 
// the number of recursive calls grows exponentially, leading to O(2^n) time complexity.
// SC:- O(N), the maximum depth of recursion is n because in the worst case, the recursion proceeds through all days.
var maxProfit = function(prices) {
    let n = prices.length;
    return maxProfits(prices, 0, n, true);
};

function maxProfits(prices, day, n, buy){
    let maxProfit = 0
    if(day >= n){
        return 0;
    }

    if(buy){
        let take = maxProfits(prices, day+1, n, false) - prices[day];
        let not_take = maxProfits(prices, day+1, n, true);
        maxProfit = Math.max(maxProfit, take, not_take);
    }else{
        let sell = prices[day] + maxProfits(prices, day+2, n, true);
        let not_sell = maxProfits(prices, day+1, n, false);
        maxProfit = Math.max(maxProfit, sell, not_sell);
    }
    return maxProfit;
} 

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization)
// Approach:-
// use a 2D 'dp' array to store the results of subproblems (for both buy and sell states).
// call a function 'maxProfits' which return the maximum profit.
// Inside 'maxProfits' function:
//  - Base Case: if 'day' is greater than or equal to 'n' (length of the prices array), return 0 as there are no more days left.
// - If the result for the current subproblem is already stored in the 'dp' array, return the cached value from 'dp' to avoid recomputation.
// otherwise, at each day, you have two choices:
//           - if it's a "buy" day, you can choose to either buy the stock or skip it (buy or not_buy).
//           - if it's a "sell" day, you can choose to either sell the stock or skip it (sell or not_sell).
//           - At each recursive step, calculate and update the maximum profit based on the decisions made 
//              (buy, sell, or skip) store the result in the 'dp' array for memoization.
// Once the maximum profit is computed, return it.
// TC:- O(N), where 'N' is the number of days. Since each day has at most two states (buy/sell), and we store the 
// results in the dp array, we only compute each subproblem once, leading to linear time complexity.
// SC:- O(N), Explanation:
// O(N):- stack space used by recursive function.
// O(N):- to store the results of subproblems to avoid redundant calculations. Even though it's a 2D array,
// it can be simplified to O(N) because the second dimension (2) is a constant factor.
// overall, SC:- O(N).

var maxProfit = function(prices) {
    let n = prices.length;
    let dp = Array.from(Array(n), () => Array(2).fill(-1));
    return maxProfits(prices, 0, n, true, dp); 
};

function maxProfits(prices, day, n, buy, dp) {
    if (day >= n) return 0; 

    if (dp[day][buy ? 1 : 0] !== -1) {
        return dp[day][buy ? 1 : 0]; 
    }
    
    let maxProfit = 0; 
    
    if (buy) {
        let take = maxProfits(prices, day + 1, n, false, dp) - prices[day]; 
        let not_take = maxProfits(prices, day + 1, n, true, dp); 
        maxProfit = Math.max(maxProfit, take, not_take); 
    } else {
        let sell = prices[day] + maxProfits(prices, day + 2, n, true, dp); 
        let not_sell = maxProfits(prices, day + 1, n, false, dp); 
        maxProfit = Math.max(maxProfit, sell, not_sell); 
    }
    
    dp[day][buy ? 1 : 0] = maxProfit; 
    return maxProfit; 
}

// bottom up approach
var maxProfit = function(prices) {
    let n = prices.length;
    if (n === 0 || n === 1) {
        return 0;
    }

    let dp = new Array(n).fill(0);
    dp[0] = 0; // No profit on the first day
    dp[1] = Math.max(prices[1] - prices[0], 0); // Profit if sold on the second day

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1]; // Start with the previous day's max profit
        for (let j = 0; j < i; j++) { // j should run till i
            let today_profit = prices[i] - prices[j]; // Current profit if buying at j and selling at i
            let prev_profit = j >= 2 ? dp[j - 2] : 0; // Profit from two days before j
            dp[i] = Math.max(dp[i], today_profit + prev_profit); // Update dp[i] with the max profit
        }
    }

    return dp[n - 1]; // Return the maximum profit at the last day
};

