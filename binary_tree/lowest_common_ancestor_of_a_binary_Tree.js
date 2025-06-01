// Leetcode Problem:- 236
// Important problem, asked by many companies.
// Definition of 'Ancestor':-
// an ancestor is a node that is either a parent, grandparent, or a higher node in the hierarchy, or even the current node itself.
// Example: In a binary tree:
// The root is an ancestor of all the nodes in the tree.
// A parent node is an ancestor of its child.
// A node is considered an ancestor of itself.
// So, 'Ancestor' refers to nodes above the current node including the current node itself in the hierarchy.
// Definition of 'Descendants':-
// A descendant of a node is any node that lies on the path from the current node down to its leaf nodes (including the node itself).
// A descendant is the node below the current node including the current node itself.
// Example: In a binary tree:
// All children, grandchildren, and so on, of a node are its descendants.
// A node is considered a descendant of itself.
// So, 'Descendant' refers to nodes below the current node including the current node in the hierarchy.

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
// check if the root's value is equal to either 'p' or 'q'. If it is, return root because the root node is equal to p or
// q that means the another node (p or q lies under that root node and ancestor of a node is common node for both p and q). 
// if not then, recursively search for 'p' and 'q' in the left and right subtrees.
// -> After the recursive calls:
//    - if both the left and right subtrees return non-null values, it means 'p' and 'q' are found in different subtrees, 
//      so the current node (root) is their LCA and return root.
//    - if only one of the subtrees returns a non-null value, return that value because both 'p' and 'q' are located 
//      in that same subtree.
//    - if both the left and right subtrees return null, return null as neither 'p' nor 'q' are present in the tree.

// TC:- O(N), as each node of the tree is traversed once.
// SC:- O(N) in the worst case due to the recursive call stack (for a skewed tree).
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

