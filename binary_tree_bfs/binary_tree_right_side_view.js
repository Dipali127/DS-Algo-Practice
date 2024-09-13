// Leetcode Problem:- 199
// Problem:
// We need to print the right view of a binary tree.
// Suppose, a person stands on the right side of the tree. The task is to print all the node values that the person
// can see from the right side.

// Optimal Approach: Using BFS (Breadth-First Search).
// approach:-
// traverse through the tree level by level and use of queue to add the node of each level .
// for each level, check the last visited node is the node visible from the right side.if it is then add it to the 'result' array.
// once, traverse the given tree level-by-level, return result.
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

