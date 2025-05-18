// Leetcode Problem: 637 - Average of Levels in Binary Tree
// Optimal Approach: Use Breadth-First Search (BFS).

// Approach:
// - Traverse the tree level by level using a queue (BFS).
// - For each level, calculate the sum of all node values.
// - Compute the average by dividing the level sum by the number of nodes at that level.
// - Append the average to the result array.
// - Repeat this process until all levels of the tree are processed.
// - Finally, return the result array containing the average of each level.

// Time Complexity (TC): O(N), where N is the number of nodes in the tree, since each node is visited once.
// Space Complexity (SC): O(N), due to the space used by the queue, which at most stores nodes from the widest level.
// why time complexity is O(N) not O(N^2) because, the total number of iterations made by the inner loop is equal to the
// total number of nodes in the tree, and each node is processed only once when it is dequeued.


var averageOfLevels = function(root) {
    let result = [];
    if(root == null){
        return result;
    }
    let queue = [root];
    while(queue.length !== 0){
        let n = queue.length;
        let levelSum = 0, i = 0;
        while(i<n){
            let temp = queue.shift();
            levelSum+= temp.val;
            if(temp.left !== null){
                queue.push(temp.left)
            }
            if(temp.right !== null){
                queue.push(temp.right)
            }
            i++;
        }

        result.push(levelSum/n);

    }
    
    return result;
};