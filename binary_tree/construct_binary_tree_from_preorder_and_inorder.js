// Leetcode Problem:- 105
// Brute Force Approach:
// Approach:
// I will use DFS traversal to construct the tree recursively.
// I will recursively build the left and right subtrees based on the current root node taken from the preorder array.
// To get the root node, I will use the preorder array.
// To divide the tree into left and right subtrees based on the current root node, I will use the inorder array.

// Solution:
// I will use the 'idx' variable in the main function 'buildTree' to keep track of the current root in the preorder array.
// Since the preorder array always gives the root node first for each subtree, I will use preorder[idx++] to get the
// current root node and then increment 'idx' to move to the next root for recursive left and right subtree calls.

// Base Case:
// In the 'construct' function, if 'start > end', it means there is no subtree to construct, so I return null.

// Otherwise:
// - The root value is taken from the preorder array using preorder[idx++].
// - This root value is stored in 'rootVal'.
// - A new TreeNode is created using this root value.

// Then, I use the inorder array to find the position of the current root node, which helps divide the tree into left 
// and right subtree segments.

// Finding the root's position in the inorder array:
// - Traverse the inorder array from 'start' to 'end' to find index 'i' where inorder[i] === rootVal.
// - This splits the inorder array into:
//   - Left subtree → from 'start' to 'i - 1'
//   - Right subtree → from 'i + 1' to 'end'

// Recursively construct the subtrees:
// - For the left subtree, call 'construct' for the ranto ge 'start' to 'i - 1'.
// - For the right subtree, call 'construct' for the range 'i + 1' to 'end'.

// Finally:
// - Attach the returned left subtree to current root.left
// - Attach the returned right subtree current root.right

// In this way, the full binary tree is constructed recursively.

// Time Complexity in Worst Case (when the constructed tree is skewed left or right): O(N²)
// Explanation:
// For each node from the preorder array, we may linearly scan the inorder array
// (or current inorder segment) to find the root position for subtree construction.

// If the tree is highly skewed (like a linked list), the root may always be at one end
// of the inorder segment, so the search length decreases by only one at each step.

// Example:
// First root   → scan N elements
// Second root  → scan N-1 elements
// Third root   → scan N-2 elements
// ...
// Last root    → scan 1 element

// Total work:
// N + (N-1) + (N-2) + ... + 1
// = N(N+1)/2
// = O(N²)

// Best / Average Case: O(N log N), This happens when the constructed tree is perfectly balanced and the root is 
// always near the middle of the inorder sequence. 
// This reduces the search length by half at each recursive step, leading to an overall complexity of O(NLOGN).

// At each level of recursion:
// Level 1: scan total N elements
// Level 2: scan N/2 + N/2 = N
// Level 3: scan N/4 + N/4 + N/4 + N/4 = N
// So, for each level, total scanning work is O(N).

// Since a balanced tree has O(log N) levels:
// O(N) work per level × O(log N) levels
// = O(N log N)

// Space Complexity (SC): O(H), where 'H' is the height of the constructed tree due to the recursion stack.
// If the constructed tree is balanced, then H = O(log N), as the recursion stack depth is proportional to the height of
// the tree.
// If the constructed tree is unbalanced (either left-skewed or right-skewed), then H = O(N), as the recursion stack
// depth is proportional to the number of nodes in the tree.

// Extra Space:
// O(N) for the constructed tree nodes themselves (output tree).

// Overall:
// Auxiliary Space (excluding output tree): O(H)
// Total Space (including output tree): O(N)(output tree itself).
// So, overall Space Complexity = O(N).

// NOTE:
// 'start' and 'end' are dynamic boundaries that represent the inorder segment of the current subtree, and they keep 
//  shrinking recursively based on root position.

// Why traverse the preorder array from left to right?

// Because preorder traversal order is: Root → Left → Right
// So, the root node is always found at the beginning.

// Reading preorder normally (left to right) gives:Root → Left → Right

