// Leetcode Problem:- 637
// Optimal approach: Use BFS (Breadth-First Search).
// for each level, we calculate the sum of all node values and then compute the average.
// initially, the queue contains only the root node, and we process the tree level by level.
// inside the outer while loop, an inner while loop helps to process each level separately. 
// the while loop process all nodes of the current level and computes the sum of their values, and appends the average to the result array.
// once compute the average of each level node, return result.
// TC:- O(N), where N is the number of nodes in the tree, as we traverse every node exactly once.
// SC:- O(N), since we are using a queue, and the queue may contain the nodes of the widest level of the tree.

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