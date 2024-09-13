// Leetcode Problem:- 103
// Optimal approach:
// approach:-
// the function performs a breadth-first search (BFS) to visit the nodes level-wise. 
// for each level, store the node values in the `currentLevel` array. 
// use of 'level' variable to keep track of whether the current level is odd or even. 
// if the `level` is even, push the values in `currentLevel` to the result array directly, maintaining a left-to-right order for even levels. 
// if the `level` is odd,  first reverse the `currentLevel` array to ensure a right-to-left order for odd levels,then store it in the result array. 
// after visiting each level, increment the `level` variable to move to the next level.
// TC:- O(N), where N is the number of nodes in the tree, as we traverse each node exactly once.
// SC:- O(N), to store nodes of the current level in `currentLevel` array and the entire tree's nodes in the `result` array.
// The queue also takes up O(N) space, as it may store nodes from the widest level of the tree.

var zigzagLevelOrder = function (root) {
    if(root === null){
        return [];
    }

    let result = [],level=0;
    let queue = [root];
    while(queue.length!=0){
        let n = queue.length;
        let currentlevel = [];
        while(n--){
            let currentNode = queue.shift();
            currentlevel.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }

        if(level%2!=0){
            currentlevel.reverse();
        }
        result.push(currentlevel);
        level++;
    }

    return result;
}