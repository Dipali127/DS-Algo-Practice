// GeeksforGeeks Problem:
// Problem:
// We need to print the left view of a binary tree.
// Suppose, a person stands on the left side of the tree. The task is to print all the node values that the person
// can see from the left side.

// Optimal Approach: Using BFS (Breadth-First Search)
// Approach:
// - Take a queue to traverse the tree level by level and get the left side view of the tree.
// - First, push the root node into the queue to traverse tree from root level.
// - Then, run a while loop until the queue is not empty.
// - For each iteration, I will get the size of the queue (let n = queue.length),
//   which represents the number of nodes at the current level.
// - Then, I will use a loop with a pointer 'i' starting from 0 to n - 1 to iterate through all nodes at the current level.

// - For each iteration:
//     - Remove a node from the queue.
//     - If i === 0, it means this is the leftmost node of the current level,
//       so I will add it to the result array.
//     - Then, push its left child (if it exists) into the queue.
//     - Then, push its right child (if it exists) into the queue.
// - Repeat this process for all levels.

// Note:- Even though we only pick the first node at each level, we still process all nodes at that level to ensure the
// next level is traversed correctly.

// Time Complexity (TC): O(N), where N is the number of nodes in the tree, as each node is visited exactly once.
// Space Complexity (SC): O(N), because in the worst case, the queue can store up to O(N) nodes (for a very wide tree).
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
                
                i++;
            }
        }
        
        return result;
        
    }
}


// Second Approach: Using DFS (Depth-First Search).
// Approach:
// I will use DFS traversal. I will recursively traverse the tree level by level and at each level, I will first explore 
// the lef subtree and then right subtree to achieve left side view of tree.

// Inside rightSideView function:
// - Take a result array to store the left side view of the tree.
// - Create a dfs function by passing the root of the tree and depth,
//  where depth is used to keep track of the current level of the tree.

// Inside dfs:
// For each node:
// - If the current depth is equal to the length of the result array,
//   it means this is the first node we are visiting at this level.
//   Since we traverse the left subtree first, this node is the leftmost node.
// - Then, recursively traverse the left subtree first (to capture leftmost nodes), and then the right subtree.
// After processing all nodes, return the result.

// Time Complexity (TC): O(N), where N is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC): O(H), where H is the height of the tree.
// In the worst case (completely unbalanced tree), SC = O(N),
// as the recursion stack depth is proportional to the number of nodes.
// In a balanced tree, SC = O(log N),
// as the recursion stack depth is proportional to the height of the tree.

class Solution {
    leftView(root) {
        let result = [];
        if(root === null){
            return result;
        }
        dfs(root, 0);
        function dfs(root, depth){
            if(root === null) return;
            if(depth === result.length){
                result.push(root.data);
            }
            
            dfs(root.left, depth+1);
            dfs(root.right, depth+1);
        }
        
        return result;
        
    }
}