// Recursion:
// Recursion is a technique where a function calls itself to solve smaller sub-problems of the same problem until
// it reaches a base case. 
// It means , recursive function has a base case to stop the recursion and a recursive case to reduce the size of 
// the problem.

// Types of Recursion:
// 1) Head Recursion:-
// Recursive call happens before the work.
// Example:-
function fun(n) {
  if (n === 0) return; // base case
  fun(n - 1); // recursive case/recursive call
  console.log(n); // task to execute
}

// 2) Tail Recursion:-
// Recursive call happens after the work (last operation)
// Example:-
function fun(n) {
  if (n === 0) return; // base case
  console.log(n); // task to execute
  fun(n - 1); // recursive case
}

// Time Complexity of Recursion (General)

// 1. The time complexity depends on:
//    a) Number of recursive calls
//    b) Work done at each call

// 2. Based on number of recursive calls per function:
//    a) If there is only one recursive call at each level then this is linear recursion.
//       - Total calls ≈ depth of recursive function of all levels.
//    b) If there is multiple recursive call at each level then this is tree recursion.
//       - Total calls ≈ (branching factor)^(depth)

// Space Complexity of Recursive Functions:
// Space complexity is mostly about recursive function stored on stack (how deep the recursive function goes on stack), 
// plus any extra memory used inside the function.
// Recursion stack: Each recursive function call is stored on the call stack until it returns or it reach to base case.
// Extra memory/Auxiliary space: Any arrays or objects created inside the recursion/recursive function.

// Example: Factorial of a Number
// 5! = 5 * 4 * 3 * 2 * 1
// Solution:
// Each function call does O(1) work (multiplication)
// The function is called n times (n -> n-1 -> ... -> 1)
// So, the total time complexity = O(n)
// Time complexity is O(n) because this is a linear recursion. At each level, there is only one recursive call, and 
// the work done per call is constant (multiplication). Since the recursion goes from n to 1, there are n levels, 
// so the overall time complexity is O(n).

// Space Complexity = O(n), due to the stack space used by recursive function calls
// Explanation:
// Level 0 -> stores f(n)
// Level 1 -> stores f(n-1)
// Level 2 -> stores f(n-2)
// ...
// Level n -> stores f(1) (base case)
// So, the maximum recursion stack depth is n → O(n)

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}