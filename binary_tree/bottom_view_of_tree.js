// GeeksForGeeks Problem:-
// You are given the root of a binary tree, and your task is to return its bottom view. 
// The bottom view of a binary tree is the set of nodes visible when the tree is viewed from the bottom.

// Approach:
// I will use BFS traversal and traverse the nodes level by level along with their horizontal distance. 
// I will store only the last node encountered at each horizontal distance in a hash map to get the bottom view of the tree.

// That means I will not only do level-by-level traversal, but I will also store the horizontal distance of each node
// to compute the bottom view of the tree.

// What is Horizontal Distance?
// Horizontal Distance means assigning a position to each node.
// It looks like below:
// - Horizontal Distance of root node is always 0.
// - Horizontal Distance of left child = Horizontal Distance of root - 1 = -1.
// - Horizontal Distance of right child = Horizontal Distance of root + 1 = 1.

// Why Horizontal Distance is useful for Bottom View?
// Bottom View means:
// “What do we see if we look at the tree from below?”

// Now imagine:
// Nodes are stacked vertically (different levels),
// but we only see one node per vertical column (HD).

// So HD helps us group nodes like this:
// HD:   -2   -1    0    1    2
//       [ ]  [ ]  [ ]  [ ]  [ ]

// Each column corresponds to one vertical line in the bottom view.

// How Bottom View is decided using Horizontal Distance?
// Because during BFS traversal, the last node encountered at each horizontal distance 
// is the bottommost visible node for that column.

// Solution:
// Call the levelOrderTraversal function and return its result to get the bottom view of the tree.

// Inside levelOrderTraversal function:
// - Take a result array to store the bottom view of the tree.
// - Take a hash map where the key is horizontal distance and the value is the node data.
// - Take a queue to perform level-by-level traversal.
// - Initially, store the root node along with its horizontal distance (0) in the queue.

// - Run a while loop:
//   - For each node, extract the node and its horizontal distance.
//   - Store/update the node data for each horizontal distance (overwrite previous value).
//   - Add left and right children to the queue with updated horizontal distances.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - Traverse the sorted entries and add their values to the result array.

// Time Complexity:- O(N), as each node of the tree is visited exactly once.
// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.
// O(N) is used by the result array to store the bottom view nodes of the tree.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// each node has a unique horizontal distance, so all nodes appear in the bottom view.
// O(N) is used by the hash map to store bottom view nodes.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// where each node has a unique horizontal distance, all nodes will be stored in the hash map.
// So, overall SC:- O(N) + O(N) + O(N) = O(3N) = O(N).

// Why we sort in Bottom View?
// In Bottom View, we use Horizontal Distance (HD):
// Root → HD = 0
// Left child → HD - 1
// Right child → HD + 1
// So nodes can have HD like: -2, -1, 0, 1, 2 ...
// But BFS traversal processes/traverses nodes like:- level 0 → level 1 → level 2.
// And final output of bottom view is looks like:-  HD -2 → -1 → 0 → 1 → 2 That is nodes from smallest HD → largest HD.
// That's why we sort the map entries to arrange nodes from smallest Horizontal Distance to largest Horizontal Distance.

class Solution {
    bottomView(root) {
        return levelOrderTraversal(root);
        function levelOrderTraversal(root){
            let result = [];
            if(root === null){
                return result;
            }
            
            let queue = [[root, 0]];
            let map = new Map();
            while(queue.length > 0){
                let currentNode = queue.shift();
                let node = currentNode[0];
                let hd = currentNode[1];
                
                map.set(hd, node.data);
                if(node.left !== null){
                    queue.push([node.left, hd-1]);
                }
                
                if(node.right !== null){
                    queue.push([node.right, hd+1]);
                }
                
            }
            
            let sortedMap = [...map.entries()].sort((a,b) => a[0] - b[0]);
            for(let val of sortedMap){
                result.push(val[1]);
            }
            
            return result;
        }
        
    }
}