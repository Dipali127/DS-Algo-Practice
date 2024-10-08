// Leetcode Problem:- 746
// Problem Says:- 
// Given an array 'cost' where 'cost[i]' is the cost of ith step on a staircase.
// You can climb either one or two steps once you pay the cost of the current step.
// You can either start from the step with index '0' or index '1'.
// Brute Force Approach:
// Approach:-
// call the function 'minCost' twice: 
//   - first, start climbing the stairs from index '0'.
//   - second, start climbing the stairs from index '1'.
// the 'minCost' function calculates and returns the minimum cost to reach the top, starting from the given index (either '0' or '1').
// Inside the 'minCost' function:
//  - calculate the minimum cost by either climbing one step or two steps from the current index.
//  - once the minimum cost for both options (climb one and climb two) is calculated, return the smaller value between the two.
// finally, the main function 'minCostClimbingStairs' returns the minimum of these two starting points.
// TC:- O(2^N), because at each index we have two options: climb one step or climb two steps, leading to an exponential number of recursive calls.
// SC:- O(N), due to the maximum depth of the recursion stack being 'N' in the worst case (when we climb one step at a time).

var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    return Math.min(minCost(cost, 0, n), minCost(cost, 0+1, n));
};

function minCost(cost, i, n){
    if(i >= n){
        return 0;
    }

    let climbOne = cost[i] + minCost(cost, i+1, n);
    let climbTwo = cost[i] + minCost(cost, i+2, n);
    return Math.min(climbOne, climbTwo);
}

// Optimal Approach1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:- 
// use a 'dp' array to store results of subproblems and avoid redundant calculations (memoization).
// Call the function 'minCost' twice: 
//   - first, start climbing the stairs from index '0'.
//   - second, start climbing the stairs from index '1'.
// the 'minCost' function calculates and returns the minimum cost to reach the top, starting from the given index (either '0' or '1').
// Inside the 'minCost' function:
// Base Case:-
//   - if the index 'i' is out of bounds, return 0 (since no cost is gained after reaching the top).
//   - if the result for index 'i' is already computed (i.e., dp[i] != -1), return the stored value to avoid redundant calculations.
//   - otherwise, calculate the minimum cost by either climbing one step or two steps from the current index.
//   - once the minimum cost for both options (climb one and climb two) is calculated, store the smaller value in the dp array
//       and then return that minimum cost to the previous call.
// finally, the main function 'minCostClimbingStairs' returns the minimum of the two starting points (from index 0 or index 1).
// TC:- O(N), since each step is computed only once, and we store previously computed results in the 'dp' array.
// SC:- O(N), due to the 'dp' array used to store computed results, and recursion depth in the worst case is proportional to 'n'.

var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(-1);
    return Math.min(minCost(cost, 0, dp, n), minCost(cost, 1, dp, n));
};

function minCost(cost, i, dp, n) {
    if (i >= n) {
        return 0;
    }
    if (dp[i] !== -1) {
        return dp[i];
    }
    let climbOne = cost[i] + minCost(cost, i + 1, dp, n);
    let climbTwo = cost[i] + minCost(cost, i + 2, dp, n);
    return dp[i] = Math.min(climbOne, climbTwo)
    return dp[i];
}

// Optimal Approach2: [Bottom-Up Approach] (In-Place Modification)
// Approach:-
// Base Case:- 
// - if the length of the given array 'cost' is 2, return the minimum between cost[0] and cost[1] since we can start from either of the first two steps.
// - otherwise, traverse the given array 'cost' from index '2' to the length of the 'cost' array.
// - at each step 'i', update cost[i] by adding the minimum of the previous two steps (cost[i-1] and cost[i-2]) to it.
//   this ensures that cost[i] stores the minimum cost required to reach step 'i'.
// - finally, return the minimum cost to reach the top, which would be either from the last step (cost[n-1]) or the second last step (cost[n-2]).
// TC:- O(N), since we are traversing the 'cost' array once in a loop from index 2 to n-1.
// SC:- O(1), since we are modifying the input 'cost' array in place, and no extra space is used apart from a few variables.
// Note:-
// For each stair starting from index 2, the cost of reaching that stair is updated to include the minimum of the 
// previous two stairs' costs.
// specifically, cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]):-
//  - cost[i - 1] represents the cost of taking one step to the current stair i.
//  - cost[i - 2] represents the cost of taking two steps to the current stair i.
// After looping through all stairs, the last two elements of the array hold the total cost to reach the top:
//  - cost[n - 1] holds the cost if the person takes one step to reach the top.
//  - cost[n - 2] holds the cost if the person takes two steps to reach the top.

var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    if (n === 2) {
        return Math.min(cost[0], cost[1])
    }

    for (let i = 2; i < n; i++) {
        cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[n - 1], cost[n - 2]);
};