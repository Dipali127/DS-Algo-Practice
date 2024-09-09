// Leetcode Problem:- 992
// Brute force approach:-
// approach:-
// consider all possible subarrays and, for each subarray, store the frequency of its elements in a map. 
// for each subarray, we check if the map's size (i.e., the number of distinct elements) is equal to 'k'. 
// if the map's size is equal to 'k', it means the subarray has exactly 'k' distinct elements, so we 
// increment the `totalSubarray` count.
// after considering all possible subarrays, we return the total number of subarrays where the number 
// of distinct elements is exactly 'k'. 
// TC: O(N^2), Explanation:-
// O(N) to iterate through the starting index of each subarray.
// O(N) to iterate through the ending index of each subarray (in the inner loop) and update the map.
// Overall TC: O(N) * O(N) = O(N^2).
// SC: O(N), as there is a use of map to store the frequency of elements of each subarray, and in the 
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
// to find the number of subarrays where the number of unique elements is exactly 'k', we first calculate the number of subarrays
// where the number of unique elements is less than or equal to 'k', and then subtract the number of subarrays where the number of
// unique elements is less than 'k'. the difference gives the number of subarrays with exactly 'k' unique elements.
// in the below code, we define a helper function 'slidingWindow' that calculates the number of subarrays with at most 'k' distinct elements, it 
// means we call the 'slidingWindow' function twice:
// - first, to get the count of subarrays with at most 'k' distinct elements.
// - second, to get the count of subarrays with at most 'k-1' distinct elements.
// the difference between these two counts gives the number of subarrays with exactly 'k' distinct elements.

// use two pointers 'i' and 'j' to represent the current window's start and end indices, respectively.
// use a 'map' to store the frequency of elements within the current window.
// extend the window by moving pointer 'j' to the right and updating the map with the frequency of 'nums[j]'.
// if the size of the map (i.e., the number of distinct elements in the current window) becomes greater than 'k',
// shrink the window from the left by moving pointer 'i' to the right, decrementing the frequency of 'nums[i]',
// and removing it from the map if its frequency becomes zero.
// for each position of 'j', add 'j - i + 1' to 'count', which represents the number of subarrays ending at 'j'
// with at most 'k' distinct elements.
// finally, return the difference between 'slidingWindow(nums, k)' and 'slidingWindow(nums, k - 1)', which gives 
// the total number of subarrays with exactly 'k' distinct elements.
// TC: O(N), since each element is added and removed from the map at most once.
// SC: O(N), due to the map that can contain up to 'N' elements in the worst case.

var subarraysWithKDistinct = function (nums, k) {

    return slidingWindow(nums, k) - slidingWindow(nums, k - 1)
    //return total count of subarrays having <=k distinct elements
    function slidingWindow(nums, k) {
        let map = new Map;
        let i = 0, j = 0, count = 0;
        while (j < nums.length) {
            if (!map.has(nums[j])) {
                map.set(nums[j], 1)
            } else {
                map.set(nums[j], map.get(nums[j]) + 1);
            }
            //until map size is greater than k shrink the window from left side.
            while (map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) == 0) {
                    map.delete(nums[i]);
                }
                i++;
            }
            //give all the subarrays ending at j.
            count += j - i + 1;
            j++;
        }

        return count;
    }
};

