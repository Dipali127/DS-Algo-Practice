// Leetcode Problem:- 129
//
// Optimal Approach:
// Approach:-
// use a helper function 'findSum' to recursively traverse the tree, build the number represented by each root-to-leaf path, and add it to the total 'sum'.
//
// Steps:-
//        - initialize a variable 'sum' to store the total sum of all root-to-leaf numbers.
//        - call the helper function 'findSum' with the root node and an empty string "".
//        - in 'findSum', append the current node's value to the string 'str'.
//        - check if the current node (root) is a leaf node (both its left and right children are null).
//        - if it is a leaf node, convert the string 'str' into a number using 'parseInt()' and add it to 'sum'.
//        - return from the current recursive call after adding the root-to-leaf number.
//        - if the left child exists, recursively call 'findSum' on the left child and pass the current 'str'.
//        - if the right child exists, recursively call 'findSum' on the right child and pass the current 'str'.
//        - finally, return the total 'sum'.
//
// TC:- O(N), as each node of the tree is traversed once where 'N' is the number of the nodes in the tree.
//
// SC:- O(H), the space used by the recursive function call stack is equal to the depth of the tree (H).
// In addition, strings are created while building the root-to-leaf numbers, but since the maximum depth is 10 according to the constraints, this does not change the practical complexity here.

// Note:-
//        - strings are immutable in JavaScript, which means once a string is created, its value cannot be changed.
//        - each recursive function call has its own lexical environment and its own local 'str' variable.
//        - when 'str' is passed to a new recursive call, the string value is passed by value.
//        - adding a character/value to 'str' in the new recursive call creates a new string and assigns it to that call's local 'str'.
//        - therefore, changing 'str' in the child recursive call does not affect the 'str' of the parent recursive call.
//        - because of this, we do not need to backtrack the string using slice(), pop(), etc.

// Parent call: str = "1"

//         ↓ pass "1"

// Child call: str = "1"
//              str += 2
//              str = "12"

// Parent call still has: str = "1"

var sumNumbers = function(root) {
    let sum = 0;

    findSum(root, "");

    return sum;

    function findSum(root, str) {
        str += root.val;

        if (root.left === null && root.right === null) {
            sum += parseInt(str);
            return;
        }

        if (root.left !== null) {
            findSum(root.left, str);
        }

        if (root.right !== null) {
            findSum(root.right, str);
        }
    }
};



