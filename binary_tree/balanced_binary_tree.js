// Leetcode Problem:- 110
// Given a binary tree, determine if it is height-balanced.

// Definition of Balanced Binary Tree:- 
// A binary tree is balanced if, for every node in the tree, the absolute difference between the height of its left 
// subtree and the height of its right subtree is less than or equal to  1.
// Mathematically: |height(left) - height(right)| ≤ 1
// That means the valid height difference can be 0 or 1 and -1 (absolute difference ≤ 1).

// Optimal Approach:
// Approach:-
// I will use DFS traversal. I will recursively call the left and right subtrees to compute their heights.
// For each recursive call, I will check whether the current subtree is balanced or not using the heights obtained
// from the left and right subtrees.

// Inside isBalanced:
// - If the root is null, return true since an empty tree is balanced.
// - Call the dfs function. If it returns -1, it means the tree is unbalanced.

// Inside dfs function:
// Base Case:
// - If the root is null, return 0 since the height of an empty tree is 0.

// Recursive Logic:
// - Recursively call the left and right subtrees to compute their heights.
// - If either the left or right subtree is unbalanced, return -1 immediately to avoid further unnecessary computations.
// - Check if the absolute difference between left and right subtree heights is greater than 1.
//   If yes, return -1 since the tree is unbalanced.
// - Otherwise, return the height of the current node by taking:- 1 + max(leftHeight, rightHeight).

// Note:- I use -1 as a special value to represent an unbalanced subtree while keeping the DFS return type consistent
// as a numeric height.
// Here, the height of a tree is defined as the number of nodes from the current node to the deepest leaf node along one path.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow eaxponentially level by level.

var isBalanced = function (root) {
    if (root === null) return true;
    return dfs(root) !== -1;

    function dfs(root) {
        if (root === null) {
            return 0;
        }

        let leftHeight = dfs(root.left);
        let rightHeight = dfs(root.right);

        if (leftHeight === -1 || rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }
};