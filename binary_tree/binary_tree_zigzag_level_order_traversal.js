// Leetcode Problem:- 103
// Optimal approach: Use BFS (Breadth-First Search).

// Approach:-
// I will use BFS traversal to traverse the tree level by level using a queue.
// For odd levels, I will traverse nodes from left to right, and for even levels, I will traverse nodes
// from right to left.

// Inside zigzagLevelOrder:
// Take a result array to store the zig-zag level order traversal of the tree.
// Take a queue to traverse the tree level by level.
// Take a level variable to keep track of the current level being processed.

// Run a while loop to process nodes level by level.

// Iterate through the queue and store the nodes of the current level in the 'currentArray'.

// After processing all nodes of the current level, check:
// If the current level (i.e., `level`) is even, push the values in `currentArray` directly into the result array,
// maintaining a left-to-right order.

// If the `level` is odd, first reverse the `currentArray` to ensure a right-to-left order,
// then store it in the result array.
// After visiting each level, increment the `level` variable to move to the next level.

// Time Complexity:- O(N), where 'N' is the number of nodes in the tree, as we visit each node exactly once.
// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.
// O(N) is used by the result array to store the zig-zag-order traversal of the tree.
// O(N) used by currentArray to each level nodes of the tree and in worst case, when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.
// So, overall SC:- O(N).

var zigzagLevelOrder = function (root) {
    let result = [], queue = [root];
    if (root === null) return result;

    let level = 0;
    while (queue.length > 0) {
        let n = queue.length, currentArray = [];
        while (n > 0) {
            let currentNode = queue.shift();
            currentArray.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }

            n--;
        }

        if (level % 2 !== 0) {
            currentArray.reverse();
        }
        
        result.push(currentArray);
        level++;
    }

    return result;
};