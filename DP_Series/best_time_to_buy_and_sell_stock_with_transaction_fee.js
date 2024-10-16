// Leetcode Problem:- 714
// Problem Says:-
// You are given an array 'prices' where 'prices[i]' represents the price of a given stock on the ith day.
// Your task is to find the maximum profit you can achieve by buying and selling stocks.
// Conditions:
//  - You can complete as many transactions as you like (i.e., you can buy and sell the stock as many times as you want).
//  - However, you can't buy a stock before selling it (i.e., you need to sell before buying again).
//  - For each stock transaction (purchase and sale), a transaction fee is charged.

// Brute force approach:- [Top - Down Approach] (Using Recursion)
// Approach:-
// call a function 'maxProfits' which returns the maximum profit.
// Inside the 'maxProfits' function:
//  - Base Case: if 'day' is greater than or equal to 'n' (length of the prices array), return 0 as there are no more days left.
//  Otherwise, at each day, you have two choices:
//           - if it's a "buy" day, you can choose to either buy the stock or skip it (buy or not_buy).
//           - if it's a "sell" day, you can choose to either sell the stock or skip it (sell or not_sell).
//           - At each recursive step, calculate and update the maximum profit based on the decisions made (buy, sell, or skip).
//           - At each recursive step for selling, reduce the transaction fee (fee) from the profit.
// Once the maximum profit is found, return it.
// TC:- O(2^N), since on each day you have two options (buy or skip, sell or skip),
// the number of recursive calls grows exponentially, leading to O(2^n) time complexity.
// SC:- O(N), the maximum depth of recursion is n because in the worst case, the recursion proceeds through all days.

var maxProfit = function(prices, fee) {
    let n = prices.length;
    return maxProfits(prices, 0, true, n, fee);
};

function maxProfits(prices, day, buy, n, fee){
    if(day >= n){
        return 0;
    }

    let maxProfit = 0;
    if(buy){
        let take = maxProfits(prices, day+1, false, n,  fee) - prices[day];
        let notTake = maxProfits(prices, day+1, true, n, fee);
        maxProfit = Math.max(take, notTake);
    }else{
        let sell = prices[day] + maxProfits(prices, day+1, true, n, fee) - fee;
        let notSell = maxProfits(prices, day+1, false, n, fee);
        maxProfit = Math.max(sell, notSell);
    }

    return maxProfit;
}


// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization)
// Approach:-
// Use a 2D 'dp' array to store the results of subproblems (for both buy and sell states), 
// ensuring that previously computed subproblems are not recomputed, thus reducing the overall complexity.
// call a function 'maxProfits' which returns the maximum profit.
// Inside the 'maxProfits' function:
//  - Base Case: if 'day' is greater than or equal to 'n' (length of the prices array), return 0 
//    since there are no more days left for transactions.
//  - if the result for the current subproblem is already stored in the 'dp' array, return the cached value 
//    from 'dp' to avoid recomputation.
// Otherwise, at each day, you have two choices:
//           - if it's a "buy" day, you can either buy the stock or skip it (buy or not_buy).
//           - if it's a "sell" day, you can either sell the stock or skip it (sell or not_sell).
//           - At each recursive step, calculate and update the maximum profit based on the decisions made 
//             (buy, sell, or skip) and store the result in the 'dp' array for memoization.
//           - At each recursive step for selling, reduce the transaction fee (fee) from the profit.
// Once the maximum profit is computed, return it.
// TC:- O(N), where 'N' is the number of days. Since each day has at most two states (buy/sell), and we store the 
// results in the dp array, we only compute each subproblem once, leading to linear time complexity.
// SC:- O(N), Explanation:
// O(N):- Stack space used by the recursive function calls.
// O(N):- To store the results of subproblems to avoid redundant calculations. Even though it's a 2D array,
// the second dimension (2) is constant, so the space complexity is simplified to O(N).
// Overall SC: O(N).

var maxProfit = function(prices, fee) {
    let n = prices.length;
    let dp = Array.from(Array(n), () => Array(2).fill(-1))
    return maxProfits(prices, 0, true, n, fee, dp);
};

function maxProfits(prices, day, buy, n, fee, dp){
    if(day >= n){
        return 0;
    }
    
    if(dp[day][buy ? 1 : 0] !== -1){
        return dp[day][buy ? 1 : 0];
    }
    let maxProfit = 0;
    if(buy){
        let take = maxProfits(prices, day+1, false, n, fee, dp) - prices[day];
        let notTake = maxProfits(prices, day+1, true, n, fee, dp);
        maxProfit = Math.max(take, notTake);
    }else{
        let sell = prices[day] + maxProfits(prices, day+1, true, n, fee, dp) - fee;
        let notSell = maxProfits(prices, day+1, false, n, fee, dp);
        maxProfit = Math.max(sell, notSell);
    }

    dp[day][buy ? 1 : 0] = maxProfit;
    return maxProfit;
}

// Optimal Approach2:- [Using Bottom-Up DP] (Iterative Solution)
// Approach:-
// create a 'dp' array with size n+1. The reason for size n+1 is that, when you reach the last day and sell a stock, 
// you may need to look one day ahead (dp[i+1]) to compute the profit.
// Initialize the 'dp' array with 0, as no profit can be made after all the days are processed.
// dp[i][0]: stores the maximum profit on day 'i' when you are in a sell state (you are allowed to sell).
// dp[i][1]: stores the maximum profit on day 'i' when you are in a buy state (you are allowed to buy). 
// start iterating backward from the last day (i = n-1) to the first day (i = 0), filling the 'dp' array. 
// for each day and each possible state (buy/sell), calculate the maximum profit for that day: 
// - If 'buy === 1', it means we're in a state where we can buy the stock, and we have two options:
//    (1) Option 1:- Buy the stock on day i (which costs prices[i]), and move to the next day in a sell state (dp[i+1][0]).
//    (2) Option 2:- Skip buying on day i and remain in the buy state (dp[i+1][1]). 
//     - take the maximum of these two options to get the best possible profit.    
// - If 'buy === 0', it means we're in a state where we can sell the stock, and we have two options:
//    (1) Option 1:- Sell the stock on day i (earning prices[i]), and move to day i+1 in a buy state (dp[i+1][1]),
//        subtracting the transaction fee from the profit.
//    (2) Option 2:- Skip selling on day i and remain in the sell state (dp[i+1][0]).
//     - take the maximum of these two options to get the best possible profit.
// Once the 'dp' table is fully filled, return dp[0][1], which holds the maximum possible profit starting from day 0 
// when you are in the buy state (i.e., you are allowed to buy). 
// TC:- O(N), we iterate over the 'prices' array once (for each of the n days),
// and for each day, we perform a constant amount of work (checking two possible states: buy and sell), resulting in linear time.
// SC:- O(N), as we are using a 'dp' array of size 'n+1' with two states (buy and sell).

var maxProfit = function(prices, fee) {
    let n = prices.length;
    let dp = Array.from(Array(n+1), () => Array(2).fill(0))
    for(let i = n - 1; i >= 0; i--){
        for(let buy = 0; buy < 2; buy++){
            if(buy === 1){
                dp[i][buy] = Math.max(-prices[i] + dp[i+1][0], dp[i+1][1]);
            }else{
                dp[i][buy] = Math.max(prices[i] + dp[i+1][1] - fee, dp[i+1][0]);
            }
        }
    }

    return dp[0][1];
};