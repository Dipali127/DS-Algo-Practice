// Leetcode Problem:- 145
// Optimal approach:
// Postorder Traversal(left-right-root):
// In this traversal, the order is: left -> right -> root(LRN)
//  This means visit the current node after visiting all the nodes of the left and right subtrees.
// It means that the left child has traversed first then the right child and finally its root node. 

// (1) Recursive approach:-
// The "postOrder" function uses the helper function "postorderTraversalr"
// to traverse the binary tree in postOrder manner i.e., (left, right, root).

// Time Complexity: O(N), since every node of a tree is visited exactly once.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) is used by the 'result array' to store the preorder traversal of the tree.
// O(H) is used by the recursion stack to store recursive function/function call in the worst case 
// (when the tree is completely unbalanced, like a left-skewed or right-skewed tree).
// 'H' is the height of the tree from root to leaf.
// Overall, SC:- O(N) + O(H)

var postorderTraversal = function (root) {
    let result = [];
    if (root === null) {
        return [];
    }

    postOrder(root)
    return result;
    function postOrder(root) {
        if (root === null) {
            return;
        }

        postOrder(root.left);
        postOrder(root.right);
        result.push(root.val);
    }
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
// - O(N) is used by the 'result array' to store the postorder traversal of the tree.
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