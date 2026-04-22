// Leetcode Problem:- 222
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// What is complete binary tree? 
// A complete binary tree is a binary tree in which:
// All levels are completely filled except possibly the last level.
// And in the last level, nodes are filled from left to right (no gaps)

// Approach:
// To count the number of nodes in a complete binary tree, I’ll use a DFS traversal. I will recursively traverse the 
// left and right subtrees, and for each visited node, I will increment a count by 1. 

// Solution:-
// First check, if root is null return 0 since there is no node to count.
// Take a count variable to keep track of count of node while visiting.
// create a dfs function to write a logic of counting number of nodes of tree.

// Inside DFS function:
// Base Case:-
// if root is null then return to its previous recursive function/function call.

// Recursive logic:-
// (i) increment count by 1 for visit of current node.
// (ii) recursively call left subtree and right subtree.

// After counting number of nodes of a tree, return it.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in a tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

var countNodes = function(root) {
    if(root === null){
        return 0;
    }

    let count = 0;
    dfs(root);
    return count;
    function dfs(root){
        if(root === null){
            return;
        }
        
        count++;
        dfs(root.left);
        dfs(root.right);
    }
};