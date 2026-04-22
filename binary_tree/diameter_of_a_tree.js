// Leetcode Problem: 543
// Problem:-
// Given the root of a binary tree, return the length of the diameter of the tree.
// Diameter:- The longest path between any two nodes in the tree, and this path may or may not pass through the root node.
// Length of diameter:- The number of edges in that path.

// Optimal Approach:
// Approach:
// To solve this problem, I will use dfs recursion. i will recursively call the left and right subtrees to compute
// their height and For each recursive function/function call, I will compute the maximum diameter using the height
// of the left and right subtree.

// Solution:-
// check if root is null, then return 0 because for empty tree diameter will be 0.
// Take a diameter variable and initialize it with 0 to keep track of the diameter of the tree.
// Create a DFS function to implement the logic for finding the diameter of the tree.

// Inside the DFS function:
// - For each node, compute the height of its left and right subtrees.
// - The diameter at the current node is the sum of the heights of its left and right subtrees.
//   This represents the longest path that passes through the current node.
// - Update the global diameter if the current diameter is greater than the previously recorded maximum.
// - Return the height of the current node, which is 1 + max(leftHeight, rightHeight), to the parent node.
//   This return value represents the longest single downward path from current node and is used by the parent
//   to compute its own diameter and height contribution.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the recursion stack depth is proportional to the 
// number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the recursion stack depth is proportional to the height of the tree.

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