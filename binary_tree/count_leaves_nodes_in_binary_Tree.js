// GeeksForGeeks Problem:-
// Optimal approach: Using DFS (Depth-First Search)
// approach:
// - use a 'count' variable to keep track of the number of leaf nodes in the given tree.
// - call the 'traverseLeaf' function to traverse the tree and count all leaf nodes.
// - once all leaf nodes have been processed, return the count.
// TC: O(N), where N is the total number of nodes. Each node is visited once.
// SC: O(N), due to the stack space used by the recursive function 'traverseLeaf', which is called for each node in the tree.

class Solution {
    countLeaves(root){
    let count = 0;
        function traverseLeaf(root){
            if(root === null){
                return;
            }
            
            if(root.left === null && root.right === null){
                count++;
                return;
            }
            
            traverseLeaf(root.left);
            traverseLeaf(root.right);
            
        }
        
       traverseLeaf(root);
        return count;
}
        
}



