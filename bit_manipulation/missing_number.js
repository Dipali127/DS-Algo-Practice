// Leetcode Problem:- 268
// Brute Force Approach:
// Approach:
// Use a hash set to store the unique values from the input array.
// Iterate through the range from 0 to n (inclusive), and for each number,
// check if it exists in the hash set. If a number is missing in the set,
// that means it's the missing number — return it.

// Time Complexity (TC): O(N), to iterate through the range from 0 to n.
// Space Complexity (SC): O(N), to store elements in the set. 
// In the worst case, the missing number could be the last one in the range.

var missingNumber = function (nums) {
    let set = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};


// Optimal Approach:
// Approach:
// First, calculate the sum of the range from 0 to n (inclusive).
// Then, iterate through the input array 'nums' and subtract each element from the total.
// After completing the iteration, the remaining value in 'total' will be the missing number.

// Time Complexity (TC): O(N), for iterating through the array twice — 
// once to calculate the total sum, and once to subtract array elements.
// Space Complexity (SC): O(1), as only a constant amount of extra space is used.

var missingNumber = function (nums) {
    let total = 0;
    for (let i = 0; i <= nums.length; i++) {
        total += i;
    }

    for (let i = 0; i < nums.length; i++) {
        total -= nums[i];
    }

    return total;
};
