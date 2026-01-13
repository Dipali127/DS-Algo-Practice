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
// TC: O(k²), since we are iterating through `k` possible cards, and for each card, we calculate the sum 
// of up to `k` elements.  
// The worst-case time complexity is **O(N²)** when `k == N`.  
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

// Optimal Approach: Using Sliding Window Technique
// Instead of finding which k cards will give the maximum point, which increases
// the time complexity to O(k^2), I will find out which n - k cards should be removed
// from the cardPoints array so that I get the maximum sum.
// First, I will find the totalSum, then I will check if the given k equals the
// length of the cardPoints array. If yes, return totalSum since k is equal to n.
// - Otherwise, I will find the sum of n - k cards, which would be the minimum sum
//   subarray from the cardPoints array that I will remove, so that the remaining
//   sum gives the maximum score.
//   Once the minimum sum is found by taking n - k cards, I will initialize this
//   minimum sum into the windowSum variable to find the exact window that contains
//   the minimum sum.
// - Next, I will slide the window across the array, updating the windowSum by
//   adding the new element and removing the old one, while updating minWindowSum
//   by taking the minimum between minWindowSum and windowSum.
// - Finally, I will subtract this minimum sum from the total sum, which gives the
//   maximum possible score.
// TC: O(n), since we iterate through the array once.
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

    // Slide the window across the array to remove n - k elements
    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return totalSum - minWindowSum;
};
