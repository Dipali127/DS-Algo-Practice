// Leetcode Problem:- 987
// The problem asks for the vertical order traversal of a binary tree, where:-
// Nodes are ordered from left to right by column.
// Within each column, nodes are ordered from top to bottom by row.
// Nodes at the same row are ordered by their values.

// Optimal Approach:- Using BFS (breadth-first search) and a map to store nodes based on their column indices.
// Approach:-
//  we will perform a BFS traversal to process nodes level by level.
//  for each node, track its row and column position and the root node starts at (0, 0).
//  use of a map (`columnMap`) to store nodes based on their column index (as keys).
//  and each column stores pairs of [row, node value] for later sorting as the nodes are in sorted order
//  nodes are added to the queue along with their position, and as we traverse, we process left and right children.
//  after traversal completes, columns are sorted by their indices, and nodes within the same column are sorted by row, and by value if rows are the same.
//  finally, node values from each column are extracted and added to the result list.
//  TC:- O(N log N), where N' is the number of nodes as 'BFS' takes O(N), and sorting takes O(N log N).
//  SC:- O(N) for the map and queue.

var verticalTraversal = function(root) {
    let columnMap = new Map();
    
    // store the node along with its position (row, col)
    let queue = [[root, 0, 0]]; 
    while (queue.length !== 0) {
        let n = queue.length;
        while (n--) {
            let [node, row, col] = queue.shift(); 

            // add the current iterated node from queue of a current level to the map for its corresponding column
            if (!columnMap.has(col)) {
                columnMap.set(col, []);
            }
            columnMap.get(col).push([row, node.val]); // Store the row and node value for sorting later

            // Add left and right children to the queue with updated row and column
            if (node.left) {
                queue.push([node.left, row + 1, col - 1]);
            }
            if (node.right) {
                queue.push([node.right, row + 1, col + 1]);
            }
        }
    }

    // Extract the columns and sort by column index
    let sortedColumns = Array.from(columnMap.keys()).sort((a, b) => a - b);

    let result = [];
    // for each column, sort the nodes by row, and by value if rows are the same
   for (let col of sortedColumns) {
        let nodes = columnMap.get(col);
        nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // Sort by row first, then by value
        // Extract the node values after sorting
       result.push(nodes.map(node => node[1])) 
    }


    return result;
};
