// Leetcode Problem:- 230
// brute force appraoch:- using inorder traversal.
// store inorder traversal of the given bst in 'inorderArr' array.
// once the inorder traversal is complete, simply return the kth smallest element from the inorderArr.
// TC:- O(N) , to visit all nodes of given bst using inorder traversal. 
// SC:- O(N), Explanation:-
// O(N):- to store all values of tree in 'inorderArr' array.
// O(H):- stack space used by the recursive function, where 'H' is the height of the BST. 
// And this could be O(log N) for a balanced tree or O(N) for a skewed tree.
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
// use inorder traversal, but instead of storing all node values in an array,
// we increment an iterator counter as we visit each node.
// when "iterator === k", we have found the kth smallest element, and we store the current node's value in prev 
// and return it.
// TC:- O(N), to visits each node once during the inorder traversal.
// SC:- O(N), O(H), where H is the height of the tree, which corresponds to the recursion stack size.
//  It is O(log N) for a balanced tree and O(N) for a skewed tree.

// How inorder start traversing the node of tree:-
// The inorder traversal first goes all the way left down the tree until it hits a leaf (or null).
// When the left node is null, it means we are at the leftmost leaf or beyond.
// Then it starts processing nodes going back up (backtracking):
// At each node, increment the counter i (which counts how many nodes have been visited so far in sorted order).
// Check if i === k (means we've found the k-th smallest).
// If yes, save the node value and stop further traversal.
// If not found, move to the right subtree and repeat the same process.
// So the traversal order for your example [3,1,4,null,2] with k=1 is:
// Go left: from 3 → 1 → left of 1 is null (go back)
// At node 1: increment i to 1 → equals k → found the answer → return
// Stop here without going further.


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