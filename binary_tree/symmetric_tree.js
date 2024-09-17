// Leetcode Problem:- 101
// Optimal Approach:
// approach:-
// if the root is null, return true, as an empty tree is symmetric by definition.
// if the root is not null, check the symmetry by comparing the left and right subtrees of the root.
// compare the values of the left and right nodes.
//  Recursively check:-
//     (1) - the left node's left subtree with the right node's right subtree .
//     (2) - the right node's right subtree with the left node's left subtree .
// 3. return true if both recursive checks pass and the values at the current nodes are equal; otherwise, return false.
// TC:- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// SC: O(H), where 'H' is the height (or depth) of the tree. 
//     - In the worst case (for a skewed tree), the space complexity is O(N).
//     - For a balanced tree, the space complexity is O(logN) due to the height being proportional to logN.


var isSymmetric = function (root) {

    if (root == null) {
        return true;
    }
    return check(root.left, root.right)
};

function check(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }

    if ((root1 === null && root2 !== null) || (root1 !== null && root2 === null)) {
        return false;
    }

    if (root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left)) {
        return true;
    }

    return false;
}