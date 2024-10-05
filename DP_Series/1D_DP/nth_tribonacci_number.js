// Leetcode Problem:- 1137
// Tribonacci sequence: 0, 1, 1, 2, 4, 7, 13, 24, ...
// The nth Tribonacci number is found by adding the three numbers before it.
// Brute Force Approach: [Top-Down Approach] (Recursive Solution)
// Approach:-
// Base Case:-
//      - if 'n' is 0, the function returns 0 as the 0th Tribonacci number is 0. 
//      - if 'n' is 1 or 2, the function returns 1 because both the 1st and 2nd Tribonacci numbers are 1.
// Otherwise, the function recursively calls itself for tribonacci(n-1), tribonacci(n-2), and tribonacci(n-3), 
//  and returns their sum to compute the nth Tribonacci number.
// TC:- O(3^N),as the function recursively call iself thrice for each input.
// SC:- O(N), because the maximum depth of the recursion stack is proportional to n.

var tribonacci = function(n) {
    if(n === 0){
        return 0;
    }
    if(n === 1 || n === 2){
        return 1;
    }

    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
};

// Optimal Approach1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:-
// Base Case:-
//  - if 'n' is 0, return 0 since the 0th Tribonacci number is 0. 
//  - if 'n' is 1 or 2, return 1 because the 1st and 2nd Tribonacci numbers are 1.
// initialize an array 'dp' of size n+1 filled with -1. This array will store previously computed Tribonacci numbers 
//   to avoid redundant calculations.
// - Call the helper function 'findNthTribonacci' with the input 'n' and the 'dp' array.
// In the 'findNthTribonacci' function:
//    - If 'n' is 0, return 0 (base case for 0th Tribonacci).
//    - If 'n' is 1 or 2, return 1 (base case for 1st and 2nd Tribonacci).
//    - Check if the Tribonacci number for 'n' is already computed (if dp[n] is not -1). If it is, return that value to avoid recalculation.
//    - If not computed, recursively calculate the Tribonacci number for 'n' by calling 'findNthTribonacci(n-1, dp)', 'findNthTribonacci(n-2, dp)', 
//      and 'findNthTribonacci(n-3, dp)', and store the result in dp[n].
// finally, return the computed Tribonacci number for 'n' from the 'dp' array.
// TC:- O(N), since each Tribonacci number is computed only once because we store previously computed values in the 'dp' array.
// SC:- O(N), due to the 'dp' array used to store computed Tribonacci values, and recursion depth in the worst case is proportional to 'n'.

var tribonacci = function(n) {
    let dp = Array.from(Array(n+1)).fill(-1);
    return findNthTribonacci(n, dp);
};

function findNthTribonacci(n, dp){
    if(n === 0){
        return 0;
    }
    if(n === 1 || n === 2){
        return 1;
    }
     
     if(dp[n] !== -1){
        return dp[n];
     }

    dp[n] = findNthTribonacci(n-1, dp) + findNthTribonacci(n-2, dp) + findNthTribonacci(n-3, dp);
    return dp[n];
}

// Optimal Approach2: [Using Bottom-Up DP] (Iterative Solution)
// Approach:-
// if 'n' is 0, return 0 directly as it is the base case for the 0th Tribonacci number.
// if 'n' is 1 or 2, return 1 directly because the 1st and 2nd Tribonacci numbers are both 1.
// we don't need a full dp array to store results, as we only require the last three numbers for current input.
// initialize three variables: 't0', 't1', and 't2' to represent the first three Tribonacci numbers (0, 1, and 1).
// use a loop that runs from 3 to 'n' to calculate the nth Tribonacci number:-
//    - For each iteration, calculate the current Tribonacci number as the sum of the three preceding numbers (t0 + t1 + t2).
//    - Then update t0, t1, and t2 to move forward in the sequence.
// finally, return the nth Tribonacci number.
// TC:- O(N), since we compute each Tribonacci number exactly once.
// SC:- O(1), because only a constant amount of extra space is used (three variables instead of a full array).

var tribonacci = function(n) {
    if(n === 0){
        return 0;
    }
    if(n === 1 || n === 2){
        return 1;
    }
    let t0 = 0, t1 = 1, t2 = 1;
    let nthTrib;
    for(let i = 3; i <= n; i++){
        nthTrib = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = nthTrib;
    }

    return nthTrib;
};