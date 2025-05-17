// Leetcode Problem: 1161
// Optimal Approach: Using Breadth-First Search (BFS).

// Approach:
// Traverse the binary tree level by level using a queue.
// For each level, calculate the sum of node values.
// If the current level's sum is greater than the previously recorded maximum (`maxSum`),
// update `maxSum` and set `maxLevel` to the current level number.
// After processing all nodes at the current level, add their left and right children (if any)
// to the queue to process the next level.
// Continue this process until all levels of the tree are traversed.
// Keep track of the current level using a `level` counter, incrementing it after each level.

// Time Complexity (TC): O(N) - where 'N' is the number of nodes in the tree.
// Each node is visited exactly once.
// Space Complexity (SC): O(N) - for storing nodes in the queue,
// which in the worst case can be the number of nodes at the tree's widest level.

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