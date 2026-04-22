// Leetcode Problem:- 100
// Problem:-
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Approach:-
// To solve this problem , i will use DFS recursion where i will recursively call the left and right subtree for both
// 'p' and 'q' tree if the value at 'p' and 'q' are same.

// Solution:-
// Base Case:-
// (i) if both trees (p and q) are empty (i.e., both p == null and q == null), return true because two empty trees 
// are considered identical(same).
// if one tree is empty and the other is not (i.e., p === null || q === null), return false since one tree has more 
// nodes than the other, making them different.  

// Recursive Logic:-
// if the values of the current nodes on both 'p' and 'q' are equal, recursively call for left and righ subtree
// to check the left and right subtrees in both trees are same.
// But if the values of the current nodes on both trees (p.val and q.val) are not equal, return false .

// Time Complexity (TC):- O(N), where N is the number of nodes in the trees.
// In the worst case, we may need to visit all nodes when both trees are identical.
// In the best case, if a mismatch is found at the root, the recursion stops immediately (O(1)).

// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the recursion stack depth is proportional 
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the recursion stack depth is proportional to the height of the tree.

var isSameTree = function (p, q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    return false;
};