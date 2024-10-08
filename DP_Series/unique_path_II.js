// Leetcode Problem:- 63
// Problem Says:
// There is a robot on an m x n grid. 
// The robot is initially at the top-left corner (i.e., grid[0][0]) and tries to move to the bottom-right corner (i.e., grid[m-1][n-1]).
// The robot can only move either down or right at any point in time.  
// Obstacles are marked as 1, and open spaces are marked as 0 in the grid and the robot's path cannot include any obstacles. 
// Return the number of possible unique paths that the robot can take to reach the bottom-right corner. 

// Brute Force Approach: [Top-Down Recursive Solution]
// Approach:-
// Inside the 'uniquePathsWithObstacles' function:
// Base Case:-
// - if the first cell (grid[0][0]) or the last cell (grid[m-1][n-1]) contains an obstacle (i.e., 1), return 0. 
//      this is because no valid paths can start or end in an obstacle.
// - otherwise, call the recursive function 'uniquePath' which computes the number of valid paths that the robot can take 
//      to reach the bottom-right corner by either moving down or right.
// Inside the 'uniquePath' function:
// Base Case:-
// - if the robot reaches the bottom-right corner (i.e., grid[m-1][n-1]), return 1. This means the robot found 
//      a valid path to the destination.
// - if the robot moves out of bounds (i.e., index 'i' or 'j' exceeds the grid dimensions) or if it encounters an obstacle 
//      (i.e., grid[i][j] === 1), return 0. This indicates an invalid path.
// - otherwise, the robot can move right (i, j+1) or down (i+1, j). 
// the total number of unique paths from the current cell is the sum of the paths obtained by moving right and down.
// TC:- O(2^(M * N)), where 'M' is the number of rows and 'N' is the number of columns. 
// where 'M' is the number of rows and 'N' is the number of columns .
// we have maximum 'M*N' cells and for each cell, the robot has two choices: move right or move down which leads to an exponential time complexity.
// SC:- O(M + N)where 'M' is the number of rows and 'N' is the number of columns.
// the recursion depth depends on the size of the grid since the maximum depth of recursive calls can be 
// up to M + N in the worst case (moving down and right until the bottom-right corner is reached).

var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    return uniquePath(obstacleGrid, 0, 0, m, n);
};

function uniquePath(obstacleGrid, i, j, m, n){
    if(i === m-1 && j === n-1){
        return 1;
    }

    if(i >= m || j >= n || obstacleGrid[i][j] === 1){
        return 0;
    }

    let right = uniquePath(obstacleGrid, i, j+1, m , n);
    let down = uniquePath(obstacleGrid, i+1, j, m, n);
    return right + down;
}

// Optimal Approach 1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:
// use a 'dp' array to store the results of subproblems to avoid redundant calculations.
// Inside the 'uniquePathsWithObstacles' function:
// Base Case: 
// - if the first cell (grid[0][0]) or the last cell (grid[m-1][n-1]) contains an obstacle (i.e., 1), return 0. 
//      This is because no valid paths can start or end at an obstacle.
// - initialize the 'dp' array with -1. The array size is (m+1)x(n+1) to cover all grid cells, and -1 indicates uncalculated states.
// - call the recursive function 'uniquePath', which calculates the number of valid paths from the top-left to 
//    the bottom-right corner using dynamic programming to store intermediate results.
// Inside the 'uniquePath' function:
// Base Case: 
// - if the robot reaches the last row and column (i.e., bottom-right corner), return 1. This indicates that 
//      the robot has found a valid path to the destination.
// - if the robot moves out of bounds (i.e., index 'i' or 'j' exceeds the grid size) or encounters an obstacle 
//      (i.e., grid[i][j] === 1), return 0. This indicates an invalid path.
// otherwise if the current cell value is already computed and stored in 'dp[i][j]', return it directly to avoid redundant calculations. 
// from the current cell, the robot can either move right (i, j+1) or down (i+1, j). The total number of unique paths 
// from the current cell is the sum of the paths obtained by moving right and down.
// Store this value in 'dp[i][j]' to memoize the result before returning it.
// TC:- O(M*N), as we visit each cell at most once and compute the number of paths for each cell. 
// Since the grid has 'M*N' cells, the time complexity is linear with respect to the grid size.
// SC:- O(M*N), as we use an additional 'dp' array to store computed values for each cell, which takes up O(M*N) space.

var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(-1));
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    return uniquePath(obstacleGrid, 0, 0, m, n, dp);
};

function uniquePath(obstacleGrid, i, j, m, n, dp){
    if(i === m-1 && j === n-1){
        return 1;
    }

    if(i >= m || j >= n || obstacleGrid[i][j] === 1){
        return 0;
    }

    if(dp[i][j] !== -1){
        return dp[i][j];
    }

    let right = uniquePath(obstacleGrid, i, j+1, m , n, dp);
    let down = uniquePath(obstacleGrid, i+1, j, m, n, dp);
    return dp[i][j] = right + down;
}

// Optimal Approach 2 (Best Approach): [Iterative Approach with Space Optimization]
// Approach:-
// use a one-dimensional 'dp' array to store the number of unique paths to reach each cell in the grid.
// initialize the dp array with size 'n' (the number of columns) and set dp[0] = 1, 
// because there is exactly one way to reach the start position.
// This array will be updated row by row as we iterate through the grid.
// Base Case:
// - if the start cell (grid[0][0]) or the destination cell (grid[m-1][n-1]) has an obstacle, return 0 since no path exists.
// For each row:
// - if a cell has an obstacle, set dp[j] = 0 because no path can pass through it.
// - otherwise, update dp[j] by adding the value from the previous cell in the same row (dp[j-1]).
// - this ensures that dp[j] holds the number of unique paths to reach that cell by summing the paths from the left (dp[j-1]) and above (dp[j]).
// - the dp array for each row contains the number of paths to reach each cell in that row.
// the value in dp[n-1] will contain the number of unique paths to reach the bottom-right corner of the grid.
// Note:- the dp array is initialized with 1 at dp[0] because there is only one way to reach any cell in the first row if there are no obstacles. 
// TC:- O(M * N), where 'M' is the number of rows and 'N' is the number of columns.
// SC:- O(N), since we are using a one-dimensional 'dp' array of size 'n' to store the computed values.

var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    let dp = Array(n).fill(0);
    dp[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;  
            } else if (j > 0) {
                dp[j] += dp[j - 1];  
            }
        }
    }
    return dp[n - 1];
};
