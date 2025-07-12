// Introduction to Sliding Window:-
// Four Different Patterns of Sliding Window:-

// rarely asked pattern.
// (1) Pattern First: Constant Window Size
// Example:
// Given an array of positive and negative integers and an integer 'k', you need to find the maximum sum 
// obtainable by picking 'k' consecutive elements.

// Brute Force Approach:
// Approach:
// use of nested loop, where the outer loop iterates from the start of the array to 
// the position where a complete window of size 'k' can reach and for each element, the inner loop calculates 
// the sum of the next 'k' consecutive elements.
// After calculating the sum for each window, compare it with `maxSum` to find the maximum sum. 
// Finally, return `maxSum` after all elements are processed.
// Time Complexity: O(N^2), due to the nested loop iterating through all possible windows.
// Space Complexity: O(1), as no additional space is used.

let arr = [-1,2,3,3,4,5,-1], k = 4;
console.log(findSum(arr,k));
function findSum(arr,k){
    let maxSum = -Infinity;
    for(let i=0;i<arr.length-k;i++){
        let sum = 0;
        for(let j=i;j<i+k;j++){
            sum+=arr[j];
        }

        maxSum = Math.max(sum,maxSum);
    }

    return maxSum;
}


// Optimal Approach: Using "Sliding Window"
// Approach:
// first calculate the sum of the first 'k' consecutive elements and store it as `currentSum`.
// then, slide the window across the array:
// for each new element entering in the window, add it to `currentSum`, and subtract the element that is sliding out.
// update `maxSum` accordingly with the maximum value found during the sliding process.
// Time Complexity: O(N), as we only pass through the array once.
// Space Complexity: O(1), as no additional space is used.

let arr1 = [-1,2,3,3,4,5,-1], K = 4;
console.log(findSum1(arr1,k));
function findSum1(arr1,K){
    let maxSum = -Infinity;
    let currentSum = 0;
    for(let i=0;i<K;i++){
        currentSum+=arr1[i];
    }
    maxSum = currentSum;
    for(let i=k;i<arr1.length;i++){
        currentSum+=arr1[i];
        currentSum-=arr1[i-k];
        maxSum = Math.max(currentSum,maxSum);
    }

    return maxSum;
}

// most asked pattern.
// (2) Pattern Second:- Longest subarray/substring where <condition>. 
// subarray => any consecutive(one after another) portion of the array and substring => any consecutive(one after another)
// portion of the string.
// Given an array of positive and negative integers and an integer 'k', you have to find out the window size where
// the sum is less than equal to k.
// Example:

// Brute force approach:
// approach:-
// generate all possible subarrays and calculate sum to get maximum window size whose sum is less than equal to k. 
// initialize maxWindow to -Infinity to keep track of the maximum window size found.
// use a nested loop where the outer loop 'i' iterates through each element, representing the start of the window.
// the inner loop 'j' iterates from the start index 'i' to the end of the array, calculating the sum of the window.
// if the sum of the current window is less than or equal to Sum, update maxWindow with the maximum value between 
// the current maxWindow and the size of the current window (j-i+1).
// but if sum is greater than given Sum break the loop.
// once, found maxWindow return it.
// Time Complexity: O(N^2), due to the nested loop.
// Space Complexity: O(1), as no additional space is used.

let arr2 = [2,5,1,7,10], Sum = 14;
console.log(findWindowsize(arr2,Sum));
function findWindowsize(arr2,Sum){
    let maxWindow = -Infinity;
    for(let i=0;i<arr2.length;i++){
        let sum = 0;
        for(let j=i;j<arr2.length;j++){
            sum+= arr2[j];
            if(sum <= Sum){
                maxWindow = Math.max(maxWindow, j-i+1);
            }
            if(sum>Sum){
                break;
            }
        }
    }

    return maxWindow;
}

// Optimal approach: Using "Sliding Window"
// approach:-
// initialize maxWindow to -Infinity to store the maximum window size found.
// use two pointers i and j to represent the start and end of the current window, 
// and a variable sum to store the sum of the current window.
// expand the window by moving j and adding arr2[j] to sum.
// if sum is less than or equal to Sum, update maxWindow with the maximum value 
// between maxWindow and the size of the current window (j-i+1).
// If sum exceeds Sum, shrink the window from the left by moving i and subtracting arr2[i]
// from sum until sum is less than or equal to Sum.
// Time Complexity: O(N), as we only pass through the array once.
// Space Complexity: O(1), as no additional space is used.

let arr3 = [2,5,1,7,10], Sum1 = 14;
console.log(findWindowsize(arr2,Sum));
function findWindowsize(arr2,Sum){
    let maxWindow = -Infinity;
    let i = 0, j = 0;
    let sum = 0;
    while(j<arr2.length){
        sum+= arr2[j];
        if(sum <= Sum){
            maxWindow = Math.max(maxWindow, j-i+1);
        }

        while(sum > Sum){
            sum-= arr2[i];
            i++;
        }

        j++;
    } 

    return maxWindow;
}

// (3) Pattern Third:- Number of subarray where <condition>. 
// Problem :- find the number of subarrays with sum equal to k.
// approach:- (find number of subarrays where sum <= k) - (find number of subarrays where sum <= (k-1))
// these kind of problem can be solved with the help of second type of problem's solution.
// you will see the third type of problem in this sliding window series. 

// rarely asked pattern.
// (4) Pattern Fourth:- shortest/minimum window where <condition>
// approach:- find the valid window and try to shrink that window which still satisfies the condition.