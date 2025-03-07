// Leetcode Problem 232: Implement Queue using Stacks
// The task is to implement a queue using two stacks. 
// we'll create a class 'myQueue' and define methods: push, pop, peek, and empty. 
// first stack (stack1) will store elements as they come in, while the second stack (stack2) will perform operations 
// to maintain queue-like behavior.
// in the push method, we simply add the element to stack1, since adding element onto the stack and queue are same.
// in the pop method, we move all elements from stack1 to stack2, pop the top of stack2 
// (which give the front element of the queue), and then move everything back to stack1.
// the peek method works similarly to pop, except it returns the front element without removing it.
// the empty method checks whether stack1 is empty.
// TC:- (1) O(1) - Adding an element to the queue using stack.
//      (2) O(N) - Removing the front of the queue using stack.
//      (3) O(N) - Returning the front of the queue using stack.
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

class myQueue{
    constructor(){
      this.stack1 = [];
      this.stack2 = [];
    }
    
    push(x){
      this.stack1.push(x);
    }
    
    pop(){
      while(this.stack1.length!==0){
        this.stack2.push(this.stack1.pop());
      }
      
      let poppedElement = this.stack2.pop()
      while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
      }
      
      return poppedElement;
    }
    
    peek(){
      while(this.stack1.length!==0){
        this.stack2.push(this.stack1.pop());
      }
      
      let topElement = this.stack2.pop()
      this.stack2.push(topElement);
      while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
      }
      
      return topElement;
    }
    
    empty(){
      return this.stack1.length === 0;
    }
  }
  
  let obj = new myQueue();
  obj.push(1);
  obj.push(2);
  obj.push(3);
  console.log(obj);
  console.log(obj.pop());
  console.log(obj)
  console.log(obj.peek());
  console.log(obj);