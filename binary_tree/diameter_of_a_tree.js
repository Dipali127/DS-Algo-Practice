// Leetcode Problem: 543
// Definition of the Diameter of a Tree:
// The diameter of a binary tree is the length of the longest path between any two nodes in the tree. 
// This path may or may not pass through the root node.

// Optimal Approach:
// Approach:
// - For each node, compute the height of its left and right subtrees.
// - The diameter at the current node is the sum of the heights of its left and right subtrees.
//   This represents the longest path that passes through the current node.
// - Update the global diameter if the diameter at the current node is greater than the previously recorded maximum diameter.
// - Return the height of the current node, which is 1 + max(leftHeight, rightHeight). This return value is essential 
//   for recursion to work correctly, as it will be used by the parent node to compute its own diameter.

// Time Complexity (TC): O(N), where 'N' is the number of nodes in the tree, since each node is visited once to compute
// its height and update the diameter.

// Space Complexity (SC): O(N)
// - Worst case: O(N), in the case of a completely unbalanced tree (like a linked list), due to the recursion stack depth being equal to the number of nodes.
// - Best case: O(log N), in the case of a balanced tree, where the recursion stack depth is proportional to the height of the tree.

var diameterOfBinaryTree = function(root) {
    if (root === null) {
        return null;
    }

    let diameter = 0;

    function longestPath(root) {
        if (root === null) {
            return 0;
        }

        let leftDepth = longestPath(root.left);
        let rightDepth = longestPath(root.right);

        diameter = Math.max(diameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    longestPath(root);
    return diameter;
};
