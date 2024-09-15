// GeeksforGeeks Problem:
// Problem:
// We need to print the left view of a binary tree.
// Suppose, a person stands on the left side of the tree. The task is to print all the node values that the person
// can see from the left side.

// Optimal Approach: Using BFS (Breadth-First Search).
// approach:-
// traverse the tree level by level using a queue.
// for each level, check the first visited node (i.e., the leftmost node), as it will be the node visible from the left side.
// if it is the first node at the current level (i.e., i === 0), add it to the 'result' array.
// continue traversing the tree level-by-level until all nodes are processed, then return the result.
// TC: O(N), where 'N' is the number of nodes in the tree. Each node is visited once.
// SC: O(N), where 'N' is the number of nodes in the tree. This accounts for the space used by the queue, which can grow to the width of the tree.

class Solution {
    leftView(root) {
        if (root === null) {
            return [];
        }

        let result = [];
        let queue = [root]; 

        while (queue.length > 0) {
            let n = queue.length; 
            let i = 0;

            while (i < n) {
                let temp = queue[i]; 
                if (i === 0) {
                    result.push(temp.data);
                }

                if (temp.left !== null) {
                    queue.push(temp.left);
                }
                if (temp.right !== null) {
                    queue.push(temp.right);
                }

                i++;
            }
            
            queue.splice(0,n);
        }

        return result;
    }
}
