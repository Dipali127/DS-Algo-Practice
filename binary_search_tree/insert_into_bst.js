// Leetcode Problem:- 701
// Problem:-
// You are given the root node of a binary search tree (BST) and a value to insert into the tree.
// Return the root node of the BST after the insertion.
// It is guaranteed that the new value does not exist in the original BST.

// Optimal Approach:
// Approach:-
// I will use the BST property by traversing either the left or right subtree.
// While traversing, I will check if the given value (val) is less than the root node value.
// If it is, I will move to the left subtree; otherwise, I will move to the right subtree.
// I will continue this process until I find a null position, where I will insert a new node.

// In this way, the search space is reduced at each step, and the time complexity becomes O(log N)
// instead of O(N), since we are only exploring one side of the tree (either left or right)
// based on where the value should be inserted.

// TC: O(log N) in the best and average case, as we only traverse one path in a balanced BST.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// the time complexity will becomes O(N).

// Space Complexity (SC): O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional
// to the number of nodes in the tree.

// Why root.left = ... is necessary?
// Because without assignment (such as root.left = insertIntoBST(root.left, val) or
// root.right = insertIntoBST(root.right, val)), subtree changes are lost and the updated subtree or new node
// is not attached back to the parent node.

// So, in short:-
// In recursive BST insertion, we must return and reassign the updated subtree; otherwise, changes are not attached
// back to the root or parent node.


var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};