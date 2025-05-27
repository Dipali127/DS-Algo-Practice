// Leetcode Problem:- 572
// Check if the given tree (root) is null. If it is, return false since an empty tree cannot have subtrees.
// Otherwise, recursively call isSubtree on the left and right subtrees of the root to check if either subtree matches the subRoot tree.
// In the sameTree function:
// - Check if both p and q are null. If so, return true (both trees are empty, hence identical).
// - If only one of them is null, return false (structures don't match).
// - If the values at the current nodes are not equal, return false.
// - Otherwise, recursively check the left and right subtrees of both trees for equality.
// TC: O(N * M), where N is the number of nodes in the root tree and M is the number of nodes in the subRoot tree.
// In the worst case, for every node in the root tree, we may end up comparing it to the entire subRoot tree.
// SC: O(H), where H is the height of the root tree, used by the recursive call stack. 
var isSubtree = function (root, subRoot) {
    if (root === null) {
        return false;
    }

    if (sameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    function sameTree(p, q) {
        if (p === null && q === null) {
            return true;
        }

        if (p === null || q === null) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    }
};
