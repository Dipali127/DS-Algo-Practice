// Leetcode Problem:
// brute force appraoch:
// find all possible profit by using nested loops and return the maximum profit.
// first loop is used for buying stock and second loop is used for selling stock
// profit is calculated by taking difference of selling stock value with buying stock value.
// TC: O(N^2), as use of nested loops.
// SC: O(1), as there is no additional space used apart from maxProfit.

var maxProfit = function(prices) {
    let maxProfit = 0;
    let diff;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            diff = prices[j] - prices[i];
            maxProfit = Math.max(diff, maxProfit);
        }
    }

    return maxProfit;
};

// Optimal approach:
// initialize 'minPrice' with the first element of the `prices` array which will be our buying price.
// initialize 'maxProfit' to 0 to keep track of the maximum profit.
// iterate through the `prices` array:
// for each price, update `minPrice` if the current price is lower to achieve the maximum profit.
// calculate the profit by subtracting `minPrice` (buying price) from the current price (selling price).
// update 'maxProfit' if the calculated profit is higher than the current 'maxProfit'.
// TC: O(N), as the prices array is traversed only once.
// SC: O(1), as there is no additional space used apart from `maxProfit` and `minPrice`.

var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(profit, maxProfit);
    }

    return maxProfit;
}