// Problem Says:-
// there is a robot on an m*n grid.
// robot is initially at top-left corner (i.e, grid[0][0]).
// robot tries to move to the bottom-right corner(i.e, grid[m-1][n-1]).
// robot can only move either down or right at any point in time.
// return the number of possible paths that the robot can take to reach the bottom-right corner.
// Brute Force Approach: [Top-Down Approach] (Recursive Solution)
// Approach:-
// call the function 'uniquePath' to get the number of uique paths that robot can take to reach the bottom-right corner of grid.
// Inside 'uniquePath' function:
// Base Case:-
// - if the robot reaches the last row and the last column , return 1. This means the robot found one valid path to reach the destination.
// - if the robot goes out of bounds (i.e., index 'i' or 'j' exceeds the grid size), return 0. This indicates an invalid path.
// otherwise from each cell, the robot can either move right (i, j+1) or down (i+1, j) by recursively calling a function 'uniquePath .
// the total number of unique paths from a given cell is the sum of paths obtained by moving right and moving down.
// TC:- O(2^N), because from each cell, the robot has two choices: move right or move down which leads to an exponential time complexity.
// SC:- O(M+N), where 'M' is the number of rows and 'N' is the number of columns.
// the recursion depth depends on the size of the grid since the maximum depth of recursive calls can be 
// up to M + N in the worst case (moving down and right until the bottom-right corner is reached).

var uniquePaths = function(m, n) {
    return uniquePath(0, 0, m, n);
};

function uniquePath(i, j, m , n){
    if(i === m-1 && j === n-1){
        return 1;
    }

    if(i >= m || j >= n){
        return 0;
    }

    let right = uniquePath(i, j+1, m, n);
    let down = uniquePath(i+1, j, m, n);
    return right + down;
}

// Optimal Approach1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:-
// use of a 'dp' array to avoid redundant calculations.
// call the function 'uniquePath' to get the number of unique paths that the robot can take to reach the bottom-right corner of the grid.
// Inside 'uniquePath' function:
// Base Case:-
// - if the robot reaches the last row and the last column, return 1. This means the robot found one valid path to reach the destination.
// - if the robot goes out of bounds (i.e., index 'i' or 'j' exceeds the grid size), return 0. This indicates an invalid path.
// - if the current cell value exists in the 'dp' array, return it directly to avoid redundant calculations.
// otherwise, from each cell, the robot can either move right (i, j+1) or down (i+1, j) by recursively calling the function 'uniquePath'.
// the total number of unique paths from a given cell is the sum of paths obtained by moving right and moving down, 
// which we will store in the 'dp' array before returning it.
// TC:- O(M*N), as we visit each cell at most once and compute the number of paths for each cell. 
// Since the grid has 'M*N' cells, the time complexity is linear with respect to the grid size.
// SC:- O(M*N), as we use an additional 'dp' array to store computed values for each cell, which takes up O(M*N) space.
var uniquePaths = function(m, n) {
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(-1))
    return uniquePath(0, 0, m, n, dp);
};

function uniquePath(i, j, m , n, dp){
    if(i === m-1 && j === n-1){
        return 1;
    }

    if(i >= m || j >= n){
        return 0;
    }

    if(dp[i][j] !== -1){
        return dp[i][j];
    }

    let right = uniquePath(i, j+1, m, n, dp);
    let down = uniquePath(i+1, j, m, n, dp);
    return dp[i][j] = right + down;
}

// Optimal Approach2 (Best Approach): [Iterative Approach] 
// Approach:-
// Use a 'dp' array to store the number of unique paths to reach each cell in the grid.
// initialize the first row and column since they can only be reached from one direction 
// (right for the first row and down for the first column).
// iterate through the grid and fill in the 'dp' table based on the number of paths from the top and left cells.
// the number of unique path that robot take to reach the destination will be found in the bottom-right corner of the 'dp' table.
// Note:- Filling the first row and first column with 1 signifies that there is only one unique path to reach any cell in those areas of the grid. 
// TC:- O(M*N), where 'M' is the number of rows and 'N' is the number of columns. 
// SC:- O(M*N), where 'M' is the number of rows and 'N' is the number of columns, due to the 'dp' array storing computed values.

var uniquePaths = function(m, n) {
    let dp = Array.from(Array(m), () => Array(n).fill(0)); 
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1; 
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1; 
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

// Optimal Approach2 (Best Approach): [Iterative Approach with Space Optimization]
// Approach:-
// use a one-dimensional 'dp' array to store the number of unique paths to reach each cell in the grid.
// initialize the first row since it can only be reached from one direction (right).
// iterate through the grid, updating the 'dp' array based on the number of paths from the top and left cells.
// the number of unique paths that the robot can take to reach the destination will be found in the last cell of the 'dp' array.
// Note:- Filling the dp array with 1 signifies that there is only one unique path to reach any cell in the first row.
// TC:- O(M * N), where 'M' is the number of rows and 'N' is the number of columns.
// SC:- O(N), where 'N' is the number of columns, due to the optimized 'dp' array storing computed values.

var uniquePaths = function(m, n) {
    let dp = Array(n).fill(1); 
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }
    
    return dp[n - 1];
};







