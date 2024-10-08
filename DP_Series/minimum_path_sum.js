// Leetcode Problem:- 64
// Problem Says:-
// given aa 'm*n' grid, with positive integers and we have to find a path from top to bottom right which minimizes
// the sum of all numbers along its path.
// you can only move either down or right at any point in time.
// Brute Force Approach: [Top-Down Recursive Solution]
// Approach:-
// call a recursive function minimumSum from the main function minPathSum to compute the minimum path sum starting 
// from the top-left corner (0, 0).
// Inside function 'minimumSum':
// Base Case:
//  - if both i (row) and j (column) reach the last cell (m-1, n-1) (i.e., the bottom-right corner), 
//    return the value of this cell grid[i][j]. This means we have reached the destination.
// (1) when 'i' is on the last row (i === m-1) , we can only move right.
// therefore, add the current cell value grid[i][j] to the result of the recursive call on the right cell (i, j+1).
// (2) when 'j' is on the last column (j === n-1), we can only move down.
// therefore, add the current cell value grid[i][j] to the result of the recursive call on the cell below (i+1, j). 
// when neither (1) and (2) is true, we can move both right and down.
// in this case, we take the minimum path sum between moving right and moving down, and add the current cell value grid[i][j] to that minimum value.
// finally, return the minimum sum after traversing through each possible path.
// TC:- O(2^(M * N)), where 'M' is the number of rows and 'N' is the number of columns. 
// where 'M' is the number of rows and 'N' is the number of columns .
// we have maximum 'M*N' cells and for each cell, we have two choices: move right or move down which leads to an exponential time complexity.
// SC:- O(M + N)where 'M' is the number of rows and 'N' is the number of columns.
// the recursion depth depends on the size of the grid since the maximum depth of recursive calls can be 
// up to M + N in the worst case (moving down and right until the bottom-right corner is reached).

var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    return minimumSum(grid, 0, 0, m, n);
};

function minimumSum(grid, i, j, m, n){
    if(i === m-1 && j === n-1){
        return grid[i][j];
    }
    if(i === m-1){
        return grid[i][j] +  minimumSum(grid, i, j+1, m, n);
    }else if(j === n-1){
        return grid[i][j] + minimumSum(grid, i+1, j, m, n);
    }

    return grid[i][j] + Math.min(minimumSum(grid, i, j+1, m, n), minimumSum(grid, i+1, j, m, n));
}

// Optimal Approach 1: [Top-Down Approach] (Using Recursion + Memoization)
// Approach:
// use of a 2D 'dp' array to avoid recalculation for the same recursive function.
// call a recursive function 'minimumSum' from the main function 'minPathSum' to compute the minimum path sum starting 
// from the top-left corner (0, 0).
// Inside function 'minimumSum':
// Base Case:
//    - if both i (row) and j (column) reach the last cell (m-1, n-1) (i.e., the bottom-right corner), 
//      return the value of this cell grid[i][j]. This means we have reached the destination.
// Before making any recursive call, check if the value for the current cell (i, j) is already computed 
//    and stored in 'dp'. If so, return the precomputed value immediately.
// Recursive Cases:
//  (1) if 'i' is on the last row (i === m-1), we can only move right.
//      In this case, add the current cell value grid[i][j] to the result of the recursive call on 
//       the right cell (i, j+1), and store the result in the 'dp' array.
// (2) if 'j' is on the last column (j === n-1), we can only move down.
//         In this case, add the current cell value grid[i][j] to the result of the recursive call 
//          on the cell below (i+1, j), and store the result in the 'dp' array.
// (3) when neither (1) nor (2) is true, we have the option to move both right and down.
//         In this case, compute the minimum path sum between moving right and moving down, 
//          add the current cell value grid[i][j] to that minimum value, and store the result in 'dp'.
// finally, return the minimum sum after traversing through each possible path.
// TC:- O(M*N), as we visit each cell at most once and compute the number of paths for each cell. 
// Since the grid has 'M*N' cells, the time complexity is linear with respect to the grid size.
// SC:- O(M*N), as we use an additional 'dp' array to store computed values for each cell, which takes up O(M*N) space.

