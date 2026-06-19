//                                         About Monotonic Stack

// A monotonic stack is a stack that maintains elements in either strictly increasing or strictly decreasing order
// by removing elements that violate that order during insertion.

// Increasing stack (visual representation of current state):
// bottom → smaller values → larger values → top
// pop element greater than the current element

// Example:
// Array form: [1, 2, 3, 4]
// Stack form: bottom → 1 → 2 → 3 → 4 → top
//
// 1   (stack[0] / bottom)
// 2
// 3
// 4   (stack[top])
//
// Decreasing stack (visual representation of current state):
// bottom → larger values → smaller values → top
// pop elements smaller than current element

// Example:
// Array form: [4, 3, 2, 1]
// Stack form: bottom → 4 → 3 → 2 → 1 → top
//
// 4   (stack[0] / bottom)
// 3
// 2
// 1   (stack[top])