// GeeksForGeeks Problem:-
// Given the root of a Binary Tree, find the vertical traversal of the tree starting from the leftmost level to the 
// rightmost level.
// Note: If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level 
// order traversal of the tree.

// Approach:
// I'll use BFS traversal to traverse the tree level by level, and I'll use horizontal distance, which represents a column
// index or vertical line for each node of the tree. 
// Horizontal distance helps to group nodes that belong to the same column index or vertical line.
// To store those groups of nodes with the same horizontal distance, I'll use a HashMap.

// What is Horizontal Distance?
// Horizontal distance means assigning a position to each node.
// The root node always has a horizontal distance of 0. 
// The left child gets the horizontal distance of its parent node minus 1, and
// the right child gets the horizontal distance of its parent node plus 1.
// We follow the same rule for all other nodes in the tree.

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
//   - Add left and right children of the current visited node to the queue with updated horizontal distances.

// - After traversal:
//   - Sort the map entries based on horizontal distance.
//   - Traverse the sorted entries and add their values (lists) to the result array.


// Time Complexity:- O(N + K log K), Explanation:-
// O(N) is used to traverse each node of the tree exactly once.
// O(K log K) is used for sorting the map entries based on horizontal distance.
// In the worst case, if the tree is unbalanced (left-skewed or right-skewed),
// where each node has a unique horizontal distance then K = N.
// So, in the worst case, the time complexity becomes O(N log N).

// Note:-
// In a balanced tree, the Map groups multiple nodes that have the same horizontal distance, so the number of Map
// entries is smaller than N(number of nodes in the tree) that is k.
// In an unbalanced or skewed tree, each node can have a unique horizontal distance, so the Map can have N
// entries.

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
// Currently, the Map stores the horizontal distance along with the grouped nodes, level by level.
// But the problem requires the vertical order from the leftmost column to the rightmost column.
// So I'll sort the horizontal distances in ascending order. 
// Since I cannot directly perform sorting in a hash Map, I'll first add its entries into a new array, and then
// i will perform sorting based on horizontal distance. 
// This way, the columns will be arranged from the leftmost column to the rightmost column.

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
// map.entries() returns an iterator that gives you [key, value] pairs, allowing you to traverse the Map.
// [-2, [4]]
// [-1, [2]]
// [0, [1, 5]]
// [1, [3]]
// [2, [6]]

// If you do: [...map.entries()] :- spread operator unpack/extract all entries containing "key,vlaue" pair of map into
// individual entries and then add them into a new array.
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
        let front = 0;

        while(front < queue.length){
            let [node, hd] = queue[front];

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

            front++;
        }

        let sortedArray = [...map.entries()].sort((a, b) => a[0] - b[0]);

        for(let val of sortedArray){
            result.push(val[1]);
        }

        return result;
    }
}