// Leetcode Problem:- 1343
// Problem:-
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of
// size k and average greater than or equal to threshold.

// Brute force approach:
// Approach:
// Take a variable 'countSub' to keep track of the number of subarrays whose average is greater than or equal
// to the threshold.
// Consider each possible subarray of size 'k', and for each subarray, take a variable 'sum' to compute the 
// sum of its 'k' elements.
// After computing the sum of the 'k' elements, take a variable 'avg' to calculate the average of the current
// subarray.
// If the average of the current subarray is greater than or equal to the threshold, increment 'countSub'.
// Finally, after finding all the subarrays whose average is greater than or equal to the threshold,
// return 'countSub'.

// Time Complexity:- O(N*K), Explanation:-
// O(N) used by the outer loop to consider each possible subarray.
// O(K) used by the inner loop to traverse through the 'k'-size subarray.
// Overall TC:- O(N * K)

// Space Complexity:- O(1), since no additional space is used apart from a few variables.

var numOfSubarrays = function(arr, k, threshold) {
    let countSub = 0;
    for(let i = 0; i <= arr.length - k; i++){
        let sum = 0;
        for(let j = i; j < i+k; j++){
            sum+= arr[j];
        }

        let avg = sum/k;
        if(avg >= threshold){
            countSub++;
        }
    }

    return countSub;
};

// Optimal Approach: Using Sliding Window and Two Pointer Technique.
// Approach:
// Instead of using a nested loop, which increases the time complexity, I will use the sliding window technique
// with two pointers, where both 'start' and 'end' are initially set to 0.
// Traverse the current window using the 'end' pointer.
// While traversing the current window, add the current element to 'sum'.
// Once the window size becomes 'k', calculate the average and check whether it is greater than or equal to
// the threshold.
// If it is, increment 'countSub'.
// Then, before sliding the window, subtract the element that is leaving the current window from 'sum'
// using the 'start' pointer.
// Increment 'start' to move the window forward, and continue traversing the array using the 'end' pointer.
// Finally, return 'countSub', which represents the total number of valid subarrays whose average is
// greater than or equal to the threshold.

// Time Complexity:- O(N), since both 'start' and 'end' pointers traverse through the array at most once.
// Space Complexity:- O(1), since no additional space is used apart from a few variables.

var numOfSubarrays = function (arr, k, threshold) {
    let countSub = 0, start = 0, end = 0, sum = 0;
    while (end < arr.length) {
        sum += arr[end];

        if (end - start + 1 === k) {
            avg = sum / k;
            if(avg >= threshold){
                countSub++;
            }

            sum-= arr[start];
            start++;
        }

        end++;
    }

    return countSub;
};

