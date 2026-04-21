// Leetcode Problem:- 104
// Problem:- 
// Given the root of a binary tree, return its maximum depth.
// Maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Optimal approach:
// Approach:-
// To solve this problem, I will recursively call the left and right subtrees to compute their height. For each
// recursive call, I will compute the maximum height obtained from the left and right subtrees by adding 1 to include 
// the current node, and then return it to the previous recursive call.

// Solution:-
// First, check if the root is null. If it is, return 0 because the depth of an empty tree is 0, 
// and the depth of a tree with only a root node is 1.
// Recursively calculate the depth of the left and right subtrees by calling the maxDepth function
// on the left and right children.
// After calculating the depths of the left and right subtrees, take the maximum of both and add 1 
// to account for the current root node.
// Finally, return this value as the result, which gives the maximum depth of the tree.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional 
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

var maxDepth = function(root){
    if(root == null){
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}