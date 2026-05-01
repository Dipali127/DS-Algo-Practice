// Leetcode Problem:- 872 
// Optimal Approach: Using DFS (Depth First Search)

// Approach:
// I will use DFS traversal. I will recursively call the left and right subtrees for both given trees.
// While traversing, if I reach a leaf node, I will add that node's value into the result array.

// Inside leafSimilar function:
// Call the dfs function once for tree1 and once for tree2 to gather all the leaf nodes of both trees.
// Initialize their return values (arrays) into leaf1 and leaf2 variables.
// Then compare leaf1 and leaf2 after converting the arrays into strings.

// Inside dfs function:
// If root is null, return.
// If the current node is a leaf node, add its value into the result array.
// Otherwise, recursively call the left and right subtrees.

// Time Complexity:- O(N), where 'N' is the total number of nodes in both trees (as we visit each node once).
// Space Complexity (SC):- O(H), where 'H' is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N), as the recursion stack depth is proportional to the number
// of nodes.
// In a balanced tree, SC = O(log N), as the recursion stack depth is proportional to the height of the tree.
// Additionally, O(N) space is used to store leaf node values in the arrays.
// → Overall space complexity is O(N).

// We use join(' ') to convert arrays like [1, 2, 3] into the string "1 2 3" for easy comparison without iteration.
// How string comparison works:
// - First, JavaScript compares the length of both strings.
// - If lengths are equal, it compares each character one by one from left to right.
// - It stops early if any mismatch is found.
// - This comparison is efficient and optimized by the JavaScript engine.

// Note:
// First call → result points to leaf1 array.
// Second call → result points to leaf2 array.
// So each DFS call gets a separate array reference.
// Arrays are passed by reference in JavaScript, so all recursive calls within a single DFS share the same array instance.


var leafSimilar = function(root1, root2) {
    let leaf1 = dfs(root1, []), leaf2 = dfs(root2, []);
    return leaf1.join(' ') === leaf2.join(' ');
    function dfs(root, result){
        if(root === null) return;
        if(root.left === null && root.right === null){
            result.push(root.val);
        }

        dfs(root.left, result);
        dfs(root.right, result);

        return result;
    }
};