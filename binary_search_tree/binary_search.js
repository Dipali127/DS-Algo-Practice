//                                          Binary Search Tree
// A Binary Search Tree (BST) is a non-linear hierarchical data structure in which:
// The value of every left child node is strictly less than the root node.
// The value of every right child node is striclty greater than the root node.

// Example:-

    //     2
    //    / \
    //   1   3

// Here:
// Left child (1) < root (2)
// Right child (3) > root (2)

// How to compute "Time Complexity" of Tree?
// Time Complexity = (number of nodes visited) × (work done per node).

// More commonly written as:
// If all nodes are visiting  → O(N).
// If BST operations (search/insert/delete):-
// Balanced BST → O(log N).
// Skewed BST → O(N).

// How to compute "Space Complexity" of Tree
// (i) For DFS (Recursion):-
// Space = height of tree (H) that means at any time recursion stack stores 'h' number of recursive calls.
// In short, Space = depth of recursion stack = height of tree (H)
// Balanced tree → O(log N)
// Skewed tree → O(N)

// For BFS (Queue)
// Space = maximum number of nodes stored in the queue at any time (≈ width of the tree).
// Worst case → O(N) (last level of complete binary tree)

// Extra space 
// Add any extra data structures used (array, map, etc.)

// Key property of BST
// Inorder traversal (Left → Root → Right) of a BST always gives elements in sorted (ascending) order.
// And Many problems rely on this property:-
// Kth smallest element
// Sorting BST
// Checking validity indirectly
// Converting BST to array