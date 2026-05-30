// GeeksForGeeks Problem:- 
// You are given the root of a binary tree, and your task is to return its top view. 
// The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

// Approach:
// I will use BFS traversal to traverse the tree level by level along with each node’s horizontal distance by 
// imagining vertical lines across the tree.
// The first node encountered in every vertical line of the tree will be the top view node of that tree.
// I will store the first node encountered at each vertical line in a hash map to get the top view of the tree.

// That means I will not only perform level-by-level traversal, but I will also store the horizontal distance of 
// each node to compute the top view of the tree.

// What is Horizontal Distance?
// Horizontal Distance means assigning a position to each node.
// It looks like below:
// - Horizontal Distance of root node is always 0.
// - Horizontal Distance of left child = Horizontal Distance of root - 1 = -1.
// - Horizontal Distance of right child = Horizontal Distance of root + 1 = 1.

// Why Horizontal Distance is useful for Top View?
// I use horizontal distance because it helps represent each vertical line of the tree uniquely.

// By assigning:
// - Root = 0
// - Left child = HD - 1
// - Right child = HD + 1

// I can easily group nodes that lie on the same vertical line and identify the first node in each vertical
// line for the top view.
// Top View means:
// “What do we see if we look at the tree from above?”

// Now imagine:
// Nodes are stacked vertically (different levels),
// but we only see one node per vertical column (HD).

// So horizontal distance helps us group nodes like this:
// HD:   -2   -1    0    1    2
//       [ ]  [ ]  [ ]  [ ]  [ ]

// Each column corresponds to one vertical line in the top view.

// Solution:
// Call the levelOrderTraversal function and return its result to get the top view of the tree.

// Inside levelOrderTraversal function:
// - Take a result array to store the top view of the tree.
// - Take a hash map to store only the first topmost node for each vertical line across the tree.
//   And in hash map, store 'hd' as key and current top view node as value.  
// - Take a queue to perform level-by-level traversal.
// - Initially, store the root node along with its horizontal distance (0) in the queue.

// - Run a while loop to traverse through each level:
//   - For each node, extract the node and its horizontal distance.
//   - If the horizontal distance does not exist in the map, store the hd along with current visited node data.
//   - Add left and right children to the queue with updated horizontal distances.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - Traverse the sorted entries and add their values to the result array.

// Time Complexity:- O(N + K log K), Explanation:-
// O(N) is used to traverse each node of the tree exactly once.
// O(K log K) is used for sorting the map entries based on horizontal distance.
// In the worst case, K = N if the tree is unbalanced (left-skewed or right-skewed),
// where each node has a unique horizontal distance.
// So, in the worst case, the time complexity becomes O(N log N).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case, when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.

// O(N) is used by the result array to store the top view nodes of the tree.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// each node has a unique horizontal distance, so all nodes will appear in the top view.

// O(N) is used by the hash map to store top view nodes.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// each node has a unique horizontal distance, so all nodes will be stored in the hash map.

// So, overall SC:- O(N) + O(N) + O(N) = O(3N) = O(N).

// Why we sort in Top View?
// Because BFS traversal processes nodes like:- level 0 → level 1 → level 2.
// But the final output of the top view should be: HD -2 → -1 → 0 → 1 → 2, that is, nodes from smallest HD to
// largest HD.
// That's why we sort the map entries to arrange nodes from smallest Horizontal Distance to largest Horizontal
// Distance.

class Solution {
    topView(root) {
        return levelOrderTraversal(root);
        function levelOrderTraversal(root){
            let result = []
            if (!root) return [];
            let queue = [[root, 0]], map = new Map();
            while(queue.length > 0){
                let [node, hd] = queue.shift();
                
                if(!map.has(hd)){
                    map.set(hd, node.data);
                }
                    
                if(node.left !== null){
                    queue.push([node.left, hd - 1]);
                }
                    
                if(node.right !== null){
                    queue.push([node.right, hd + 1]);
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