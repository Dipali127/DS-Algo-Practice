// GeeksforGeeks Problem
// Brute force approach:
// approach:-
// consider(take) all possible subarray of size 'k' and find the sum for that subarray menawhile update the sum in
// maxSum if the current sum is greater than the previous maximum sum and return it once process all the subarray.
// TC:- O(N^2) because use of nested loop.
// SC:- O(1), since no additional space is used.

class Solution {
    maximumSumSubarray(arr, k) {
        let maxSum = -Infinity;
        for(let i = 0; i <= arr.length - k; i++){
            let sum = 0;
            for(let j = i; j < i+k; j++){
                sum+=arr[j];
            }
            
            maxSum = Math.max(maxSum,sum);
        }
        
        return maxSum;
        
    }
}

// optimal approach:
// approach:
// extend window using 'end' pointer meanwhile calculate sum for current window.
// once found the window length equals to 'k' update the value in maxSum variable after then shrink the 
// window to get the new maximum sum but before that remove the start value of current window pointed by 'start'
// pointer because that value is not part of new window after shrink the window toward right.
// TC:- O(N), as each value of array are traverse once. 
// SC:- O(1), since no additional space is used.
class Solution {
    maximumSumSubarray(arr, k) {
        let maxSum = -Infinity;
        let start = 0, end = 0, sum = 0;
        while(end<arr.length){
            sum+= arr[end];
            if(end - start + 1 === k){
                maxSum = Math.max(maxSum, sum);
                sum-= arr[start++];
            }
            end++;
        }
        
        return maxSum;
        
    }
}
