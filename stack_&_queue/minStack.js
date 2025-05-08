// TC:- O(N), because of the iteration through the stack to get minimum value in getMin function
// var MinStack = function() {
//     this.stack = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     this.stack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     let min = Infinity;
//     for(let i = 0; i < this.stack.length; i++){
//         if(this.stack[i] < min){
//             min = this.stack[i];
//         }
//     }

//     return min;
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Optimal Approach:
// This approach reduces the time complexity of getMin() from O(N) to O(1)
// by maintaining an auxiliary stack (minstack) that tracks the minimum value at each level of the main stack.
// 
// For every push operation, we store the current minimum (between the new value and the previous minimum)
// on the minstack. This way, getMin() can simply return the top of minstack in constant time.
//
// Time Complexity: O(1) for all operations — push, pop, top, and getMin.


var MinStack = function() {
    this.stack = [];
    this.minstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    let min = this.minstack.length > 0 ? Math.min(val, this.getMin()) : val;
    this.minstack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
};