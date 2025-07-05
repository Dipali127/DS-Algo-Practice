// Leetcode Problem:- 735
// we are given an array of 'asteroids' of integers where each asteroid represents its size, 
// and the sign represents the direction of the asteroid.
// if the asteroid is positive, it moves to the right, and if the asteroid is negative, it moves to the left.

// SOME RULES FOR ASTEROID COLLISION:
// - If two asteroids collide, the smaller one will explode (be removed).
// - If two asteroids have the same size but opposite directions, both will explode.
// - Two asteroids moving in the same direction will never collide.

// Brute force approach:
// approach:
// I will iterate through the asteroids array, and for each asteroid, I will check its interaction with the 
// adjacent asteroid to determine if a collision occurs.
// Iterate through the asteroids array using a while loop.
// Check for collisions between adjacent asteroids:
// If asteroids[i] > 0 and asteroids[i + 1] < 0, a collision occurs.
// To resolve the collision, compare the absolute values of both asteroids:
// If |asteroids[i]| > |asteroids[i+1]|, the right asteroid (asteroids[i+1]) is destroyed, so I remove it using splice(i + 1, 1).
// If |asteroids[i]| < |asteroids[i+1]|, the left asteroid (asteroids[i]) is destroyed, so I remove it using splice(i, 1). Since the removal might affect previous asteroids, I update i = Math.max(0, i - 1) to recheck the new adjacent asteroid and also not to intialise the iterator pointer with negative index.
// If |asteroids[i]| === |asteroids[i+1]|, both asteroids destroy each other, so I remove them using splice(i, 2). Again, I move back by setting i = Math.max(0, i - 1).
// Continue iterating through the list until all possible collisions are resolved.
// TC:- O(N^2) , in the worst case, where every asteroid collides one by one, leading to repeated shifts of elements in the array due to splice().
// SC:- O(1), since no additional space is used.

var asteroidCollision = function(asteroids) {
    let i = 0;
    while (i < asteroids.length - 1) {
        if (asteroids[i] > 0 && asteroids[i + 1] < 0) { 
            if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                asteroids.splice(i + 1, 1);
            } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                asteroids.splice(i, 1); 
                i = Math.max(0, i - 1); 
            } else {
                asteroids.splice(i, 2); 
                i = Math.max(0, i - 1); 
            }
        } else {
            i++;
        }
    }
    return asteroids;
};

// Optimal approach:
// appraoch:-
// use of a stack to track the asteroids that are moving to the right.
// iterate through the given array of 'asteroids' and check if we encounter an asteroid moving to the left,
// then check:-
// - if the current iterated asteroid is moving left (negative) and the top of the stack is moving right (positive), 
//   a collision might happen, so we enter a while loop to resolve it.
// - in each collision scenario, we calculate the sum of the sizes of the two asteroids.
//   - if the sum is less than 0, means that asteroid moving to the right (top of the stack) is smaller and gets destroyed, 
//     so we pop it from the stack and continue checking the new top, for example:- if asteroids[i] = -10 and 
//     stack[top] = 5 then sum = -10 + 5 which is -5 < 0 so, stack[top] will exploid because  its value is smaller than 
//     the current iterated asteroid.
// - but if the sum is greater than 0, means that asteroid moving to the left is smaller(current iterated asteroid value) and should be destroyed, 
//    so we set the current iterated asteroid to 0.
//    for example:- if asteroids[i] = -5 and stack[top] = 10 then sum = -5 + 10
//    which is 5 > 0 so, asteroids[i] will exploid because  its value is smaller than the top of stack.
// - if the sum is 0, both asteroids are equal in size and destroy each other, so we pop the stack and set the current 
//   iterated asteroid to 0.
// - after the while loop, if the current asteroid has not been destroyed (i.e., it's not 0), we push it onto the stack.
// TC:- O(N), as we iterate through the 'asteroids' array once and each asteroid is pushed/popped from the stack at most once.
// SC:- O(N), in the worst case, the stack may store all asteroids if no collisions happen.
// Note:- we destroy the asteroid with the smaller absolute value, not based on sign.

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