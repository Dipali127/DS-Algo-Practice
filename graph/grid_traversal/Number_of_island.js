// Leetcode Problem:- 200
// We are given a grid of land and water, and we need to count the number of connected components of land cells, where
// connections are only horizontal and vertical.
// Note:- Connected lands are counted as one land.
// What is an Island?
// An island is a group of connected 1’s (land)
// Connection is allowed only:
// Up 
// Down 
// Left 
// Right 
// Diagonal is NOT allowed

// Approach:
// Since we don’t know where an island starts, I will traverse the grid using nested loops.
// Whenever I find a cell with value ‘1’, I will start a DFS from that cell to explore all connected land cells in four directions.

// Inside DFS:

// Base Case:
// If the current cell is out of bounds, or already visited, or is water ('0'),
// then immediately return to the previous call.

// Recursive Logic:
// (i) Mark the current cell as visited so that it is not revisited.
// (ii) Explore all connected land cells in four directions.

// After exploring an entire island, increment the island count by 1.

// After traversing the entire grid using nested loops, return the island count.

// Time Complexity: O(M * N), Explanation:
// O(M * N) is used by the nested loops to traverse each cell.
// In the worst case, if all cells are land (1), the total number of recursive calls is also O(M * N).
// Overall Time Complexity: O(M * N).

// Although we use nested loops, in the worst case where all cells are connected land,
// the nested loop runs O(M × N) times, but DFS is triggered only once for that entire island.
// That single DFS visits and marks all cells as visited, so no further DFS calls are made.

// Space Complexity: O(M * N), since in the worst case, if all cells are land (1),
// the recursion stack can store up to M * N calls.
// That means the maximum depth of the recursion stack is O(M * N).

var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length;
    let island = 0, visited = Array.from({ length: m }, () => new Array(n).fill(false));;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === '1' && visited[i][j] === false){
                island++;
                dfs(i, j);
            }
        }
    }

    function dfs(i, j){
        //Base Case:
        if(i < 0 || j < 0 || i >= m || j >= n || visited[i][j] === true || grid[i][j] === '0'){
            return;
        }
        
        //Vist current cell as visited
        visited[i][j] = true;
        //Explore all four directions:
        //Down:
        dfs(i+1, j);

        //Right:
        dfs(i, j+1);

        //Left:
        dfs(i, j-1);

        //Up:
        dfs(i-1, j);
    }

    return island;
};