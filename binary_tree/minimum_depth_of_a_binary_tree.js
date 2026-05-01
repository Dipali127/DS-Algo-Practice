// Leetcode Problem:
// Problem:
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

// In minimum depth of a binary tree, we must consider only valid paths,
// and a valid path starts from the root and ends at a leaf node.

// Example:
        1
       /
      2

// In this example, node 2 is a leaf node (both left and right are null).
// The right child of node 1 is null, so it does not represent a valid root-to-leaf path.

// Therefore, we cannot consider the null path in calculation.
// We only consider the non-null child (left subtree) and compute its depth.

// So, minimum depth = 1 → 2 = 2
// Approach:-
// To solve this problem, I will use DFS traversal. I will recursively call the left and right subtrees to compute
// their depth. For each recursive call, I will compute the minimum depth obtained from the left and right 
// subtrees by adding 1 to include the current visited node, and return that value to the previous/parent recursive call 
// so that the parent can compute its own depth correctly and continue this process until it reaches the root call.

// Solution:
// First, check if the root is null. If it is, return 0 because the depth of an empty tree is 0.
// Otherwise, check if the left or right subtree of the current node is null.
// If one of them is null, then immediately return the depth from the non-null subtree because a valid minimum
// depth must end at a leaf node, and a null path is not valid.
// If both left and right children exist, then recursively compute the minimum depth of both subtrees.
// Return the minimum of the two depth plus 1 to include the current node to its previous recursive call.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

// Key Point:- 
// In the case where either the left or right subtree is null, we do not compute Math.min,
// because a null subtree does not represent a valid path to a leaf node.
// Instead, we return the depth from the non-null subtree because a valid path must always end at a leaf node.


var minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    return 1 + Math.min(leftHeight, rightHeight);
};