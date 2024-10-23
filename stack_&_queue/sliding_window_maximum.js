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

// Optimal Approach: Using 'monotonic dequeue'
// Approach:-
// use a 'dequeue' to store indices of useful elements in the current window. 
// This deque will maintain a decreasing order of values from front to back, 
// ensuring the maximum element of the window is always at the front of the deque.
// use an array 'result' to store the maximum values for each window of size 'k'.
// While iterating through the array 'nums', perform the following operations:
//  - remove indices of elements that are out of the current window (i.e., elements whose 
//     index is less than 'i - k + 1') from the front of the deque.
//  - remove indices of all elements from the back of the deque that are smaller than the 
//     current element 'nums[i]', because they are no longer useful.
//  - add the current element's index at the back of the deque. 
//  - once the first window is processed (i.e., when 'i >= k - 1'), 
//     add the element at the front of the deque (which is the maximum in the current window) to the 'result' array.
// TC:- O(N), where 'N' is the length of 'nums', as each element is added and removed from the deque at most once.
// SC:- O(k), to store indices of elements in the deque (with a maximum of 'k' elements at any time).

var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let dequeue = [];  
    let result = [];   

    for (let i = 0; i < n; i++) {
        // Remove indices of elements from dequeue that are not a part of current window
        if (dequeue.length > 0 && dequeue[0] < i - k + 1) {
            dequeue.shift();
        }

        // Remove indices of all elements from dequeue which are smaller than current element (nums[i])
        // from the back of the dequeue, because they are not useful.
        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
            dequeue.pop();
        }

        // Add the current element index at the back of the dequeue.
        dequeue.push(i);

        // Element at the front of the dequeue is the largest in the current window, so add that in 'results' array.
        if (i >= k - 1) {
            result.push(nums[dequeue[0]]);
        }
    }

    return result;
};
