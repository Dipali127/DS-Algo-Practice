// GeeksForGeeks Problem:-
// Optimal approach:
// approach:-
// start by checking if the root is null. If it is, return an empty result.
// Otherwise, push the root data to the result list since it is always part of the boundary.
// Step1:- Traverse the left boundary of 'tree' and while traversing it:-
// - exclude the leaf nodes while traversing the left boundary.
// - if the left child exists, recurse on the left subtree.
// - if the left child doesn't exist but the right child does, recurse(call itself) on the right subtree. This ensures that we move down the left boundary.
// Step2:- Traverse the leaf node ofa 'tree' and while traversing it:-  
// - traverse the leaf nodes of both the left and right subtrees by recursively visiting each subtree.
// - if a node has no left and right children, it is a leaf and is added to the result. 
// Step3:- Traverse the right boundary of 'tree' and while traversing it:- 
// - exclude leaf nodes while traversing the right boundary, but add nodes in reverse order (bottom-up).
// - if the right child exists, recurse on the right subtree.
// - if the right child doesn't exist but the left child does, recurse on the left subtree.
// - after recursion, push the node data to ensure it's added in reverse order.  
// TC:- O(N), Explanation:-
// O(h) where, 'h' is the height of the tree and it is the time complexity used by 'traverseLeft function' to traverse the left subtree.
// O(N) where, 'N' is the total number of nodes and it is the time complexity used by 'traverseLeaf function' to traverses all the nodes of the tree but only processes the leaf nodes.
// O(h) where, 'h' is the height of the tree and it is the time complexity used by 'traverseRight function' to traverse the right subtree.
// overall, TC:- O(N).
// SC:- O(N), Explanation:-
// O(N), as we store the boundary nodes in the result array, which in the worst case will have all n nodes of the tree.
// O(N), as each traversal function uses recursion, and the depth of recursion depends on the height of the tree, which in the worst case is O(h) for a skewed tree.
// overall, SC:- O(N).

class Solution {
  boundary(root) {
    let result = [];
    if (root === null) {
      return result;
    }

    result.push(root.data); 

    // function to traverse the left boundary
    function traverseLeft(root, result) {
      if (root === null || (root.left === null && root.right === null)) {
        return;
      }

      result.push(root.data);
      if (root.left !== null) {
        traverseLeft(root.left, result);
      } else {
        traverseLeft(root.right, result);
      }
    }

    // function to traverse all leaf nodes
    function traverseLeaf(root, result) {
      if (root === null) {
        return;
      }

      if (root.left === null && root.right === null) {
        result.push(root.data);
        return;
      }

      traverseLeaf(root.left, result);
      traverseLeaf(root.right, result);
    }

    // function to traverse the right boundary
    function traverseRight(root, result) {
      if (root === null || (root.left === null && root.right === null)) {
        return;
      }

      if (root.right !== null) {
        traverseRight(root.right, result);
      } else {
        traverseRight(root.left, result);
      }

      // Push after recursion to ensure reverse order
      result.push(root.data);
    }

    // Traverse the left boundary, excluding leaves
    traverseLeft(root.left, result);

    // Traverse all leaf nodes
    traverseLeaf(root.left, result);
    traverseLeaf(root.right, result);

    // Traverse the right boundary, excluding leaves (in reverse order)
    traverseRight(root.right, result);

    return result;
  }
}
