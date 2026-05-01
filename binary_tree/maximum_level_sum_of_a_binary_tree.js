// Leetcode Problem: 1161
// Optimal Approach: Using Breadth-First Search (BFS).

// Approach:
// I will use BFS traversal to process the tree level by level using a queue.
// For each level, I will calculate the sum of all node values at that level.

// Inside maxLevelSum function:
// I will maintain two variables:
// - `maximumSum` → stores the maximum level sum found so far.
// - `maxLevel` → stores the level number having the maximum sum.

// I will also use a `level` variable starting from 1 to track the current level.

// Initialize a queue with the root node.
// Run a while loop to process nodes level by level.

// For each level:
// - Initialize `sum = 0` for the current level.
// - Take `n = queue.length` to process all nodes of the current level.

// Iterate over all nodes of the current level:
// - Remove the front node from the queue.
// - Add its value to `sum`.
// - If left child exists, push it into the queue.
// - If right child exists, push it into the queue.

// After processing the entire level:
// - Compare `sum` with `maximumSum`.
// - If `sum > maximumSum`, update:
//     maximumSum = sum
//     maxLevel = level

// Increment `level` to move to the next level.

// Finally, return `maxLevel`.

// Time Complexity:- O(N), where 'N' is the number of nodes in the tree, as we visit each node exactly once.
// Space Complexity:- O(N), used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.

  var maxLevelSum = function(root) {
    let queue = [root];
    let maximumSum = -Infinity, maxLevel = 0, level = 1;
    while(queue.length > 0){
        let n = queue.length, sum = 0;
        while(n--){
            let currentNode = queue.shift();
            sum+= currentNode.val;

            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
        }

        if(maximumSum < sum){
            maximumSum = sum;
            maxLevel = level;
        }

        level++;
    }

    return maxLevel; 
};