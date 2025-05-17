// Leetcode Problem:- 94
// Optimal approach:
// Visit the current node after visiting all nodes in the left subtree, but before visiting any node in the right subtree.
// In this traversal, the order is: left child → root → right child.
// This means that the left subtree is traversed first, followed by the current (root) node, and finally the right subtree.
// (1) Recursive approach:-
// The "inorderTraversal" function uses the helper function "inOrder"
// to traverse the binary tree in inorder manner i.e., (left, root, right).
// Time Complexity (TC):- O(N), to iterate through all the nodes of the binary tree.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) for the 'output array' that stores the traversal result.
// O(N) for the 'recursive call stack' in the worst case (when the tree is completely unbalanced).
// Overall, SC:- O(N) + O(N) = O(2N) = O(N).
var inorderTraversal = function (root) {
    let output = [];
    inOrder(root, output);
    return output;
};

function inOrder(node, output) {
    if (node === null) {
        return;
    }
    inOrder(node.left, output);
    let num = node.val;
    output.push(num);
    inOrder(node.right, output);
}


// (2) Iterative approach:-
// the iterative approach uses a stack to traverse the tree inorder (left, root, right).
// - first, we traverse the leftmost nodes, pushing them onto the stack.
// - once all the leftmost nodes are traversed, we pop them from the stack 
// (pop the node from stack means we visit the root node/current node).
// - after visiting the root node, we traverse the right subtree and repeat the process.
// Time Complexity (TC):- O(N), because every node is pushed to and popped from the stack exactly once.
// Space Complexity (SC):- O(N), Explanation:
// - as in the worst case, the stack will store up to O(N) nodes (in an unbalanced tree), especially when the tree is skewed.
// - the result array also requires O(N) space to store all node values of given tree.
// So, overall space complexity is O(N).

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