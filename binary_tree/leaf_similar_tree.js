// Leetcode problem:- 872 
// Optimal Approach: Using DFS (Depth First Search)
// Approach:
// - Use two arrays, 'leaf1' and 'leaf2', to store the leaf nodes of both trees.
// - Call the 'dfs' function to gather all the leaf nodes of the trees.
// - After collecting the leaf nodes, compare the two arrays directly by converting them into strings and checking equality.
// Note:- In JavaScript, arrays are passed by reference. This means when we pass 'leaf1' or 'leaf2' into the dfs function,
// any change made to the 'leaf' parameter inside the function (like pushing values) directly reflects in the original array.
// So, pushing values into 'leaf' inside the function modifies 'leaf1' or 'leaf2' as expected.

// We use join(' ') to convert arrays like [1, 2, 3] into the string "1 2 3" for easy comparison without iteration.
// How string comparison works:
// - First, JavaScript compares the length of both strings.
// - If lengths are equal, it compares each character one by one from left to right.
// - It stops early if any mismatch is found.
// - This comparison is efficient and optimized by the JavaScript engine.
// Time Complexity:- O(N), where 'N' is the total number of nodes in both trees (as we visit each node once).
// Space Complexity: O(N), due to:
// - O(N) for storing leaf node values.
// - O(H) for recursive call stack, where H is the height of the tree.
//   → Worst case: O(N) for skewed trees, Best case: O(log N) for balanced trees.
//   → Overall, space complexity is O(N).


var leafSimilar = function (root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    dfs(root1, leaf1);
    dfs(root2, leaf2);

    // this below code help us to directly compare both the array by converting them into string without
    // iterating both the leaf1 and leaf2 array
    // here, join(' ') convert array like [1,2,3] in '123' and comparing the both leaf1 and leaf2 becomes easy even 
    // we dont need to iterate.
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
