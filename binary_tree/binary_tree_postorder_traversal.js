// Leetcode Problem:- 145
// Optimal approach:
//  Visit the current node after visiting all the nodes of the left and right subtrees.
//   Here, the traversal is left child – right child – root.  
// It means that the left child has traversed first then the right child and finally its root node. 

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

// (2) Iterative Approach:
// - Take a result array to store the nodes of the tree in postorder.
// - Use a stack to help achieve postorder traversal iteratively.
// - Run a while loop as long as the stack is not empty.
//   Inside the loop, traverse all nodes in a way that right nodes are processed before left nodes.
// - Push the current node’s value into the result array.
// - First push the left child, then the right child to the stack so that the right child is processed first 
// (due to stack's LIFO nature).
// - After the loop ends, reverse the result array to get the correct postorder traversal.
// Time Complexity (TC): O(N) — each node is visited exactly once.
// Space Complexity (SC):
// - O(N) in the worst case (e.g., for an unbalanced tree), as the stack can hold up to N nodes.
// - O(N) to store all node values in the result array.
// - Overall, SC = O(N)


var postorderTraversal = function(root) {
   if(!root){
       return []
   }
   let stack = [root];
   let result = [];
   while(stack.length > 0){
      let currentNode = stack.pop();
      result.push(currentNode.val);
      if(currentNode.left){
        stack.push(currentNode.left);
      }

      if(currentNode.right){
        stack.push(currentNode.right);
      }
   }

   return result.reverse();
}