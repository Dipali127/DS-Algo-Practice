// Leetcode Problem:- 230
// brute force appraoch:- using inorder traversal.
// store inorder traversal of the given bst in 'inorderArr' array.
// once the inorder traversal is complete, simply return the kth smallest element from the inorderArr.
// TC:- O(N) , to visit all nodes of given bst using inorder traversal. 
// SC:- O(N), Explanation:-
// O(N):- to store all values of tree in 'inorderArr' array.
// O(H):- for the recursion stack, where H is the height of the BST. This could be O(log N) for a balanced tree or O(N) for a skewed tree.
// overall, SC:- O(N)

var kthSmallest = function(root, k) {
    let inorderArr = inorder(root,[]);
    function inorder(root,result){
        if(root === null){
            return;
        }
        inorder(root.left,result);
        result.push(root.val);
        inorder(root.right,result);

        return result;
    }

    return inorderArr[k-1];
};

// optimal appraoch:- use of inorder traversal.
// use inorder traversal, but instead of storing all node values in an array, we increment an iterator counter as we visit each node.
// when "iterator === k", we have found the kth smallest element, and we store the current node's value in prev and return it.
// TC:- O(N), to visits each node once during the inorder traversal.
// SC:- O(N), O(H), where H is the height of the tree, which corresponds to the recursion stack size. It is O(log N) for a balanced tree and O(N) for a skewed tree.

var kthSmallest = function(root, k) {
    let prev = null;
    let iterator = 0;
    
    function inOrder(root) {
        if (root === null) {
            return;
        }

        inOrder(root.left);
        
        iterator++;
        if (iterator === k) {
            prev = root.val;
            return;
        }

        inOrder(root.right);
    }

    inOrder(root);
    return prev;
}