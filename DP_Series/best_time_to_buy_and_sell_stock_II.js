// Leetcode Problem:- 122
// Problem Says:-
// You are given an array 'prices' where 'prices[i]' represents the price of a given stock on the ith day.
// Your task is to find the maximum profit you can achieve by buying and selling stocks.
// Conditions:
//  - You can complete as many transactions as you like (i.e., you can buy and sell the stock as many times as you want).
//  - However, you can't buy a stock again before selling previous buying stock (you need to sell before buying again).
// Brute force approach:- [Top - Down Approach](Using Recursion)
// Approach:-
// call a function 'maxProfits' which return the maximum profit.
// Inside 'maxProfits' function:
//  - Base Case: if 'day' is greater than or equal to 'n' (length of the prices array), return 0 as there are no more days left.
//  otherwise, at each day, you have two choices:
//           - if it's a "buy" day, you can choose to either buy the stock or skip it (buy or not_buy).
//           - if it's a "sell" day, you can choose to either sell the stock or skip it (sell or not_sell).
//           - At each recursive step, calculate and update the maximum profit based on the decisions made 
//             (buy, sell, or skip).
// once find the maximum profit, return it.
// TC:- O(2^N), since on each day you have two options:- (buy or skip, sell or skip), 
// the number of recursive calls grows exponentially, leading to O(2^n) time complexity.
// SC:- O(N), the maximum depth of recursion is n because in the worst case, the recursion proceeds through all days. 
// 

// You are given an array 'prices' where 'prices[i]' represents the price of a given stock on the ith day.
// Your task is to find the maximum profit you can achieve by buying and selling stocks.

// Conditions:
//  - You can complete as many transactions as you like (i.e., buy and sell the stock multiple times).
//  - However, you must sell the previously bought stock before buying again.

// 🔹 Brute Force Approach – [Top-Down using Recursion]

// Approach:
// Call a function 'maxProfits' which returns the maximum profit.
// Inside the 'maxProfits' function:
//  - Base Case: If 'day' is greater than or equal to 'n' (length of the prices array), return 0 as there are no more days left.
//  - Otherwise, on each day, you have two choices:
//      - If it's a "buy" day, you can either buy the stock or skip it (buy or not_buy).
//      - If it's a "sell" day, you can either sell the stock or skip it (sell or not_sell).
//  - At each recursive step, calculate and return the maximum profit based on the decisions made (buy, sell, or skip).

// Time Complexity: O(2^n) – At each day, you have two choices (buy or skip, sell or skip), leading to exponential growth.
// Space Complexity: O(n) – The maximum depth of recursion is n, as in the worst case, recursion proceeds through all days.

var maxProfit = function (prices) {
    let n = prices.length;
    return maxProfits(prices, 0, true, n);
};

function maxProfits(prices, day, buy, n) {
    if (day >= n) {
        return 0;
    }

    let maxProfit = 0;
    if (buy) {
        // Subtract the current day's buy price from the profit you get from the next day (after buying)
        let take = maxProfits(prices, day + 1, false, n) - prices[day];
        // Skip buying today and consider buying on the next day
        let notTake = maxProfits(prices, day + 1, true, n);
        maxProfit = Math.max(take, notTake);
    } else {
        // Add the current day's sell price to the profit you get from the next day (after selling)
        let sell = prices[day] + maxProfits(prices, day + 1, true, n);
        // Skip selling today and consider selling on the next day
        let notSell = maxProfits(prices, day + 1, false, n);
        maxProfit = Math.max(sell, notSell);
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
// We use flag ? 1 : 0 to convert the boolean flag to integer 1 or 0 for proper array indexing in dp because in JavaScript:
// dp[day][true] is treated as dp[day]["true"], which is undefined
// dp[day][false] is treated as dp[day]["false"], which is undefined



var maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(Array(n), () => Array(2).fill(-1));
    return maxProfits(prices, 0, n, true, dp); 
};

function maxProfits(prices, day, n, buy, dp) {
    if (day >= n) {
        return 0;
    }

    if (dp[day][buy ? 1 : 0] !== -1) {
        return dp[day][buy ? 1 : 0];
    }

    let maxProfit = 0;

    if (buy) {
        let take = maxProfits(prices, day + 1, n, false, dp) - prices[day];
        let notTake = maxProfits(prices, day + 1, n, true, dp);
        maxProfit = Math.max(take, notTake);
    } else {
        let sell = prices[day] + maxProfits(prices, day + 1, n, true, dp);
        let notSell = maxProfits(prices, day + 1, n, false, dp);
        maxProfit = Math.max(sell, notSell);
    }

    dp[day][buy ? 1 : 0] = maxProfit;
    return maxProfit;
}


// Optimal Approach2:- [Using Bottom Up DP] (Iterative Solution)
// Approach:-
// create a 'dp' array with size n+1. The reason for n+1 is that, when you sell a stock on the last day,
// you may need to look one days ahead (dp[i+1]). We fill it with 0 initially, as no profit can be made after all days are processed.
// dp[i][0]:- stores the maximum profit on day 'i' when you are in a sell state (you are allowed to sell).
// dp[i][1]:- stores the maximum profit on day 'i' when you are in a buy state (you are allowed to buy). 
// start iterating backward from the last day (i = n-1) to the first day (i = 0), filling in the 'dp' array. 
// while filling the table and calculating profit for each day:
// - If 'buy === 1', it means we're in a state where we can buy the stock and we have two options:
//    (1) Option 1:- Buy the stock on day i (which costs prices[i]), and then move to the next day in a sell state (dp[i + 1][0]).
//    (2) Option 2:- Skip buying on day i and stay in the buy state (dp[i + 1][1]). 
//    - take the maximum of these two options to get the best possible profit.
// - If 'buy === 0', it means we're in a state where we can sell the stock, and we have two options:
//    (1) Option 1: Sell the stock on day i (earning prices[i]), and move to day i+1 in a buy state.
//    (2) Option 2: Skip selling on day i and stay in the sell state (dp[i + 1][0]).
//    - again, take the maximum of these two options to get the best possible profit.
// Once the 'dp' table is fully filled, return dp[0][1], which holds the maximum possible profit starting from the first day
// in a buy state.
// TC:- O(N), we iterate over the 'prices' array once (n days), and for each day, we perform a constant amount of work
// (checking two possible states: buy and sell), resulting in a linear time complexity of O(n).
// SC:- O(N), as we are using a 'dp' table of size 'n+1' with two states (buy and sell).

// Note: The reason we start from the last day is that to calculate today's profit, we need to know the future day's profits.
// By filling the table backward, we ensure that when calculating the value for a given day i, we already have the
// future values we need. For example, let's say n = 5. We start filling from the last day (n-1) and assume we sell on the last day.
// To calculate the profit one days ahead, we need dp[i+1]. That's why we consider the size of 'dp' as 'n+1'.

var maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(Array(n+1), () => Array(2).fill(0));
    for(let i = n - 1; i >= 0; i--){
        for(let buy = 0; buy < 2; buy++){
            if(buy === 1){
              dp[i][buy] = Math.max(-prices[i] + dp[i+1][0], dp[i+1][1])  
            }else{
                dp[i][buy] = Math.max(prices[i] + dp[i+1][1], dp[i+1][0])
            }
        }
    }

    return dp[0][1];
};
