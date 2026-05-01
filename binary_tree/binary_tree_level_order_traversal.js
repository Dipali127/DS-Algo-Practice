// Leetcode Problem:- 102
// Optimal approach: Use BFS (Breadth-First Search).

// This code is useful for solving many BFS-related problems where operations are performed on a tree level-wise.

// Approach:
// Traverse the binary tree level by level using a queue.
// For each level, store the nodes of that level in the `queue`.
// Iterate through the nodes in the `queue` and store their values in the `currentLevel` array to get correct level order
// traversal.
// After processing all nodes of the current level, add `currentLevel` array into the `result` array,
// which stores values from all levels of the tree.

// Time Complexity (TC): O(N) - where 'N' is the number of nodes in the binary tree, since each node is visited exactly
// once.
// Space Complexity (SC): O(N), Explanation:
// O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced, the queue stores the
// maximum number of nodes at the last level.
// O(N) used by result array to store all nodes of the tree in level order traversal.
// O(N) used by currentLevel to store nodes, and in the worst case when the tree is balanced, the currentLevel stores the
// maximum number of nodes at the last level.
// So, overall SC:- O(N) + O(N) + O(N) = O(3N) = O(N).

// Note:
// At the beginning, the `queue` contains a single element, which is the root node object. This object has:
// - `val`: The value of the root node.
// - `left`: Reference to the left child node (or null if there is no left child).
// - `right`: Reference to the right child node (or null if there is no right child).
// Example:-
// If the tree is:
//      3
//     / \
//    9  20
//       / \
//      15  7
// Initially, the queue contains only the reference of root node.
// This node has left and right pointers that connect to its children, so the entire tree is already linked.
// The queue does not store a copy of the tree, it only stores node references during traversal.

var levelOrder = function (root) {
    let result = [], queue = [root];
    if(root === null) return result;
    while(queue.length > 0) {
        let n = queue.length;
        let temp = []
        while (n > 0) {
            let currentNode = queue.shift();
            temp.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }

            n--;
        }

        result.push(temp);
    }

    return result;
};

