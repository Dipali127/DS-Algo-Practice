// GeeksforGeeks Problem:-
// Optimal Approach:-
// approach:-
// Base Case:- If root is null, return 0. it means that the tree has no nodes and hence the depth is 0.
// if the left subtree (root.left) is null, recursively call the right subtree (root.right) and the 
// returned depth will be the depth of the right subtree plus 1 to account for the current node.
// similarly, if the right subtree (root.right) is null, recursively call the left subtree (root.left) 
// and the returned depth will be the depth of the left subtree plus 1.
// if both subtrees exist, recursively compute the depth of both the left and right subtrees, and return 
// the minimum of the two depths plus 1 to account for the current node.
// TC:- O(N), where 'N' is the number of nodes, since we traverse each node once.
// SC:- O(H), where H is the height (or depth) of the tree. In the worst case, for a skewed tree (unbalanced), 
// the space complexity is O(N), but for a balanced tree, it will be O(logN) due to the height being proportional to logN.

class Solution {
    minDepth(root){
        if(root === null){
            return 0;
        }
        
        if(root.left === null){
            return this.minDepth(root.right)+1;
        }
        if(root.right === null){
            return this.minDepth(root.left)+1;
        }
        
        let left = this.minDepth(root.left);
        let right = this.minDepth(root.right);
        return Math.min(left,right)+1;
    }
}