// Leetcode Problem:- 404
// Optimal Approach:
// Approach:-
// use a helper function 'leftSum' to recursively traverse the tree and calculate the sum.
// Steps:- 
//        - if the current node (root) is null, return 0 (base case).
//        - initialize a variable 'sum' to store the sum of left leaves.
//        - check if the left child exists and if it is a leaf node (both its left and right children are null).
//        - if it is a left leaf, add its value to 'sum'.
//         - recursively call 'leftSum' on the left child and add the result to 'sum'.
//         - recursively call 'leftSum' on the right child and add the result to 'sum'.
//         - finally, return the total 'sum'.
// TC:- O(N), as each node of the tree is traversed once where 'N' is the number of the nodes in the tree.
// SC:- O(H), the space used by the recursive function call stack is equal to the depth of the tree (H).
// and in the worst case of a skewed tree, H can be equal to N.

var sumOfLeftLeaves = function(root) {
    if(root == null){
        return 0;
    }
    return leftSum(root);
};

function leftSum(root){
    let sum = 0;
      if (root.left !== null && root.left.left === null && root.left.right === null) {
        sum += root.left.val;
    }

    if(root.left){
        sum+= leftSum(root.left)
    }
    if(root.right){
        sum+= leftSum(root.right)
    }

    return sum;
}