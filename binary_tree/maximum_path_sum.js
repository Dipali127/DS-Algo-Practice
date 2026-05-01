// Leetcode Problem:- 124
// Problem: Given the root of a binary tree, return the maximum path sum of any non-empty path.
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence are directly 
// connected by an edge.
// The path sum is the sum of the node values in that path.

// Example: For the tree:
//         1
//        / \
//       2   3
// The sequence 2 -> 1 -> 3 has the maximum path sum (2 + 1 + 3 = 6), and all nodes are directly connected by an edges.

// Approach:
// To solve this problem, i will use DFS traversal. i recursively call the left and right subtrees.
// For each recursive call, i will compute the maximum downward path sum from the left subtree and right subtree.
// Then, i will take the maximum sum between left subtree and right subtree by adding the current node value to form the
// best downward path sum starting from the current node.

// Solution:

// Base case:
// If root is null, return 0 since it does not contribute to the path sum.

// Recursive Logic:
// Recursively call the left and right subtrees.
// At each node, compute the maximum downward path sum from both left and right subtrees.

// Since node values can be negative, we ignore negative sum using:
// leftSum = Math.max(maxPath(root.left), 0)
// rightSum = Math.max(maxPath(root.right), 0)

// Update the global maximum path sum at the current node using:
// leftSum + rightSum + root.val
// This represents the maximum downward path sum passing through the current node.

// Return the maximum downward path sum including the current node and one of its children(eithe left or right subtree 
// who has maximum path sum) to its previous/parent recursive function for futher computation.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

var maxPathSum = function (root) {
    let maxSum = -Infinity;
    maxPath(root)
    function maxPath(root) {
        if (root === null) {
            return 0;
        }

        let leftSum = Math.max(maxPath(root.left), 0);
        let rightSum = Math.max(maxPath(root.right), 0);

        maxSum = Math.max(maxSum, leftSum + rightSum + root.val);

        return root.val + Math.max(leftSum, rightSum);
    }

    return maxSum;
};
