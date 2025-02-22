// Leetcode Problem:- 219
// Brute force approach:
// approach:
// use of nested loop where the outer loop iterates through each element of the array.
// the inner loop checks if the current element (pointed by the outer loop) is equal to any other 
// element (pointed by the inner loop) within a distance 𝑘.
// TC: O(N^2), because of the nested loop. 
// SC: O(1) , as there is no extra space used.

var containsNearbyDuplicate = function (arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};
// Optimal approach: using sliding window and hash map
// Approach:
// Instead of using a nested loop to find duplicate elements, which increases time complexity, 
// I will use a sliding window and a hash map to optimize the solution where, 
// sliding window will always contain at most 'k' elements And hash map will store the current iterated value with its
// index, which helps in detecting duplicates efficiently. 

// While iterating through the given array, i will check if the current value at 'nums[end]' is already present in 
// the hash map; if it is, compare the distance between the current index 'end' and the index stored in the hash map.
// but if the distance is less than or equal to 'k', return true (since a duplicate exists within the required range).
// Otherwise, update the hash map with the current index 'end' of 'nums[end]'.

// To maintain the window size, if the window exceeds 'k' elements:
//  - Move the pointer 'start' to the right.
//  - Remove 'nums[start]' from the hash map to ensure only 'k' recent elements are stored.

// Continue this process until all elements are processed.

// Time Complexity: O(N), where N is the length of the array, as each element is traversed once.
// Space Complexity: O(min(N, k)), where N is the length of the array and 'k' is the window size.
// The space used is proportional to the number of unique elements in the current window.


var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    let start = 0, end = 0;
    while(end < nums.length){
        if(map.has(nums[end])){
            if(Math.abs(end - map.get(nums[end])) <= k){
                return true;
            }
        }else{
            map.set(nums[end], end);
        }

        if(end - start >= k){
            map.delete(nums[start]);
            start++;
        }

        end++;
    }

    return false;
};