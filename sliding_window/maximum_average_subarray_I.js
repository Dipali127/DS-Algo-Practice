// Leetcode Problem:- 643
// Brute force approach:
// approach:
// consider all possible subarrays of size 'k' and calculate the sum for each subarray.
// once the sum is calculated, find the average and update the maxAvg if the current average is greater.
// after iterating through all subarrays, return maxAvg as the maximum average found. 
// TC: O((N-k)*k)
// Explanation:
// O(N-k): to iterate through each possible starting index of the subarray.
// O(k): to iterate through the elements of each subarray of size 'k' to calculate the sum.

var findMaxAverage = function (nums, k) {
    let maxAvg = -Infinity;
    for(let i=0;i<=nums.length-k;i++){
        let sum = 0, average;
        for(let j=i;j<i+k;j++){
            sum+= nums[j];
        }

        average = sum/k;
        maxAvg = Math.max(maxAvg, average);
    }

     return maxAvg;
}

// Optimal approach:
// approach:
// extend the window by moving pointer 'end' to the right of the given array 'nums' and calculate the sum by
// adding the value at index 'end'.
// once the window size reaches 'k', calculate the average and update maxAvg if the current average is higher.
// then, slide the window to the right by subtracting the value at index 'start' from the sum and incrementing
// pointer 'start' to get the next subarray of size 'k'. 
// continue this process until all possible subarrays of size 'k' are considered. 
// TC: O(N), Since both 'start' and 'end' pointer traverse through the array once.
// SC: O(1), Since no additional space is used apart from few variables.

var findMaxAverage = function (nums, k) {
    let maxAvg = -Infinity;
    let sum = 0; let start = 0, end = 0;
    while (end < nums.length) {
        sum += nums[end];
        if (end - start + 1 === k) {
            let avg = sum / k;
            maxAvg = Math.max(maxAvg, avg);
            sum-= nums[start++];
        }
        
        end++;
    }

    return maxAvg;
};

    