// That means:
// - First, we get the root node.
// - Then, the next node belongs to the left subtree.
// - After constructing the left subtree, we construct the right subtree.

// Therefore:
// Since we are reading preorder from the beginning, we must build:
// 1. Root
// 2. Left subtree first
// 3. Right subtree second

// If we build the right subtree first, the index will move incorrectly,
// and nodes will be assigned to the wrong subtree.

var buildTree = function(preorder, inorder) {
    let idx = 0;
    return  construct(inorder, preorder, 0, inorder.length - 1);
    function construct(inorder, preorder, start, end){
        if(start > end) return null;
        
        let rootVal = preorder[idx++];
        let root = new TreeNode(rootVal);
        
        let i = start;
        for(; i <= end; i++){
            if(inorder[i] === rootVal){
                break;
            }
        }

        root.left = construct(inorder, preorder, start, i-1);
        root.right = construct(inorder, preorder, i+1, end);
        
        return root;
    }
};

// Optimal Approach:
// Approach:
// I will use DFS traversal to recursively construct the tree and a HashMap to store elements of the inorder array
// along with their indices.
// I will recursively build the left and right subtrees based on the current root node taken from the preorder array.
// To get the root node, I will use the preorder array.
// To divide the tree into left and right subtrees based on the current root node, I will use the HashMap.

// Why HashMap?
// In the brute-force approach, for every root node, linearly scanning through the inorder array to find the current root
// node’s index increases the time complexity.
// But with a HashMap, lookup for the current root node is reduced to O(1).

// Example:
// inorder = [9,3,15,20,7]
// Map:
// 9 -> 0
// 3 -> 1
// 15 -> 2
// 20 -> 3
// 7 -> 4

// Solution:
// I will use the 'idx' variable in the main function 'buildTree' to keep track of the current root in the preorder array.
// Since the preorder array always gives the root node first for each subtree, I will use preorder[idx++] to get the
// current root node and then increment 'idx' to move to the next root for recursive left and right subtree calls.

// Base Case:
// In the 'construct' function, if 'start > end', it means there is no subtree to construct, so I return null.

// Otherwise:
// - The root value is taken from the preorder array using preorder[idx++].
// - This root value is stored in 'rootVal'.
// - A new TreeNode is created using this root value.

// Then:
// - I use the HashMap to find the position of the current root node.
// - This position helps divide the tree into left and right subtree segments.

// Recursively construct the subtrees:
// - For the left subtree, call 'construct' for the range 'start' to 'splitIndex - 1'.
// - For the right subtree, call 'construct' for the range 'splitIndex + 1' to 'end'.

// Finally:
// - Attach the returned left subtree to root.left
// - Attach the returned right subtree to root.right

// In this way, the full binary tree is constructed recursively.

// Time Complexity:- O(N)
// Explanation:
// O(N) to store all elements of the inorder array with their indices in the HashMap.
// O(N) because each node from preorder is processed exactly once to construct the tree.
// So overall:
// O(N) + O(N) = O(2N) = O(N)

// Space Complexity (SC):
// O(H), where 'H' is the height of the constructed tree due to recursion stack.
// If the constructed tree is balanced, then H = O(log N).
// If the constructed tree is unbalanced (left-skewed or right-skewed), then H = O(N).

// Additional Space:
// O(N) for the HashMap storing inorder value → index.

// Overall Space Complexity:
// O(N) + O(H) = O(N).

var buildTree = function(preorder, inorder) {
    let idx = 0;
    let map = new Map();
    for(let i = 0; i < inorder.length; i++){
        map.set(inorder[i], i);
    }

    return  construct(inorder, preorder, 0, inorder.length - 1);
    function construct(inorder, preorder, start, end){
        if(start > end) return null;
        
        let rootVal = preorder[idx++];
        let root = new TreeNode(rootVal);

        let splitIndex = map.get(rootVal);

        root.left = construct(inorder, preorder, start, splitIndex-1);
        root.right = construct(inorder, preorder, splitIndex+1, end);
        
        return root;
    }
};