var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(-1))
    return minimumSum(grid, 0, 0, m, n, dp);
};

function minimumSum(grid, i, j, m, n, dp){
    if(i === m-1 && j === n-1){
        return grid[i][j];
    }
    if(dp[i][j] !== -1){
        return dp[i][j];
    }
    if(i === m-1){
        return dp[i][j] = grid[i][j] +  minimumSum(grid, i, j+1, m, n, dp);
    }else if(j === n-1){
        return dp[i][j] = grid[i][j] + minimumSum(grid, i+1, j, m, n, dp);
    }

    return dp[i][j] = grid[i][j] + Math.min(minimumSum(grid, i, j+1, m, n, dp), minimumSum(grid, i+1, j, m, n, dp));
}

// Optimal Approach 2 (Best Approach): [Iterative Approach]
// Approach:-
// use a 2D dp array, where each cell stores the minimum sum required to reach that cell.
// initialize the dp[0][0] with the value from grid[0][0], as the minimum sum to reach the 
// starting cell is the value of that cell itself.
// since you can only move from left to right in the first row, the minimum sum for any cell
// in this row is the value of the current cell plus the minimum sum of the cell to its left (dp[0][j-1]).
// similarly, you can only move downwards in the first column. The minimum sum for any cell in this column is
// the value of the current cell plus the minimum sum of the cell directly above it (dp[i-1][0]).
// For the rest of the grid (cells not in the first row or column), the minimum sum to reach each cell is the value of 
// the current cell plus the minimum of the two possible previous cells: the one directly above (dp[i-1][j]) 
// or the one to the left (dp[i][j-1]).
// finally, return dp[m-1][n-1] (the bottom-right corner) will contain the minimum path sum from the top-left
// corner to the bottom-right corner.
// TC:- O(M*N), as we visit each cell at most once and compute the number of paths for each cell. 
// Since the grid has 'M*N' cells, the time complexity is linear with respect to the grid size.
// SC:- O(M*N), as we use an additional 'dp' array to store computed values for each cell, which takes up O(M*N) space.

var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(-1))
    dp[0][0] = grid [0][0];

    // fill first row
    for(let j = 1; j < n; j++){
        dp[0][j] = grid[0][j] + dp[0][j-1];
    }

    // fill first column 
    for(let i = 1; i < m; i++){
        dp[i][0] = grid[i][0] + dp[i-1][0]
    }

    // fill remaining cells
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
        }
    }

    return dp[m-1][n-1];
};

// Optimal Approach 2 (Best Approach): [Iterative Approach with Space Optimization]
// since you can only move from left to right in the first row, the minimum sum for any cell
// in this row is the value of the current cell plus the minimum sum of the cell to its left (grid[0][j-1]).
// similarly, you can only move downwards in the first column. The minimum sum for any cell in this column is
// the value of the current cell plus the minimum sum of the cell directly above it (grid[i-1][0]).
// For the rest of the grid (cells not in the first row or column), the minimum sum to reach each cell is the value of 
// the current cell plus the minimum of the two possible previous cells: the one directly above (grid[i-1][j]) 
// or the one to the left (grid[i][j-1]).
// finally, return grid[m-1][n-1] (the bottom-right corner) will contain the minimum path sum from the top-left
// corner to the bottom-right corner.
// TC:- O(M*N), as we visit each cell at most once and compute the number of paths for each cell. 
// Since the grid has 'M*N' cells, the time complexity is linear with respect to the grid size.
// SC:- O(1), since we haven't use any additional space apart from modifying the given grid only.

var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    // fill first row
    for(let j = 1; j < n; j++){
        grid[0][j] = grid[0][j] + grid[0][j-1];
    }

    // fill first column 
    for(let i = 1; i < m; i++){
        grid[i][0] = grid[i][0] + grid[i-1][0]
    }

    // fill remaining cells
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }

    return grid[m-1][n-1];
};