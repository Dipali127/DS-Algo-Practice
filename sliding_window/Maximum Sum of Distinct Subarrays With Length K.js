// Leetcode Problem:- 2461
// Problem:-
// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the 
// subarrays of nums that meet the following conditions:
// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets
// the conditions, return 0.

// Brute Force Approach:
// Approach:
// Take a variable 'maxSum' to keep track of the maximum sum of all valid subarrays.
// Consider each possible subarray of size 'k'. For each subarray, use a hash map to
// store the frequency of its elements.
// After storing the frequency of all the elements of the current subarray, check whether
// the map's size is equal to 'k'. If it is, it means all the elements of the current
// subarray are distinct.
// If the current subarray is valid, calculate the sum of all its elements and update
// 'maxSum' with the maximum value.
// Finally, after checking all possible subarrays of size 'k', return 'maxSum'.

// Time Complexity:- O(N * K), Explanation:-
// O(N) used by the outer loop to consider each possible subarray.
// O(K) used by the inner loop to traverse the 'k'-size subarray and store the frequency
// of its elements in the hash map.
// O(K) used to calculate the sum of the current valid subarray.
// Overall TC:- O(N * K)

// Space Complexity:- O(K), since the hash map can store at most 'k' distinct elements
// of the current subarray.

var maximumSubarraySum = function(nums, k) {
    let maxSum = 0;

    for(let i = 0; i <= nums.length-k; i++){
        let map = new Map();
        for(let j = i; j < i+k; j++){
            if(map.has(nums[j])){
                map.set(nums[j], map.get(nums[j])+1);
            }else{
                map.set(nums[j], 1);
            }
        }
         
        let sum = 0;
        if(map.size === k){
            for(let key of map.keys()){
                sum+= key;
            }
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};

// Optimal Approach: Using Sliding Window, Two Pointer Technique, and Hash Map.
// Approach:
// Instead of considering every subarray separately, which increases the time complexity,
// I will use the sliding window technique with two pointers, where both 'start' and 'end'
// are initially set to 0.
// Also, take a variable 'sum' to maintain the sum of the current window and a hash map
// to store the frequency of elements present in the current window.
// Traverse the array using the 'end' pointer. While traversing, add nums[end] to 'sum'
// and update its frequency in the hash map.
// Once the window size becomes 'k', check whether the map's size is equal to 'k'.
// If it is, it means all the elements in the current window are distinct, so update
// 'maxSum' with the maximum value between the current 'maxSum' and 'sum'.
// Then, before sliding the window, subtract the element leaving the current window from
// 'sum', decrement its frequency in the hash map, and remove it from the map if its
// frequency becomes zero.
// Increment the 'start' pointer to slide the window and continue traversing the array
// using the 'end' pointer.
// Finally, return 'maxSum', which represents the maximum sum among all valid subarrays
// of size 'k' having distinct elements.

// Time Complexity:- O(N), Explanation:-
// Both 'start' and 'end' pointers traverse through the array at most once.
// Each element is inserted into and removed from the hash map at most once.
// Therefore, the overall time complexity is O(N).

// Space Complexity:- O(K), since the hash map can store at most 'k' distinct elements
// of the current window.

var maximumSubarraySum = function (nums, k) {
    let maxSum = 0, sum = 0;;

    let start = 0, end = 0, map = new Map();
    while (end < nums.length) {
        if (map.has(nums[end])) {
            map.set(nums[end], map.get(nums[end]) + 1);
        } else {
            map.set(nums[end], 1);
        }

        sum += nums[end];

        if (end - start + 1 === k) {
            if (map.size === k) {
                maxSum = Math.max(maxSum, sum);
            }

            map.set(nums[start], map.get(nums[start]) - 1);
            if (map.get(nums[start]) === 0) {
                map.delete(nums[start]);
            }

            sum -= nums[start++];
        }

        end++;
    }

    return maxSum;
};