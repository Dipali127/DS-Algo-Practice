// Leetcode Problem:- 735
// we are given an array of 'asteroids' of integers where each asteroid represents its size, 
// and the sign represents the direction of the asteroid.
// if the asteroid is positive, it moves to the right, and if the asteroid is negative, it moves to the left.

// SOME RULES FOR ASTEROID COLLISION:
// - If two asteroids collide, the smaller one will explode (be removed).
// - If two asteroids have the same size but opposite directions, both will explode.
// - Two asteroids moving in the same direction will never collide.

// Optimal approach:
// appraoch:-
// use of a stack to track the asteroids that are moving to the right.
// iterate through the given array of 'asteroids' and check if we encounter an asteroid moving to the left,
// then check:-
// - if the current iterated asteroid is moving left (negative) and the top of the stack is moving right (positive), 
//   a collision might happen, so we enter a while loop to resolve it.
// - in each collision scenario, we calculate the sum of the sizes of the two asteroids.
//   - if the sum is less than 0, means that asteroid moving to the right (top of the stack) is smaller and gets destroyed, 
//     so we pop it from the stack and continue checking the new top.
//   - but if the sum is greater than 0, means that asteroid moving to the left is smaller(current iterated asteroid value) and should be destroyed, 
//    so we set the current asteroid to 0 and stop further comparisons because current iterated asteroid is 0 already since it doesnt exist.
//   - if the sum is 0, both asteroids are equal in size and destroy each other, so we pop the stack and set the current asteroid to 0.
// - after the while loop, if the current asteroid has not been destroyed (i.e., it's not 0), we push it onto the stack.
// TC:- O(N), as we iterate through the 'asteroids' array once and each asteroid is pushed/popped from the stack at most once.
// SC:- O(N), in the worst case, the stack may store all asteroids if no collisions happen.

var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let i=0;i<asteroids.length;i++){
     while(stack.length !=0 && stack[stack.length-1]>0 && asteroids[i]<0){
         let sum = stack[stack.length-1] + asteroids[i];
         if(sum<0){
             stack.pop();
         }else if(sum>0){
             asteroids[i] = 0;
         }else{
             stack.pop();
             asteroids[i] = 0;
         }
     }
     if(asteroids[i] !== 0){
         stack.push(asteroids[i]);
     }
    }
 
    return stack;
 };