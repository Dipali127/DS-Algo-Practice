// Leetcode Probelm:- 509
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
// The Fibonacci sequence starts like this: 0, 1, 1, 2, 3, 5, 8, 13, ...
// The nth Fibonacci number is found by adding the two numbers before it.
// Brute force approach:- [Top - Down Approach](Recursive Solution)
// Approach:-
// Base case: If 'n' is 0 or 1, the function just returns n because those are the first two numbers in the Fibonacci sequence.
// Otherwise, it adds the results of fib(n-1) and fib(n-2) to get the nth fibonacci number.
// TC:- O(2^n), as the function calls itself twice for every number, so the number of calls grows very quickly.
// SC:- O(N), because the maximum depth of the recursion stack is proportional to n.

var fib = function(n) {
    if(n==0 || n==1){
        return n;
    }

    return fib(n-2)+fib(n-1)
};

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// Base Case:- if 'n' is 0 or 1, return n directly because these are the first two Fibonacci numbers.
// initialize an array 'dp' of size n+1 filled with -1. This array will store previously computed Fibonacci numbers to avoid redundant calculations.
// call the helper function 'solve' with the input 'n' and the 'dp' array.
// In the 'solve' function:
//    - If 'n' is 0 or 1, return n (base case).
//    - check if the Fibonacci number for 'n' is already computed (if dp[n] is not -1). If it is, return that value to avoid recalculation.
//    - If not computed, recursively calculate the Fibonacci number for 'n' by calling 'solve(n-1, dp)' and 'solve(n-2, dp)', and store the result in dp[n].
// finally, return the computed Fibonacci number for 'n' from the 'dp' array.
// TC:- O(N), since each Fibonacci number is computed only once because we store the previously computed values in the 'dp' array.
// SC:- O(N), since we are using the dp array used to store computed Fibonacci values and recursion depth in the worst case can go up to n.

var fib = function(n) {
    if(n <= 1){
        return n;
    }

     let dp = new Array(n+1).fill(-1);
    
    return solve(n, dp);
};

function solve(n,dp){
    if(n<=1){
        return n;
    }

    if(dp[n] !== -1){
        return dp[n];
    }

    return dp[n] = solve(n-1, dp) + solve(n-2, dp);
}

// Optimal Approach2:- [Using Bottom Up DP] (Iterative Solution)
// Approach:-
// if 'n' is 0 or 1, return n directly because these are the first two Fibonacci numbers.
// initialize an array 'dp' of size n+1, filled with -1 as this array will store the Fibonacci numbers up to 'n'.
// set the base cases:- dp[0] = 0 and dp[1] = 1, representing the first two Fibonacci numbers.
// use a loop that runs from 2 to n to fill in the dp array:
//    - For each index 'i', calculate the Fibonacci number as the sum of the two preceding numbers: 'dp[i] = dp[i-1] + dp[i-2]'.
// finally, return the Fibonacci number for 'n' from the dp array.
// TC:- O(N), as each Fibonacci number is computed once in the loop.
// SC:- O(N), as we are using the dp array used to store computed Fibonacci values.

var fib = function(n) {
    if (n <= 1) {
        return n;   
    }

    let dp = new Array(n+1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

// Optimal Approach3 (Best Approach):- [Constant Space Complexity]
// approach:- 
// if 'n' is 0 or 1, return n directly because these are the first two Fibonacci numbers.
// initialize 'prev1' to 0 and 'prev2' to 1. These variables represent the two most recent Fibonacci numbers in the sequence.
// use a loop that runs from 2 to n, updating the current Fibonacci number as the sum of prev1 and prev2.
// after each iteration, update prev1 and prev2 to the last two Fibonacci numbers.
// once the loop is done, return the current Fibonacci number, which is stored in 'fib'.
// TC:- O(N), because the loop runs from 2 to n.
// SC:- O(1), since no additional space is used.

var fib = function(n) {
    if (n <= 1) {
        return n;   
    }
    
    let prev1 = 0, prev2 = 1;
    let fib;
    for (let i = 2; i <= n; i++) {
        fib = prev1 + prev2;
        prev1 = prev2;
        prev2 = fib;
    }

    return fib;
}