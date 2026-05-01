// Leetcode Problem:- 450
// Optimal Approach:

// Approach:
// I will use the BST property by traversing either the left or right subtree.
// While traversing, I will check if the given key is less than the root node value.
// If the key is smaller, I will move to the left subtree; if the key is greater, I will move to the right subtree.
// Once I find the node whose value is equal to the key, I will delete it.

// In this way, the search space is reduced at each step, and the time complexity becomes O(log N)
// instead of O(N), since we are only exploring one side of the tree (either left or right)
// based on where the value may exist.

// Inside deleteNode function:
// If root is null, then return null.
// If key < root.val, then recursively call the left subtree and attach the updated subtree back to previous recursive
// call like this:- root.left = deleteNode(root.left, key)
// If key > root.val, then recursively call the right subtree and attach similarly:
// root.right = deleteNode(root.right, key)
// If root.val === key, it means we have found the node to delete.

// To delete a node from a Binary Search Tree (BST), we handle three cases:

// 1. If the node has no children (leaf node):
//    → simply remove that node by returning null.

// 2. If the node has one child:
//    → replace the node with its non-null child (either left or right).

// 3. If the node has two children:
//    → find the node's inorder successor (smallest node in the right subtree),
//    → replace the node's value with its inorder successor's value (smallest node in the right subtree).
//    → delete that successor node from the right subtree.

// TC: O(log N) in the best and average case, as we only traverse one path in a balanced BST.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// the time complexity becomes O(N).

// Space Complexity (SC): O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion depth is proportional
// to the number of nodes in the tree.

// Example:
    //     5
    //    / \
    //   3   6
    //  / \   \
    // 2   4   7

// Given root = [5,3,6,2,4,null,7] and key = 3:
// Once we find the node with value 3, we replace it with the smallest node from the right subtree, which is 4.
// After replacing, we still need to remove the original 4. So, we again call the deleteNode function
// to find and remove the node 4 from the right subtree of the replaced node.

// Logic to remove node 4:
// - Find 4 in the right subtree (where it originally exists).
// - Since 4 has no children (it's a leaf node), we delete it by returning null.
// - This null value is returned to its parent node, which updates its right child accordingly.

// Note:-
// root inside getMin(root):
// It is a temporary pointer/reference used only for traversal.
// It starts from the given subtree root and keeps moving left until it reaches the leftmost node.

var deleteNode = function (root, key) {
    if (root === null) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if(key > root.val){
        root.right = deleteNode(root.right, key);
    } else {
        // Case 1: No Child
        if (root.left === null && root.right === null) {
            return null;
        }

        // Case 2: One Child
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Case 3: Two Children
        let minNode = getMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }

    function getMin(root) {
        while (root.left !== null) {
            root = root.left
        }

        return root;
    }

    return root;
};