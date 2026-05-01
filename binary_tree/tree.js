//                                           Tree in Data Structure
// A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.
// 
//                                   Basic Terminologies in Tree Data Structure
//         15
//       /    \
//     35      50
//    /  \       \
//   3    6       60
//  / \    \
// 1  10    12

// (i) Parent Node: A node that comes just above another node
// Example: 35 is the parent of 3 and 6.
// (ii) Child Node: A node that comes just below another node
// Example: 3 and 6 are children of 35.
// (iii) Root Node: The topmost node in a tree, which does not have a parent.
// Example: 15 is the root node.
// (iv) Leaf Node (External Node): Nodes that do not have any children.
// Example: 1, 10, 12, and 60 are leaf nodes.
// (v) Ancestor: An ancestor of a node is any node on the path from that node up to the root node.
// Example:- From 15 to 3 → 15 and 35 are ancestors of 3.
// (vi) Descendant: Any node below a given node in its subtree.
// Example:- Descendants of 35 → 3, 6, 1, 10, 12 And Descendants of 15 → all nodes except 15.
// (vii) Sibling: Nodes that share the same parent.
// (viii) Level of a Node: Number of edges from root to that node. Root is at level 0.
// (ix) Internal Node: A node with at least one child.
// (x) Subtree: A node and all its descendants form a subtree.
// (xi) Height of a Binary Tree: The number of edges on the longest path from root to a leaf.
// Example:- Longest path: 15 → 35 → 3 → 1 (or 10) And Height = 3 edges.
// Depth of a node : Number of edges from root to that node.
// Examples:
// Depth(15) = 0
// Depth(35) = 1
// Depth(3) = 2
// Depth(10) = 3
// So, Depth means, "How far am I from root?" And Height means “How far can I go down from here?”.
// Keep Point:- Height of a tree can be defined as the number of edges or nodes on the longest path from root to a 
// leaf, depending on the convention used.

//                                    Binary Tree Definition
// A Binary Tree is a non-linear hierarchical data structure where each node has at most two children.

// Node structure
// Each node has:
// Data
// Pointer to left child
// Pointer to right child

// Tree Construction
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new BinaryTree(2);
root.left = new BinaryTree(1);
root.right = new BinaryTree(3);

//                                  Types of Traversal on a Tree:- DFS vs BFS
// 1) DFS (Depth First Search):
// Explores one path completely (goes deep) and then backtracks to explore other branches.
// Used for:
// inorder, preorder, postorder
// path problems
// backtracking-style tree problems

// DFS Template (Recursive)
function dfs(node) {
    if (!node) return;

    // process node (depends on traversal type)
    dfs(node.left);
    dfs(node.right);
}

// 2) BFS (Breadth First Search)
// Visits nodes level by level using a queue.
// Used for:
// level order traversal
// shortest path in tree

// BFS Template (Queue)
function bfs(root) {
    if (!root) return;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let node = queue.shift();

        // process node
        console.log(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

// How to compute "Time Complexity" of Tree
// Time Complexity = (number of nodes visited) × (work done per node)

// How to compute "Space Complexity" of Tree
// (i) For DFS (Recursion):-
// Space = height of tree (H) that means at any time recursion stack stores 'h' number of recursive calls.
// Balanced tree → O(log N)
// Skewed tree → O(N)

// For BFS (Queue)
// Space = maximum number of nodes present in the queue at any time (≈ width of tree, worst case O(N)).

// Extra space 
// Add any extra data structures used (array, map, etc.)