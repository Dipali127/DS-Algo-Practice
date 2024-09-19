// Leetcode Problem:- 105
// Optimal approach:
// Approach:-
// use the 'idx' variable in the main function 'buildTree' to keep track of the current index in the preorder array.
// the preorder array gives the root node for each subtree, and increment 'idx' to move to the next root for recursive left subtree and right subtree calls.
// Base Case:-
// In the 'construct' function, if 'start > end', it means there is no subtree to construct, so we return null.
// the root value is taken from the preorder array using the current 'idx' (i.e., preorder[idx++]).
// and this 'rootVal' is used to create a new TreeNode, and then the inorder array is used to find the segments for the left and right subtrees.
// Finding the root's position in the inorder array:-
// - Traverse the inorder array from 'start' to 'end' to find the index 'i' where the root value matches, splits the inorder array into:
//   - Left subtree (from 'start' to 'i - 1').
//   - Right subtree (from 'i + 1' to 'end').
// recursively construct the left and right subtrees:-
// for the left subtree, call the 'construct' function with the slice from 'start' to 'i - 1'.
// for the right subtree, call the 'construct' function with the slice from 'i + 1' to 'end'.
// the tree is constructed recursively by attaching the left and right subtrees to the root node.
// Time Complexity (TC):- O(N), as each node is processed once.
// Space Complexity (SC):- O(N), due to the recursive calls and the space used by the tree nodes.

var buildTree = function(preorder, inorder) {
    let idx = 0; 

    return construct(preorder, inorder, 0, inorder.length - 1);

    function construct(preorder, inorder, start, end) {
        if (start > end) { 
            return null;
        }

        let rootVal = preorder[idx++];
        let root = new TreeNode(rootVal);

        let i = start;
        for (; i <= end; i++) {
            if (inorder[i] === rootVal) {
                break;
            }
        }

        // Construct left and right subtrees recursively
        root.left = construct(preorder, inorder, start, i - 1);  
        root.right = construct(preorder, inorder, i + 1, end);   

        return root;
    }
};
