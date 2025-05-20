// GeeksforGeeks Problem:-
// Optimal Approach:-
// approach:-
// Base Case:- If root is null, return 0. it means that the tree has no nodes and hence the depth is 0.
// if the left subtree (root.left) is null, recursively call the right subtree (root.right) and the 
// returned depth will be the depth of the right subtree plus 1 to account for the current node.
// similarly, if the right subtree (root.right) is null, recursively call the left subtree (root.left) 
// and the returned depth will be the depth of the left subtree plus 1.
// if both subtrees exist, recursively compute the depth of both the left and right subtrees, and return 
// the minimum of the two depths plus 1 to account for the current node.
// TC:- O(N), where 'N' is the number of nodes, since we traverse each node once.
// SC:- O(H), where H is the height (or depth) of the tree. In the worst case, for a skewed tree (unbalanced), 
// the space complexity is O(N), but for a balanced tree, it will be O(logN) due to the height being proportional to logN.

class Solution {
    minDepth(root){
        if(root === null){
            return 0;
        }
        
        if(root.left === null){
            return this.minDepth(root.right)+1;
        }
        if(root.right === null){
            return this.minDepth(root.left)+1;
        }
        
        let left = this.minDepth(root.left);
        let right = this.minDepth(root.right);
        return Math.min(left,right)+1;
    }
}

// Leetcode solution:-
// DFS Approach:- 
// approach:
// check if the given tree is empty, if it is return 0, since height of an empty tree is 0.
// otherwise, check if the left or the right subtree of the current visited node is null.
// if one of them is null, then we need to continue traversing the non-null part of the tree,
// because a path to a leaf must go through a non-null child.
// if both left and right children exist, recursively compute the minimum depth of both subtrees.
// return the minimum of the two depths plus 1 to account for the current node.
// this ensures we count only valid paths that end at a leaf node.

// TC: O(N), where N is the number of nodes, since in the worst case all nodes are visited.
// SC: O(H), where H is the height of the tree, due to the recursive call stack.
//      In the worst case (skewed tree), SC is O(N).
//      In the best/balanced case, SC is O(log N).
var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    
    if(root.left === null){
        return minDepth(root.right) + 1;
    }

    if(root.right === null){
        return minDepth(root.left) + 1;
    }

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);
    return Math.min(leftDepth, rightDepth) + 1;
};


// BFS APPROACH:- Optimal Approach, Since it find the minimum depth of a tree quickly.
// Check if the given tree is empty. If it is, return 0, since the height (or depth) of an empty tree is 0.
// Otherwise, initialize a queue and store the root node along with its depth (1) inside an object.
// Traverse the tree level by level (BFS). For each node, check if it's a leaf node (no left or right child).
// If it's a leaf node, immediately return the current depth, since we're looking for the minimum depth.
// If not, push the left and/or right child nodes into the queue with incremented depth, 
// because we're going one level deeper in the tree.
// 
// Time Complexity: O(N), since each node is visited at most once.
// Space Complexity: O(N), for the queue used in BFS traversal.

var minDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let queue = [{ node: root, depth: 1 }];

    while (queue.length) {
        let n = queue.length;
        while (n--) {
            let { node, depth } = queue.shift();

            if (node.left === null && node.right === null) {
                return depth;
            }

            if (node.left) {
                queue.push({ node: node.left, depth: depth + 1 });
            }

            if (node.right) {
                queue.push({ node: node.right, depth: depth + 1 });
            }
        }
    }
};
