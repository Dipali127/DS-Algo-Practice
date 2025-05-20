// Leetcode Problem:- 101
// Optimal Approach:
// approach:-
// if the root is null, return true, as an empty tree is symmetric by definition.
// if the root is not null, then recursivley call the symmetry by comparing the left and right subtrees of the root.
// compare the values of the left and right nodes.
//  Recursively check:-
//     (1) - the left node's left subtree with the right node's right subtree .
//     (2) - the left node's right subtree with the right node's left subtree .
// 3. return true if both recursive checks pass and the values at the current nodes are equal; otherwise, return false.
// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// SC: O(H), where 'H' is the height (or depth) of the tree. 
//     - In the worst case (for a skewed tree), the space complexity is O(N).
//     - For a balanced tree, the space complexity is O(logN) due to the height being proportional to logN.


var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    
    return symTree(root.left, root.right);
    function symTree(t1, t2){
        if(t1 === null && t2 === null){
            return true;
        }

        if(t1 === null || t2 === null){
            return false;
        }

        if(t1.val !== t2.val){
            return false;
        }

        return symTree(t1.left, t2.right) && symTree(t1.right, t2.left)
    }
};