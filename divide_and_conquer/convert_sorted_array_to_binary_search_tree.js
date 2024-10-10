// Leetcode Problem:- 108
// Optimal Approach:- Using divide and conquer
// call a function 'buildBST' and pass the parameters nums, low and high to build a binary search tree.
// Inside 'buildBST' function:
// Base case:-
// if the current low index exceeds the high index, return null (indicating no subtree).
// calculate the middle index to ensure the tree remains balanced.
// create a new TreeNode with the middle element as the root.
// recursively build the left subtree with the left half of the array.
// recursively build the right subtree with the right half of the array.
// return the constructed subtree rooted at 'root'
//  TC:- O(N), as each element of the array is processed exactly once while constructing the tree.
// The recursive calls split the array into halves, but they do not contribute additional time complexity 
// because each call only performs constant work to find the middle index and create nodes.
// Therefore, the overall time complexity remains O(N).
// SC: O(N), space used for the tree structure, with O(log N) for the recursion stack (worst case O(N) if the tree is skewed).
// Note:- 
// By choosing the middle element as the root, the algorithm ensures that the tree remains balanced. 
// A balanced tree has approximately the same number of nodes on both sides, which optimizes operations like search, insert, and delete.
// If you were to use the first or last element instead, you would end up with a skewed tree (like a linked list), 
// which would degrade performance for operations on the tree.

var sortedArrayToBST = function(nums) {
    let low = 0;
    let high = nums.length-1;
    return buildBST(nums, low, high);
};

function buildBST(nums, low, high){
    if (low > high) {
        return null;
    }
    let mid = Math.floor(low + (high - low)/2);
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, low, mid-1);
    root.right = buildBST(nums, mid+1, high);
    return root;
}