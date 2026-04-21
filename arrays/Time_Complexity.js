//                                          Time Complexity

// Time Complexity is the number of operations performed by an algorithm as a function of input size.
// That means, time complexity increases with the increase in the data size.

// Example:
// Let’s suppose we have an array and we need to print all the values of the array.
// For this, we use a for loop to traverse it.
// Here, the time complexity (number of operations) will be N, since we assume the size of the array is N.

// Asymptotic Notation:
// Time Complexity is measured using asymptotic notations such as:
// Big O (O)
// Big Omega (Ω)
// Theta (Θ)
// But in interviews, we mostly use Big O notation, which represents the worst-case time complexity
// of an algorithm.

// (i) Worst Case Meaning:
// Let’s understand worst case with an example:
// I have 5 rupees and want to buy a pen.
// The maximum amount I can spend is 5 rupees — this represents the worst-case scenario.

// Programming Example:
// Suppose we have an array and we need to find the maximum value.
// The array can be:
// Sorted
// Unsorted
// In the worst case, the maximum element could be at the end of the array, so we must traverse all elements.
// Therefore, the time complexity is O(N) because we traverse the entire array.

// (ii) Best Case Meaning:
// Let’s understand the best case with an example:
// I have 5 rupees and want to buy a pen.
// If I find a pen that costs only 1 rupee, then I spend the minimum possible amount.
// This represents the best-case scenario — the most optimal situation where the least work (or cost) is
// required.

// Programming Example:
// In programming, the best case is when the algorithm takes the minimum number of operations.
// Example: Finding maximum in an array (if optimized with condition):
// If we assume (hypothetically) the first element is already the maximum and no further checks are needed → best case
// Operations are minimal → O(1) (in ideal/optimized scenarios)

// Rule: Always take the largest term while computing time complexity.
// Example:
// F(n) = 2n² + 3n + 4  ⇒  Time Complexity = O(n²)

// Explanation:
// While computing time complexity:
// Always ignore constant factors
// Focus on how the function grows as n increases
// Choose the term with the highest growth rate to represent the worst-case scenario
// So,
// Time Complexity = O(n²)

// Space Complexity
// Space complexity is the amount of memory (space) an algorithm uses as a function of the input size.

// Types of Space
// Fixed / Input Space:
// Space used by the algorithm to store inputs like arrays, strings, variables.
// Example: An array of size N → uses O(N) space.
// Auxiliary / Extra Space:
// Additional memory used by the algorithm for computations, temporary variables, recursion stack, etc.
// Example: In recursive factorial(n) function, the recursion stack uses extra space O(n).

// Example:
// The factorial of a number n (denoted as n!) is the product of all positive integers from 1 up to n.
// Solution: Using "recursion" because it is the easiest way to find the factorial of any number.

// Why Recursion:
// Let's suppose the given input size = 245. Can you find the factorial of this large number manually?
// Answer is No. So, we use the recursive approach, which divides the problem into sub-problems, 
// and each sub-problem is further divided until it reaches the base case.

// In recursion:
// Base Case => if 'n' is equal to 0, then return 1.
// Otherwise, we assume that we know the factorial of smaller values, 
// and recursively call the factorial function for n-1, repeating this process until we reach the base
// case.

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Input space: storing n → O(1)
// Auxiliary space: O(n)
// Why O(n) space?
// While calling the factorial function recursively, each call is stored on the stack because it is not
// yet solved.
// These functions are solved starting from the base case. 
// Once the base case is reached, the function calls start returning, and the stored stack frames are 
// used to compute the result step by step.
// This continues until all recursive calls on the stack are resolved and stack becomes empty.
// So, total space complexity = O(n)


// Operations counted in Time Complexity
// Comparisons
// if conditions, while conditions, for loop conditions.
// Example: if(arr[j] < arr[min]) → counts every time it’s evaluated.
// Traversal / Loop Iterations
// Every increment or check in for / while loops counts.
// Example: for(let j=i+1; j<n; j++) → each iteration counts.
// Assignments / Swaps
// Assigning values to variables or array elements.
// Example: arr[min] = arr[i] or min = j.
// Arithmetic Operations
// Addition, subtraction, multiplication, division, modulo, etc.
// Example: i+1, n-i-1 in loops.
// Function Calls (sometimes)
// Calling functions can count as an operation if the function is not inlined.
// Other operations depending on context
// Array indexing (like arr[j]) — sometimes counted as an operation in lower-level analysis.
// Increment/decrement operations (i++, j++) are counted.