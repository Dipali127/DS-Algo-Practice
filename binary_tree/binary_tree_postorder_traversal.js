// Leetcode Problem:- 145
// Optimal approach:

// (1) Recursive approach:-
// The "postOrder" function uses the helper function "postorderTraversalr"
// to traverse the binary tree in postOrder manner i.e., (left, right, root).
// Time Complexity (TC):- O(N), to iterate through all the nodes of the binary tree.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) to store all the values of the tree in the array.
// O(N) for the recursive call stack. 
// Overall, SC: O(N) + O(N) = O(2N) = O(N).

var postOrder = function(root,result){
    if(root == null){
        return result;
    }

    postOrder(root.left,result);
    postOrder(root.right,result);
    result.push(root.val);
}
var postorderTraversal = function(root) {
   let result = [];
   postOrder(root,result);
   return result;
};

// (2) Iterative approach:-  
//  start by pushing the root node onto the stack.
//  pop nodes from the stack, and for each node;
// add the node's value to the front of the result array (using unshift).
// push the left child onto the stack (if it exists).
// push the right child onto the stack (if it exists).
// the nodes are processed in a modified preorder traversal (root, right, left), and by adding them to the front of the result
// array, we effectively reverse the order, producing the correct postorder sequence (left, right, root).
// Note:-
// unshift() is used to insert nodes at the front of the array, ensuring that the left subtree is processed before the right subtree.
// TC:- O(N), to traverse each node of the tree once.
// Space Complexity (SC):- O(N), Explanation:
// in the worst case (e.g., an unbalanced tree), the stack can store up to O(N) nodes.
// O(N), to store all node values in result array.
// overall, SC:- O(N)

var postorderTraversal = function(root) {
   if(!root){
       return []
   }
   let stack = [root];
   let result = [];
   while(stack.length){
       let temp = stack.pop();
       result.unshift(temp.val)
       if(temp.left){
           stack.push(temp.left);
       }
       if(temp.right){
           stack.push(temp.right);
       }
   }

   return result;
}