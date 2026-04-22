// GeeksForGeeks Problem:

// Optimal approach: Using DFS (Depth-First Search)

// Approach:
// I will use DFS traversal.
// I will recursively traverse the left and right subtrees and increment the count
// whenever I encounter a leaf node.

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

// Time Complexity (TC): O(N), where N is the number of nodes in the tree.
// Space Complexity (SC): O(H), where H is the height of the tree.
// - Worst case (skewed tree): O(N)
// - Balanced tree: O(log N)

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



