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

// Optimal Approach: Using Sliding Window and Set
// Approach:
// Instead of using a nested loop to find duplicate elements, which results in a time complexity of O(N²), 
// I will use a sliding window approach combined with a has set where the hash set maintain the window size of k.
// While iterating through the array, I will check if the current value 'nums[i]' already exists in the hash set:
// - If it is, that means a duplicate exists then return true.
// - If it not, add 'nums[i]' to the has set.
// To maintain the window size of at most 'k', 
// - If the Set size exceeds 'k', remove the element at position 'i - k' from the Set, 
//   which will shrink the sliding window from left.
// Continue this process for all elements in the array.

// Time Complexity: O(N), Since both start and end pointer traverse the array at most once.
// Space Complexity: O(min(N, k))
// - The has set contains at most 'k' elements at any time.
// - In the worst case, when k ≥ N, the has set may store up to N elements.
// - Otherwise, when k < N, the hash set stores only the last 'k' elements .
// - So, overall space complexity is O(min(N, k)).

var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let start = 0, end = 0;
    while(end < nums.length){
        if(set.has(nums[end])){
            return true;
        }
        
        set.add(nums[end])
        
        if(set.size > k){
            set.delete(nums[start]);
            start++;
        }
        
        end++;
    }
    
    return false;
}
