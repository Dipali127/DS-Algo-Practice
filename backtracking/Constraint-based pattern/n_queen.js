// Leetcode Problem:- 51
// Problem:-
// You have 'n' queens and need to place them on an n × n chessboard such that no two queens attack each other.
// Return all possible ways to place 'n' queens on the n x n chessboard.

// Recursion Tree (N-Queens, n = 4)
// Each level = one row
// Each branch = choosing a column

// dfs(row=0)
// │
// ├── dfs(0,0)
// │   └── dfs(1)
// │       ├── dfs(1,2)
// │       │   └── dfs(2) → ❌
// │       │
// │       └── dfs(1,3)
// │           └── dfs(2)
// │               └── dfs(2,1)
// │                   └── dfs(3) → ❌
// │
// ├── dfs(0,1)
// │   └── dfs(1)
// │       └── dfs(1,3)
// │           └── dfs(2)
// │               └── dfs(2,0)
// │                   └── dfs(3)
// │                       └── dfs(3,2)
// │                           └── dfs(4) → ✅
// │
// ├── dfs(0,2)
// │   └── dfs(1)
// │       └── dfs(1,0)
// │           └── dfs(2)
// │               └── dfs(2,3)
// │                   └── dfs(3)
// │                       └── dfs(3,1)
// │                           └── dfs(4) → ✅
// │
// └── dfs(0,3)
//     └── dfs(1)
//         ├── dfs(1,0)
//         │   └── dfs(2)
//         │       └── dfs(2,2)
//         │           └── dfs(3) → ❌
//         │
//         └── dfs(1,1) → ❌

// Since we need to find all valid ways to place N queens such that no two queens attack each other, I’ll use 
// recursion with backtracking.
// I’ll place queens row by row, trying different columns at each step. If a placement becomes invalid, I’ll 
// backtrack and try another option, which helps explore all valid configurations efficiently.

// Basic Approach to solve the problem:-
// (i) Place the queens row by row using a recursive function.
// (ii) For the current row, try all columns one by one.
// (iii) For each column:
// - Check if placing a queen at (row, col) is safe.
// - If it is safe, place the queen.
// - Then recursively move to the next row to place the next queen.
// If at any point we cannot place a queen in the next row (no safe column is available),
// we return to the previous recursive call and remove (backtrack) the last placed queen.
// Then we try the next column in that previous row and repeat the process until all possibilities are explored.
// We continue all the above steps until all queens are placed successfully (row === n).

// Attacking positions for the queens on a chessboard:-
// Two queens attack each other if they are placed in the same row, same column, or on the same diagonal.
// In the N-Queens problem, rows are automatically handled because we place one queen per row using recursion.
// So, while placing a queen at (row, col), we only need to check:
// - same column (in previous rows)
// - top-left diagonal
// - top-right diagonal
// We do not need to check the current row separately because only one queen is placed per row.

// Inside solveNQueens:
// Take a result array to store all possible ways to place 'n' queens on the 'n x n' chessboard.
// Take a 2D board array to represent the placement of queens.
// Call a dfs function starting with row = 0.

// Inside dfs:
// If row reaches 'n', it means all rows have been processed and all 'n' queens are placed successfully.
// So, add the current board configuration to the result array after converting each row into a string.
// For each row, traverse through all columns and check if the current position is safe to place a queen.
// If it is safe, place the queen and recursively call dfs for the next row.
// Continue this process until all 'n' queens are placed.
// If at any row, no valid column is found to place a queen, backtrack to the previous recursive call.
// In the previous call, continue trying the remaining columns from where it left off to place a queen.

// Inside isSafe function, before placing a queen:
// First, check if any queen is already placed in the same column in the previous rows. 
// If yes, return false immediately.
// If not, then check the top-left diagonal from the current position.
// If the above two checks pass, then check the top-right diagonal from the current position.
// If all three checks are safe, it means we can place a queen at the current row and column, so return true.

// Time Complexity:- N!, because we try placing queens row by row, and for each row we explore up to N columns, but
// invalid configurations are pruned early due to safety checks.
// Explanation:
// In the first row, there are N possible positions.
// For the second row, there are at most N-1 possible options (excluding the column used by the first queen).
// And for the third row N-2, and so on. 
// Total ≈ N × (N-1) × (N-2) × ... = N!.

// Space Complexity = O(N^2), Explanation:-
// O(N) used by recursion stack to store at most N function calls (one per row).
// O(N^2) used by board 2D array to represent the chessboard.
// O(K * N^2) used by result array to store all valid solutions,
// where K is the number of solutions and each solution is an N x N board.
// NOTE:
// Temporary space used in board.map(r => r.join('')) is O(N^2),
// but it is immediately stored in result, so it is counted as part of output space,
// not separate auxiliary space.
// So, Auxiliary Space Complexity = O(N^2).
// Total Space Complexity (including output) = O(K * N^2).

var solveNQueens = function(n) {
    let result = [];
    let board = Array.from({ length: n }, () => new Array(n).fill('.'));
    dfs(0);
    function dfs(row){
        if(row === n){
            result.push(board.map(r => r.join('')));
            return;
        }

        for(let col = 0; col < n; col++){
            if(isSafe(row, col, n)){
                // Place the Queen
                board[row][col] = 'Q';   
                // Go Deeper
                dfs(row + 1);            
                // Backtrack
                board[row][col] = '.';   
            }
        }
    }

    function isSafe(row, col, n){
        // check if the column is safe (in previous rows)
        for(let i = 0; i < row; i++){
            if(board[i][col] === 'Q'){
                return false;
            }
        }

        // check top-left column
        let i = row - 1, j = col - 1;
        while(i >= 0 && j >= 0){
            if(board[i][j] === 'Q'){
                return false;
            }

            i--, j--;
        }

        // check top-right column
        i = row - 1, j = col+1;
        while(i >= 0 && j < n){
            if(board[i][j] === 'Q'){
                return false;
            }
            i--, j++;
        }

        return true;
    }

    return result 
};