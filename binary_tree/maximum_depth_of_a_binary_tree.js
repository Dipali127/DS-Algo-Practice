// Leetcode Problem:- 104
// Auxiliary Space:- The space required by an algorithm beyond the input data. This includes:
// Space used for variables, data structures like arrays, queues, hash maps, etc., that are essential for the algorithm
// but are not part of the input.
// Recursive Stack Space: For recursive algorithms, the space taken up by the call stack is considered auxiliary space. 
// This includes function parameters, return values, and local variables for each recursive call.
// Conclusion:- Any extra space used, either for additional data structures like arrays, stacks, queues, or 
// for recursive function calls, is considered auxiliary space.

// Optimal approach:
// approach:-
// first, check if the root is null. If it is, return 0 because the height of an empty tree is 0, 
// and the height of a tree with only a root node is 1.
// recursively calculate the height of the left and right subtrees by calling the maxDepth function
// on the left and right children.
// after calculating the heights of the left and right subtrees, take the maximum of both and add 1 to account for the
// current root node.
// finally, return this value as the result, which gives the height of the tree.
// Time Complexity (TC):- O(N), where 'N' is the number of nodes in the tree, as each node is visited once.
// Space Complexity (SC):- O(N), if the tree is completely unbalanced (like a linked list), 
// where the recursion goes as deep as the number of nodes.
// and O(log N) in a balanced tree, as the depth of the recursive stack will be proportional to the height of the tree, 
// which is log N for a balanced binary tree.
 
var maxDepth = function(root){
    if(root == null){
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth,rightDepth)+1;
 }