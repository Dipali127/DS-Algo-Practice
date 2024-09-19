// Leetcode Problem:- 106
// Optimal approach:
// Approach:-
// from the 'buildTree' function, initialize the parameters and call the helper function 'construct' to build the tree recursively.
// Base Case:- 
// in the 'construct' function, if inStart > inEnd, it means there are no nodes to process for this subtree, so we return null.
// the root of the current subtree is always the last element in the current segment of the postorder array, i.e., postorder[postEnd].
// The root's position in the inorder array helps in dividing the array into two parts:-
//    - Left subtree (elements to the left of the root in the inorder array).
//    - Right subtree (elements to the right of the root in the inorder array).
// Calculate the size of the left and right subtrees as this will help determine the postStart and postEnd indices 
// for the new segments of the left and right subtrees for the current node.
// So, for:- 
//    - left subtree size is calculated as the difference between the root's position in inorder and the starting index (i - inStart).
//    - right subtree size is calculated similarly (inEnd - i).
// The function then recursively constructs the left and right subtrees:
//    - for the left subtree, it uses the relevant slice of the inorder and postorder arrays.
//    - for the right subtree, it does the same with the right part of the arrays.
// Once both subtrees are constructed, the root is returned with its left and right children attached, forming the full binary tree.
// Time Complexity (TC):- O(N), as each node of the tree is traversed once in the 'postorder' and 'inorder' arrays.
// Space Complexity (SC):- O(N), in the worst case, if the tree is skewed, we use O(N) space due to recursion.

var buildTree = function(inorder, postorder) {
    let n = inorder.length;
    let inStart = 0, inEnd = n-1;
    let postStart = 0, postEnd = n-1;
    return construct(inorder,postorder, inStart, inEnd, postStart, postEnd);
    function construct(inorder,postorder, inStart,inEnd,postStart,postEnd){
        if(inStart>inEnd){
            return null;
        }
        let root = new TreeNode(postorder[postEnd]);
        let i = inStart;
        for(i;i<=inEnd;i++){
            if(inorder[i] === root.val){
                break;
            }
        }

        let leftSize = i - inStart;
        let rightSize = inEnd - i;

        root.left = construct(inorder,postorder, inStart, i-1, postStart, postStart+leftSize-1);
        root.right = construct(inorder, postorder, i+1, inEnd, postEnd-rightSize, postEnd-1);
        return root;
    }
};