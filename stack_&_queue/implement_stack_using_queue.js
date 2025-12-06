// leetcode problem:- 225
// A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.
// This means that, the element inserted first onto the stack is the element who removed at last.
// A real-life example of a stack is a pile of books, where you can only pick and remove the topmost book.
// Stack is a data structure, but it does not have any built-in structure to store elements.
// We have to use some other data structure to implement and store elements in the stack such as array, queue or linked 
// list.

// optimal approach:
// To implement a stack using a queue, I have used two queues. 
// q1 stores the elements as they come, while q2 is used to perform stack-like behavior. 

// push method:- Adding an element in a stack and a queue is the same, 
// so I will not do anything extra, just simply add the value to q1. 
// pop method:- Removing an element from a queue is different from removing an element from a stack. 
// In a queue, we remove an element from the front, whereas in a stack, we remove the element from the top (last element).
// So, to remove a value from the stack using a queue, I will first add q1.length - 1 values to q2, 
// then assign the last remaining value of q1 to popValue variable, and finally, I will add back the q2 
// values to q1. 

// top element:- accessing an element from a queue is different from accessing an element from a stack. 
// In a queue, we remove an element from the front, whereas in a stack, we remove the element from the top (last element).
// So, to get the top value of the stack using a queue, I will first add q1.length - 1 values to q2, 
// then assign the last remaining value of q1 to topValue, add topValue back to q2, 
// and finally, I will add back the q2 values to q1. 

// isEmpty:- Just check if q1.length is equal to 0. 
// If it is 0, it means the stack is empty; otherwise, it is not empty. 

// TC:- (1) O(1) - Adding an element to the queue using a stack.
//      (2) O(N) - Removing the front of the queue using a stack.
//      (3) O(N) - Returning the front of the queue using a stack.
//      (4) O(1) - Checking if the queue is empty.

// SC:- SC: O(N), since for removing the front value of queue and returning front value of queue I have
// to use a queue to store values in it.
// even though there are two queues, each element is stored in only one queue at a time, so total space used is O(N).

// MyStack is a constructor function in JavaScript. 
// When we create a new instance using new MyStack(), JavaScript automatically creates an object for it.
// Instead of adding methods like push, pop, top, and empty directly to each new object, JavaScript adds them to 
// MyStack.prototype.
// This way, all queue objects share the same methods instead of each having its own copy, which saves memory. 
// When we call a method on a queue object, JavaScript first looks for it in the object itself. If it’s not there, 
// it checks the prototype and finds the method there. This is how JavaScript allows multiple objects to use the same 
// methods efficiently.
// here, JavaScript object refers to the object created when we call new MyStack(). 
// This object is an instance of the MyStack constructor function.


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   while(this.q1.length > 1){
    this.q2.push(this.q1.shift());
   }

   let popVal = this.q1.shift();
   while(this.q2.length){
    this.q1.push(this.q2.shift());
   }

   return popVal;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     while(this.q1.length > 1){
    this.q2.push(this.q1.shift());
   }

   let topVal = this.q1.shift();
   this.q2.push(topVal);
   while(this.q2.length){
    this.q1.push(this.q2.shift());
   }


   return topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};