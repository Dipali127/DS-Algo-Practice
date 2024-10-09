// Leetcode Probelm:- 120
// Problem says:
// Given a triangle array of integers, determine the smallest sum that is possible starting from the top.
// Note:- You can only move to adjacent values in the next row (i.e., from the current row value, you can either move to the 
// value directly below or the value to the bottom-right in the next row).
//
// Example 1:
//      2               ← Start at the top
//     3 4             
//    6 5 7            
//   4 1 8 3           ← Reach the bottom
//
// For the value 4 in row 2, you can take either 5 or 7 in the row below.
// Likewise, for the value 5 in row 3, you can take either 1 or 8 in the row below.

// Brute Force Approach: [Top-Down Recursive Solution]
// Approach:- 
// call a recursive function minimumSum from the main function minPathSum to compute the minimum path sum starting 
// from the top-left corner (0, 0).
// Inside function 'minimumSum':
// Base Case:
// - if we reach the last row (i.e., index 'i' equals m-1), return the current cell value because there are no further rows.
// Otherwise, compute the minimum path sum by exploring the two possible moves: down (triangle[i+1][j]) and down-right (triangle[i+1][j+1]).
// finally, the result for each cell is the current value plus the minimum of the two possible paths. 
// TC:- O(2^M), where 'M' is the number of rows, because for each cell, we make two recursive calls (down and down-right).
// SC:- O(M). because recursion stack depth will be equal to the number of rows 'M'.

var minimumTotal = function(triangle) {
    let m = triangle.length;
    return minimumSum(triangle, 0, 0, m); 
};

function minimumSum(triangle, i, j, m){
    if(i === m - 1) {
        return triangle[i][j];
    }

    let down = minimumSum(triangle, i + 1, j, m);
    let downRight = minimumSum(triangle, i + 1, j + 1, m);
    return triangle[i][j] + Math.min(down, downRight);
}

// Optimal Approach 1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:
// use a 2D dp array to store results of subproblems and avoid recalculating the minimum sum for the same cell multiple times.
// call a recursive function 'minimumSum' from the main function 'minPathTotal' to compute theminimum path sum starting 
// from the top of the triangle (0, 0).
// Inside function 'minimumSum':
// Base Case: 
//    - if we reach the last row (i === m - 1), return the value of the current cell, as there is no further path.
// Before computing the sum for any cell, we check if it has already been computed and stored in dp. If so, return 
// the stored value to avoid redundant computation.
// for each cell, recursively calculate the minimum path sum by considering two options:
//                           - Move down (to the same column in the next row).
//                           - Move down-right (to the next column in the next row).
//                           - result of the minimum path sum for the current cell is stored in the dp array and returned.
// TC:- O(M*M), where 'M' is the number of rows in the triangle as we visit each cell once and compute the result for each cell. 
// SC:- O(M*M), due to the additional space used by the dp array to store results for each cell.

var minimumTotal = function(triangle) {
    let m = triangle.length;
    let n= triangle[0].length;
    let dp = Array.from(Array(m), () => Array(m).fill(-1))
    return minimumSum(triangle, 0, 0, m, dp); 
};

function minimumSum(triangle, i, j, m, dp){
    if(i === m - 1) {
        return triangle[i][j];
    }

    if(dp[i][j] !== -1){
        return dp[i][j];
    }

    let down = minimumSum(triangle, i + 1, j, m, dp);
    let downRight = minimumSum(triangle, i + 1, j + 1, m, dp);
    return dp[i][j] = triangle[i][j] + Math.min(down, downRight);
}

// Optimal Approach 2 (Best Approach): [Iterative Approach]
// Approach:-
// use a 2D dp array where each cell stores the minimum sum required to reach that cell from the bottom of the triangle.
// initialize the last row of the dp array with the values from the last row of the triangle, as the minimum sum to reach
// any cell in the last row is the value of that cell itself.
// then, iterate upwards from the second-to-last row to the top row of the triangle.
// for each cell in a row, the minimum sum to reach that cell is the value of the current cell plus the minimum of the two possible cells directly below it (dp[i + 1][j] and dp[i + 1][j + 1]).
// finally, after iterating through all rows, the top cell (dp[0][0]) will contain the minimum path sum from the top to the bottom of the triangle.
// TC:- O(M * M), where 'M' is the number of rows in the triangle, as we visit each cell exactly once. 
// SC:- O(M * M) due to the additional dp array used to store computed values for each cell.

var minimumTotal = function (triangle) {
    let m = triangle.length;
    let n = triangle[0].length;
    let dp = Array.from(Array(m), () => Array(m).fill(-1))
    return minimumSum(triangle, 0, 0, m, dp);
};

function minimumSum(triangle, i, j, m, dp) {
    // Copy the last row of the triangle into dp
    for (let j = 0; j < triangle[m - 1].length; j++) {
        dp[m - 1][j] = triangle[m - 1][j];
    }


    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}

// Optimal Approach 2 (Best Approach): [Iterative Approach with Space Optimization]
// Approach:-
// start from the second-to-last row (i = m - 2) and iterate upwards to the top of the triangle.
// for each cell in the current row (triangle[i][j]), calculate the minimum path sum by adding the
// value of the current cell to the minimum of the two possible cells below it (triangle[i + 1][j] and triangle[i + 1][j + 1]).
// this transforms each element in triangle[i][j] into the minimum path sum to reach the bottom starting from that cell.
// Once, we reach the top row, triangle[0][0] will contain the minimum path sum from the top to the bottom of the triangle.
// TC:- O(M * M), where 'M' is the number of rows in the triangle, as we are processing each element exactly once. 
// SC:- O(1), since we modify the triangle in place and do not use any extra space.

var minimumTotal = function (triangle) {
    let m = triangle.length;
    
    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};