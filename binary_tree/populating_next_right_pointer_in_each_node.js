// Leetcode Problem:- 116
// Problem:
// You are given a perfect binary tree where all leaves are at the same level, and every parent has two children.

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// Each node contains a next pointer initially set to null.
// Your task is to connect each node’s next pointer to its immediate right neighbor on the same level
// (which can be either a sibling or a cousin).
// If no right neighbor exists, the next pointer should remain null.

// Follow-up:
// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

// Approach:
// I will use DFS traversal and recursively process the left and right subtrees.
// For each node:
// - First, connect root.left to root.right (sibling connection).
// - Then, if root.next exists, connect root.right to root.next.left (cousin connection).

// Why root.right → root.next.left?
// Because in a perfect binary tree:
// - root.left and root.right are siblings
// - root.right’s next node may be the left child of root’s next neighbor

// Example:
//      2 -> 3
//     / \   / \
//    4  5  6  7

// Here:
// - 4.next = 5 (sibling)
// - 5.next = 6 (cousin)

// Solution:
// Base Case:
// - If root is null, return null.

// For each current node:
// - If root.left exists:
//   - Connect root.left.next = root.right
//   - If root.next exists, connect root.right.next = root.next.left

// Then:
// - Recursively process the left subtree
// - Recursively process the right subtree

// Finally:
// - Return root after all next pointers are populated

// Time Complexity (TC): O(N) as each node of the tree is visited exactly once.

// Space Complexity (SC): O(H) Where H is the height of the tree due to recursion stack.
// Since the tree is perfect(i.e; Balanced Tree). So, Space Complexity for balanced tree: O(LOGN)[That means, H = LOGN].

// Note:
// Recursive stack space is allowed as per the problem statement,
// so this satisfies the constant extra space follow-up.

var connect = function(root) {
    if (root === null) return null;

    // Connect left child to right child
    if (root.left !== null) {
        root.left.next = root.right;

        // Connect right child to next node's left child (cousin connection)
        if (root.next !== null) {
            root.right.next = root.next.left;
        }
    }

    // Recursively process left and right subtrees
    connect(root.left);
    connect(root.right);

    return root;
};