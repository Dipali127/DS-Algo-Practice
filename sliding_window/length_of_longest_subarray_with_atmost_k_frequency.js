// Leetcode Problem:- 2958

// Brute force approach:
// Approach:
// Consider all possible subarrays from the given array `nums`. 
// For each subarray, use a hash map to store the frequency of each element within the current subarray.
// Meanwhile, check if the frequency of the current element added to the hash map is greater than `k`. 
// If it is, then break the loop.
// Otherwise, calculate the length of the current subarray using (j - i + 1) and update
// `lengthOfLongestSubarray`.
// After checking all possible subarrays, return `lengthOfLongestSubarray`.

// TC:- O(N^2), Explanation:
// For each starting index, we iterate through the remaining elements of the array while storing their
// frequencies in the hash map, resulting in a time complexity of O(N^2).
// SC:- O(N), because we use a hash map to store the frequency of elements in the current subarray.
// In the worst case, all elements could be unique.

var maxSubarrayLength = function(nums, k) {
    longArr = 0;
    for(let i = 0; i < nums.length; i++){
        let map = new Map();
        for(let j = i; j < nums.length; j++){
            if(map.has(nums[j])){
                map.set(nums[j], map.get(nums[j]) + 1);
            }else{
                map.set(nums[j], 1);
            }

            if(map.get(nums[j]) > k){
                break;
            }

            longArr = Math.max(longArr, j-i+1);
        }
    }

    return longArr;
};

// Optimal approach:
// Approach:
// Extend the window by moving pointer `j` to the right and store the frequency of the window
// elements in the hash map.
// If the frequency of the current element exceeds `k`, shrink the window from the left until
// the condition becomes valid again (i.e., the frequency of the current element becomes less than
// or equal to `k`).
// While shrinking the window, decrement the frequency of the element pointed to by pointer `start`,
// since it is no longer part of the current window, and then increment pointer `start`.
// Continue this process until pointer `end` reaches the end of the array.
// Update the maximum length of the valid window.
// Finally, return `lengthOfLongestSubarray`.

// TC:- O(N), since both the `start` and `end` pointers traverse the array at most once.
// SC:- O(N), because we use a hash map to store the frequency of the elements in the current window.
// In the worst case, all elements in the array could be unique.

// Why are we updating the frequency of nums[start] even if it is different from nums[end]?

// We maintain a frequency map for all the elements in the current window. When we expand the window by moving the
// end pointer, the frequency of nums[end] increases. If this makes the window invalid, we start shrinking it by moving
// the start pointer. As the start pointer moves, the element leaving the window is no longer part of the current 
// window, so we decrement its frequency in the map. It doesn't matter whether nums[start] and nums[end] are the same
// or different. The frequency map must always represent exactly the elements currently inside the window.
// We keep shrinking until the window becomes valid again.

var maxSubarrayLength = function(nums, k) {
    longArr = 0;
    let map = new Map();
    let start = 0, end = 0;
    while(end < nums.length){
        if(map.has(nums[end])){
            map.set(nums[end], map.get(nums[end]) + 1);
        }else{
            map.set(nums[end], 1);
        }

        while(map.get(nums[end]) > k){
            map.set(nums[start], map.get(nums[start]) - 1);
            start++;
        }

        longArr = Math.max(longArr, end - start + 1);
        end++;
    }

    return longArr;
};
