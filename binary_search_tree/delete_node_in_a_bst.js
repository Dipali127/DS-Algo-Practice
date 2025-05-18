// Leetcode Problem:- 450
// Optimal Approach:
// To delete a node from a Binary Search Tree (BST), handle three cases based on the node's structure:
// 1. Node has no children (it's a leaf node):- simply remove the node.
// 2. Node has one child:- replace the node with its child.
// 3. Node has two children: find the node's in-order successor (smallest node in the right subtree), 
//   replace the node's value with the successor's value, and delete the successor. 

// approach: Using DFS (Depth-First Search)
// Start from the root and search for the node with the given key.
// Once the node is found:
// - If the node has no children, delete it.
// - If the node has one child, replace the node with its child.
// - If the node has two children, find the in-order successor (the smallest node in the right subtree), 
//   replace the node's value with the successor's value, and recursively delete the in-order successor.

// Example:- given root = [5,3,6,2,4,null,7] and key = 3, once we find the node with value `3`, 
// we replace it with the smallest node from the right subtree (`4`).
// After replacing, we still need to remove the original `4`. we call the `deleteNode` function to 
// find and remove the node `4` from the right subtree of the replaced node.
// Logic to remove node `4` (in the right subtree of the replaced node):
//    - find `4` in the right subtree (where it originally was).
//    - since `4` does not have any children (it's a leaf node), we can delete it by returning `null`.

// TC:- O(N), Explanation:- 
//  - O(N), to traverse each node of the tree once.
//  - O(N), to find the smallest node in the right subtree in the worst case.
// Overall, TC:-  O(N) + O(N) = O(2N) = O(N).
// SC:- O(N), the space used by the recursion stack is proportional to the height of the tree (O(N)) in the worst case.

var deleteNode = function(root, key) {
    if (root === null) {
        return null;
    }

// here, the 'root.right' and 'root.left' is updated to point to the new subtree after the node with the
//  specified key has been deleted.
    if (key < root.val) {
        root.left = deleteNode(root.left, key); 
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);  
    } else {
        // once node found, perform deletion
        // Case 1: Node has no children (it's a leaf node)
        if (root.left === null && root.right === null) {
            return null;
        }
        
        // Case 2: Node has only one child
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }

        // Case 3: Node has two children, then call the right subtree to find the inorder successor of the node which is 
        // equal to 'key'.
        let minNode = findMin(root.right);
        root.val = minNode.val;  
        root.right = deleteNode(root.right, minNode.val);  
    }
    return root;
};

// Helper function to find the minimum value node in the subtree
// 'node = node.left' means that node will iterate through the left subtree until it finds null.
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
     // return the address of node with the smallest value in the subtree
    return node;
}