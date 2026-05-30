// Leetcode Hard Problem:- 987
// Problem:-
// Given the root of a binary tree, return the vertical order traversal of the binary tree.
// Group nodes column-wise (vertical) from left to right.
// Inside each column:
// Traverse top → bottom (based on row)
// If multiple nodes have the same row AND same column, then sort them by value

// Approach:
// I will use BFS traversal to traverse the tree level by level along with each node’s horizontal distance by 
// imagining vertical lines across the tree.
// I will use hash map to group all the nodes corresponding to each vertical line(horizontal distance) to get the 
// vertical view of the tree.

// That means I will not only perform level-by-level traversal, but I will also store the horizontal distance of 
// each node to compute the vertical view of the tree.

// In the case of vertical traversal, Horizontal distance assigns a column index to each node in a tree, which
// helps to group the nodes vertically from left to right.
// Nodes with the same horizontal distance belong to the same vertical column.

// Horizontal distance assigns a column index to each node in a tree, which helps group nodes vertically from left 
// to right.
// Nodes with the same horizontal distance belong to the same vertical column.

// Solution:
// Call the verticalTraversal function and return its result to get the vertical view of the tree.

// Inside verticalTraversal function:
// - Take a result array to store the vertical view of the tree.
// - Take a hash map where the key is horizontal distance and the value is the group of nodes for that horizontal
//   distance.
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

// Time Complexity:- O(N + K log K), Explanation:-
// O(N) is used to traverse each node of the tree exactly once.
// O(K log K) is used for sorting the map entries based on horizontal distance.
// In the worst case, if the tree is unbalanced (left-skewed or right-skewed),
// where each node has a unique horizontal distance then K = N.
// So, in the worst case, the time complexity becomes O(N log N).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case, when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.

// O(N) is used by the result array to store the vertical view nodes of the tree.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// each node has a unique horizontal distance, so all nodes will appear in the vertical view.

// O(N) is used by the hash map to store vertical view nodes.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// where each node has a unique horizontal distance, all nodes will be stored in the hash map.

// So, overall SC:- O(N) + O(N) + O(N) = O(3N) = O(N).

// Why we sort in vertical View?
// Because BFS traversal processes nodes like:- level 0 → level 1 → level 2.
// But the final output of the vertical view should be: HD -2 → -1 → 0 → 1 → 2, that is, nodes from smallest HD to
// largest HD.
// That's why we sort the map entries to arrange nodes from smallest Horizontal Distance to largest Horizontal
// Distance.


// For nodes in the same column (same HD): first sort by row (top to bottom of the tree).
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

// Value at horizontal distance 0 = [ [0,3], [2,5], [2,2] ], where first value is row and second is node value.

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