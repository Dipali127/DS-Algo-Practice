// Leetcode Problem:- 230
// Problem:
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values
// of the nodes in the tree.

// Brute Force Approach:
// Approach:
// I will perform an inorder traversal on the given Binary Search Tree (BST).
// Since an inorder traversal of a valid BST visits nodes from smallest to largest (in strictly increasing order),
// while performing the traversal, I will store each visited node’s value in a result array.

// After that, I will return the (k - 1)th value from the result array, since arrays use 0-based indexing.

// Time Complexity:- O(N), Explanation:-
// O(N):- to perform the inorder traversal of the tree, as each node of the tree is visited exactly once.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional
// to the number of nodes in the tree.
// O(N) is also used by the result array to store all nodes of the given BST in sorted order.
// Overall, SC:- O(N).

var kthSmallest = function(root, k) {
    let result = [];
    inorder(root);
    function inorder(root){
        if(root === null)return;

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }

    return result[k-1];
};

// Optimal Approach: Inorder Traversal with `prev` variable
// Approach:
// I will perform an inorder traversal on the given binary search tree (BST).
// Since an inorder traversal of a BST (Left → Root → Right) visits the smaller values of the tree first,
// I will use a counter 'i' to keep track of how many nodes have been visited so far.

// While traversing:
// - I will first recursively traverse the left subtree.
// - Then I will increment the counter 'i' for the current node.
// - If 'i' becomes equal to k, it means the current node is the kth smallest,
//   so I will store its value in the 'prev' variable and stop further traversal.
// - Otherwise, I will continue traversing the right subtree.

// To optimize, I will use early return (boolean) so that once the kth smallest element is found,
// the recursion stops immediately without exploring unnecessary nodes.

// Time Complexity in worst case: O(N), as we may visit all nodes of the tree in inorder traversal,
// since each node is visited exactly once.
// O(H + k) in the best/average case due to early stopping, where 'H' is the height of the tree and 'k' is the kth element.
// Due to early stopping, we only traverse nodes until we reach the k-th smallest element in inorder traversal,
// so we avoid visiting all N nodes in the tree.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion depth is proportional
// to the number of nodes in the tree.

// Note:-
// What if we only use return and not a boolean return value?
// A simple return exits only the current recursive call, whereas a boolean return value enables early termination by
// signaling previous recursive calls to stop further traversal.

var kthSmallest = function (root, k) {
    let i = 0, prev = null;
    inorder(root);
    return prev;
    function inorder(root) {
        if (root === null) return false;

        // if left subtree itself found kth smallest, return true to stop further traversal.
        if (inorder(root.left)) return true;
        i++;
        if (i === k) {
            prev = root.val;
            return true;
        }
        // if right subtree itself found kth smallest, return true to stop further traversal.
        if (inorder(root.right)) return true;
    }
};