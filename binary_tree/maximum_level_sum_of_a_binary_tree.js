// Leetcode Problem:- 1161
// Optimal Approach: Using Breadth-First Search (BFS).
// Approach:
// traverse the tree level by level, and for each level store the current level node in the queue.
// iterate through the queue and calculate the sum of the node values of current level. 
// if the current level's sum is greater than the maximum sum (`maxSum`), update `maxSum` and also update `maxLevel` to store the level that has the maximum sum.
// after calculating the sum of the current level, check if the left and right children of the current node exist. 
// if they exist, push them into the queue to process the next level. This continues until all levels of the tree are processed (including the leaf level).
// after visiting each level, increment the `level` variable to move to the next level. 
// TC:- O(N), where 'N' is the number of nodes in the tree and each node is traversed exactly once.
// SC:- O(N), to store the nodes of the current level in the queue and in the worst case, the queue can hold all nodes at the maximum width of the tree.
var maxLevelSum = function(root) {
    if(!root){
        return 0;
    }
    let maxSum = -Infinity;
    let level = 1,maxlevel = 1;
    let queue = [root];
    while(queue.length){
        let n= queue.length;
        let sum = 0;
        while(n--){
            let temp = queue.shift()
            sum+=temp.val;
            if(temp.left){
                (queue.push(temp.left))
            }

            if(temp.right){
                queue.push(temp.right)
            }
            
        }

        if(maxSum<sum){
            maxSum=sum;
            maxlevel = level;
        }
        level++;
    }

    return maxlevel;

};