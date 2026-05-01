// Leetcode Hard Problem:- 987
// Problem:-
// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
// Group nodes column-wise (vertical) from left to right.
// Inside each column:
// Traverse top → bottom (based on row)
// If multiple nodes have the same row AND same column, then sort them by value

// Approach:
// I will use BFS traversal and traverse the nodes level by level along with their horizontal distance and row.
// I will group the nodes based on the same horizontal distance in a hash map to get the vertical view of the tree.

// Horizontal distance assigns a column index to each node in a tree, which helps group nodes vertically from left to 
// right. Nodes with the same horizontal distance belong to the same vertical column.

// Solution:
// Call the verticalTraversal function and return its result to get the vertical view of the tree.

// Inside verticalTraversal function:
// - Take a result array to store the vertical view of the tree.
// - Take a hash map where the key is horizontal distance and the value is the group of nodes for that horizontal distance.
// - Take a queue to perform level-by-level traversal.
// - Initially, store the root node along with its horizontal distance (0) and row (0) in the queue.

// - Run a while loop:
//   - For each node, extract the node, its horizontal distance, and row.
//   - Store the node data along with its row in the map for that horizontal distance.
//   - Add left and right children to the queue with updated horizontal distances and rows.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - For each column, sort nodes by row first, and if rows are the same, then sort by value.
//   - Extract the values and add them to the result array.

// Time Complexity:- O(N log N)
// Explanation:
// - BFS traversal takes O(N)
// - Sorting nodes inside each column takes O(N log N) in the worst case

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.
// O(N) is used by the result array to store the vertical traversal of the tree.
// O(N) is used by the hash map to store nodes grouped by horizontal distance.
// So, overall SC:- O(N)


// For nodes in the same column (same HD): first sort by row (top to bottom).
// If rows are the same, then sort by value.

// Take below example for how same row can contain same hd(column).
// [3,1,4,0,2,2] 
//         3
//       /   \
//      1     4
//     / \   /
//    0   2 2

// How map stores key(horizontal distance) and value(node)?
// Map {
//   0  => [ [0,3], [2,2], [2,2] ],
//  -1  => [ [1,1] ],
//   1  => [ [1,4] ],
//  -2  => [ [2,0] ]
// }

// After this line:-  let sortedMap = [...map.entries()].sort((a, b) => a[0] - b[0])
// [
//   [-2, [ [2,0] ]],
//   [-1, [ [1,1] ]],
//   [ 0, [ [0,3], [2,2], [2,2] ]],
//   [ 1, [ [1,4] ]]
// ]


// Value at horizontal distance 0 = [ [0,3], [2,5], [2,2] ]
// where first value is row and second is node value.

// So, how sorting works:-
// At [0,3] and [2,5], rows are different, so sort by row → no change.
// At [2,5] and [2,2], rows are same, so sort by value → becomes [[0,3], [2,2], [2,5]].


var verticalTraversal = function (root) {
    if (root === null) return [];

    let result = [], queue = [[root, 0, 0]], map = new Map();

    while (queue.length > 0) {
        let [node, hd, row] = queue.shift();

        if (!map.has(hd)) {
            map.set(hd, [[row, node.val]]);
        } else {
            map.get(hd).push([row, node.val]);
        }

        if (node.left !== null) {
            queue.push([node.left, hd - 1, row + 1]);
        }

        if (node.right !== null) {
            queue.push([node.right, hd + 1, row + 1]);
        }
    }

    // sorting based on same horizontal distance
    let sortedMap = [...map.entries()].sort((a, b) => a[0] - b[0]);

    for (let [hd, values] of sortedMap) {
        // sort by row first, then value
        values.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1]; // same row → sort by value
            return a[0] - b[0];                    // different row → sort by row
        });

        result.push(values.map(v => v[1]));
    }

    return result;
};