// Leetcode Problem:
// Problem:
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Approach:
// To solve this problem, I will recursively call the left and right subtrees to compute their height. For each
// recursive call, I will compute the height obtained from the left and right subtrees by adding 1 to include 
// the current node, and then return it to the previous recursive call.

// Solution:
// First, check if the root is null. If it is, return 0 because the depth of an empty tree is 0, 
// and the depth of a tree with only a root node is 1.

// Otherwise, check if the left or right subtree of the current node is null.
// If one of them is null, then we need to continue traversing the non-null subtree,
// because a valid minimum depth always goes from the root to a leaf node, and a null path is not considered a valid path.

// If both left and right children exist, recursively compute the minimum depth of both subtrees.
// Return the minimum of the two depths plus 1 to include the current node.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the recursion stack depth is proportional 
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the recursion stack depth is proportional to the height of the tree.

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

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);
    return 1 + Math.min(leftDepth, rightDepth);
};