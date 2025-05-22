// GeeksforGeeks Problem:
// Problem:
// We need to print the left view of a binary tree.
// Suppose, a person stands on the left side of the tree. The task is to print all the node values that the person
// can see from the left side.

// Optimal Approach: Using BFS (Breadth-First Search).
// approach:-
// traverse the tree level by level using a queue.
// for each level, check the first visited node (i.e., the leftmost node), 
// as it will be the node visible from the left side.
// if it is the first node at the current level (i.e., i === 0), add it to the 'result' array.
// continue traversing the tree level-by-level until all nodes are processed, then return the result.
// TC: O(N), where 'N' is the number of nodes in the tree, as each node is visited exactly once.
// SC: O(N), as in the worst case, the queue size can grow to O(N) for a tree with many nodes at the same level (wide tree).\ but in a balanced
// tree, the result array will store O(log N) nodes, but in the worst case (skewed tree), the result array can store up to O(N) nodes.

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

// Second Appraoch:
// approach:-
// traverse the tree by calling a function 'dfs' that recursively visits the left subtree first and then the right subtree.
// for each node, if the current depth is equal to the length of the result array, it means this node is the node 
// viewer can view from the left side of a tree, so add it to the result.
// after processing all the nodes in the tree, return the result.
// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited exactly once.
// SC:- O(N), Explanation:
// O(N):- Space is used by the result array to store the nodes visible from the left view in the worst case (for a skewed tree), 
// but in a balanced tree, the space complexity for storing nodes in the result is O(log N).
// O(N):- Stack space used by the recursive function call ('dfs function') as in the worst case (skewed tree), the recursion depth can be O(N), 
// but in a balanced tree, the depth will be O(log N).
class Solution {
    leftView(root) {
        let result = [];
        if (root === null) {
            return result;
        }
        dfs(root,0);
        
        function dfs(root,depth){
            if(root === null){
                return;
            }
            
            if(depth === result.length){
                result.push(root.data);
            }
            
            dfs(root.left,depth+1);
            dfs(root.right,depth+1);
        }
        
        return result;
    }
}

