// Leetcode Problem:- 199
// Problem:
// We need to print the right view of a binary tree.
// Suppose a person stands on the right side of the tree. The task is to print all the node values that the person
// can see from the right side.

// Optimal Approach: Using BFS (Breadth-First Search).
// approach:
// traverse the tree level by level using a queue to process each node level-wise.
// for each level, the last node visited in that level will be the one visible from the right side.
// Add this node to the 'result' array.
// once we've traversed the entire tree level by level, return the 'result' array.
// TC: O(N), where 'N' is the number of nodes in the tree, as each node is visited exactly once.
// SC: O(N), as in the worst case, the queue size can grow to O(N) for a tree with many nodes at the same level (wide tree).\ but in a balanced
// tree, the result array will store O(log N) nodes, but in the worst case (skewed tree), the result array can store up to O(N) nodes.

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

// Second Approach: Using DFS (Depth-First Search).
// approach:
// traverse the tree by calling a function 'dfs' that recursively visits the right subtree first and then the left subtree.
// for each node, if the current depth is equal to the length of the result array, it means this node is the node 
// viewer can view from the right side of a tree, so add it to the result.
// after processing all the nodes in the tree, return the result.
// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited exactly once.
// SC:- O(N), Explanation:
// O(N):- Space is used by the result array to store the nodes visible from the right view 
// in the worst case (for a skewed tree), 
// but in a balanced tree, the space complexity for storing nodes in the result is O(log N).
// O(N):- Stack space used by the recursive function call ('dfs function') as in the worst case (skewed tree),
// the recursion depth can be O(N), but in a balanced tree, the depth will be O(log N).

var rightSideView = function (root) {
    let result = [];
    if (root === null) {
        return result;
    }
    dfs(root, 0);
    function dfs(root, depth) {
        if (root === null) {
            return;
        }
        
        if(depth === result.length){
             result.push(root.val);
        }
        dfs(root.right, depth+1);
        dfs(root.left, depth+1);
    }

    return result;
}