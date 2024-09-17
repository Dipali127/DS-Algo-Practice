// Leetcode Problem:- 872
// Problem: Check if the leaf nodes of two binary trees are similar.
// Optimal Approach: Using DFS (Depth First Search)
// Approach:-
// - use two arrays, 'leaf1' and 'leaf2', to store the leaf nodes of both trees.
// - call the 'dfs' function to gather all the leaf nodes of the trees.
// - after collecting the leaf nodes, compare the two arrays directly by converting them into strings and checking equality.
// TC:- O(N), where N is the total number of nodes in both trees, as we traverse each node of both trees.
// SC:- O(N), due to the following;-
// - O(N) for storing the leaf node values, as the number of leaf nodes can vary and we need space to store them.
// - O(H) for the recursive call stack, where 'H' is the height of the binary tree. In the worst case (for skewed trees), H = O(N), and in the best case (balanced trees), H = O(log N).
// overall, space complexity is O(N).

var leafSimilar = function (root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    dfs(root1, leaf1);
    dfs(root2, leaf2);

    // this below code help us to directly compare both the array by converting them into string without
    // iterating both the leaf1 and leaf2 array
    return leaf1.join(' ') === leaf2.join(' ');
};

var dfs = function (root, leaf) {
    if (root == null) {
        return;
    }

    if (root.left == null && root.right == null) {
        leaf.push(root.val);
        return;
    }

    dfs(root.left, leaf);
    dfs(root.right, leaf);

    return leaf;
};
