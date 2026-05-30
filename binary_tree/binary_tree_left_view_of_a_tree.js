// GeeksforGeeks Problem:
// Problem:
// We need to print the left view of a binary tree.
// Suppose a person stands on the left side of the tree. The task is to print all the node values that the person
// can see from the left side.


// Optimal Approach: Using BFS (Breadth-First Search)
// Approach:
// I will use BFS traversal using a queue to print all the nodes that the person can see from the left side of the tree.
// - First, I will push the root node into the queue.
// - Then, I will run a while loop to traverse through all the levels of the tree.
// - For each level, I will get the size of the queue (let n = queue.length), which represents the number of
//   nodes at the current level.
// - For each level, I will use a pointer 'i' that will traverse through all the nodes of the current level.
// - Also, for each level, I will run another while loop that will traverse through all the nodes of the current level.

// - While traversing through the current level:
//     - Remove a node from the queue.
//     - Check if pointer 'i' is equal to 0. If yes, it means this is the leftmost node of the current level,
//       so I will add it to the result array.
//     - Then, push its left child (if it exists) into the queue.
//     - Then, push its right child (if it exists) into the queue.
// - Repeat this process for all levels.

// Time Complexity (TC): O(N), where N is the number of nodes in the tree, as each node is visited exactly once.
// Space Complexity (SC): O(N), because in the worst case, the queue can store up to O(N) nodes (for a very wide 
// tree).

// Note:
// - Even though we only pick the first node at each level, we still process all nodes at that level
//   to ensure the next level is traversed correctly.
// - Since the result array stores one node per level, in the worst case (skewed tree), it may store O(N) nodes.
// - In a balanced tree, the number of levels is O(log N), so the result array size is O(log N).

class Solution {
    leftView(root) {
        let result = [];

        if(root === null){
            return result;
        }

        let queue = [root];

        while(queue.length > 0){
            let n = queue.length;
            let i = 0;

            while(i < n){
                let node = queue.shift();

                if(i === 0){
                    result.push(node.data);
                }

                if(node.left){
                    queue.push(node.left);
                }

                if(node.right){
                    queue.push(node.right);
                }

                i++; // Increment i to move to the next node in the current level
            }
        }

        return result;
    }
}



// Second Approach: Using DFS (Depth-First Search).
// Approach:
// I will use DFS traversal. I will recursively traverse the tree, and for each node, I will first explore the left
// subtree and then the right subtree.

// Inside leftView function:
// - Take a result array to store the left side view of the tree.
// - Create a dfs function by passing the root of the tree and depth, where depth is used to keep track of the
//   current level of the tree.

// Inside dfs:
// For each node:
// - If the current depth is equal to the length of the result array, it means this is the first node we are 
//   visiting at this level.
//   Since we traverse the left subtree first, this node is the leftmost node.
// - Then, recursively traverse the left subtree first (to capture leftmost nodes), and then the right subtree.
// - After all recursive calls are completed, return the result.

// Time Complexity (TC in both worst and best cases): O(N), because every node of the tree is visited exactly once.
// Space Complexity (SC): O(H), where 'H' is the height of the tree and is used by the recursive call stack.
// - In the worst case (completely unbalanced tree), SC = O(N), as the depth of the recursion stack is proportional
//   to the number of nodes in the tree.
// - In a balanced tree, SC = O(log N), as the depth of the recursion stack is proportional to the height of the tree.

// Output Space/Auxiliary space:
// - The result array stores one node per level.
// - In a balanced tree, the number of levels is O(log N), so the result array size is O(log N).
// - In the worst case (skewed tree), the number of levels is O(N), so the result array size is O(N).

// Overall Space Complexity:
// - Worst-Case Space Complexity (skewed tree): O(N)
// - Balanced Tree Space Complexity: O(log N)

class Solution {
    leftView(root) {
        let result = [];

        if(root === null){
            return result;
        }

        dfs(root, 0);

        function dfs(root, depth){
            if(root === null){
                return;
            }

            if(depth === result.length){
                result.push(root.data);
            }

            dfs(root.left, depth + 1);
            dfs(root.right, depth + 1);
        }

        return result;
    }
}