// Leetcode Problem:- 1721
// Brute force approach:
// Approach:-
// initialize an array to store the values of the linked list, making it easy to swap nodes' values.
// traverse the linked list and add the values to the array.
// swap the kth node from the start with the kth node from the end in the array.
// create a new linked list using the modified array values.
// finally, return the new linked list, skipping the dummy node.
// TC:- O(N), Explanation:-
//   - O(N) to traverse the linked list and store values in the array.
//   - O(N) to iterate over the array and create a new linked list.
// Overall, TC:- O(N) + O(N) = O(N).
// SC:- O(N), since an array is used to store the node values

var swapNodes = function (head, k) {
    let array = new Array();
    let current = head;
    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }
    // swapping of the kth node's value from array;
    let tempo = array[k - 1];
    array[k - 1] = array[array.length - k];
    array[array.length - k] = tempo;

    let newNode = new ListNode(0);
    let temp = newNode;
    for (let i = 0; i < array.length; i++) {
        temp.next = new ListNode(array[i]);
        temp = temp.next;
    }

    return newNode.next;
};

// Optimal Approach1:
// Approach:-
// calculate the length of the linked list. This will help in finding the kth node from both the start and the end of the list.
// traverse the list to find the kth node from the start and store the address of this node in 'node1'.
// traverse the list again to find the kth node from the end and store the address of this node in 'node2'.
// swap the values of 'node1' and 'node2'.
// return the head of the linked list after swapping the values of the nodes. 
// TC:- O(N), Explanation:-
//    - O(N) to find the length of the linked list.
//    - O(K) to find the kth node from the start.
//    - O(K) to find the kth node from the end.
// Overall TC:- O(N) because K is always less than N.
// SC:- O(1) since no additional data structures are used, only a few pointers.

var swapNodes = function (head, k) {
    let temp = head, length = 0;

    while (temp !== null) {
        length++;
        temp = temp.next;  
    }
    let i = 1, node1 = null, node2 = null;
    let current = head;

    while (current !== null) {
        if (i === k) {
            node1 = current;  
        }
        i++;
        current = current.next;
    }

    let j = 1;
    current = head;  
    while (current !== null) {
        if (j === length - k + 1) {
            node2 = current;  
        }
        j++;
        current = current.next;
    }

    let tempVal = node1.val;
    node1.val = node2.val;
    node2.val = tempVal;

    return head;
};

// Optimal Approach: Using Single Traversal
// Approach:-
// initialize the pointer 'temp', which will traverse through the linked list, and two pointers 'p1' and 'p2'.
// 'p1' will point to the k-th node from the start, and 'p2' will point to the k-th node from the end after traversal is complete.
// iterate through the linked list using a 'while' loop.
// during the first k iterations, the algorithm finds the k-th node from the start (p1).
// once 'p1' is assigned, 'p2' is initialized to 'head' to begin locating the k-th node from the end.
// as the loop continues, 'p2' moves forward with 'temp' until 'temp' reaches the end of the list.
// at this point, 'p1' points to the k-th node from the start, and 'p2' points to the k-th node from the end.
// finally, the values of 'p1' and 'p2' are swapped.
// TC:- O(N), where 'N' is the number of nodes in the list, since each node is traversed once.
// SC:- O(1), as no additional space is used other than a few pointers.

var swapNodes = function (head, k) {
    let temp = head, p1 = null, p2 = null;
    while(temp){
        if(p2 !== null){
            p2 = p2.next;
        }

        k--;
        if(k === 0){
            p1 = temp;
            p2 = head;
        }

        temp = temp.next;
    }

    let swap = p1.val;
    p1.val = p2.val;
    p2.val = swap;
    return head;
}