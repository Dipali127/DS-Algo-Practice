// Leetcode Problem:- 37
// We are given a 9×9 board (9 rows and 9 columns).
// This board is divided into 9 smaller 3×3 subgrids (boxes).
// Initially, some cells are already filled and some cells are empty ('.').
// Our task is to fill the empty cells such that:
// - Each row contains numbers 1–9 without repetition.
// - Each column contains numbers 1–9 without repetition.
// - Each 3×3 box contains numbers 1–9 without repetition.

// Backtracking Recursion Tree (Sudoku DFS)
// dfs()  // first call
// Cell A:
//   Try 4 (safe) → place 4
//   ↓
//   dfs()  // second call

//     Cell B:
//       Try 1 → not safe ❌
//       Try 2 → not safe ❌
//       Try 3 → not safe ❌
//       ...
//       Try 9 → not safe ❌

//     → No number works → return false ❌

//   ↑ back to first dfs

//   Backtrack: remove 4 (board[A] = '.')
//   Try next number

//   Try 5 (safe) → place 5
//   ↓
//   dfs()  // second call again

//     Cell B:
//       Try numbers...
//       (continue same process)


// Approach:
// Since, few cells are filled initially. So, Loop through the entire board.
// Find the first empty cell ('.').
// For each empty cell(not for each cell), try numbers from 1 to 9,
// and check if it is safe to place that number by verifying:
// - the entire row(horizontal line)
// - the entire column(vertical line)
// - the corresponding 3×3 box(subgrid)
// If it is safe, place the number and move to the next empty cell.
// If it is not safe or we get stuck later, backtrack and try another number.

// Inside the DFS function:
// Base Case:-
// If, while scanning through the Sudoku board, no empty cell is found, that means the board is completely filled,
// and it must be valid. So, return true.

// Recursive Logic
// Traverse the board using a nested loop to find an empty cell ('.').
// Once an empty cell is found, try numbers from 1 to 9.
// For each number, call the isSafe function to check whether it can be placed at that position (by checking row,
// column, and 3×3 box).
// If it is safe, place the number in that cell, then recursively call DFS to solve the rest of the board.
// If the recursive call returns true, it means the solution is found and all cells of the Sudoku are filled with
// unique numbers from 1 to 9.
// If it returns false, remove the number (backtrack) and try the next number.
// But if all numbers from 1 to 9 do not work for that cell in the current recursive function, then go back to the
// previous function and then backtrack (try the next number).

// Time complexity is exponential due to backtracking. 
// In the worst case, each empty cell has 9 choices, so it is O(9^m), where m is the number of empty cells.
// However, pruning using row, column, and 3×3 constraints significantly reduces the search space.

// Space Complexity: O(1), since the recursion stack stores at most 9 recursive calls at any time.


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    dfs();

    function dfs() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let k = 1; k <= 9; k++) {
                        let num = k.toString();
                        if (isSafe(board, i, j, num)) {
                            board[i][j] = num;

                            // Found a valid configuration so far, now try to solve the rest of the board
                            if (dfs()) return true;

                            // Backtrack (remove the number and try the next one)
                            board[i][j] = '.';
                        }
                    }

                    // If no number from 1 to 9 works for this cell, return false
                    return false;
                }
            }
        }

        // If no empty cell is found, it means the board is completely filled with valid numbers
        return true;
    }

    function isSafe(board, row, col, num) {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }

        // Check 3×3 subgrid
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) {
                    return false;
                }
            }
        }

        return true;
    }
};