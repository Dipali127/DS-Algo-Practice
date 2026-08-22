// Leetcode problem:- 70 
// Brute force approach:
// approach: [Top - Down Approach](Using Recursion)
// Since we have to reach to top that and i know the number of possible ways to reach to the first 
// or second stair which is 1 and 2. But i dont know the number of ways to reach to nth stair.
// So i will recursively call the function climbstair to get the number of possible ways to reach to n-1th
// stair and n-2th stair and add the their results.
// I continue recursively calling climbStair(n-1) and climbStair(n-2) until the recursion reaches the base 
// cases, where n = 1 or n = 2.
// Base Case: If the value of 'n' is 1 or 2, return 'n' since there is only 1 way to climb 1 stair and 2
// ways to climb 2 stairs.
// Otherwise, recursively call the function 'climbStairs' for (n - 1) and (n - 2).
// This represents:
// - How many ways we can reach the current stair by taking 1 step from the (n - 1)th stair.
// - How many ways we can reach the current stair by taking 2 steps from the (n - 2)th stair.
// Add both results to get the total number of ways to reach the 'n'-th stair.
// Time Complexity: O(2^N), since at each step we make two recursive calls. So, for 'n' steps, the number 
// of calls grows exponentially.
// Space Complexity: O(N)), because the maximum depth of the recursion stack is proportional to n.

var climbStairs = function(n) {
   if(n === 1 || n === 2){
     return n;
   }

   return climbStairs(n-1) + climbStairs(n-2);
};

// Optimal Approach1: Using Recursion + Memoization
// approach:
// - The brute force recursive approach leads to a time complexity of O(2^N) 
//   because it recomputes the same subproblems multiple times.
// - To optimize it, we use **memoization** by storing already computed nth climbStair values in a `dp` array.
// - This avoids redundant calculations and significantly reduces the time complexity.
// 
// In the function `findStairs`:
// - Base Case: If `n === 1` or `n === 2`, return `n` because:
//     - For 1 step, there's only 1 way: (1)
//     - For 2 steps, there are 2 ways: (1 + 1) and (2)
// - For all other `n`, we first check if it already exists in the `dp` array.
//     - If it does, we use the stored value.
//     - Otherwise, we recursively compute `findStairs(n - 1)` and `findStairs(n - 2)`,
//       store the result in `dp[n]`, and return it.
// - This ensures each subproblem is solved only once.
// Time Complexity: O(N), since each value from 1 to n is computed only once.
// Space Complexity: O(N), for the memoization array and the recursion stack.

var climbStairs = function (n) {
    if (n === 1 || n === 2) return n;

    let dp = new Array(n + 1).fill(-1);
    dp[1] = 1, dp[2] = 2;
    return findClimb(n)

    function findClimb(n){
        if (n === 1 || n === 2) return n;

        if (dp[n] !== -1) {
            return dp[n];
        }

        return dp[n] = findClimb(n - 1) + findClimb(n - 2);
    }
};

// Optimal Approach2:- [Using Bottom Up DP] (Iterative Solution)
// Approach:
// create a 'dp' array of size (n + 1) and initialize all elements to 0.
// set base cases:
//     - dp[1] = 1 → Only 1 way to reach the 1st stair.
//     - dp[2] = 2 → Two ways to reach the 2nd stair: (1 + 1) and (2).
// iterate from i = 3 to n:
//     -for each stair i, the number of ways to reach it is the sum of:
//         - Ways to reach stair (i - 1), and
//         - Ways to reach stair (i - 2).
//     - So, dp[i] = dp[i - 1] + dp[i - 2].
// finally, return dp[n], which contains the number of ways to reach the nth stair.
// Time Complexity: O(N) → to iterate through each stair once.
// Space Complexity: O(N) → to store the number of ways for each stair in the dp array.

var climbStairs = function(n){
    let dp = new Array(n+1).fill(0);
    dp[1] = 1, dp[2] = 2;
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

// Optimal Approach3:- [Using Bottom Up DP] (Iterative Solution)
// Approach:
// Since, I already know the number of ways to reach stair 1 and stair 2, so I will start iterating from 
// stair 3 up to stair n. At each stair, I will use the previously computed values for the two preceding 
// stairs to calculate the number of ways to reach the current stair.

// Base cases:
//     - If n === 1 → Only 1 way to reach the 1st stair.
//     - If n === 2 → Two ways to reach the 2nd stair: (1 + 1) and (2).
// - Initialize:
//     - oneStep = 1 (ways to reach stair 1)
//     - twoStep = 2 (ways to reach stair 2)
// - Iterate from i = 3 to n:
//     - For each stair i, the number of ways to reach to that stair is:
//         - number of ways to rech to oneStep (i - 2) back + number of ways to reach to twoStep (i - 1) back.
//     - Update values:
//         - oneStep = twoStep
//         - twoStep = nthStep
// finally, return nthStep, which stores the number of ways to reach the nth stair.
// Time Complexity: O(N) → to iterate through each stair once.
// Space Complexity: O(1) → only constant space used for variables.

var climbStairs = function (n) {
    if(n === 1 || n === 2) return n;

    let prev1 = 1, prev2 = 2, nthClimb;
    for(let i = 3; i <= n; i++){
        nthClimb = prev1 + prev2;
        prev1 = prev2;
        prev2 = nthClimb;
    }

    return nthClimb;
};