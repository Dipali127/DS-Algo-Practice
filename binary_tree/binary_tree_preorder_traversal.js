/// Optimal approach:
// Preorder Traversal (root/current_node-left-right):
// In this traversal, the order is: root/current_node → left → right (NLR)
// This means we visit the current node before traversing its left and right subtrees.

// Recursive approach:
// The "preorderTraversal" function uses the helper function "printPreorder"
// to traverse the binary tree in preorder manner (root, left, right).

// Time Complexity (TC in both worst and best cases):- O(N), because every node of the tree is visited exactly once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.
// O(N) space is also used by the result array to store all node values.
// Overall SC:- O(H + N)
// Since the result array stores all N nodes, the overall space complexity is commonly considered O(N).

var preorderTraversal = function(root) {
    let result = [];
    printPreorder(root, result);
    return result;
};

var printPreorder = function(root, result){
    if(root === null) return;

    result.push(root.val);
    printPreorder(root.left, result);
    printPreorder(root.right, result);
};


// (2) Iterative Approach (Preorder):
// Approach:-
// - Take a result array to store the nodes of the tree in preorder.
// - Use a stack (LIFO) to help achieve preorder traversal iteratively.
// - Store root node onto the stack and run a while loop as long as the stack is not empty.
// - Pop a node from the stack and add its value to the result array.
//   (Popping a node means we are visiting the current/root node.)
// - After visiting the current node, push the right child node first, then the left child node onto the stack so
//   that the left subtree is processed before the right subtree.

// Time Complexity (TC): O(N), as each node of the tree is visited exactly once.
// Space Complexity (SC):
// - O(N) in the worst case (e.g., skewed tree), as the stack can hold up to N nodes.
// - O(N) for the result array to store all node values.
// - Overall, SC = O(N)

// Note: let stack = [root] means that the stack holds only the reference (address) of the root node.
// It does not directly store the left and right child nodes. However, since the root node contains
// references to its children, you can access them when needed by popping the node from the stack.
// 
// Example: Given the tree structure:
// const root = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null
//   }
// };

var preorderTraversal = function (root) {
    if (!root) return [];

    let result = [];
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
};
