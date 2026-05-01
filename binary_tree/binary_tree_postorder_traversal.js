// Leetcode Problem:- 145
// Optimal approach:
// Postorder Traversal(left-right-root/current_node):
// In this traversal, the order is: left -> right -> root/current_node(LRN)
// This means the left subtree is traversed first, then the right subtree, and finally the current/root node is visited.
// (1) Recursive approach:-
// The "postorderTraversal" function uses the helper function "postOrder"
// to traverse the binary tree using postorder traversal (left, right, root).

// Time Complexity (TC in both worst and best cases):- O(N), because every node of the tree is visited exactly once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.
// O(N) space is also used by the result array to store all node values.
// Overall SC:- O(H + N)
// Since the result array stores all N nodes, the overall space complexity is commonly considered O(N).

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
// Approach:-
// To traverse the tree iteratively in postorder, I will use a modified preorder traversal where I will visit the current
// node, then the right subtree, and then the left subtree instead of traversing the left subtree and then the right 
// subtree. Then I reverse the result array to obtain the correct postorder sequence: left → right → root.

// Solution:-
// - Take a result array to store the nodes of the tree in postorder.
// - Use a stack to help achieve postorder traversal iteratively.
// - Run a while loop until the stack becomes empty.
//   Inside the loop:-
// - Push the current node’s value into the result array.
// - First push the left child, then the right child to the stack so that the right child is processed first 
// (due to stack's LIFO nature).
// - After the loop ends, reverse the result array to get the correct postorder traversal.
// Time Complexity (TC): O(N) — as each node of the tree is visited exactly once.
// Space Complexity (SC):
// - O(N) in the worst case (e.g., for an unbalanced tree), as the stack can hold up to N nodes.
// - O(N) is used by the 'result array' to store the postorder traversal of the tree.
// - SC = O(N) + O(N) = O(2N) = O(N).

// This solution first generates a modified preorder traversal in the order:
// root → right → left (NRL).
// However, postorder traversal requires left → right → root (LRN).
// So, we reverse the result array at the end to obtain the correct postorder traversal.

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