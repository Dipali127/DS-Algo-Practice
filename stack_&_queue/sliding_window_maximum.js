// Leetcode Problem:- 239
// Brute force approach: Using 'nested loop'
// Approach:
// use an array 'arr' to store the maximum value from each sliding window of size 'k'.
// use of a neseted loop where outer loop will traverse through the array 'nums' from the starting to 'nums.length - k',
// to ensure that we process each sliding window of size 'k'.
// and the inner loop will iterate over the elements within the current window (of size 'k') 
// and find the maximum value within that window.
// Once the maximum value for the current window is found, add it to the array 'arr'.
// After iterating through all possible sliding windows and storing their maximum values, return 'arr'.
// TC:- O(N * k), Explanation;
// O(N):- the outer loop runs 'N - k + 1' times, where 'N' is the length of the 'nums' array.
// O(k):- the inner loop runs 'k' times for each iteration of the outer loop to find the maximum.
// Overall, the time complexity is O(N * k).
// SC:- O(N), to store the maximum values of each sliding window in the array 'arr'. 

var maxSlidingWindow = function(nums, k) {
    let arr = new Array();
    for(let i = 0; i <= nums.length - k; i++){
        let max = 0;
        for(let j = i; j < i + k; j++){
            max = Math.max(max, nums[j]);
        }

        arr.push(max);
    }

    return arr;
};

// Optimal Approach: Using 'Monotonic Deque'
// Approach:
// Use a 'deque' to store indices of useful elements in the current window that are part of current window.
// This deque will maintain a decreasing order of values from front to back,
// ensuring that the maximum element of the current window is always at the front of the deque.
// Use an array 'result' to store the maximum values for each window of size 'k'.

// While iterating through the array 'nums', perform the following operations:
//  (i) Remove indices from the deque that are out of the current window (i.e., indices less than 'i - k + 1')
//  from the front of the deque.
//    i - k + 1 is the starting index of the current window.
//    In deque[0], if the index is less than the starting index of the current window, we delete it —
//    since we store indices in the deque from the back and the index at the front of the deque is the oldest index.
//  (ii) Remove indices of all elements from the back of the deque that are smaller than the
//    current element 'nums[i]', since we are using a monotonic **decreasing** dequeue
//    (the front of the deque should always contain the maximum value).
//  (iii) Add the current element's index to the back of the deque, since we're traversing the array from left to right.
//  (iv) whenever we found the window of size k (i.e., when 'i >= k - 1'),
//    add the element at the front of the deque (which is the maximum in the current window) to the 'result' array.

// Time Complexity: O(N), where 'N' is the length of 'nums', since each element is added and removed from the deque at most
//  once.
// Space Complexity: O(k), to store indices of elements in the dequeue (with a maximum of 'k' elements at any time).

// Note:
// What is a Deque?
// A Deque stands for Double-Ended Queue.
// It is a linear data structure that allows to insert and delete elements from both the front and the rear (end).

// What is a Monotonic Deque?
// A monotonic deque is a specialized form of double-ended queue (deque) where the elements are maintained in 
// either increasing or decreasing order.
// And here in this problem, I have used the deque in decreasing order so that it becomes
// easy to fetch the maximum value from the front of the deque instead of searching for that value.
// It is commonly used in algorithmic problems that involve efficiently tracking the maximum or minimum values 
// in a sliding window or range.
// The deque is updated in such a way that irrelevant elements (that can no longer affect the result) are removed,
// maintaining only the potential candidates for the min or max.

var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let deque = [];  
    let result = [];   

    for (let i = 0; i < n; i++) {
        // Remove indices from the front of the deque that are not a part of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices of all elements from the deque that are smaller than the current element (nums[i])
        // from the back of the deque, because they are not useful.
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element index to the back of the deque.
        deque.push(i);

        // Element at the front of the deque is the largest in the current window, so add that to the 'result'
        // array.
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
