// Leetcode Problem:- 110
// Optimal approach:
// approach:-
// Definition of a balanced binary tree:- A binary tree is balanced if, for every node in the tree, the 
// difference between the heights of the left and right subtrees is no more than 1.
// if the root is null, return 0 because an empty tree has a height of 0.
// recursively calculate the height of the left subtree by calling findHeight on root.left and root.right.
// if the left subtree is unbalanced (indicated by findHeight returning -1), immediately return -1. 
// This serves as early termination, as there's no need to check further if the tree is already unbalanced.
// similarly, if the right subtree is unbalanced (i.e., findHeight returns -1), return -1 immediately.
// otherwise, if the absolute difference between the heights of the left and right subtrees is greater than 1, 
// return -1 to indicate the current subtree is unbalanced.
// but if the tree is balanced at the current node, return the maximum height between the left and right subtrees,
// plus 1 to account for the current node itself.
// the 'isBalanced function' simply checks whether findHeight returns -1. 
// If it does, the tree is unbalanced; otherwise, the tree is balanced.
// TC:- O(N) as each node visited once to find height of that current node and 
// SC:- O(N), Explanation:- 
// O(N) for a completely unbalanced (skewed) tree, where the recursive call stack depth equals the number of nodes.
// O(log N) for a balanced binary tree, as the depth of the recursive call stack will be proportional to the height of the tree, which is log N.

var isBalanced = function (root) {
    return findHeight(root) != -1;
    function findHeight(root) {
        if (root == null) {
            return 0;
        }

        let left = findHeight(root.left);
        if (left === -1) {
            return -1;
        }
        let right = findHeight(root.right);
        if (right === -1) {
            return -1;
        }

        if (Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }

};


