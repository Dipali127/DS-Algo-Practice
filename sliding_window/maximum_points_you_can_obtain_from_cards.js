// Leetcode Problem
// Problem statement:  
// You are given a `cardPoints` array, and you can take up to `k` cards either from  
// the beginning or the end of the array. Your task is to return the maximum score you can obtain.  

// Brute Force Approach:  
// Approach:  
// To solve this problem, I will use two variables, `leftSum` and `rightSum`.  
// - `leftSum` stores the sum of the first `i` cards taken from the beginning.  
// - `rightSum` stores the sum of the last `k - i` cards taken from the end.  
// I will also use a variable `maxSum` to keep track of the maximum score obtained.  

// To maximize the score, I will consider `k` cards in different possible ways:  
// (1) Take no cards from the beginning (`leftSum = 0`) and take all `k` cards from the end (`rightSum = sum of 
// last k cards`).  
// (2) Take some cards from the beginning and the remaining from the end.  
// (3) Take all `k` cards from the beginning (`leftSum = sum of first k cards`) and none from the end 
// (`rightSum = 0`).  
// I will iterate through all possible combinations and update `maxSum` accordingly cards and return it once 
// after iterating through k cards from begining and end of the cardPoints array.
// TC: O(k²), since we are iterating through `k` possible cards, and for each card, we calculate the sum of up 
// to `k` elements.  
// The worst-case time complexity is **O(k²)** when `k == N`.  
// SC: O(1), since no additional space is used apart from a few variables.  

var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let maxSum = 0;

    for (let i = 0; i <= k; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += cardPoints[j];
        }

        for (let j = 0; j < k - i; j++) {
            rightSum += cardPoints[n - 1 - j];
        }

        maxSum = Math.max(maxSum, leftSum + rightSum);
    }

    return maxSum;
};

// Optimal Approach:
// instead of directly picking k cards from the beginning or end, which increases time complexity to O(k²) in the worst case,
// i realized that picking k cards is the same as removing n - k consecutive cards from the middle (to the left),
// because the remaining sum would be our maximum possible score.
// To efficiently find the smallest sum of n - k elements, I will use of the sliding window technique:
//  - First, I will calculate the total sum of the array.
//  - Then, I will compute the sum of the first n - k elements (this is our initial window).
//  - Next, I will slide the window across the array, updating the sum by adding the new element and removing the old one.
//  - I will keep track of the minimum window sum as I move.
// (Note:- We keep track of the smallest sum found in any sliding window because removing this minimized sum will maximize the sum of the remaining k elements.)
//  - Finally, I will subtract this minimum sum from the total sum, which gives the maximum possible score.
// TC: O(k), since I will iterate through k cards.
// SC: O(1), since no additional space is used.

var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let totalSum = cardPoints.reduce((sum, num) => sum + num, 0);

    // If we take all cards, return total sum
    if (k === n) return totalSum;

    let windowSize = n - k;
    let windowSum = 0;

   
    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindowSum = windowSum;

// slide the window across array to remove n-k elements from middle to 0rth index
    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return totalSum - minWindowSum;
};

