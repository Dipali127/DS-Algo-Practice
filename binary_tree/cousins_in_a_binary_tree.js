// Leetcode Problem:- 993
// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return
// true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
// To check if x and y are cousins, you need to:
// ensure they are at the same depth.
// ensure they have different parents.
// Note:- given 'x' and 'y' are values of the tree not the nodes of the tree.

// Optimal Approach:- Using DFS (Depth-First Search).
// I will use DFS traversal. I will run DFS recursively for both node values x and y to find their depth and parent.
// After getting the depth and parent of both x and y, I will check:
// - If their depths are the same
// - If their parents are different
// If both conditions are true, return true; otherwise, return false.

// Solution:
// DFS explores one path completely before moving to another path using recursion.
// For each node:
// If the node matches the target value, I return its depth and parent.
// Otherwise, I first search in the left subtree.
// If not found, I search in the right subtree.
// As soon as the target is found in either subtree, I immediately return the result to avoid unnecessary traversal.
// After getting results for both x and y,
// I compare:
// If both nodes are at the same depth
// If they have different parents
// If both conditions are true, return true, otherwise false.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited exactly once.
// Here, DFS is called twice:
// -> Once for x
// -> Once for y
// So overall Time Complexity is O(N + N) = O(N).

// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional 
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

var isCousins = function (root, x, y) {
    let X = findDepth(root, null, 0, x);
    let Y = findDepth(root, null, 0, y);
    if (X !== null && Y !== null && X.depth === Y.depth && X.parent !== Y.parent) {
        return true;
    }

    return false;

    function findDepth(root, parent, depth, value) {
        if (root === null) return null;
        
        if(root.val === value){
            return {parent, depth};
        }

        let left = findDepth(root.left, root, depth+1, value);
        if(left !== null){
            return left;  // this return an object containing parent and depth.
        }

        let right = findDepth(root.right, root, depth+1, value);
        if(right !== null){
            return right;
        }

        return null;
    }
};


// Solution:
// Base Case:- 
// if root is null, return null.
// Otherwise, recursively call 'findDepth' function for both node values a and y to find their depth and parent.
// After getting 

// Optimal Approach:- Using BFS (Breadth-First Search).
// Approach:
// I will use BFS traversal. I will run BFS for both node values x and y to find their depth and parent.
// After getting the depth and parent of both x and y, I will check:
// - If their depths are the same
// - If their parents are different
// If both conditions are true, return true; otherwise, return false.

// Solution:
// Initialize the queue with an object containing three properties:
// -> node:- the current node being processed (starting with the root node).
// -> depth:- the current depth of that node in the tree (starting with 0).
// -> parent:- the parent of the current node (initially 0 for the root).

// Using a while loop, continuously process nodes of the tree by removing the first node from front of the queue
// and extracting its node, depth, and parent.

// For each node, check if current visited node's value matches the value you're searching for (either x or y).
// If a match is found, return an object containing:
// -> depth: the current depth of the node
// -> parent: the parent of the node

// If the current visited node's value is not equal to the value you're searching for, push its children (left and right,
// if they exist) onto the queue with:
// -> depth incremented by 1
// -> parent set to the current node

// Time Complexity:- O(N), where 'N' is the number of nodes in the tree.
// In the worst case, each BFS traversal may visit all nodes once.
// Here, BFS is called twice:
// -> Once for x
// -> Once for y
// So overall Time Complexity is O(N + N) = O(N).

// Space Complexity:- O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level(widest level).
var isCousins = function (root, x, y) {
    let X = findDepth(root, x);
    let Y = findDepth(root, y);
    if (X !== null && Y !== null && X.depth === Y.depth && X.parent !== Y.parent) {
        return true;
    }

    return false;

    function findDepth(root, value) {
        if (root === null) return null;

        let queue = [{ node: root, depth: 0, parent: null }];

        while (queue.length > 0) {
            let { node, depth, parent } = queue.shift();

            if (node.val === value) {
                return { depth, parent };
            }

            if (node.left !== null) {
                queue.push({node: node.left, depth: depth + 1, parent: node })
            }

            if (node.right !== null) {
                queue.push({node: node.right, depth: depth + 1, parent: node })
            }
        }

        return null;
    }
};