// Leetcode Problem:- 102
// Optimal approach: Use BFS (Breadth-First Search).

// This code is useful for solving many BFS-related problems where operations are performed on a tree level-wise.
// Approach:
// Traverse the binary tree level by level using a queue.
// For each level, store the nodes of that level in the `queue`.
// Iterate through the nodes in the `queue` and store their values in the `currentLevel` array.
// After processing all nodes at the current level, push the `currentLevel` array into the `result` array,
// which stores values from all levels of the tree.

// Time Complexity (TC): O(N) - where 'N' is the number of nodes in the binary tree, since each node is processed exactly once.
// Space Complexity (SC): O(N) - for storing nodes in the `queue`, `currentLevel`, and `result` arrays in the worst case.

// Note:
// At the beginning, the `queue` contains a single element, which is the root node object. This object has:
// - `val`: The value of the root node.
// - `left`: Reference to the left child node (or null if there is no left child).
// - `right`: Reference to the right child node (or null if there is no right child).
// Example:-
// If the tree is:
//      3
//     / \
//    9  20
//       / \
//      15  7
// The initial `queue` contains the root node object: { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }.

var levelOrder = function(root) {
    let result = [];
    if (root == null) {
        return result;
    }

    let queue = [root];
    while (queue.length !== 0) {
        let n = queue.length;
        let currentLevel = [];
        while(n--) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }

    return result;
};
