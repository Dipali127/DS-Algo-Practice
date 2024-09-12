// Leetcode Problem:- 98
// Brute force appraoch:- 
// appraoch:- 
// perform an inorder traversal of the given binary search tree (BST).
// Since, an inorder traversal of a valid BST produces a sorted list of node values, the task is to check whether the resulting inorderArr is sorted in strictly increasing order.
// if the inorder traversal array is sorted in ascending order, the given BST is valid and the function returns true.
// if the array is not sorted, the BST is invalid, and the function returns false.
// TC:- O(N), Explanation:-
// O(N):- to perform the inorder traversal of the tree.
// O(N):- to check whether the array is sorted.
// overall, TC:- O(N) + O(N) = O(2N) = O(N).
// SC:- O(N), Explanation:-
// O(N):- to store all values of tree in 'inorderArr' array.
// O(H):- for the recursion stack, where H is the height of the BST. This could be O(log N) for a balanced tree or O(N) for a skewed tree.
// overall, SC:- O(N)

var isValidBST = function (root) {
    let result = [];
    inorder(root)
    function inorder(root) {
        if (root === null) {
            return;
        }

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }

    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] >= result[i + 1]) {
            return false;
        }
    }

    return true;
};

// Optimal appraoch:- use of inorder traversal and prev variable.
// use an inorder traversal with a prev variable to track the previously visited node.
// As we traverse the tree:
// recursively traverse the left subtree. If the left subtree returns false, return false immediately because the BST property is violated.
// otherwise, after the left subtree, check whether the value of the current node is greater than the prev node's value (as per the property of BST).
// if the current node's value is less than or equal to prev, the tree is not a valid BST, and the function returns false.
// but if the current node's value is valid, update prev to the current node’s value.
// recursively traverse the right subtree. If it returns false, return false immediately.
// if all the checks pass, the function returns true, confirming that the tree is a valid BST.
// TC:- O(N), to visits each node once during the inorder traversal.
// SC:- O(N), O(H), where H is the height of the tree, which corresponds to the recursion stack size. It is O(log N) for a balanced tree and O(N) for a skewed tree.

var isValidBST = function(root) {
    let prev = null;
    //inorder(root);
    function inorder(root){
        if(root === null){ // An empty tree is considered a valid BST
            return true;
        }

        if(!inorder(root.left)){return false}
        if(prev!=null && prev>=root.val){
            return false;
        }
        prev = root.val;
        if(!inorder(root.right)){return false}

        return true;
    }
     return inorder(root)
}