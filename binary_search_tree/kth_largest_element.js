// Leetcode Problem:-
// Problem:
// Given a Binary Search Tree, your task is to complete the function that returns the kth largest element
// without making any modification to the Binary Search Tree.

// Brute Force Approach:
// Approach:
// I will perform a reverse inorder traversal on the given Binary Search Tree (BST).
// Since a reverse inorder traversal of a BST (Right → Root → Left) visits the larger values of the tree first.
// While performing the traversal, I will store each visited node’s value in a result array.

// After that, I will return the (k - 1)th value from the result array, since arrays use 0-based indexing.

// Time Complexity:- O(N)
// Explanation:
// O(N) to perform reverse inorder traversal of the tree, as each node is visited exactly once.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional
// to the number of nodes in the tree.
// O(N) is also used by the 'result' array to store all nodes of the given BST in sorted order.
// Overall, SC:- O(N).

class Solution {
    kthLargest(root, k) {
        let result = [];

        function inorder(node) {
            if (node === null) return;

            inorder(node.right);
            result.push(node.data);
            inorder(node.left);
        }

        inorder(root);
        return result[k - 1];
    }
}

// Optimal Approach: Reverse Inorder Traversal with `kthLargest` variable
// Approach:
// I will perform a reverse inorder traversal on the given binary search tree (BST).
// Since a reverse inorder traversal of a BST (Right → Root → Left) first visit larger values of the tree.
// I will use a counter 'i' to keep track of how many nodes have been visited so far.

// While traversing:
// - I will first recursively traverse the right subtree.
// - Then I will increment the counter 'i' for the current node.
// - If 'i' becomes equal to k, it means the current node is the kth largest,
//   so I will store its value in the 'kthLargest' variable and stop further traversal.
// - Otherwise, I will continue traversing the left subtree.

// To optimize, I will use early return (boolean) so that once the kth largest element is found,
// recursion stops immediately without exploring unnecessary nodes.

// Time Complexity in worst case: O(N), as we may visit all nodes of the tree during reverse inorder traversal,
// since each node is visited exactly once.
// O(H + k) in the best/average case due to early stopping, where 'H' is the height of the tree and 'k' is the kth element.
// Due to early stopping, we only traverse nodes until we reach the kth largest element in reverse inorder traversal,
// so we avoid visiting all N nodes in the tree.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion depth is proportional
// to the number of nodes in the tree.

// Note:
// What if we only use return and not a boolean return value?
// A simple return exits only the current recursive call, whereas a boolean return value enables early termination by
// signaling previous recursive calls to stop further traversal.

class Solution {
    kthLargest(root, k) {
        let kthLargest = null, i = 0;

        function inorder(node) {
            if (node === null) return false;

            if (inorder(node.right)) return true;

            i++;
            if (i === k) {
                kthLargest = node.data;
                return true;
            }

            if (inorder(node.left)) return true;

            return false;
        }

        inorder(root);
        return kthLargest;
    }
}