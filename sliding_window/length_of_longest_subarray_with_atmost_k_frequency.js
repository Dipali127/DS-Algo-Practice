// Leetcode Problem:- 2958

// Brute force approach:
// approach:
// consider all possible subarrays from the given array `nums`. For each subarray, use a map to   
// store the frequency of each element within the current subarray. Meanwhile, iterate through the hash map 
// to check if the frequency of each element in the current subarray is less than or equal to `k`. 
// If the frequency of any element in the current subarray is greater than `k`, then break the loop.
// Then calculate the length of the current subarray using (j - i + 1) and update it in lengthOflongestSubarray.
// After checking all possible subarrays, return the lengthOflongestSubarray.

// TC:- O(N^3), Explanation:
// O(N): To iterate through all possible starting points of subarrays.
// O(N): For each starting point, iterate through all possible ending points to form subarrays.
// O(N): For each subarray, iterate through the map to check if all frequencies are <= k.
// Overall TC: O(N) * O(N) * O(N) = O(N^3).

// SC:- O(N), because we use a map to store the frequency of elements in the subarray, and in the worst case, all elements could be unique.

var maxSubarrayLength = function (nums, k) {
    let longestSubarray = 0;
    for (let i = 0; i < nums.length; i++) {
        let map = new Map();
        for (let j = i; j < nums.length; j++) {
            if (map.has(nums[j])) {
                map.set(nums[j], map.get(nums[j]) + 1);
            } else {
                map.set(nums[j], 1);
            }

            let flag = true;
            for (let val of map.values()) {
                if (val > k) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                longestSubarray = Math.max(longestSubarray, j - i + 1);
            } else {
                break;
            }
        }
    }

    return longestSubarray;
};

// Optimal approach:
// approach:-
// Extend the window by moving pointer `j` to the right, and store the frequency of the current subarray elements in the hash map.
// While storing the frequency, if the current subarray element exceeds `k`, shrink the window 
// from the left until the condition is satisfied again (i.e., the frequency of the element becomes 
// less than or equal to `k`). Before shrinking the window, remove that current subarray element from the hash map and increment pointer `i`.
// Continue the above process until pointer `j` reaches the end of the array `nums`.
// After checking all possible subarrays, return the lengthOflongestSubarray.

// TC: O(N), as both pointers `i` and `j` traverse the array only once.
// SC: O(N), because we use a map to store the frequency of elements of the window, which in the worst case, could store all elements in the array.

var maxSubarrayLength = function (nums, k) {
    let map = new Map();
    let i = 0, j = 0, lengthOflongestSubarray = 0;
    while (j < nums.length) {
        if (map.has(nums[j])) {
            map.set(nums[j], map.get(nums[j]) + 1);
        } else {
            map.set(nums[j], 1);
        }

        while (i < j && map.get(nums[j]) > k) {
            map.set(nums[i], map.get(nums[i]) - 1);
            i++;
        }

        lengthOflongestSubarray = Math.max(lengthOflongestSubarray, j - i + 1);
        j++;
    }

    return lengthOflongestSubarray;
};
