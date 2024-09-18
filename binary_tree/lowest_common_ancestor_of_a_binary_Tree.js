// Leetcode Problem:- 236
// Important problem, asked by many companies.
// Definition of 'Ancestor':-
// An ancestor of a node refers to any node that lies on the path from the current node up to the root (including the node itself).
// In other words, an ancestor is a node that is either a parent, grandparent, or a higher node in the hierarchy, or even the node itself.
// Example: In a binary tree:
// The root is an ancestor of all the nodes in the tree.
// A parent node is an ancestor of its child.
// A node is considered an ancestor of itself.
// So, 'Ancestor' refers to nodes above the current node in the hierarchy.
// Definition of 'Descendants':-
// A descendant of a node is any node that lies on the path from the current node down to its leaf nodes (including the node itself).
// A descendant is any node in the subtree rooted at the current node.
// Example: In a binary tree:
// All children, grandchildren, and so on, of a node are its descendants.
// A node is considered a descendant of itself.
// So, 'Descendant' refers to nodes below the current node in the hierarchy.

// In the Lowest Common Ancestor (LCA) problem, we are looking for a node that is:-
//     - An ancestor of both p and q.
//     - The lowest (deepest) such node in the tree where both p and q are descendants of that node.
// example :- if we have a tree like:-  1
//                                    /   \
//                                   2     3
//                                  / \   /  \
//                                 4   5 6    7
// and we have 'p = 4' and 'q = 7' so the parent or ancestor of 'p' are [4,2,1] and  parent or ancestor of 'q' are [7,3,1]
// and the common ancestor of 'p' and 'q' are 1.
// Optimal Approach:
// Approach:
// check if the root is null. If root is null, return null as there is no tree to traverse.
// check if the root's value is equal to 'p' or 'q'. If it is, return root because the node itself is a descendant 
// and it can be the ancestor of both 'p' and 'q'.
// recursively search for 'p' and 'q' in the left and right subtrees.
// -> After the recursive calls:
//    - if both the left and right subtrees return non-null values, it means 'p' and 'q' are found in different subtrees, 
//      so the current node (root) is their LCA and return root.
//    - if only one of the subtrees returns a non-null value, return that value because both 'p' and 'q' are located 
//      in that same subtree.
//    - if both the left and right subtrees return null, return null as neither 'p' nor 'q' are present in the tree.

// TC:- O(N), as each node of the tree is traversed once.
// SC:- O(N) in the worst case due to the recursive call stack (for a skewed tree).

var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null;
    }

    // If the current node is either p or q, return the current node
    if (root.val === p || root.val === q) {
        return root;
    }

    // Recursively search for p and q in the left and right subtrees
    let leftN = lowestCommonAncestor(root.left, p, q);
    let rightN = lowestCommonAncestor(root.right, p, q);

    // If one of the subtrees contains both p and q, return that subtree's LCA
    if (leftN !== null) {
        return leftN;
    } else {
        return rightN;
    }

    // If both p and q are found in different subtrees, return the current node (root) as the LCA
    if (leftN !== null && rightN !== null) {
        return root;
    }
};
