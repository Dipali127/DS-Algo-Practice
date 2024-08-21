// Leetcode problem:
// optimal approach:
// iterate through the prices array and check if the price on the next day is higher than the current day.
// if the selling price (prices[sell]) is higher than the buying price (prices[buy]), 
// calculate the profit (difference between sell and buy prices) and add it to totalProfit and return it.
// TC: O(N) because we only traverse the array once.
// SC: O(1) because no additional space is used apart from the totalProfit variable.
 
var maxProfit = function (prices) {
    let totalProfit = 0;
    let profit;
    for (let buy = 0; buy < prices.length; buy++) {
        let sell = buy + 1;
        if (prices[sell] > prices[buy]) {
            profit = prices[sell] - prices[buy];
            totalProfit += profit;
        }
    }

    return totalProfit;
};