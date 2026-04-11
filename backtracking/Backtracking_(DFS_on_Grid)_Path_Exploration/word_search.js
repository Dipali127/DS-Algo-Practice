// Leetcode Problem:- 79
// Problem:-
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or
// vertically neighboring. The same letter cell may not be used more than once.
// We don’t know the starting point, so we run a nested loop.
// For each cell, if it matches the first character of the word, we start DFS and explore all four directions.”

// Solution:
// Approach:
// Since the problem is about finding a valid path in the board that matches the characters of the given word, I will use
// a recursive backtracking approach.
// And, we don't know the index for first character of word started from which cell in board matrix, i will run nested
// for loop and check each cell character equals to first character of word.
// Once i found valid index in board matrix where the first character of word exist, i will call dfs function with current
// index cell on board matrix and index of word which is 0 in the first call.

// Inside dfs function:
// Base Case:
// (i) If index equals to the length of the word, it means all characters have been matched successfully, so return true.
// (ii) if pointer i or j out of bound(either both pointer reach beyond row's length and column' length or negative) or
// current cell in visited array is already true or current cell character of board doesn't match with current chracter of
// word, return false to make search pruing(faster).

// Recursive logic:
// (i) mark visited true for current cell character of board in visited array.
// (ii) explore all 4 directions for current level recursive call.
// (iii) Backtrack: unmark the current cell (visited[i][j] = false) after exploring all directions,
// so that it can be used in other paths.
// 
// After exploring all possible direction, return found which is true, that mean's we found valid path on board matrix
// for given word.

// Time Complexity: O(M × 3^L), where M = m × n (total number of cells in the board) and L = length of the word.
// O(M) comes from the nested loops used to traverse each cell of the board as a starting point.
// For each cell, we perform DFS to search for the word.

// In DFS:
// At the first step, we can explore up to 4 directions.
// After the first step, we cannot go back to the previous cell (since it is already marked as visited), so at each step
// we have at most 3 choices.
// Therefore, in the worst case, the number of recursive calls is approximately 3^L.
// So, the overall time complexity is O(M × 3^L).

// Space Complexity: O(M + L), Explanation:
// O(M) used by the visited 2D array to mark whether a cell is visited or not.
// O(L) used by stack to store recursive call of one path and maximum depth of recursion equals to length of the word.
// Overall, Space Complexity: O(M + L).

// What does this mean?
// let found = dfs(down) || dfs(up) || dfs(right) || dfs(left);
// This means:
// If ANY one direction returns true → stop and return true.
// If all directions return false → then return false.
// And this found will help us from immediately return either true or false.

// How || works (key idea)
// true  || anything → true  (stop early)
// false || next     → check next

var exist = function (board, word) {
    let m = board.length, n = board[0].length;

    // visited array to track each cells of board
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // start DFS only if first character matches
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true;
            }
        }
    }

    return false;

    function dfs(i, j, index) {
        // base case: all characters of word string matched with current path
        if (index === word.length) return true;

        // invalid cases (pruning: to stop early stop from current exploring path for current level recursive call)
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] === true ||board[i][j] !== word[index]
        ) return false;

        // mark visited for current cell character of board in visisted array
        visited[i][j] = true;

        // explore all 4 directions
        let found =
            dfs(i + 1, j, index + 1) || // Down
            dfs(i - 1, j, index + 1) || // Up
            dfs(i, j + 1, index + 1) || // Right
            dfs(i, j - 1, index + 1);   // Left

        // backtrack
        visited[i][j] = false;

        return found;
    }
};