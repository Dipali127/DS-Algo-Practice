;// Leetcode Problem:- 300
// Problem:- Find the length of the longest strictly increasing subsequence from the given array 'nums'.
// The longest increasing subsequence means that every previous value in the subsequence must be less than the
// next value.
// In a subsequence, you can skip elements from the array. 
// Brute force approach:- [Top-Down Approach] (Using Recursion)
// Approach:-
// The function 'solve' is called to find the longest increasing subsequence starting from index 'i'.
// At each index 'i', we have two choices:
//  -take the current element if it is strictly larger than the previous element in the subsequence.
//    - This happens if the 'prev' index is -1 (indicating no previous element) or if 'nums[prev] < nums[i]'.
//   - skip the current element and move to the next index.
// Base case:- if the current index 'i' is out of bounds (i.e., greater than or equal to the size of the array 'nums'),
// return 0.
// Otherwise, calculate two values:
//   - 'take': include the current element 'nums[i]' in the subsequence (if allowed).
//   - 'skip': skip the current element and moving to the next. 
// Return the maximum of the 'take' and 'skip' cases to explore all possible subsequences. 
// TC:- O(2^N), because at each step, the function calls itself twice (for 'take' and 'skip').
// SC:- O(N), due to the recursion function stack, Since the depth of recursion stack is proportional to the
// length of nums.
// Note:- Always remember the 'take and skip' method when solving problems related to finding subsequences,
// such as the longest increasing subsequence or longest common subsequence.

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
// use 2d dp array, since both variable i and prev change (prev not change always but change)
// The recursive function 'solve' works as follows:
// - Base case:- check if the current index 'i' is out of bounds (greater than or equal to the size of the array 'nums'),
//  if so, return 0.
// - check if we have already solved the subproblem with the current state ('i' and 'prev'). 
//   If yes, return the stored value in 'dp'.
// - At each step, we have two choices:
//   - Take the current element in the subsequence (if it's strictly larger than the previous one).
//   - Skip the current element and move to the next.
// Store the maximum between 'take' and 'skip' at dp[i][prev].
// Time Complexity is O(N²) because the recursive state depends on both i and prev. 
// There are O(N²) possible (i, prev) states, and memoization ensures each state is computed only once. 
// Space Complexity is O(N²) for the 2D DP table, plus O(N) for the recursion stack.

var lengthOfLIS = function (nums) {
    let n = nums.length;
    let dp = Array.from({length : n + 1}, () => Array(n + 1).fill(-1));
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

// Optimal Approach: [Bottom-Up DP]
//
// Approach:
// We use a 1D DP array where dp[i] represents the length of the longest increasing subsequence ending at 
// index i.
// Initially, every dp[i] is 1 because every single element itself is an increasing subsequence of length 1.
//
// For every current index i:
//   - Check all previous indices j (from 0 to i - 1).
//   - If nums[j] < nums[i], it means nums[i] can be added after the increasing subsequence ending at j.
//   - So, we can extend that subsequence by 1: dp[i] = Math.max(dp[i], dp[j] + 1)
// (Here, dp[j] + 1 means, the longest increasing subsequence ending at index j, and add the current element nums[i] to it.)
// After checking all previous elements, dp[i] contains the longest increasing subsequence that ends at index i.
//
// We keep a variable 'longestSequence' to store the maximum value in dp, because the LIS does not necessarily end at the last index.
//

// Example:
// nums = [2, 5, 3]
//
// dp = [1, 1, 1]
//
// For i = 1 (nums[i] = 5):
//   j = 0 → 2 < 5
//   So, 5 can be added after 2.
//   dp[1] = dp[0] + 1 = 2
//   Subsequence: [2, 5]
//
// For i = 2 (nums[i] = 3):
//   j = 0 → 2 < 3
//   So, dp[2] = dp[0] + 1 = 2
//   Subsequence: [2, 3]
//
// The longest value in dp is 2.
//
// Time Complexity: O(N^2)
// Because for every index i, we check all previous indices j.
//
// Space Complexity: O(N)
// Because we use a 1D dp array of size N.

// why j < i?
// Because for an increasing subsequence, we want to know: Can the current element nums[i] be added after any
// previous element nums[j]

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

