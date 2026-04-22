/// Optimal approach:
// Preorder Traversal (root/current_node-left-right):
// In this traversal, the order is: root/current_node → left → right (NLR)
// This means we visit the current node before traversing its left and right subtrees.

// Recursive approach:
// The "preorderTraversal" function uses the helper function "printPreorder"
// to traverse the binary tree in preorder manner (root, left, right).

// Time Complexity: O(N), since every node of a tree is visited exactly once.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) is used by the 'result array' to store the preorder traversal of the tree.
// O(H) is used by the recursion stack to store function calls at any time.
// In the worst case (completely unbalanced tree, like a left-skewed or right-skewed tree), H = N.
// In a balanced tree, H = log N.
// 'H' is the height of the tree from root to leaf.
// Overall, SC = O(N) + O(H), which simplifies to O(N).

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
// - Take a result array to store the nodes of the tree in preorder.
// - Use a stack (LIFO) to help achieve preorder traversal iteratively..
// - Run a while loop as long as the stack is not empty.
// - Pop a node from the stack and add its value to the result array.
// - Push the right child first, then the left child onto the stack.
//   This ensures that the left child is processed first (due to LIFO nature of stack).

// Time Complexity (TC): O(N) — each node is visited exactly once.

// Space Complexity (SC):
// - O(N) in the worst case (e.g., skewed tree), as the stack can hold up to N nodes.
// - O(N) for the result array to store all node values.
// - Overall, SC = O(N)

// Note: let stack = [root] means that the stack holds only the reference (address) to the root node.
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
