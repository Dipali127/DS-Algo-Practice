// Leetcode Problem:- 993
// To check if x and y are cousins, you need to:-
// ensure they are at the same depth.
// ensure they have different parents.

// Optimal Approach:- Using BFS(breadth first search).
// appraoch:-
// initialize the queue with an object containing three properties:
// node:- the current node being processed (starting with the root node).
// depth:- the current depth of that node in the tree (starting with 0).
// parent:- the parent of the current node (initially null for the root).
// using while loop,continuously process nodes of a tree by removing the first node from the queue and extract its node, depth, and parent.
// for each node, check if its value matches the value you're searching for (either x or y). 
// If a match is found, return an object containing:
//                             - depth: the current depth of the node
//                             - parent: the parent of the node.
// If the current node isn't equal to the target, push its children (left and right, if they exist) onto the queue and  increment 
// the depth by 1 and parent to the current node each time.

// TC:- O(N), since we traverse all nodes in the tree, each node is processed exactly once.
// SC:- O(N), in the worst case, the queue stores the nodes at the widest level of the tree, which could be up to half the total number of nodes.

var isCousins = function (root, x, y) {
    let X = findDepth(root, 0, null, x);
    let Y = findDepth(root, 0, null, y);

    if (X.depth === Y.depth && X.parent !== Y.parent) {
        return true;
    }

    return false;
    // Function to find the depth 
    function findDepth(root, depth, parent, value) {
        if (root === null) {
            return null;
        }

        let queue = [{node: root, depth: depth, parent:parent}];
        while (queue.length !== 0) {
            let {node, depth, parent} = queue.shift();

            if(node.val === value){
                return {depth,parent};
            }

            if(node.left !== null){
                queue.push({node: node.left, depth: depth+1, parent: node});
            }

            if(node.right !== null){
                queue.push({node: node.right, depth: depth+1, parent: node})
            }
    }
    }
}