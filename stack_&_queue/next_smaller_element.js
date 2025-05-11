// GeeksforGeeks: Asked in multiple companies

// Optimal Approach:
// Approach:
// Use a stack to store potential next smaller elements, and a result array to store the next smaller values,
// initially filled with -1.

// Traverse the array from right to left.
// Pop all elements from the stack that are greater than or equal to arr[i], because:  
//      -> They can’t be the next smaller element for the current arr[i].
//      -> They also won’t help with any earlier (left-side) elements, since we only care about smaller values.

// If the stack is not empty after popping, then the top of the stack is the next smaller element for arr[i].

// Push arr[i] onto the stack to help find the next smaller element for future (left-side) elements.

// Time Complexity: O(N), since we iterate through the array once.
// Space Complexity: O(N), in the worst case, the stack might store all elements of the array.
// Also, the result array uses additional space to store the next smaller elements.
let arr =  [4, 8, 5, 2, 25]
class Solution {
    nextSmallerElement(arr) {
        let stack = [];
        let result = new Array(arr.length).fill(-1);
        
        for (let i = arr.length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }
            
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }
            
            stack.push(arr[i]);
        }
        
        return result;
    }
}