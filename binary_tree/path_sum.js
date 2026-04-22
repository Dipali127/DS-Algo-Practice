// Leetcode Problem: 112
// Problem:
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that
// the sum of all values along the path equals targetSum.

// Approach:
// To solve this problem, i will use DFS traversal to explore all root-to-leaf paths.
// While traversing, we maintain a running sum of node values from the root to the current node.
// Whenever we reach a leaf node, we check whether the accumulated sum equals targetSum.
// If any path satisfies this condition, we return true.

// Solution:
// First, we check if root is null. If it is, we return false since an empty tree cannot have a valid path sum.
// If this is not the case, we define a DFS function to explore all paths from root to leaf.

// Inside DFS:

// Base Case:
// If root is null, return false.

// Recursive Logic:
// Add the current node value to currentSum.
// If the current node is a leaf, check whether currentSum equals targetSum and return the result.
// Otherwise, recursively check both left and right subtrees, and return true if either subtree returns true.

// Key Point:
// We use early return because we only need one valid root-to-leaf path. So if either subtree returns true,
// we immediately return true using OR logic.

// Logical OR uses short-circuiting on true:
// If the left subtree returns true, the right subtree is not evaluated, and the result is immediately true.
// This helps us stop early once a valid path is found.

// Time Complexity (TC): O(N), where N is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC): O(H), where H is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the recursion stack depth is proportional to the
// number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the recursion stack depth is proportional to the height of the tree.

var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    return dfs(root, 0);
    function dfs(root, currentSum){
        if(root === null){
            return false;
        }
        
        currentSum+= root.val;
        // leaf check
        if(root.left === null && root.right === null){
            return currentSum === targetSum;
        }

        return (dfs(root.left, currentSum) ||
        dfs(root.right, currentSum));
    }
};