// Leetcode Problem:- 100
// Optimal approach:
// appraoch:-
// if both trees (p and q) are empty (i.e., both p == null and q == null), return true because two empty trees are considered identical.
// if one tree is empty and the other is not (i.e., p === null || q === null), return false since one tree has more nodes than the other, making them different.  
// if the values of the current nodes in both trees (p.val and q.val) are not equal, return false because the trees differ at this node.
// if the values of the current nodes are equal, recursively check the left and right subtrees in both trees;
// recursively call isSameTree for the left subtree of p and q (p.left and q.left) and (p.right and q.right).
// if both the left and right subtree calls return true, then both subtrees are identical, so return true. Otherwise, return false.
// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the smaller of the two trees as each node in both trees are visited exactly once.
// Space Complexity (SC):- O(h), where 'h' is the height (or depth) of the smaller tree. This represents the space used by the recursive function call stack. 
// In the worst case, if the tree is completely unbalanced, the recursion depth would be O(N), but in the best case of a balanced tree, it would be O(log N).

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