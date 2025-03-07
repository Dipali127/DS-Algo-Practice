// Leetcode Problem 232: Implement Queue using Stacks
// Optimal Approach:
// To implement a queue using stacks, I have used two stacks.
// stack1 stores the elements as they come, while stack2 is used to perform queue-like behavior.

// push method:- Adding an element to a queue follows the same process as adding an element to a stack.
// So, I will simply push the value into stack1.

// pop method:- Removing an element from a stack is different from removing an element from a queue.
// In a stack, we remove an element from the top (last element), whereas in a queue, we remove an element from the front.
// So, to remove the front value of the queue using two stacks, I will first move all elements from stack1 to stack2,
// pop the top element from stack2 (which represents the front of the queue), and then move the remaining elements back to stack1.

// peek method:- Retrieving the front element of the queue is similar to the pop operation.
// I will move all elements from stack1 to stack2, get the top element of stack2 (which represents the front of the queue),
// push it back into stack2, and then move all elements back to stack1.

// isEmpty:- Just check if stack1 is empty.
// If stack1.length is 0, it means the queue is empty; otherwise, it is not empty.

// TC:- (1) O(1) - Adding an element to the queue using a stack.
//      (2) O(N) - Removing the front of the queue using a stack.
//      (3) O(N) - Returning the front of the queue using a stack.
//      (4) O(1) - Checking if the queue is empty.

// MyStack is a constructor function in JavaScript. 
// When we create a new stack using new MyStack(), JavaScript automatically creates an object for it.
// Instead of adding methods like push, pop, top, and empty directly to each new object, JavaScript adds them to 
// MyStack. prototype.
// This way, all stack objects share the same methods instead of each having its own copy, which saves memory. 
// When we call a method on a stack object, JavaScript first looks for it in the object itself. If it’s not there,
// it checks the prototype and finds the method there. This is how JavaScript allows multiple objects to use the same
// methods efficiently.
// here, JavaScript object refers to the object created when we call new MyStack(). 
// This object is an instance of the MyStack constructor function.

var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while(this.stack1.length !== 0){
      this.stack2.push(this.stack1.pop());
  }

  let popVal = this.stack2.pop();

  while(this.stack2.length){
      this.stack1.push(this.stack2.pop());
  }

  return popVal;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  while(this.stack1.length !== 0){
      this.stack2.push(this.stack1.pop());
  }

  let topVal = this.stack2.pop();
  this.stack2.push(topVal);

  while(this.stack2.length){
      this.stack1.push(this.stack2.pop());
  }

  return topVal;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0;
};