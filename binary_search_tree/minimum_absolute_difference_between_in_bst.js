// Leetcode Problem:- 530
// Brute force approach:-
// appraoch:- 
// sort the given bst using inorder traversal and store the sorted values in 'inorderArr' array.
// iterate through the 'inorderArr' array to compute the minimum absolute difference.
// TC:- O(N), Explanation:- 
// O(N):- to iterate through the given tree.
// O(N):- compute the minimum difference.
// overall, TC:- O(N)
// SC:- O(N), Explanation:-
// O(N):- to store all values of tree in 'inorderArr' array.
// O(H):- for the recursion stack, where H is the height of the BST. This could be O(log N) for a balanced tree or O(N) for a skewed tree.
// overall, SC:- O(N)

var getMinimumDifference = function (root) {
    let min = Infinity;
    let inorderArr = inorder(root, [])
    function inorder(root, result) {
        if (root == null) {
            return;
        }

        inorder(root.left, result);
        result.push(root.val);
        inorder(root.right, result);

        return result;
    }

    for (let i = 0; i < inorderArr.length - 1; i++) {
        let diff = Math.abs(inorderArr[i + 1] - inorderArr[i]);
        min = Math.min(min, diff);
    }

    return min;
};

// Optimal appraoch:- 
// in the below approach, compute the minimum difference between consecutive nodes in the inorder traversal of the BST.
// perform an inorder traversal of the BST while keeping track of the previously visited node (prev).
// during the traversal of each node, compute the absolute difference between the current visited node’s value and the prev node’s value.
// update the minimum difference (min) if the computed difference is smaller.
// continue the traversal to ensure that all pairs of consecutive nodes are checked.
// TC:- O(N), to traverse the BST in an inorder manner.
// SC:- O(H) for the recursion stack, where H is the height of the BST. This could be O(log N) for a balanced tree or O(N) for a skewed tree.

var getMinimumDifference = function (root) {
    let min = Infinity;
    let prev = null;
    inorder(root);
    function inorder(root) {
        if (root === null) {
            return;
        }

        inorder(root.left);
        if (prev != null) {
            min = Math.min(min, Math.abs(root.val - prev))
        }

        prev = root.val;
        inorder(root.right);
    }

    return min;
}

