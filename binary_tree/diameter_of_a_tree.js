// Leetcode Problem: 543
// Problem:-
// Given the root of a binary tree, return the length of the diameter of the tree.
// Diameter:- The longest path between any two nodes in the tree, and this path may or may not pass through the root node.
// Length of diameter:- The number of edges in that path between two nodes.

// Optimal Approach:
// Approach:
// To solve this problem, I will use DFS traversal. I will recursively call the left and right subtrees to compute
// their height. For each recursive call, I will compute the diameter at the current node using the heights of the left
// and right subtrees and update the 'diameter' variable if the previously computed diameter is less than the currently
// computed diameter. I will also return the height of the current node to its previous/parent recursive call
// so that the parent can compute its own height and diameter correctly and continue this process until it reaches the
// root call.

// Solution:-
// Check if the root is null, then return 0 because the height of an empty tree is 0.
// Take a diameter variable and initialize it to 0 to keep track of the maximum diameter of the tree.
// Create a DFS function to implement the logic for finding the diameter of the tree.

// Inside the DFS function:
// - For each node, compute the height of its left and right subtrees.
// - The diameter at the current node is the sum of the heights of its left and right subtrees.
//   This represents the longest path that passes through the current node.
// - Update the global diameter if the current diameter is greater than the previously recorded diameter.
// - Return the height of the current node, which is 1 + max(leftHeight, rightHeight), to the parent node
//   so that the parent can compute its own diameter correctly.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// Note:- In this problem, each DFS call returns the height of its subtree
// (i.e., the number of nodes from the current node to the deepest leaf node).
// This returned height is then used to compute the diameter, where diameter represents the number of edges in the 
// longest path passing through the current node (left subtree height + right subtree height). 

var diameterOfBinaryTree = function(root) {
    if(root === null){
        return 0;
    }

    let diameter = 0;
    dfs(root);
    return diameter;

    function dfs(root){
        if(root === null){
            return 0;
        }

        let leftDepth = dfs(root.left);
        let rightDepth = dfs(root.right);

        diameter = Math.max(diameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }
};