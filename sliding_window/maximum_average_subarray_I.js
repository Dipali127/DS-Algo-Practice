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
// extend the window by moving pointer 'j' to the right of the given array 'nums' and calculate the sum by adding the value at index 'j'.
// once the window size reaches 'k', calculate the average and update maxAvg if the current average is higher.
// then, slide the window to the right by subtracting the value at index 'i' from the sum and incrementing pointer 'i' 
// to get the next subarray of size 'k'. 
// continue this process until all possible subarrays of size 'k' are considered. 
// TC: O(N), as we are iterating through the array only once.
// SC: O(1), as we are using a constant amount of extra space.

var findMaxAverage = function (nums, k){
    let i = 0, j = 0, sum = 0, maxAvg = -Infinity;
    while(j<nums.length){
        sum += nums[j];
        if(j-i+1 === k){
            let avg = sum/k;
            maxAvg = Math.max(maxAvg, avg);

            // once 'k' size subarray found, slide the window to get the next subarray.
            sum-= nums[i];
            i++;
        }

       

        j++;
    }

    return maxAvg;
}
