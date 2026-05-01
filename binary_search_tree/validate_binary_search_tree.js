// Leetcode Problem:- 98
// Brute force approach:
// Approach:
// I will perform an inorder traversal on the given binary tree.
// Since an inorder traversal of a valid BST returns a sorted list of node values,
// while performing the traversal, I will store each visited node's value in a result array.

// After that, I will traverse the result array and check whether it is strictly increasing.
// If any current value is greater than or equal to the next value, I will return false immediately.
// Otherwise, after checking all elements, I will return true, which means the given tree is a valid BST.

// Time Complexity:- O(N), Explanation:-
// O(N):- to perform the inorder traversal of the tree, as each node of the tree are visited exactly once.
// O(N):- to check whether the result array is sorted and following BST property.
// overall, TC:- O(N) + O(N) = O(2N) = O(N).

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion depth is proportional
// to the number of nodes in the tree.
// O(N) used by 'result' array to store all nodes of given BST in sorted order.
// Overall, SC:- O(N).

var isValidBST = function (root) {
    let result = [];
    inorder(root)
    function inorder(root) {
        if (root === null) {
            return;
        }

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }

    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] >= result[i + 1]) {
            return false;
        }
    }

    return true;
};

// Optimal Approach: Inorder Traversal with `prev` variable
// Approach:-
// I will perform an inorder traversal on the given binary tree.
// Since an inorder traversal of a valid BST returns a sorted list of node values(strictly increasing order).
// Also i will maintain one variable 'prev' to keep track of the previously visited node.
// while performing the traversal, i will check that if value at prev is greater than or equal to current visited value
// then i will immediately return false.
// But If the traversal completes without violation, I will return true. 

// Solution:
// Use an inorder traversal to visit nodes in sorted order.
// maintain a variable `prev` to store the value of the previously visited node.
// - During traversal:
//   1. Recursively traverse the left subtree.
//   2. Compare the current node's value with `prev`:
//      - If the current node's value is **less than or equal to** `prev`, it violates the BST property.
//      - In that case, return false.
//   3. Otherwise, update `prev` to the current node's value.
//   4. Recursively traverse the right subtree.
// - If all nodes follow the strictly increasing order, return true.

// Time Complexity: O(N), to perform the inorder traversal of the tree, as each node of the tree are visited exactly once.

// Space Complexity: O(H), where 'H' is the height of the tree due to the recursion stack.
// In a balanced tree, H = O(log N), as the recursion stack depth is proportional to the height of the tree.
// In an unbalanced tree (either left-skewed or right-skewed), H = O(N), as the recursion stack depth is proportional
// to the number of nodes in the tree.

// NOTE:
// Why do we use early return here?
// Because if any subtree (either left or right) is not following BST property then, there is no point in continuing
// traversal on the remaining subtree.

var isValidBST = function (root) {
    let prev = null;
    return inorder(root);
    function inorder(root) {
        if (root === null) return true;

        if (!inorder(root.left)) {
            return false;
        }

        if (prev !== null && prev.val >= root.val) return false;
        prev = root;

        if (!inorder(root.right)) {
            return false;
        }

        return true;
    }

};