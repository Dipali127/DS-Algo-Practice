// GeeksForGeeks Problem:

// Optimal approach: Using DFS (Depth-First Search)

// Approach:
// I will use DFS traversal, and for each node, I will check if it is a leaf node. If yes, then I will increment the 
// count otherwise, i will recursively call the left and right subtree.

// Solution:
// Inside countLeaves function:
// - Use a 'count' variable to keep track of the number of leaf nodes in the tree.
// - Call the 'dfs' function to traverse the tree and count all leaf nodes.

// Inside dfs function:

// Base Case:
// If root is null, return since there is nothing to process.

// Recursive Logic:
// Recursively call the left and right subtrees.
// At each node, check if the current node is a leaf node.
// If it is, increment the count by 1.

// After traversal is complete, return the count.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// In an unbalanced tree, height H = N because all nodes lie on a single path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.


class Solution {
    countLeaves(root) {
        let count = 0;
        dfs(root);
        function dfs(root){
            if(root === null){
                return;
            }
            
            if(root.left === null && root.right === null){
                count++;
            }
            
            dfs(root.left);
            dfs(root.right);
        }
        
        return count;
        
    }
}



