// GEEKSFORGEKKS PROBLEM:- 
// Problem:-
// Consider a rat placed at position (0, 0) in an n x n square matrix maze[][]. 
// The rat's goal is to reach the destination at position (n-1, n-1). 
// The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:
// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Your task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at 
// (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path.

// What does “cannot revisit the same cell in the same path” mean?
// It means:
// While exploring one path, the rat cannot go to a cell it already visited in that path.
// But for a different path, that same cell can be used again
// for example; if for one path rat visit 0,0 so for different path it again can use 0,0.

// Solution:
// Approach:
// Take a result array to store all valid paths that the rat can take to reach the destination.
// Take another 2D array called visited to mark whether a cell is visited or not since the problem said that rat cannot
// visit the same cell in the same path.
// Initially, all cells are unvisited.

// Check the value of the starting cell (0,0). If it is 0, it means the rat cannot move,so no valid path exists.

// Call a function dfs with parameters i and j (to traverse the maze matrix) and a path string.
// Initially, both i and j are at the starting cell (0,0).

// Inside dfs function:

// Base Case:
// If both i and j reach the end of the matrix (n-1, n-1),
// add the current path string to the result array and return.

// Recursive Logic: mark visited → explore all directions → unmark visited
// (i) Mark the current cell as visited since rat is exploring this path.
// (ii) For each recursive call, explore all four directions:
//      -> DOWN:  move to (i+1, j)
//      -> RIGHT: move to (i, j+1)
//      -> LEFT:  move to (i, j-1)
//      -> UP:    move to (i-1, j)
// (iii) Backtrack: unmark the current cell as unvisited to explore other paths so that rat can visit the same cell for
// other paths.

// After exploring all valid paths, return the result array.

// Time Complexity: ~O(3^(N²)) because, in the worst case, if all cells are open, the rat can initially move in all four 
// directions. However, after the first move, the rat can only move in three directions from each cell 
// (since one direction is already visited), resulting in an approximate time complexity of O(3^(N²)).

// Space Complexity: O(N^2), Explanation:
// - O(N*N) for visited 2D array.
// - O(N^2) used by stack to store all recursive calls and in the worst case,  all cells are open(that is 1), rat can move
//   to all the four directions from each cell. That means, depth of recursion stack is number of cells in matrix maze.
// Overall, Space Complexity: O(N^2) + O(N^2) = O(2(N^2)) = O(N^2).

class Solution {
    ratInMaze(maze) {
        let result = [], m = maze.length, n = maze[0].length;
       let visited = Array.from({ length: m }, () => new Array(n).fill(false));
        
        // If the starting cell or last cell is blocked, no path exists.
       if (maze[0][0] === 0 || maze[m-1][n-1] === 0) return [];
        
        dfs(0, 0, "");

        function dfs(i, j, path){
            // Base Case
            if(i === m-1 && j === n-1){
                result.push(path);
                return;
            }
            
            // Mark current cell as visited
            visited[i][j] = true;
            
            // Explore all four directions

            // Down
            if(i+1 < m && maze[i+1][j] === 1 && visited[i+1][j] === false){
                dfs(i+1, j, path + 'D');
            }

            // Left
            if(j-1 >= 0 && maze[i][j-1] === 1 && visited[i][j-1] === false){
                dfs(i, j-1, path + 'L');
            }

            // Right
            if(j+1 < n && maze[i][j+1] === 1 && visited[i][j+1] === false){
                dfs(i, j+1, path + 'R');
            }

            // Up
            if(i-1 >= 0 && maze[i-1][j] === 1 && visited[i-1][j] === false){
                dfs(i-1, j, path + 'U');
            }
            
            // Backtrack: unmark current cell
            visited[i][j] = false;
        }
        
        return result;
    }
}