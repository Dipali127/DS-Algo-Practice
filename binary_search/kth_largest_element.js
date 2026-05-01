// GeeksForGeeks Problem:
// Problem:-
// Given a Binary Search Tree. Your task is to complete the function which will return the kth largest element without
// doing any modification in the Binary Search Tree.

// Brute Force Approach:
// Approach:
// I will perform an inorder traversal on the given binary tree.
// Since an inorder traversal of a valid BST returns a sorted sequence of node values (in strictly increasing order),
// while performing the traversal, I will store each visited node's value in a result array.

// After that, I will return the (k-1)th value from the result array, since the array uses 0-based indexing.


// Time Complexity:- O(N), Explanation:-
// O(N):- to perform the inorder traversal of the tree, as each node of the tree is visited exactly once.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional
// to the number of nodes in the tree.
// O(N) used by 'result' array to store all nodes of given BST in sorted order.
// Overall, SC:- O(N).

class Solution {
    kthLargest(root, k) {
        let result = [];

        function inorder(node) {
            if (node === null) return;

            inorder(node.right);
            result.push(node.data);
            inorder(node.left);
        }

        inorder(root);
        return result[result.length - k];
    }
}


// Optimal Approach: Inorder Traversal with `prev` variable
// Approach:
// I will perform a reverse inorder traversal on the given BST.
// Since reverse inorder traversal (Right → Root → Left) gives nodes in strictly decreasing order, And
// I can easily find the kth largest element using this order.

// I will use a counter 'i' to keep track of how many nodes have been visited so far.

// While traversing:
// - First recursively traverse the right subtree.
// - Then increment counter 'i' for the current node.
// - If 'i' becomes equal to k, it means the current node is the kth largest,
//   so I will store its value in 'prev' and stop further traversal.
// - Otherwise, continue traversing the left subtree.

// To optimize, I use early return (boolean) so traversal stops immediately
// once kth largest is found.

// Time Complexity in worst case: O(N), as we may visit all nodes of the tree in inorder traversal,
// since each node is visited exactly once.
// O(H + k) in the best/average case due to early stopping, where 'H' is the height of the tree and 'k' is the kth element.
// Due to early stopping, we only traverse nodes until we reach the k-th smallest element in inorder traversal,
// so we avoid visiting all N nodes in the tree.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion depth is proportional
// to the number of nodes in the tree.


class Solution {
    // return the Kth largest element in the given BST rooted at 'root'
    kthLargest(root, k) {
        let prev = null, i = 0;
        inorder(root);
        return prev;
        function inorder(root){
            if(root === null) return false;
            if(inorder(root.right)) return true;
            i++;
            if(i === k){
                prev = root.data;
                return true;
            }
            if(inorder(root.left)) return true;
        }
        
        return false;
    }
}