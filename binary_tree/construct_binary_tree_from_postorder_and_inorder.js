// Leetcode Problem:- 106
// Brute Force Approach:
// Approach:
// I will use DFS traversal to construct the tree recursively.
// I will recursively build the left and right subtrees based on the current root node taken from the postorder array.
// To get the root node, I will use the postorder array.
// To divide the tree into left and right subtrees based on the current root node, I will use the inorder array.

// Solution:
// I will use the 'idx' variable in the main function 'buildTree' to keep track of the current root in the postorder array.
// Since the postorder array gives the root node at the end for each subtree, I will use postorder[idx--] to get the
// current root node and then decrement 'idx' to move backward for recursive subtree construction.

// Base Case:
// In the 'construct' function, if 'start > end', it means there is no subtree to construct, so I return null.

// Otherwise:
// - The root value is taken from the postorder array using postorder[idx--].
// - This root value is stored in 'rootVal'.
// - A new TreeNode is created using this root value.

// Then, I use the inorder array to find the position of the current root node, which helps divide the tree into left 
// and right subtree segments.

// Finding the root's position in the inorder array:
// - Traverse the inorder array from 'end' to 'start' to find index 'i' where inorder[i] === rootVal.
// - This splits the inorder array into:
//   - Left subtree → from 'start' to 'i - 1'
//   - Right subtree → from 'i + 1' to 'end'

// Recursively construct the subtrees:
// - First, construct the right subtree for the range 'i + 1' to 'end'.
// - Then, construct the left subtree for the range 'start' to 'i - 1'.

// Finally:
// - Attach the returned right subtree to current root.right
// - Attach the returned left subtree to current root.left

// In this way, the full binary tree is constructed recursively.

// Time Complexity in Worst Case (when the constructed tree is skewed left or right): O(N²)
// Explanation:
// For each node from the postorder array, we may linearly scan the inorder array
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

// Best / Average Case: O(N log N)
// This happens when the constructed tree is perfectly balanced and the root is
// always near the middle of the inorder sequence.
// This reduces the search length by half at each recursive step, leading to O(N log N).

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
// Total Space (including output tree): O(N) (output tree itself).
// So, overall Space Complexity = O(N).

// NOTE:
// 'start' and 'end' are dynamic boundaries that represent the inorder segment of the current subtree,
// and they keep shrinking recursively based on the root position.

// Why traverse the postorder array from right to left?

// Because in postorder traversal, the order is: Left → Right → Root
// So, the root node is always found at the end of the postorder array.

// If we traverse the postorder array in reverse (from right to left), the order becomes:
// Root → Right → Left

// That means:
// - First, we get the root node.
// - Then, the next node belongs to the right subtree.
// - After constructing the right subtree, we construct the left subtree.

// Therefore:
// Since we are reading postorder from the end, we must build:
// 1. Root
// 2. Right subtree first
// 3. Left subtree second

// If we build the left subtree first, the index will move incorrectly,
// and nodes will be assigned to the wrong subtree.

var buildTree = function (inorder, postorder) {
    let idx = postorder.length - 1;
    return construct(0, inorder.length - 1);

    function construct(start, end) {
        if (start > end) return null;

        let rootVal = postorder[idx--];
        let root = new TreeNode(rootVal);

        let i = end;
        while (i >= start) {
            if (inorder[i] === rootVal) {
                break;
            }
            i--;
        }

        root.right = construct(i + 1, end);
        root.left = construct(start, i - 1);

        return root;
    }
};


// Optimal Approach:
// Approach:
// I will use DFS traversal to recursively construct the tree and a HashMap to store elements of the inorder array
// along with their indices.
// I will recursively build the left and right subtrees based on the current root node taken from the postorder array.
// To get the root node, I will use the postorder array.
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
// I will use the 'idx' variable in the main function 'buildTree' to keep track of the current root in the postorder array.
// Since the postorder array always gives the root node at the end for each subtree, I will use postorder[idx--] to get
// the current root node and then decrement 'idx' to move backward for recursive right and left subtree calls.

// Base Case:
// In the 'construct' function, if 'start > end', it means there is no subtree to construct, so I return null.

// Otherwise:
// - The root value is taken from the postorder array using postorder[idx--].
// - This root value is stored in 'rootVal'.
// - A new TreeNode is created using this root value.

// Then:
// - I use the HashMap to find the position of the current root node.
// - This position helps divide the tree into left and right subtree segments.

// Recursively construct the subtrees:
// - First, for the right subtree, call 'construct' for the range 'splitIndex + 1' to 'end'.
// - Then, for the left subtree, call 'construct' for the range 'start' to 'splitIndex - 1'.

// Why right subtree first?
// Because postorder traversal is Left → Right → Root.
// Since we are traversing postorder backward, the order becomes Root → Right → Left.
// So after selecting the root, the next node belongs to the right subtree first.

// Finally:
// - Attach the returned right subtree to root.right
// - Attach the returned left subtree to root.left

// In this way, the full binary tree is constructed recursively.

// Time Complexity:- O(N)
// Explanation:
// O(N) to store all elements of the inorder array with their indices in the HashMap.
// O(N) because each node from postorder is processed exactly once to construct the tree.
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

var buildTree = function (inorder, postorder) {
    let idx = postorder.length - 1, map = new Map();
    for(let i = 0; i < inorder.length; i++){
        map.set(inorder[i], i);
    }
    
    return construct(0, inorder.length - 1);
    function construct(start, end) {
        if (start > end) return null;

        let rootVal = postorder[idx--];
        let root = new TreeNode(rootVal);

       let splitIndex = map.get(rootVal);

        root.right = construct(splitIndex + 1, end);
        root.left = construct(start, splitIndex - 1);

        return root;
    }
};