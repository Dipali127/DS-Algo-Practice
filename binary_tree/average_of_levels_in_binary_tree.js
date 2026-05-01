// Leetcode Problem:- 637
// Optimal approach: Use BFS (Breadth-First Search).

// Approach:-
// I will use BFS traversal to traverse the tree level by level using a queue.
// For each level, I will calculate the sum of all node values present at that level.
// Then I will compute the average by dividing the sum by the number of nodes in that level.
// Finally, I will store the average of each level in the result array.

// Inside averageOfLevels:
// Take a result array to store the average of each level of the tree.
// Take a queue to traverse the tree level by level using BFS.

// First, check if the root is null. If yes, return an empty result array.

// Push the root node into the queue to start BFS traversal.

// Run a while loop until the queue becomes empty (i.e., all levels are processed).

// For each level:
// - Initialize a variable 'sum' to store the sum of node values at the current level.
// - Store the current queue size in 'n' (this represents number of nodes in that level).
// - Store it again in 'size' to later compute the average.

// Now process all nodes of the current level using a while loop (n times):
// - Remove the front node from the queue using shift().
// - Add its value to 'sum'.
// - If the node has a left child, push it into the queue.
// - If the node has a right child, push it into the queue.

// After processing all nodes of the current level:
// - Compute average = sum / size
// - Push the average into the result array

// Repeat this process until all levels are processed.

// Finally, return the result array containing average of each level.

// Time Complexity:- O(N), where 'N' is the number of nodes in the tree.
// Reason:
// Every node is visited exactly once during BFS traversal.
// Each node is enqueued once and dequeued once, so total operations are linear.

// Space Complexity:- O(N)
// Explanation:-
// - O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.
// - O(N) is used by the result array to store averages of all levels.
// So overall SC is O(N).

var averageOfLevels = function (root) {
    let result = [];
    if (root === null) return result;

    let queue = [root];

    while (queue.length > 0) {
        let sum = 0;
        let n = queue.length;
        let size = n;

        while (n--) {
            let currentNode = queue.shift();
            sum += currentNode.val;

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        let avg = sum / size;
        result.push(avg);
    }

    return result;
};