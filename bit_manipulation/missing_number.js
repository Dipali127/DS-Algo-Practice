// Leetcode Problem:- 268
// Brute force approach:
// Approach: 
// calculate the total sum of numbers from 0 to n using the formula: totalSum = n * (n + 1) / 2.
// initialize a variable 'actualSum' to accumulate the sum of the numbers present in the input array 'nums'.
// loop through each number in 'nums' to calculate the 'actualSum'.
// the missing number is found by subtracting 'actualSum' from 'totalSum'.
// TC:- O(N), to iterate through the array 'nums' to calculat the sum of each elements in it.
// SC:- O(1), since no additional space is used.

var missingNumber = function(nums) {
    let n = nums.length;
    let actualSum = 0;
    let totalSum = (n * (n + 1)) / 2;

    for(let j = 0; j < nums.length; j++){
        actualSum+= nums[j];
    }

    return totalSum - actualSum;
}

// Optimal Approach:
// Approach: 
// initialize a variable 'missingNumber' with the length of the input array 'nums' (n) to find out the missing number.
// use of a loop to iterate through each element in 'nums' array.
// apply the "XOR" operation between 'result', the current element 'nums[i]', and the index 'i'and
// the XOR operation will cancel out numbers that appear in both the array and in their corresponding indices.
// the final value of 'missingNumber' will be the missing number, as all paired numbers will cancel each other out.
// TC:- O(N), as we iterate through the array 'nums' once.
// SC:- O(1), since no additional space is used.

var missingNumber = function(nums) {
    let n = nums.length;
    let result = n;
    for(let i = 0; i < nums.length; i++){
        result^= nums[i]^i;
    }

    return result;
}