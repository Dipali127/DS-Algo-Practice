// Leetcode problem:- 226
// Optimal Approach :-

// Approach:
// I will use DFS traversal and For each node, I will swap its left and right children.
// Then I will recursively apply the same process to the left and right subtrees.

// Solution:
// First, check if the root is null. If so, return null since we can't invert an empty tree.
// Otherwise call dfs function to invert the given tree.

// inside dfs function:
// Base Case:
// if root is null return, since we cannot invert an empty tree.

// Recursive Logiv:
// for each node, swap the current node's left and right subtrees (note: the node values are not swapped, 
// only their references).
// After swapping the current node, recursively call the function 'invertTree' on the left and right subtrees to 
// invert them.
// Finally, return the root, which now contains the inverted tree.

// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// SC: O(H), where 'H' is the height (or depth) of the tree. 
//     - In the worst case (for a skewed tree), the space complexity is O(N).
//     - For a balanced tree, the space complexity is O(logN) due to the height being proportional to logN.

var invertTree = function (root) {
    if (root === null) return null;
    dfs(root);
    return root;
    function dfs(root) {
        if (root === null) return;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        dfs(root.left);
        dfs(root.right);
    }
};

// Optimal Approach 2: Using BFS
// Approach:
// First, check if the root is null. If so, return null since we can't invert an empty tree.
// Otherwise, add the root node to a queue which to help invert the tree level by level.
// Iterate through the queue, and for each node, swap its left and right subtrees.
// If the current node has a left or right child, add them to the queue.
// Finally, return the root, which now contains the inverted tree.
// Time Complexity: O(N), where 'N' is the number of nodes in the tree, since each node is visited once.
// Space Complexity: O(N), in the worst case, the queue can hold up to 'N' nodes (e.g., in a complete binary tree).

var invertTree = function(root) {
    if (root === null) {
        return null;
    }

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();

        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return root;
}
