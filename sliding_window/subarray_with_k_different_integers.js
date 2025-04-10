// Leetcode Problem:- 992
// Brute force approach:-
// approach:-
// consider all possible subarrays and, for each subarray, store the frequency of its elements in a hash map. 
// And for each subarray, we check if the map's size (i.e., the number of distinct elements) is equal to 'k'. 
// if the map's size is equal to 'k', it means the subarray has exactly 'k' distinct elements, so we 
// increment the `totalSubarray` count.
// after considering all possible subarrays, we return the total number of subarrays where the number 
// of distinct elements is exactly 'k'. 
// TC: O(N^2), Explanation:-
// O(N) to iterate through the starting index of each subarray.
// O(N) to iterate through all the elements of the current subarray to store their frequency in hash map and in worst case
// it might possible that inner loop iterate through each characte of the given string.
// Overall TC: O(N) * O(N) = O(N^2).
// SC: O(N), as there is a use of hash map to store the frequency of elements of each subarray, and in the 
// worst case, the map can contain up to 'N' elements.

var subarraysWithKDistinct = function (nums, k) {
    let totalSubarray = 0;
    for (let i = 0; i < nums.length; i++) {
        let map = new Map();
        for (let j = i; j < nums.length; j++) {
            if (map.has(nums[j])) {
                map.set(nums[j], map.get(nums[j]) + 1);
            } else {
                map.set(nums[j], 1);
            }

            if (map.size == k) {
                totalSubarray++;
            }
        }
    }

    return totalSubarray;
}

// Optimal approach: using sliding window
// approach:
// to find the number of subarrays where the number of unique elements is exactly 'k', we call the slidingWindow helper function twice,
// - first, to get the count of subarrays with at most 'k' distinct elements which will return all the subarray of count equal to 0, 1, .. upto k.
// - second, to get the count of subarrays with at most 'k-1' distinct elements which will return all the subarray of count equal to 0, 1, .. upto k-1.
// the difference between these two counts gives the number of subarrays with exactly 'k' distinct elements and eliminate all the other subarray.

// Inside slidingWindow function:
// use two pointers 'start' and 'end' to represent the current window's start and end indices, respectively.
// use a ' hash map' to store the frequency of elements within the current window.
// extend the window by moving pointer 'end' to the right and updating the hash map with the frequency of 'nums[end]'.
// if the size of the map (i.e., the number of distinct elements in the current window) becomes greater than 'k',
// shrink the window from the left by moving pointer 'start' to the right, decrementing the frequency of 'nums[start]',
// and removing it from the hash map if its frequency becomes zero.
// for each position of 'end', add 'end - start + 1' to 'count', which represents the number of subarrays ending at 'end'
// with at most 'k' distinct elements.
// finally, return the difference between 'slidingWindow(nums, k)' and 'slidingWindow(nums, k - 1)', which gives 
// the total number of subarrays with exactly 'k' distinct elements.
// TC: O(N), since each element is added and removed from the hash map at most once.
// SC: O(N), due to the hash map that can contain up to 'N' elements in the worst case.

var subarraysWithKDistinct = function (nums, k) {
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
    function slidingWindow(nums, k) {
        let goodSubarray = 0;
        let start = 0, end = 0, map = new Map();
        while (end < nums.length) {
            if (map.has(nums[end])) {
                map.set(nums[end], map.get(nums[end]) + 1);
            } else {
                map.set(nums[end], 1);
            }

            while (map.size > k) {
                if (map.has(nums[start])) {
                    map.set(nums[start], map.get(nums[start]) - 1);
                }
                if (map.get(nums[start]) === 0) {
                    map.delete(nums[start]);
                }

                start++;
            }

            goodSubarray += end - start + 1;
            end++;
        }

        return goodSubarray;
    }
}

