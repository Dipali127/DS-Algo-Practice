// Leetcode Problem:
// Problem:
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Approach:
// To solve this problem, I will use DFS recursion. I will recursively call the left and right subtrees 
// to compute their height. For each recursive call, I will compute the minimum height obtained from the 
// left and right subtrees by adding 1 to include the current node, and then return it to the previous call, 
// and continue this process until it reaches the root call.
// Here, I compute the minimum height (shortest path from root to a leaf), which corresponds to the minimum depth 
// of the tree.
// In below implementation, height is measured in terms of nodes in the treee not in terms of number of edges.

// Solution:
// First, check if the root is null. If it is, return 0 because the height of an empty tree is 0.

// Otherwise, check if the left or right subtree of the current node is null.
// If one of them is null, we continue traversing the non-null subtree,
// because a valid minimum height must end at a leaf node, and a null path is not valid.

// If both left and right children exist, recursively compute the minimum height of both subtrees.
// Return the minimum of the two heights plus 1 to include the current node.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional 
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// Key Point:- In the case where either the left or right subtree is null, we do not compute Math.min,
// because a null subtree does not represent a valid path to a leaf node.
// Instead, return the height from the non-null subtree.

var minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    return 1 + Math.min(leftHeight, rightHeight);
};