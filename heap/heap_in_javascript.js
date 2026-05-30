// What is Heap?
// A Heap is a complete binary tree that satisfies the heap property
// (either Min-Heap property or Max-Heap property).

// Heap is usually implemented internally using an array.
// We generally do not use tree nodes explicitly while implementing heaps.
// The parent-child relationship is managed using array indices.

// What is a Min-Heap?
// A Min-Heap is a complete binary tree that satisfies the Min-Heap property.

// Min-Heap Property:
// - The smallest element is always at the root (top).
// - Every parent node's value is smaller than or equal to its child nodes' values.

// Time Complexities:
// - Insertion: O(log N)
// - Deletion: O(log N)
// - Accessing minimum element: O(1)

// How Does a Min-Heap Work?
// The smallest element always remains at the root of the heap.

// During insertion or removal of elements,
// the heap adjusts itself to maintain the Min-Heap property.

// Common operations involved:
// 1. Heapify    -> Rearranges elements to maintain heap property.
// 2. Bubble Up  -> Moves an element upward during insertion.
// 3. Bubble Down -> Moves an element downward during removal.

// Declaring a Min-Heap in JavaScript
// JavaScript does not provide a built-in heap data structure.
// We can create a Min-Heap using libraries such as
// '@datastructures-js/priority-queue'.

// Example:
let heap = new MinPriorityQueue({
    priority: (x) => x.val
});

// Explanation:
// Creates a priority queue that behaves like a Min-Heap.

// Custom Priority Function:
// priority: (x) => x.val

// Here:
// - x represents an object (for example, a linked list node).
// - x.val determines the priority of the object in the heap.