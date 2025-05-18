// Leetcode Problem:- 98
// Brute force appraoch:- 
// appraoch:- 
// perform an inorder traversal of the given binary search tree (BST).
// Since, an inorder traversal of a valid BST produces a sorted list of node values,
// the task is to check whether the resulting inorderArr is sorted in strictly increasing order.
// if the inorder traversal array is sorted in ascending order, the given BST is valid and the function returns true.
// if the array is not sorted, the BST is invalid, and the function returns false.
// TC:- O(N), Explanation:-
// O(N):- to perform the inorder traversal of the tree.
// O(N):- to check whether the array is sorted.
// overall, TC:- O(N) + O(N) = O(2N) = O(N).
// SC:- O(N), Explanation:-
// O(N):- to store all values of tree in 'inorderArr' array.
// O(H):- for the recursion stack, where H is the height of the BST.
// This could be O(log N) for a balanced tree or O(N) for a skewed tree.
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

// Optimal Approach: Inorder Traversal with `prev` variable
// Idea:
// In a valid Binary Search Tree (BST), an inorder traversal yields
// a strictly increasing sequence of node values (left < root < right).
// approach:
// Use an inorder traversal to visit nodes in sorted order.
// maintain a variable `prev` to store the value of the previously visited node.
// - During traversal:
//   1. Recursively traverse the left subtree.
//   2. Compare the current node's value with `prev`:
//      - If the current node's value is **less than or equal to** `prev`, it violates the BST property.
//      - In that case, return false.
//   3. Otherwise, update `prev` to the current node's value.
//   4. Recursively traverse the right subtree.
// - If all nodes follow the strictly increasing order, return true.

// Time Complexity: O(N), Since each node is visited exactly once.
// Space Complexity: O(H)
// - H is the height of the tree (space used by the call stack during the recursive inorder traversal).
// - For a balanced tree, it’s O(log N). For a skewed tree, it’s O(N).
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