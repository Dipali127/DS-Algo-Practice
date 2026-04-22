// Leetcode Problem:- 101
// Optimal Approach:
// Approach:
// To solve this problem, I will use DFS traversal.
// I will recursively compare two subtrees to check whether they are mirror images of each other.
// For each recursive call:
// - I will compare the left subtree of one node with the right subtree of the other node.
// - Similarly, I will compare the right subtree of one node with the left subtree of the other node.
// If all corresponding pairs match, the tree is symmetric.

// Solution:
// Base Case:-
// (i) if both trees (p and q) are empty (i.e., both p == null and q == null), return true because two empty trees 
// are considered symmetric.
// if one tree is empty and the other is not (i.e., p === null || q === null), return false since one tree has more 
// nodes than the other, making them different. 
// But if value of both tree are different, return false since they are not symmetric.

//  Recursively Logic:-
//     (1) - the left node's left subtree with the right node's right subtree .
//     (2) - the left node's right subtree with the right node's left subtree .

// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// SC: O(H), where 'H' is the height (or depth) of the tree. 
//     - In the worst case (for a skewed tree), the space complexity is O(N).
//     - For a balanced tree, the space complexity is O(logN) due to the height being proportional to logN.

var isSymmetric = function(root) {
    return dfs(root.left, root.right);
    function dfs(p, q){
       if(p === null && q === null){
        return true;
       } 

       if(p === null || q === null){
        return false;
       }

       if(p.val !== q.val){
        return false;
       }

       if(p.val === q.val){
        return (dfs(p.left, q.right) && dfs(p.right, q.left));
       }

    }
};