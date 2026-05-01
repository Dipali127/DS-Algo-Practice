// Leetcode Problem:- 236
// Important problem, asked by many companies.
// Definition of 'Ancestor':-
// an ancestor is a node that is either a parent, grandparent, or a higher node in the hierarchy, or even the current node itself.
// Let's first understand what Ancestor and Descendant mean:

//         15
//       /    \
//     35      50
//    /  \       \
//   3    6       60
//  / \    \
// 1  10    12

// What is an Ancestor?
// An ancestor of a node is any node on the path from that node up to the root.
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

// Optimal Approach:
// Approach:
// I will use DFS traversal. I will recursively explore both the left and right subtrees until I find the Lowest Common
// Ancestor (LCA) of nodes p and q.

// Solution:
// Check if the root is null. If root is null, return null as there is no tree to traverse.
// Check if the root is equal to either 'p' or 'q'. If it is, return root because this means one of the nodes (either 'p'
// or 'q') has been found, and the another node may exist in its subtree(left or right).

// If not, recursively search for 'p' and 'q' in the left and right subtrees.

// -> After the recursive calls:
//    - If both the left and right subtrees return non-null values, it means 'p' and 'q' exist in different subtrees,
//      so the current node (root) is their LCA, so return root.
//    - If only one subtree returns a non-null value and another one return null, return that value because both 'p' and 
//     'q' are located in that same subtree (or one node itself was found there).
//    - If both the left and right subtrees return null, return null because neither 'p' nor 'q' exists in that path.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

// NOTE:- p and q are existing references to nodes that are already part of the binary tree rooted at root. 
// They are not new nodes or just values — they point to specific nodes inside the tree.

var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null;
    }

    // If the current node is either p or q, return the current node
    if (root === p || root === q) {
        return root;
    }

    // Recursively search for p and q in the left and right subtrees
    let leftLCA = lowestCommonAncestor(root.left, p, q);
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    // If both p and q are found in different subtrees, return the current node (root) as the LCA
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }

     // If one of the subtrees contains both p and q, return that subtree's LCA
     return leftLCA !== null? leftLCA : rightLCA; 
};

