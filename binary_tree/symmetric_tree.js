// Leetcode Problem:- 101
// Optimal Approach:
// Approach:
// To solve this problem, I will use DFS traversal. I will recursively compare the left and right subtrees of the same 
// tree to check whether they are mirror images of each other.
// For each recursive call:
// - I will compare the left node's left subtree with the right node's right subtree.
// - Similarly, compare the left node's right subtree with the right node's left subtree.
// If all corresponding pairs match, the tree is symmetric.

// Solution:
// Base Case:-
// (i) if both trees (p and q) are empty (i.e., both p == null and q == null), return true because two empty trees 
// are considered symmetric.
// if one tree is empty and the other is not (i.e., p === null || q === null), return false since one tree has more 
// nodes than the other, making them different. 
// But if value of both tree are different, return false since they are not symmetric.

// Recursively Logic:-
//     (1) - the left node's left subtree with the right node's right subtree.
//     (2) - the left node's right subtree with the right node's left subtree.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.


var isSymmetric = function (root) {
    return dfs(root.left, root.right);
    function dfs(p, q) {
        if (p === null && q === null) {
            return true;
        }

        if (p === null || q === null) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return (dfs(p.left, q.right) && dfs(p.right, q.left));
    }
};