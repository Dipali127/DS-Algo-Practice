// Leetcode Problem:- 222
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// What is complete binary tree? 
// A complete binary tree is a binary tree in which:
// All levels are completely filled except possibly the last level.
// And in the last level, nodes are filled from left to right (no gaps)

// Approach:
// To count the number of nodes in a complete binary tree, I’ll use a DFS traversal. I will recursively traverse the 
// left and right subtrees, and for each visited node, I will increment a count by 1. 

// Solution:-
// First check, if root is null return 0 since there is no node to count.
// Take a count variable to keep track of count of node while visiting.
// create a dfs function to write a logic of counting number of nodes of tree.

// Inside DFS function:
// Base Case:-
// if root is null then return to its previous recursive function/function call.

// Recursive logic:-
// (i) increment count by 1 for visit of current node.
// (ii) recursively call left subtree and right subtree.

// After counting number of nodes of a tree, return it.

// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node of the tree is visited once.
// Space Complexity (SC):- O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
// to the number of nodes in the tree.
// In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// Note:- Since this problem only requires counting every node exactly once,
// we can solve it using any tree traversal method such as DFS (preorder, inorder, postorder)
// or BFS (level order traversal), because the traversal order does not matter for counting nodes.

var countNodes = function(root) {
    if(root === null){
        return 0;
    }

    let count = 0;
    dfs(root);
    return count;
    function dfs(root){
        if(root === null){
            return;
        }
        
        count++;
        dfs(root.left);
        dfs(root.right);
    }
};

// Most Optimal Approach:
// Approach:-
// Since the given tree is a complete binary tree, I will use its special property to optimize the counting process
// instead of visiting every node.
// For each current subtree/root node, I will compute the height of the leftmost path and the height of the rightmost path.
// If leftHeight === rightHeight, then the subtree is a perfect binary tree, and I will directly return number of nodes
//  using (2 ^ height) - 1.
// But, If leftHeight !== rightHeight, It means the subtree is complete but not perfect.
// - So I recursively count nodes in the left and right subtrees until I find perfect subtrees.

// Solution:-
// First, check if root is null. If yes, return 0 because there are no nodes.

// For each subtree:
// - Compute leftHeight by traversing only the leftmost path.
// - Compute rightHeight by traversing only the rightmost path.

// If both heights are equal:
// - The subtree is perfect.
// - Return (2 ^ height) - 1 directly without further recursion.

// Otherwise:
// - Recursively count nodes in left subtree and right subtree.
// - Add 1 for the current root node.
// - Return:
//   1 + countNodes(root.left) + countNodes(root.right)

// Time Complexity (TC):
// - In each recursive call, computing leftHeight and rightHeight takes O(log N)
//   because height of a complete binary tree is log N.
// - Recursive calls continue for O(log N) levels in the worst case.
// - Overall TC:- O((log N)²)

// Why O((log N)²)?
// - O(log N) work at each recursive level for height calculation
// - O(log N) recursive levels
// - Total = O(log N × log N)

// Space Complexity (SC):
// - Recursive stack depth is equal to tree height.
// - Height of complete binary tree = O(log N)
// - Overall SC:- O(log N)

// Key Point:-
// In a complete binary tree:
// - If leftmost height and rightmost height are equal → perfect subtree → direct formula
// - Otherwise → recursively process the incomplete subtree/subtrees.


var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = computeLeftHeight(root);
    let rightHeight = computeRightHeight(root);

    // If perfect binary tree
    if (leftHeight === rightHeight) {
        return (2 ** leftHeight) - 1;
    }

    // Otherwise recursively count
    return 1 + countNodes(root.left) + countNodes(root.right);

    function computeLeftHeight(node) {
        let height = 0;
        while (node !== null) {
            height++;
            node = node.left;
        }
        return height;
    }

    function computeRightHeight(node) {
        let height = 0;
        while (node !== null) {
            height++;
            node = node.right;
        }
        return height;
    }
};