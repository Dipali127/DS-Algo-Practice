// Leetcode Problem:- 124
// Problem: Return the maximum path sum in a binary tree.
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence is connected by an edge.
// The path sum is the sum of the node values in the path.

// Example: For the tree:
//         1
//        / \
//       2   3
// The sequence 2 -> 1 -> 3 has the maximum path sum (2 + 1 + 3 = 6), and all nodes are connected by edges.

//  Optimal Approach: Use DFS (Depth First Search)
// approach:-
// Base case:- For null nodes, return 0 (since they don't contribute to the path sum).
// recursively calculate the maximum path sum for the left and right subtrees.
// once the left and right subtree sums are computed, update the maximum path sum at the current node by considering:-(leftSum + rightSum + currentNode value).
// - Return the maximum path sum including the current node and one of its children to its parent node.
// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// SC:- O(N), due to the recursive call stack in the worst case (skewed tree) and O(log N) for a balanced tree.

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
