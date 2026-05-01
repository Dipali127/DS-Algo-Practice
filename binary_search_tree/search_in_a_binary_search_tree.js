// Leetcode Problem:- 700
// Given:-
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
// If such a node does not exist, return null.

// Approach:
// To solve this problem, I will use inorder traversal to visit each node of the tree.
// While traversing the tree, I will check if the currently visited node's value is equal to the given value (val).
// If it is, I will store that node in the result variable and return it.

// Time Complexity (TC): O(N), as each node of the tree is visited exactly once.

// Space Complexity (SC): O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the depth of the recursion stack is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the depth of the recursion stack is
// proportional to the number of nodes in the tree.

// Note:-
// You can use any traversal to search for the given value in the tree.
// You can use any of the following:
// (i) Inorder (Left → Root → Right)
// (ii) Preorder (Root → Left → Right)
// (iii) Postorder (Left → Right → Root)
// (iv) Level order traversal

var searchBST = function (root, val) {
    let result = null;
    inorder(root);
    return result;
    function inorder(root) {
        if (root === null) return;

        inorder(root.left);

        if (root.val === val) {
            result = root;
            return;
        }

        inorder(root.right);
    }
};


// Optimal Approach:-
// Approach:
// I will use the BST property by traversing either the left or right subtree.
// While traversing, I will check if the given value (val) is less than the root node value.
// If it is, I will move to the left subtree; otherwise, I will move to the right subtree.
// I will continue this process until I find the given value (val) or reach null.

// In this way, the search space is reduced at each step, and the time complexity becomes O(log N)
// instead of O(N), since we are only exploring one side of the tree (either left or right)
// based on where the value may exist.

// TC: O(log N) in the best and average case, as we only traverse one path in a balanced BST.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// the time complexity will become O(N).

// Space Complexity (SC): O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional to the
// number of nodes in the tree.

// Note:
// Why do we use return in left/right recursive calls?
// Because we want: “Once I find the answer in one subtree, I immediately stop the process.”
// If we do not use return, both subtrees may be explored, and we will lose the BST optimization,
// making the time complexity O(N).

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