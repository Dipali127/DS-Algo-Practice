// Leetcode Problem: 23
// What is a Min-Heap?
// A Min-Heap is a type of binary heap.
// Binary Heap:
// A binary heap is a complete binary tree where all levels of the tree are completely filled, except possibly the last level and The last level is filled from left to right.
// Min-Heap Property:
// The smallest element is always at the root (top) and Every parent node's value is smaller than or equal to its child nodes' values.

// How Does a Min-Heap Work?
// The smallest element is always at the root of the heap.
// When inserting or removing elements:
// The heap adjusts itself to maintain the min-heap property.
// This involves operations like:
// Heapify: Rearranges the elements to satisfy the heap property.
// Bubble Up: Moves an element upward to maintain the heap property during insertion.
// Bubble Down: Moves an element downward to maintain the heap property during removal.

// Declaring a Min-Heap in JavaScript
// we can create a min-heap using the MinPriorityQueue from the @datastructures-js/priority-queue library or a similar library.
// Example:
// let heap = new MinPriorityQueue({ priority: (x) => x.val });

// Explanation of the Code
// let heap = new MinPriorityQueue({...}), Creates a priority queue that functions as a min-heap.
// and Custom Priority Function: { priority: (x) => x.val, Defines how the heap calculates the priority of each element.
// Here:
// x represents an object (e.g., a node of a linked list).
// x.val specifies the value of the object that determines its priority.

// Brute force approach:
// approach:
// i will take an array to store all the nodes of the k linked lists, and then I will iterate through each node of the k linked lists to add them to the array. Next, I will sort the array in ascending order to get the nodes in sorted order.
// after that, I will use a dummy node to merge the k linked lists by iterating through the sorted array of nodes and storing them in the dummy node.
// finally, after processing all the nodes and storing them in the dummy node, I will return dummyNode.next, which contains the head of the sorted singly linked list.
// Time Complexity: O(NLOGN)
// Explanation:
// - O(N): to iterate through all the nodes of the k linked lists to store them in an array.
// - O(NLOGN): to sort the array of nodes based on their values.
// - O(N): to iterate through the sorted array to merge the nodes into a single linked list.
// - Overall: O(N) + O(NLOGN) + O(N) = O(NLOGN)
// Space Complexity: O(N) to use an array to store all the nodes of the k linked lists.

var mergeKLists = function(lists) {
    let arr = [];
    for(let i = 0; i < lists.length; i++){
        let temp = lists[i];
        while(temp !== null){
            arr.push(temp);
            temp = temp.next;
        }
    }

    arr.sort((a,b) => a.val - b.val);
    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    for(let node of arr){
        temp.next = node;
        temp = temp.next;
    }

    return dummyNode.next;
};

// Optimal Approach: using heap(min heap priority queue)
// i will use a MinPriorityQueue to maintain a priority queue and store the first node of each linked list into the heap.
// next, i will create a dummy node to merge the linked lists into one by iterating through the heap.
// while iterating through the heap:
// i will extract the top node (smallest value) from the min-heap and add it to the dummyNode list as the top of the heap always contains the node with the minimum value.
// i will then check if the current node has a next node. If it exists, I will add that next node to the heap and the heap will automatically reorder itself to maintain the min-heap property, ensuring that the node with the smallest value is always at the top.
// after processing through all the nodes in the heap, I will return the dummyNode.next, which will point to the head of the merged linked list.
// Time Complexity: O(N * log K)
// Explanation:
// - Each of the N nodes is added to and removed from the heap once.
// - Each operation (add or remove) takes O(log K) time, where K is the number of linked lists.
// - Therefore, the total time complexity is O(N * log K), where N is the total number of nodes and k is the number of linked list.
// Space Complexity: O(k) , where K is the number of linked lists because the heap holds at most K nodes at any given time.


var mergeKLists = function(lists){
    let heap = new MinPriorityQueue({priority: (x) => x.val});
    for(let i = 0; i < lists.length; i++){
        if(lists[i] !== null){
            heap.enqueue(lists[i]);
        }
    }

    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    while(heap.size() > 0){
        let smallest = heap.dequeue().element;
        temp.next = smallest;
        temp = temp.next;
        if(smallest.next){
            heap.enqueue(smallest.next)
        }
    }

    return dummyNode.next;
}