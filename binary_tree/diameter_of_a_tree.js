// Leetcode Problem:- 543
// Definition of the diameter of a tree:-
// the diameter of a binary tree is the length of the longest path between any two nodes in the tree. 
// This path may or may not pass through the root node.
// Optimal appraoch:
// Approach:-
// for each node, compute the height of its left and right subtrees.
// the diameter at the current node is the sum of the heights of its left and right subtrees. This represents the longest path that passes through the current node.
// update the global diameter if the diameter at the current node is greater than the previously recorded maximum diameter.
// return the height of the current node, which is 1 + max(leftHeight, rightHeight). This is required for the recursion to work and correctly compute the height at each node.
// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree as each node is visited once to compute its height and update the diameter.
// Space Complexity (SC):- O(N), Explantion:-
// Worst case:- O(N) in the case of a completely unbalanced tree, due to the recursion stack depth equal to the number of nodes.
// Best case:- O(log N) in the case of a balanced tree, as the recursion stack depth is proportional to the height of the tree, which is logN.

var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    findheight(root)
    function findheight(root) {
        if (root === null) {
            return 0;    // height of an empty tree is 0
        }

        let leftHeight = findheight(root.left);
        let rightHeight = findheight(root.right);

        diameter = Math.max(diameter, leftHeight+rightHeight)

        return Math.max(leftHeight, rightHeight)+1;

    }

    return diameter;

};