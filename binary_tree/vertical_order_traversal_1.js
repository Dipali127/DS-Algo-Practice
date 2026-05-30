// GeeksForGeeks Problem:-
// Given the root of a Binary Tree, find the vertical traversal of the tree starting from the leftmost level to the rightmost level.
// Note: If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

// Approach:
// I will use BFS traversal to traverse the tree level by level along with each node’s horizontal distance by 
// imagining vertical lines across the tree.
// I will use hash map to group all the nodes corresponding to each vertical line(horizontal distance) to get the 
// vertical view of the tree.

// That means I will not only perform level-by-level traversal, but I will also store the horizontal distance of 
// each node to compute the vertical view of the tree.

// In the case of vertical traversal, Horizontal distance assigns a column index to each node in a tree, which
// helps to group the nodes vertically from left to right.
// Nodes with the same horizontal distance belong to the same vertical column.

// What is Horizontal Distance?
// Horizontal Distance means assigning a position to each node.
// It looks like below:
// - Horizontal Distance of root node is always 0.
// - Horizontal Distance of left child = Horizontal Distance of root - 1 = -1.
// - Horizontal Distance of right child = Horizontal Distance of root + 1 = 1.

// Why Horizontal Distance is useful for Vertical View?
// I use horizontal distance because it helps represent each vertical line of the tree uniquely.

// By assigning:
// - Root = 0
// - Left child = HD - 1
// - Right child = HD + 1

// I can easily group nodes that lie on the same vertical line and collect all nodes in each vertical column.

// Vertical View means:
// “What nodes do we see when we look at the tree column by column from left to right?”
// Now imagine:
// Nodes are stacked vertically (different levels),
// and we want to collect all nodes in each vertical column.

// So horizontal distance helps us group nodes like this:
// HD:   -2   -1    0    1    2
//       [ ]  [ ]  [ ]  [ ]  [ ]


// Each column corresponds to one vertical line in the tree.


// Solution:
// Call the verticalOrder function and return its result to get the vertical view of the tree.

// Inside verticalOrder function:
// - Take a result array to store the vertical view of the tree.
// - Take a hash map where the key is horizontal distance and the value is list of nodes
//   corresponding to that horizontal distance.
// - Take a queue to perform level-by-level traversal.
// - Initially, store the root node along with its horizontal distance (0) in the queue.

// - Run a while loop to traverse through each level:
//   - For each node, extract the node and its horizontal distance.
//   - If the horizontal distance is not present in the map, create a new list.
//   - Otherwise, push the node value into the existing list (preserving level order).
//   - Add left and right children to the queue with updated horizontal distances.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - Traverse the sorted entries and add their values (lists) to the result array.


// Time Complexity:- O(N + K log K), Explanation:-
// O(N) is used to traverse each node of the tree exactly once.
// O(K log K) is used for sorting the map entries based on horizontal distance.
// In the worst case, if the tree is unbalanced (left-skewed or right-skewed),
// where each node has a unique horizontal distance then K = N.
// So, in the worst case, the time complexity becomes O(N log N).

// Space Complexity:- O(N), Explanation:-
// O(N) is used by the queue to store nodes, and in the worst case, when the tree is balanced,
// the queue stores the maximum number of nodes at the last level.

// O(N) is used by the result array to store the vertical view nodes of the tree.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// each node has a unique horizontal distance, so all nodes will appear in the vertical view.

// O(N) is used by the hash map to store vertical view nodes.
// In the worst case, if the tree is unbalanced (either left-skewed or right-skewed),
// where each node has a unique horizontal distance, all nodes will be stored in the hash map.

// So, overall SC:- O(N) + O(N) + O(N) = O(3N) = O(N).

// Why we sort in vertical View?
// Because BFS traversal processes nodes like:- level 0 → level 1 → level 2.
// But the final output of the vertical view should be: HD -2 → -1 → 0 → 1 → 2, that is, nodes from smallest HD to
// largest HD.
// That's why we sort the map entries to arrange nodes from smallest Horizontal Distance to largest Horizontal
// Distance.

// Let's see an example for vertical traversal of the tree:
//         1
//       /   \
//      2     3
//     / \     \
//    4   5     6

// Step 1: Assign Horizontal Distance (HD)
//          1(0)
//        /     \
//    2(-1)      3(+1)
//    /   \         \
// 4(-2)  5(0)      6(+2)

// Step 2: Final MAP (after BFS traversal)

// Map Representation:
// {
//   -2 → [4],
//   -1 → [2],
//    0 → [1, 5],
//   +1 → [3],
//   +2 → [6]
// }

// Step 3: map.entries() (Iterator form)
// It is an iterator that provides [key, value] pairs one by one. It is neither an array nor an object.
// [-2, [4]]
// [-1, [2]]
// [0, [1, 5]]
// [1, [3]]
// [2, [6]]

// If you do: [...map.entries()]
// Then it becomes:
// [
//   [-2, [4]],
//   [-1, [2]],
//   [0, [1, 5]],
//   [1, [3]],
//   [2, [6]]
// ]

// Step 4: Sorted Map (by HD)
// After sorting:
// sortedMap = [
//   [-2, [4]],
//   [-1, [2]],
//   [0, [1, 5]],
//   [1, [3]],
//   [2, [6]]
// ]

class Solution {
    verticalOrder(root) {
        let result = [];
        if(root === null) return result;

        let queue = [[root, 0]];
        let map = new Map();

        while(queue.length > 0){
            let [node, hd] = queue.shift();

            if(!map.has(hd)){
                map.set(hd, [node.data]);
            } else {
                map.get(hd).push(node.data);
            }

            if(node.left !== null){
                queue.push([node.left, hd - 1]);
            }

            if(node.right !== null){
                queue.push([node.right, hd + 1]);
            }
        }

        let sortedArray = [...map.entries()].sort((a, b) => a[0] - b[0]);

        for(let val of sortedArray){
            result.push(val[1]);
        }

        return result;
    }
}