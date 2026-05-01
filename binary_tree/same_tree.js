// Leetcode Problem:- 100
// Problem:-
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Approach:-
// To solve this problem , i will use DFS traversal. I will recursively call the left and right subtree for both
// tree 'p' and 'q' only if the value at 'p' and 'q' are same.


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

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

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