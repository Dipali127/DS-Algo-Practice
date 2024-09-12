// Leetcode Problem:- 700
// Optimal approach:-
// As we know, a BST has the property that all values less than the root are in the left subtree,
// and all values greater than the root are in the right subtree. 
// So, we can efficiently search for the given 'val' by iterating only one part of the BST.
// if 'val' is less than the current root's value, recursively search in the left subtree.
//  but if 'val' is greater, recursively search in the right subtree.
// Once the current node's value matches given 'val', return that node's subtree.
// TC:- O(log N) in the average case, as we only iterate through one side of the tree (either left or right) in a balanced BST. 
// and in the worst case, if the tree is unbalanced, the time complexity is O(N).
// SC:- O(log N) due to the recursion stack in a balanced BST.
// In the worst case (if the tree is unbalanced ), the space complexity will be O(N).

var searchBST = function (root, val) {
    if (root === null) {
        return null;
    }

    if (root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};