// GeeksForGeeks Problem:-
// Given the root of a Binary Tree, find the vertical traversal of the tree starting from the leftmost level to the rightmost level.
// Note: If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

// Approach:
// I will use BFS traversal and traverse the nodes level by level along with their horizontal distance.
// I will store all nodes corresponding to each horizontal distance in a hash map to get the vertical view of the tree.

// That means I will not only do level-by-level traversal, but I will also store the horizontal distance of each node
// to compute the vertical view of the tree.

// Inside verticalOrder function:
// - Take a result array to store the vertical view of the tree.
// - Take a hash map where the key is horizontal distance and the value is the group of nodes corresponding to that
//   horizontal distance.
// - Take a queue to perform level-by-level traversal.
// - Initially, store the root node along with its horizontal distance (0) in the queue.

// - Run a while loop:
//   - For each node, extract the node and its horizontal distance.
//   - Store the node data in the map for that horizontal distance.
//   - Add left and right children to the queue with updated horizontal distances.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - Traverse the sorted entries and add their values to the result array.

// Time Complexity:- O(N log N)
// Explanation:
// - BFS traversal takes O(N)
// - Sorting map entries by horizontal distance takes O(N log N)

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes.
// O(N) is used by the result array.
// O(N) is used by the hash map.
// So, overall SC:- O(N)

// What is Horizontal Distance?
// Horizontal Distance means assigning a position to each node.
// It looks like below:
// - Horizontal Distance of root node is always 0.
// - Horizontal Distance of left child = Horizontal Distance of root - 1 = -1.
// - Horizontal Distance of right child = Horizontal Distance of root + 1 = 1.

// Horizontal distance assigns a column index to each node in a tree, which helps group nodes vertically from left to 
// right. Nodes with the same horizontal distance belong to the same vertical column.

class Solution {
    verticalOrder(root) {
        let result = [];
        if(root === null) return result;
        let queue = [[root, 0]];
        let map = new Map();
        while(queue.length > 0){
            let[node, hd] = queue.shift();
            
            if(!map.has(hd)){
                map.set(hd, [node.data])
            }else{
                map.get(hd).push(node.data);
            }
            
            if(node.left !== null){
                queue.push([node.left, hd-1]);
            }
            
            if(node.right !== null){
                queue.push([node.right, hd+1]);
            }
        }
        
        let sortedArray = [...map.entries()].sort((a, b) => a[0] - b[0]);
        for(let val of sortedArray){
            result.push(val[1]);
        }
        
        return result;
    }
}
