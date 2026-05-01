// Leetcode Problem: 112
// Problem:
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that
// the sum of all values along the path equals targetSum.

// Approach:
// To solve this problem, I will use DFS traversal. I will recursively explore all root-to-leaf paths.
// While traversing, I will maintain a running sum to add node values from the root to the current node.
// Whenever the current path reaches a leaf node, I will check whether the accumulated sum equals targetSum.
// If yes, then return true; otherwise, explore other paths.

// Solution:
// First, we check if root is null. If it is, return false since an empty tree cannot have a valid path sum.
// If this is not the case, define a DFS function to explore all paths from root to leaf.

// Inside DFS:

// Base Case:
// If root is null, return false.

// Recursive Logic:
// Add the current node value to currentSum.
// If the current node is a leaf, check whether currentSum equals targetSum and return the result.
// Otherwise, recursively check both left and right subtrees, and return true if either subtree returns true.

// Key Point:
// We use early return because we only need one valid root-to-leaf path.
// So if either subtree returns true, we immediately return true using OR logic.

// Logical OR uses short-circuiting:
// If the left subtree returns true, we immediately return true
// without exploring the right subtree.
// Otherwise, we explore the right subtree.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

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