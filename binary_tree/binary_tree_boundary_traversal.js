// GeeksForGeeks Problem:
// Optimal Approach:

// Approach:
// To solve this problem, I will use DFS traversal.
// I will divide the tree into three parts:

// 1. First, I will add the root node once.
// 2. Then, I will traverse the left boundary/subtree of the tree, excluding leaf nodes,
//    by always preferring the left child over the right child.
// 3. Next, I will traverse all the leaf nodes from left to right subtree.
// 4. Finally, I will traverse the right boundary/subtree of the tree, excluding leaf nodes,
//    in reverse order (from bottom to top).

// This approach ensures that there is no duplication of nodes and produces the correct boundary traversal.


// Inside boundaryTraversal function:
// - Take a result array to store the nodes of the tree in boundary traversal.
// - If root is null, return empty result since there is no tree to traverse.
// - Otherwise, add the root node to the result only once to avoid duplication.
// - Then call:
//   - leftView function by passing root.left to avoid duplicating the root node.
//   - leafView function twice: once for the left subtree and once for the right subtree.
//   - rightView function by passing root.right to avoid duplicating the root node.


// Inside leftView function:
// - First, check if the current node is null or a leaf node. If so, return,
//   since we do not include null or leaf nodes in the left boundary.
// - Otherwise, add the current node value to the result.
// - If the left child exists, recursively call leftView on the left subtree.
// - Otherwise, call leftView on the right subtree.
// - Note: Always give preference to the left child over the right child.

// Inside leafView function:
// - If the current node is null, return.
// - If the current node is a leaf node, add it to the result.
// - Otherwise, recursively call both left and right subtrees.

// Inside rightView function:
// - First, check if the current node is null or a leaf node. If so, return,
//   since we do not include null or leaf nodes in the right boundary.
// - If the right child exists, recursively call rightView on the right subtree.
// - Otherwise, call rightView on the left subtree.
// - While returning from recursion, add the current node’s value to the result to achieve reverse (bottom-up) order.
// - Note: Always give preference to the right child over the left child.

// After completing the boundary traversal, return the result.

// Time Complexity (TC): O(N)
// Explanation:
// - The leftView function (left boundary traversal) takes O(H), where H is the height of the tree.
// - The leafView function visits all nodes once, taking O(N).
// - The rightView function (right boundary traversal) takes O(H).
// - Since all nodes are processed at most once, the overall time complexity is O(N).
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.


class Solution {
    boundaryTraversal(root) {
        let result = [];
        if(root === null) return result;
        result.push(root.data);
        
        leftView(root.left)
        leafView(root.left)
        leafView(root.right)
        rightView(root.right)
        
        return result;
        
        function leftView(root){
            if(root === null || root.left === null && root.right === null){
                return;
            }
            
             result.push(root.data);
             if(root.left !== null){
                 leftView(root.left);
             }else{
                 leftView(root.right);
             }
        }
        
        function leafView(root){
            if(root === null) return;
            if(root.left === null && root.right === null){
                result.push(root.data);
            }
            
            leafView(root.left);
            leafView(root.right);
        }
        
        function rightView(root){
            if(root === null || root.left === null && root.right === null){
                return;
            }
            
             if(root.right){
                 rightView(root.right);
             }else{
                 rightView(root.left);
             }
             
             result.push(root.data);
        }
        
    }
}