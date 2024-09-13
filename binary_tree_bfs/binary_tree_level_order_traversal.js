// Leetcode Problem:- 102
// Optimal approach: Use BFS (Breadth-First Search).

// This code is useful for solving many BFS-related problems where operations are performed on a tree level-wise.
// Approach:
// traverses through the tree level-wise and stores the nodes of the current level in 'queue'.
// and iterates through the nodes in the `queue` store those nodes in the `currentLevel` array. 
// after processing all nodes at the current level, it adds the `currentLevel` array to the `result` array, which stores values from all levels of the tree.
// TC:- O(N) - where 'N' is the number of nodes in the binary tree, since each node is processed exactly once.
// SC:- O(N) - where 'N' is the number of nodes, due to the space used by the `queue`, `currentLevel`, and `result` arrays.

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
