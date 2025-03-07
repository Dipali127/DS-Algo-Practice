// leetcode problem:- 225
// optimal approach:
// To implement a stack using a queue, I have used two queues. 
// q1 stores the elements as they come, while q2 is used to perform stack-like behavior. 

// push method:- Adding an element in a stack and a queue is the same, 
// so I will not do anything extra, just simply add the value to q1. 
// pop method:- Removing an element from a queue is different from removing an element from a stack. 
// In a queue, we remove an element from the front, whereas in a stack, we remove the element from the top (last element).
// So, to remove a value from the stack using a queue, I will first add q1.length - 1 values to q2, 
// then assign the last remaining value of q1 to popValue, and finally, I will add back the q2 values to q1. 

// top element:- Removing an element from a queue is different from removing an element from a stack. 
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