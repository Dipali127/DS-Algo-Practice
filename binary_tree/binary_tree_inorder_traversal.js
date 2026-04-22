// Leetcode Problem:- 94
// Optimal approach:
// Inorder Traversal (left - current node - right):- 
// In this traversal, the order is: left child → root → right child.
// This means, traverse the left subtree first, then visit the current (root) node, and finally traverse the right
// subtree.
// (1) Recursive approach:-
// The "inorderTraversal" function uses the helper function "inOrder" to traverse the binary tree in inorder manner
//  i.e., (left, root, right).

// Time Complexity (TC in worst and best case):- O(N), because every node of the tree is visited exactly once.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) is used by the 'result array' to store the inorder traversal of the tree.
// O(H) is used by the recursion stack to store function calls at any time.
// In the worst case (completely unbalanced tree, like a left-skewed or right-skewed tree), H = N.
// In a balanced tree, H = log N.
// 'H' is the height of the tree from root to leaf.
// Overall, SC = O(N) + O(H), which simplifies to O(N).

// In an unbalanced tree, height H = N because all nodes are in one path.
// In a balanced tree, height H = log N because nodes grow exponentially level by level.

 var inorderTraversal = function(root) {
    let result = [];
    if(root === null){
        return result;
    } 

    inorder(root);
    return result;
    function inorder(root){
        if(root === null){
            return;
        }

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }
};


// (2) Iterative approach:
// The iterative approach uses a stack to traverse the tree in inorder (left, root/current node, right).
// - First, traverse the left subtree and push nodes onto the stack.
// - Once all the left subtree nodes are processed, pop a node from the stack.
//   (Popping a node means we are visiting the current/root node.)
// - After visiting the current node, move to its right subtree and repeat the process.

// Time Complexity (TC):- O(N), because every node of the tree is visited exactly once.
// Space Complexity (SC):- O(N), Explanation:
// - In the worst case (skewed tree), the stack can store up to O(N) nodes.
// - The result array also requires O(N) space to store all node values.
// Overall Space Complexity: O(N)

var inorderTraversal = function (root) {
    let result = [];
    // currentNode and root both have same memory location which point the root object 
    let currentNode = root;
    let stack = [];
    while (stack.length > 0 || currentNode != null) {
        while (currentNode) {

            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return result;
}