// Leetcode Problem:- 104
// Problem:- 
// Given the root of a binary tree, return its maximum depth.
// Maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Optimal approach:
// Approach:-
// To solve this problem, I will use DFS traversal. I will recursively call the left and right subtrees to compute
// their depth. For each recursive call, I will compute the maximum depth obtained from the left and right 
// subtrees by adding 1 to include the current visited node, and return that value to the previous/parent recursive call 
// so that the parent can compute its own depth correctly and continue this process until it reaches the root call.

// Solution:-
// First, check if the root is null. If it is, return 0 because the depth of an empty tree is 0, 
// and the height of a tree with only a root node is 1.
// Recursively calculate the depth of the left and right subtrees by calling the maxDepth function
// on the left and right children.
// After calculating the depth of the left and right subtrees, take the maximum of both and add 1 
// to account for the current root node.
// Finally, return this value as the result, which gives the maximum depth of the tree.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

var maxDepth = function(root){
    if(root == null){
        return 0;
    }

    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}