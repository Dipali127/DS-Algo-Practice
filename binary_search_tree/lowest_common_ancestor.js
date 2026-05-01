// Leetcode Problem:- 235
// Problem:-
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes p and q.

// Let's first understand what Ancestor and Descendant mean:

//         15
//       /    \
//     35      50
//    /  \       \
//   3    6       60
//  / \    \
// 1  10    12

// What is an Ancestor?
// An ancestor of a node is any node on the path from that node up to the root node.
// Parent is an ancestor
// Parent’s parent is also an ancestor
// Root is also an ancestor
// The node itself is also considered an ancestor of itself (in many definitions used in coding problems).
// Example:- From 15 to 3 → 15 and 35 are ancestors of 3.
// Descendant: Any node below a given node in its subtree.
// Example:- Descendants of 35 → 3, 6, 1, 10, 12 And Descendants of 15 → all nodes except 15.

// Lowest Common Ancestor (LCA)
// The Lowest Common Ancestor (LCA) is the deepest node in the tree that is an ancestor of both p and q.
// Example:
//         6
//        / \
//       2   8
//      / \   \
//     0   4   9
//        / \
//       3   5

// Case:
// -> p = 2
// -> q = 4

// Ancestors:
// 2 → {2, 6}
// 4 → {4, 2, 6}

// Common ancestors = {2, 6}
// LCA = 2

// Approach:-
// To solve this problem, I will use the BST property by traversing either the left or right subtree based on where both 
// p and q lie.
// While traversing, I will check:
// - If the values of both p and q are less than the current root node, I will traverse the left subtree.
// - If the values of both p and q are greater than the current root node, I will traverse the right subtree.
// But if neither condition matches, I will return the current root, because this means either:
// 1. p and q lie on different sides of the root (one in the left subtree and one in the right subtree), OR
// 2. one of p or q is the current root itself, and the other lies in either the left or right subtree.
// In both cases, we return the current root as the Lowest Common Ancestor (LCA).

// TC: O(log N) in the best and average case, as we only traverse one path in a balanced BST.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// the time complexity will become O(N).

// Space Complexity (SC): O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional to 
// the number of nodes in the tree.

// NOTE:- p and q are existing references to nodes that are already part of the Binary Search Tree (BST) rooted at root.

var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;

    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    }

    if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};