//----------------------------------- Introduction to Sliding Window:--------------------------------------//

// What is Sliding Window?
// A sliding window is an optimization technique used to process a contiguous part (window) of an array or 
// string without repeatedly traversing the same elements.

// Why do we use Sliding Window?
// We use the "sliding window" technique to reduce the time complexity of a problem from O(N^2) to O(N).
// Without the sliding window technique, we repeatedly traverse the same elements
// while processing every subarray or substring.

// When do we use Sliding Window?
// The biggest clue is:
// The problem involves a contiguous subarray or contiguous substring.
// Words like these are strong hints:
// contiguous
// consecutive
// substring
// subarray
// window
// segment

// Four Different Patterns of Sliding Window:-

// (1) Pattern First:  Fixed Size Window
// Problems:
// (1) Maximum Sum of 'k' Consecutive Elements in an Array [GFG]
// (2) Maximum number of vowels in a substring of given length [LeetCode 1456] 
// (3) Maximum Average Subarray I [LeetCode 643]
// (4) Find All Anagrams in a String [Leetcode 438]
// (5) Permutation of a String [Leetcode 567]
// (6) Number of Sub-arrays of Size K and Average ≥ Threshold [Leetcode 1343]
// (7) Maximum Sum of Distinct Subarrays With Length K [Leetcode 2461]

// Example:
// Brute Force Approach:
// Approach:
// Given an array of positive and negative integers and an integer 'k', you need to find the maximum
// sum obtainable by picking 'k' consecutive elements.
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
// for each new element entering in the window, add it to `currentSum`, and subtract the element that is
// sliding out.
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

// (2) Pattern Second:- Variable Size Window (Longest subarray/substring where <condition>).
// subarray => any consecutive(one after another) portion of the array and substring => any consecutive
// (one after another) portion of the string.

// Problems:
// (1) Longest Substring Without Repeating Characters [LeetCode 3]
// (2) Longest Repeating Character Replacement [LeetCode 424]
// (3) Given an array of positive and negative integers and an integer 'k', you have to find out the 
// window size where the sum is less than equal to k.
// (4) length of longest subarray with at most k frequency [Leetcode  2958]
// (5) Fruit Into Baskets [Leetcode 904]
// (6) Maximum Consecutive Ones III [Leetcode 1004]

// Example:
// Brute force approach:
// approach:-
// generate all possible subarrays and calculate sum to get maximum window size whose sum is less than
// equal to k. 
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

// (3) Pattern Third:- Number of subarrays where <condition>.
// This pattern is divided into two parts:-

// 3.1) Pattern 3A: Number of subarrays with an <Exact Condition> (== k, == sum, == goal, etc).
// => Use only when all elements of the array and k are non-negative and the condition is exact.
//
// Approach:
// (find number of subarrays where sum <= k) - (find number of subarrays where sum <= (k - 1))
// Exactly K = At Most K − At Most (K − 1)
// For counting, use the formula:
// count += end - start + 1
//
// Problems:
// (1) Count Number of Nice Subarrays [LeetCode 1248]
// (2) Binary Subarrays With Sum [LeetCode 930]
// (3) Subarray with k different integers [Leetcode 992]
//
// ----------------------------------------------------

// 3.2.i) Pattern 3B: Number of subarrays with an <At Least Condition> (>= k)
// => Used when the problem asks for COUNT of subarrays or substrings greater than or equal to k.

// Counting Formula:
// count += array.length - end, which gives the number of valid subarrays or substrings starting from the current 'start'
// and ending anywhere from 'end' to the last index.
// ----------------------------------------------------
// Problem:
// (1) Count Subarrays Where the Maximum Element Appears At Least k Times.
// (2) Number of Substrings containing all three characters.

// 3.2.ii) Pattern 3BB: Number of subarrays or substrings with a strictly less than condition (< k)
// Counting Formula:
// count += end - start + 1;
//
// Problem:
// (1) Subarray Product Less Than K (LeetCode 713)




// rarely asked pattern.
// (4) Pattern Fourth:- shortest/minimum window where <condition>
// approach:- find the valid window and try to shrink that window which still satisfies the condition.
// Problem:
// (1) minimum size subarray sum (leetcode 209) is an example of this pattern.)
// (2) Minimum Window Substring (leetcode 76)