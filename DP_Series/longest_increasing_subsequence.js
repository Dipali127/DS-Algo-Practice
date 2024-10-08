// Leetcode Problem:- 300
// Problem:- Find the length of the longest strictly increasing subsequence from the given array 'nums'.
// The longest increasing subsequence means that every previous value in the subsequence must be less than the next value.
// In a subsequence, you can skip elements from the array. 
// Brute force approach:- [Top-Down Approach] (Using Recursion)
// Approach:-
// The function 'solve' is called to find the longest increasing subsequence starting from index 'i'.
// At each index 'i', we have two choices:
//  -take the current element if it is strictly larger than the previous element in the subsequence.
//    - This happens if the 'prev' index is -1 (indicating no previous element) or if 'nums[prev] < nums[i]'.
//   - skip the current element and move to the next index.
// Base case:- if the current index 'i' is out of bounds (i.e., greater than or equal to the size of the array 'nums'), return 0.
// Otherwise, calculate two values:
//   - 'take': include the current element 'nums[i]' in the subsequence (if allowed).
//   - 'skip': skip the current element and moving to the next. 
// Return the maximum of the 'take' and 'skip' cases to explore all possible subsequences. 
// TC:- O(2^N), because at each step, the function calls itself twice (for 'take' and 'skip').
// SC:- O(N), due to the recursion stack space used during function calls.

// Note:- Always remember the 'take and skip' method when solving problems related to finding subsequences, such as the longest increasing subsequence.

var lengthOfLIS = function(nums) {
    let n = nums.length;
    return solve(nums, 0, -1, n);
};

function solve(nums, i, prev, n){
    if(i >= n){
        return 0;
    }

    let take = 0;
    if(prev === -1 || nums[prev] < nums[i]){
        take = 1 + solve(nums, i+1, i, n);
    }

    skip = solve(nums, i+1, prev, n);

    return Math.max(take, skip);
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// Use of recursion to explore all possible subsequences and memoization is used to store 
// previously computed results to avoid redundant calculations. 

// Explanation of 'Array.from(Array(n + 1), () => Array(n + 1).fill(-1))':
// - 'Array(n+1)' creates a 1D array of size 'n + 1'.
// - the second argument of 'Array.from()', which is the mapping function '() => Array(n + 1).fill(-1)', will fill each element 
//   of the first array with another array of size 'n + 1' where all values are initialized to -1. 
// this 2D array 'dp' is used to store previously computed results to avoid redundant calculations.

// The recursive function 'solve' works as follows:
// - Base case:- check if the current index 'i' is out of bounds (greater than or equal to the size of the array 'nums'), if so, return 0.
// - check if we have already solved the subproblem with the current state ('i' and 'prev'). If yes, return the stored value in 'dp'.
// - At each step, we have two choices:
//   - Take the current element in the subsequence (if it's strictly larger than the previous one).
//   - Skip the current element and move to the next.
// Store the maximum between 'take' and 'skip' at dp[i][prev].
// TC:- O(N^2) due to memoization (since there are N * N = N^2 subproblems).
// SC:- O(N^2) for the 2D dp array and recursion stack space time complexity is O(N). So, overall SC is O(N^2)

var lengthOfLIS = function (nums) {
    let n = nums.length;
     let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(-1));
    return solve(nums, 0, -1, n, dp);
};

function solve(nums, i, prev, n, dp) {
    if (i >= n) {
        return 0;
    }

    if (prev !== -1 && dp[i][prev] !== -1) {
        return dp[i][prev];
    }

    let take = 0;
    if (prev === -1 || nums[prev] < nums[i]) {
        take = 1 + solve(nums, i + 1, i, n, dp);
    }
    
    let skip = solve(nums, i+1, prev, n, dp);

    return dp[i][prev] = Math.max(take, skip);
    
}

// Optimal Approach (Best Approach):- [Constant Space Complexity] 
// Approach:-
// initialize a 1D array 'dp' to track the length of the longest increasing subsequence ending at each index in 'nums'.
// each value in the 'dp' array represents the length of the longest increasing subsequence ending at that index,
// and initially, the length ending at 'i' is 1 (the element itself).
// 'longestSequence' is initialized to 0 to track the maximum length of increasing subsequences found.
// iterate through each element 'i' of 'nums' and find the longest increasing sequence ending at 'i'.
// for each element 'i', iterate through all previous elements using pointer 'j' to find the increasing subsequence.
// if 'nums[j] < nums[i]', it means 'nums[i]' can extend the increasing subsequence ending at 'nums[j]'.
// update 'dp[i]' to be the maximum of its current value i.e (dp[i]) and 'dp[j] + 1', which represents 
// extending the subsequence with the current element.
// after processing all 'j' for a given 'i', update 'longestSequence' with the maximum value found in 'dp[i]'.
// finally, return the length of the longest increasing subsequence.
// TC:- O(N^2), as there are nested loops iterating through the elements.
// SC:- O(N), for the dp array used to store lengths of increasing subsequences.

var lengthOfLIS = function (nums) {
    let n = nums.length;
    if(n === 1){
        return 1;
    }
    let dp = new Array(n).fill(1);
    let longestSequence = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }

            longestSequence = Math.max(longestSequence, dp[i]);
        }
    }

    return longestSequence;
};

