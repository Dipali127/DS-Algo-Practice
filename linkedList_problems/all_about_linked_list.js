// What is Linked List?
// A Linked List is a linear data structure where elements are stored in nodes and each node is connected 
// using pointers/references/address. That means each node stores the address/reference of the next node.

// Unlike Arrays where elements  are stored in continuous memory locations, Linked lists store elements/nodes 
// anywhere in memory and Nodes are later connected using links.

// Structure of a Node:

// A node usually contains:-
// data/value.
// pointer/reference to another node.

// Example:
// [10 | next] -> [20 | next] -> [30 | null]

// Here:
// 10, 20, 30 are values.
// next stores address/reference of next node.
// null means end of list.

// Why Linked List?
// Main advantage:
// Linked List has easy insertion and deletion, Because you don't need to shift elements like arrays.

// Types of Linked List:-
// -> Singly Linked List
// -> Doubly Linked List

// (i) Singly Linked List:-
// Singly linked list is a linear data structure that contains a single next pointer in each node, where the next
// pointer points to the next node.

// (ii) Doubly Linked List:-
// Doubly linked list is a linear data structure that contains two pointers in each node: previous and next, where
// the previous pointer points to the previous node and the next pointer points to the next node.

// Base Case for all linked list problem based on problem statement:-
// Before accessing node.next, ensure node is not null.
// Before accessing node.next.next, ensure both node and node.next are not null.

//     
//                                        DELETION
// (1) delete node from head of linked list:-
// approach:- 
// Take a pointer temp which points to the head of the linked list (the node to be deleted).
// Move the head to head.next and set temp.next to null to delete the head node of the linked list.
// TC: O(N) Explanation:- 
// O(1) to delete first node of the linked list
// O(N) to print the list after deleting last node of the list.
// Overall, TC: O(1)+O(N) => O(N)
// SC: O(1), as only a few pointers are used.

class linkedList{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(3);
head.next.next.next = new linkedList(4);
head.next.next.next.next = new linkedList(5);


head = deleteHead(head)
 function deleteHead(head){
    if(head === null){
        return null;
    }

    let temp = head;
    head = head.next;
    temp.next = null;
    return head;
 }


 function printList(head) {
    let current = head;
    while (current!=null) {
        console.log(current.data);
        current = current.next;
    }
}

printList(head);

// (2) Delete a node from end(tail) of linked list:-
// appraoch:- 
// if head is null or head.next is null then return null as there is only one node in the list which is the last node of the list.
//traverse the list using 'temp' pointer and take one more pointer 'prev' to keep track of the node before current
// iterated node.
// traverse the list until the temp.next is not null to get the last node of the list to be deleted.
// disconnect the last node once temp.next is null using "prev.next = null".
// TC: O(N) Explanation:- 
// O(N) to iterate through the list to delete the last node 
// O(N) to print the list after deleting last node of the list.
// Overall, TC: O(N)+O(N) => O(N)
// SC: O(1), as only a few pointers are used.

class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(3);
head.next.next.next = new linkedList(4);
head.next.next.next.next = new linkedList(5);

head = deleteLast(head);
function deleteLast(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let temp = head;
    let prev = null;
    while (temp.next != null) {
        prev = temp;
        temp = temp.next;
    }


    // Disconnect the last node
    if (prev.next != null) {
        prev.next = null;
        return head;
    }

}


function printList(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

printList(head);

// (3)Delete kth node from the linked list:-
// appraoch:- 
// if k is 1, delete the head node by moving the head to the next node and set the old head's next pointer to 
// null with the help of temp.
// use temp to traverse the list and prev to keep track of the previous node.
// traverse the list until you reach the k-th node. 
// if k is not equal to 1, update prev.next to temp.next to skip the current node and set temp.next to null.
// return the updated head of the list.
// if k is greater than the length of the list, return the head without any changes.
// TC: O(N) Explanation:- 
// O(N) to iterate through the list to delete the kth node 
// O(N) to print the list after deleting kth node of the list.
// Overall, TC: O(N)+O(N) => O(N)
// SC: O(1), as only a few pointers are used.

class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(3);
head.next.next.next = new linkedList(4);
head.next.next.next.next = new linkedList(5);

head = deleteKth(head,6)
function deleteKth(head,k){
    let temp = head;
    if(k==1){
        head = head.next;
        temp.next = null;
        return head;
    }
        let prev = null;
        let count = 0;
        while(temp!=null){
            count++;
            if(count === k){
                prev.next = prev.next.next;
                temp.next = null;
                break;
            }else{
                prev = temp;
                temp = temp.next;
            }
        }

        return head;
}

function printList(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

printList(head);

//                                            INSERTION:-
// (1) Insert node at head of linked list:-
// approach:- 
// change newNode next to head.
// change head to newNode which is new head of the linked list.
// TC: O(N) Explanation:- 
// O(1) to insert the new node at the head.
// O(N) to print the list after adding the new node.
// Overall, TC: O(1)+O(N) => O(N)
// SC: O(1) as i take few pointers which take constant space. 

class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(3);
head.next.next.next = new linkedList(4);
head.next.next.next.next = new linkedList(5);

let newNode = new linkedList(0);

head = insertHead(head, newNode);
function insertHead(head, newNode){
    newNode.next = head;
    head = newNode;
    return head;
}

function printList(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

printList(head);

// (2) Insert node at last of the linked list:-
// approach:- 
// Check if the head is null. If so then set the head to the new node and return it.
// otherwise, travers the list until reach to the last node.
// once reach at last node then update last node next by new node.
// TC: O(N) Explanation:- 
// O(N) to iterate through the list to add the new node at the last of list.
// O(N) to print the list after after adding new node at the last of list.
// Overall, TC: O(N)+O(N) => O(N)
// SC: O(1), as only a few pointers are used.

class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(3);
head.next.next.next = new linkedList(4);
head.next.next.next.next = new linkedList(5);
let newNode = new linkedList(6);

head = insertLast(head, newNode);
function insertLast(head, newNode) {
    if (head === null) {
        return newNode;
    }

    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = null;
    return head;

}

    function printList(head) {
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    printList(head);

// (3) Inserting new node after kth position of the linked list:-
// approach:-
// check a case where the list is empty and k is 1, the new node becomes the head.
// otherwise, traverse the list until reach at kth position.
// once reach at kth position add new node after the kth postion and return head of the list.
// TC: O(N) Explanation:- 
// O(N) to iterate through the list to add the new node after the kth position of list.
// O(N) to print the list after after adding new node after the kth position of list.
// Overall, TC: O(N)+O(N) => O(N)
// SC: O(1), as only a few pointers are used.

class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new linkedList(1);
head.next = new linkedList(2);
head.next.next = new linkedList(4);
head.next.next.next = new linkedList(5);
head.next.next.next.next = new linkedList(6);
let newNode = new linkedList(3);
head = insertKth(head,newNode,2);

function insertKth(head,newNode,k){
    if(head === null && k === 1){
        return newNode;
    }

    let temp = head;
    let count = 0;
    while(temp!=null){
        count++;
        if(count === k){
            newNode.next = temp.next;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    return head;
}

    function printList(head) {
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    printList(head);




