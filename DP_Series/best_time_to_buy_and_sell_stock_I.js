// Leetcode Problem:- 121
// Brute force approach:
// approach:
// I will use nested loop where the outer loop represent a day to buy the stock and inner loop represent 
// all the possible days to sell that stock.
// for each buy sell pair, i will compute profit and update it in maxProfit if the current computed profit
// is maximum than already stored profit in maxProfit.

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
// Instead of using nested loops, I will solve the problem linearly.
// I will take a variable costPrice and initialize it with the first value of the prices array, considering it 
// as the lowest buying price seen so far.
// Then, while traversing the array, for each current price, I first check whether it is lower than the 
// previously stored costPrice. If it is, I will update costPrice because this gives me a better price to buy
// the stock. Otherwise, I will keep the previously stored costPrice.
// Then, I will consider the current price as the selling price and calculate the profit using: 
// current price - costPrice.
// If this profit is greater than the previously stored maxProfit, I will update maxProfit.
// Finally, I will return maxProfit.

// Time Complexity: O(N), because we traverse the prices array only once.
// Space Complexity: O(1), because we use only a few variables and no additional data structure.

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