// Leetcode Problem:-  144
// Optimal approach:
// Preorder Traversal (current-left-right: Visit the current node before visiting any nodes inside the left or right
//  subtrees. Here, the traversal is root – left child – right child(nlr). 
// It means that the root node is traversed first then its left child and finally the right child. 

// (1) Recursive approach:-
// The "preorderTraversal" function uses the helper function "printPreorder"
// to traverse the binary tree in preorder manner i.e., (root, left, right).
// Time Complexity (TC):- O(N), to iterate through all the nodes of the binary tree.
// Space Complexity (SC):- O(N) - Explanation:
// O(N) to store all the values of the tree in the array.
// O(N) for the recursive call stack. 
// Overall, SC: O(N) + O(N) = O(2N) = O(N).

var preorderTraversal = function(root) {
    let result = [];
    return printPreorder(root, result);
};

var printPreorder = function(root, result){
    if(root === null) {
        return result;
    }
    result.push(root.val);
    printPreorder(root.left, result);
    printPreorder(root.right, result);
    return result;
}

// (2) Iterative approach:
// nodes are processed using a stack (LIFO - Last In, First Out), which allows for preorder traversal.
// the pop() operation retrieves and removes the top node from the stack, so to achieve the (root, left, right) order.
// when a node is processed, its value (node.val) is added to the result array.
// right child nodes are pushed onto the stack before left child nodes to ensure the correct preorder traversal order.
// Time Complexity (TC):- O(N), to visit each node once.
// Space Complexity (SC):- O(N), Explanation:-
// O(N):- to store all the nodes of the tree in the result array.
// O(N):- to store the node onto the stack as in the worst case (i.e., when the tree is completely unbalanced, such as a
// right-skewed or left-skewed tree), the stack may need to hold all 'N' nodes at some point during the traversal..

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
