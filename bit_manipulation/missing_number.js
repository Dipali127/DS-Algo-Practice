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


// Optimal Approach1:
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

// Optimal Approach2:
// Approach:
// First, do the XOR of all the indices in the range from 0 to n (inclusive).
// Then, perform XOR with all numbers from the given nums array.
// Due to the property a ^ a = 0, all duplicate numbers cancel out, leaving only the missing number.
// Finally, return the result stored in xor.
//
// TC:- O(N)
// Explanation:
// O(N) -> to find the XOR of all numbers in the range 0 to n (inclusive).
// O(N) -> to find the XOR of all the numbers in the given array.
// Overall TC = O(N) + O(N) = O(2N) = O(N).
//
// SC:- O(1), since no additional space is used apart from a variable.
var missingNumber = function (nums) {
    let xor = 0; 
    for (let i = 0; i <= nums.length; i++) {
        xor ^= i;
    }

    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
}
