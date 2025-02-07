// Leetcode Problem:- 121
// Leetcode Problem:- 121
// Brute force approach:
// approach:
// i will find all possible profits using nested loops where,
// the first loop is used for buying a stock, and the second loop is used for selling a stock.
// while iterating through the inner loop, I will calculate the profit by taking the difference between the selling price and the buying price.
// if the currently computed profit is greater than the previously stored profit in maxProfit, I will update it.
// finally, i will return maxProfit.
// Time Complexity: O(N²), due to the use of nested loops.
// Space Complexity: O(1), as no additional space is used apart from maxProfit.

var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};


// Optimal Approach:
// approach:
// instead of using nested loops, i will solve the problem linearly.
// i initialize costPrice with the first value of the prices array, considering it as the stock's buying price.
// while iterating through the array, I check if the current price is lower than the previously stored costPrice.
// if so, i will update costPrice to this minimum value, since we aim to buy the stock at the lowest price.
// meanwhile, i will compute the profit and check if it is greater than the previously stored maxProfit. If so, I will update maxProfit.
// finally, i will return maxProfit.
// Time Complexity: O(N), as we traverse the prices array only once.
// Space Complexity: O(1), as no additional space is used apart from maxProfit and costPrice.

var maxProfit = function(prices) {
    let maxProfit = 0;
    let costPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        if(costPrice > prices[i]){
            costPrice = prices[i];
        }

        let profit = prices[i] - costPrice;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};