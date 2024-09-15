// GeeksForGeeks Problem:-
class Solution {
    boundary(root) {
      let result = [];
      if (root === null) {
        return result;
      }
      
      result.push(root.data); // Add root data
  
      // Traverse the left boundary, excluding leaves
      this.traverseLeft(root.left, result);
  
      // Traverse leaf nodes from both subtrees
      this.traverseLeaf(root.left, result);
      this.traverseLeaf(root.right, result);
  
      // Traverse the right boundary, excluding leaves
      this.traverseRight(root.right, result);
  
      return result;
    }
  
    // Function to print all left boundary nodes
    traverseLeft(root, result) {
      if (root === null || (root.left === null && root.right === null)) {
        return;
      }
  
      result.push(root.data);
      if (root.left) {
        this.traverseLeft(root.left, result);
      } else {
        this.traverseLeft(root.right, result);
      }
    }
  
    // Function to print all leaf nodes
    traverseLeaf(root, result) {
      if (root === null) {
        return;
      }
  
      if (root.left === null && root.right === null) {
        result.push(root.data);
        return;
      }
  
      this.traverseLeaf(root.left, result);
      this.traverseLeaf(root.right, result);
    }
  
    // Function to print all right boundary nodes
    traverseRight(root, result) {
      if (root === null || (root.left === null && root.right === null)) {
        return;
      }
  
      // Recur for the right subtree or left if right is absent
      if (root.right) {
        this.traverseRight(root.right, result);
      } else {
        this.traverseRight(root.left, result);
      }
  
      // Add after recursion to ensure reverse order
      result.push(root.data);
    }
  }
  