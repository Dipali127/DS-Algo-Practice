// Leetcode Problem:- 143
// Brute force approach:
// Approach:
// First, i will add all the nodes(not the value) of the given linked list into an array. Then, traverse
// the array using two pointers, `start` and `end`, to add the nodes pointed by `start` and `end` 
// alternately to a new list using a `temp` pointer to reorder the list.
// Once the linked list is reordered, I will set temp.next to null to terminate the list and avoid cycles
// in the linked list because, in the case of an odd-length linked list, the start and end pointers might
// point to the same node, and form a cycle. 
// Finally, I will return the reordered list starting from dummyNode.next.
// TC: O(N), Explanation:
// O(N): to add the nodes of the linked list into the array.
// O(N): to iterate through the array using the `start` and `end` pointers.
// Overall, TC:- O(N).
// SC: O(N), the space used by the array to store all the nodes of the linked list.


var reorderList = function(head){
    let arr = [];
    let current = head;
    while(current !== null){
        arr.push(current);
        current = current.next;
    }

    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    let start = 0, end = arr.length-1;
    while(start <= end){
        temp.next = arr[start];
        temp = temp.next;
        temp.next = arr[end];
        temp = temp.next;
        start++;
        end--;
    }
    
    temp.next = null;
    return dummyNode.next;
 }
 
// Optimal Approach:- use of floyd's cycle finding algortihm also known as the tortoise and hares 
// algorithm using slow and fast pointer.
// Approach:-

// "To reorder the linked list according to the problem statement, I divide the list into two halves.
// I use the slow and fast pointer approach to find the middle node of the linked list. 
// Slow moves one step at a time, while fast moves two steps at a time. When fast reaches the end, 
// slow will be at the middle.
// After finding the middle, I reverse the second half of the linked list starting from slow.next, and
// then disconnect the first half by setting slow.next = null.

// The reason for reversing the second half is that the required order is:
// L0 → Ln → L1 → Ln-1 → L2 → Ln-2

// So after taking the first node from the first half, we need the last node of the list next. 
// Reversing the second half gives us direct access to nodes from the end in the required order.

// Finally, I merge both halves alternately:
// first node from first half, first node from reversed second half, and so on.

 // TC:- O(N), Explanation:-
 // O(N):- to find the middle of the linked list.
 // O(N):- to reverse the second half of the linked list.
 // O(N):- to merge both the halves of the linked list into one.
 // Overall, TC:- O(N)
 // SC:- O(1), since no additional space is used.
// Note:- When finding the middle of a linked list, I'm iterating through half of the nodes, 
// which would be O(n/2) in terms of steps. However, in Big O notation, constants are ignored, so it's 
// simplified to O(n).

var reorderList = function(head) {
    if(head === null || head.next === null){
        return;
    }
    
    let slow = head;
    let fast = head;
    //find middle of linked list
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let curr = slow.next
    slow.next= null;

    //reverse second half of linked list 
    let prev = null
    while(curr!=null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    //now merge both half of linked list
    let h1 = head;
    let h2 = prev;

    while(h2!=null){
        let temp = h1.next;
        h1.next = h2;
        h1=h1.next;
        h2=temp;                                                                                      
    }

};