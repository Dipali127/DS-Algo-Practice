// Leetcode Problem:- 199
// Problem:
// We need to print the right view of a binary tree.
// Suppose a person stands on the right side of the tree. The task is to print all the node values that the person can see from the right side.

// Optimal Approach: Using BFS (Breadth-First Search).
// traverse the tree level by level and at each level, the last node visited is the node visible from the right side.
// a queue is used to process nodes level by level, and for each level, the last node is pushed into the result array.
// the result array stores the nodes visible from the right side of the tree, ordered from top to bottom.
// TC:- O(N), where 'N' is the number of nodes in the tree. Each node is visited once.
// SC:- O(N), where 'N' is the number of nodes in the tree. This accounts for the space used by the queue, which can grow to the width of the tree.


var rightSideView = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }

    let queue = [root];
    while (queue.length !== 0) {
        let n = queue.length; 
        let i = 0;
        while (i < n) {
            let currentNode = queue.shift();
            // If it's the last node in the current level, add it to the result
            if (i === n - 1) {
                result.push(currentNode.val);
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            i++; // Increment i to move to the next node in the current level
        }
    }

    return result; 
};

