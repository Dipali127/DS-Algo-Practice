// Leetcode Problem:- 70
// Problem Says:- You are climbing a staircase. It takes 'n' steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Brute force approach:- [Top - Down Approach](Using Recursion)
// Approach:-
// The function 'climbStairs' calculates the number of distinct ways to reach the top of a staircase with 'n' steps,
// where at each step, you can either climb 1 or 2 steps.
// The function 'findSteps(n)' is a recursive helper function:
//    - If 'n' is less than 0, return 0, as there is no possibility to climb the stairs.
//    - If 'n' is exactly 0, return 1 because reaching the top with exactly 0 steps is one valid way.
//    - Otherwise, for each step, recursively compute the total number of ways by either taking one step (climbStairs(n-1)) or two steps (climbStairs(n-2)).
// The total number of ways to reach the top is the sum of the number of ways to reach from n-1 and n-2 steps. 
// TC:- O(2^n), as for each 'n', we check for two possibilities: (n-1) steps and (n-2) steps.
// This leads to an exponential growth in the number of recursive calls.
// SC:- O(N), as the maximum number of function calls waiting in memory is equal to n (the depth of the recursion).

var climbStairs = function(n) {
    return findSteps(n);
};

function findSteps(n){
    if(n<0){
        return 0;
    }
    if(n === 0){
        return 1;
    }

    return climbStairs(n-1) + climbStairs(n-2);
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization)
// Approach:-
// if 'n' is negative, return 0 as it's not possible to have negative steps.
// if 'n' is 0, return 1 because there's one way to stay at the base (taking no steps).
// initialize an array 'dp' of size 'n+1' filled with -1. This array will store previously computed results to avoid redundant recalculations (memoization).
// call the helper function 'findSteps' with 'n' and 'dp' as arguments.
// In 'findSteps' function:
//    - if 'n' is 0, return 1 (base case: found one valid way).
//    - if 'n' is negative, return 0 (no valid way).
//    - if 'dp[n]' has already been computed (i.e., not -1), return its value to avoid recalculation.
//    - Otherwise, recursively calculate the number of ways for 'n' by summing up the results of:
//         (a) the number of ways from 'n-1' steps (one step taken)
//         (b) the number of ways from 'n-2' steps (two steps taken)
//    - Store the result in 'dp[n]' to avoid recalculating it in future calls.
// finally, return the computed number of steps for 'n' from the 'dp' array.
// TC: O(N), since each step is calculated only once because we store the previously computed values in the 'dp' array.
// SC: O(N), due to the 'dp' array storing computed results and recursion depth in the worst case can go up to n.

var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(-1); 
    return findSteps(n, dp);
};

function findSteps(n, dp){
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
  
  // Return memoized result if it already exists
    if (dp[n] !== -1) {
        return dp[n];  
    }
  
    // Store the result in dp array
    dp[n] = findSteps(n - 1, dp) + findSteps(n - 2, dp);
    return dp[n];
}

// Optimal Approach2:- [Using Bottom Up DP] (Iterative Solution)
// Approach:-
// if 'n' is 0, return 1 directly because there's one way to stay at the base (taking no steps).
// if 'n' is 1, return 1 because there's one way to take one step.
// initialize an array 'dp' of size n+1, filled with 0 as this array will store the number of ways to climb stairs up to 'n'.
// set the base cases: dp[0] = 1 (one way to stay at the base) and dp[1] = 1 (one way to take a single step).
// use a loop that runs from 2 to n to fill in the dp array:
//    - for each index 'i', calculate the number of ways to reach that step as the sum of the two preceding numbers: 
//      'dp[i] = dp[i-1] + dp[i-2]' (representing the ways to step from the last one or two steps).
// finally, return the number of ways to climb 'n' stairs from the dp array.
// TC:- O(N), as each number of ways is computed once in the loop.
// SC:- O(N), as we are using the dp array to store computed values.

var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
     return dp[n];
};

// Optimal Approach (Best Approach):- [Constant Space Complexity]
// Approach:- 
// if 'n' is 1, return 1 because there's only one way to climb to the first step (a single step).
// if 'n' is 2, return 2 because there are two ways to climb to the second step (either two single steps or one two-step).
// initialize 'prev1' to 1 and 'prev2' to 2. These variables represent the number of ways to reach the first and second steps, respectively.
// use a loop that runs from 3 to 'n', updating the current number of ways (steps) as the sum of 'prev1' and 'prev2'.
// After each iteration, update 'prev1' to 'prev2' and 'prev2' to 'steps' to represent the last two computed values.
// Once the loop finishes, return the current number of ways stored in 'steps'.
// TC:- O(N), because the loop runs from 3 to 'n'.
// SC:- O(1), since only a constant amount of extra space is used (three variables: prev1, prev2, and steps).

var climbStairs = function(n) {
    // Base cases
    if(n <= 2){
        return n;
    }
    let prev1 = 1; 
    let prev2 = 2; 
    let steps; 

    for (let i = 3; i <= n; i++) {
        steps = prev1 + prev2; 
        prev1 = prev2; 
        prev2 = steps; 
    }
    return steps; 
};







