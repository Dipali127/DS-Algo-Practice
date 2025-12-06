// GeeksforGeeks: Asked in multiple companies
// brute force approach:
// approach:
// Brute force approach:
// Approach:
// Iterate through each element of the array using an outer loop.
// For each element, initialize a variable `smaller` with -1.
// Then iterate through the elements to its right (inner loop).
// If you find a smaller element, assign it to `smaller` and BREAK immediately —
// because we only need the **first smaller element to the right**.
// Finally, replace the current element with the value stored in `smaller`.
// TC:- O(N^2), since we have use of nested loop 
// SC:- O(1), since no additional space is used.

let arr = [4, 8, 5, 2, 25];
console.log(smaller(arr));

function smaller(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let smaller = -1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                smaller = arr[j];
                break; 
            }
        }
        arr[i] = smaller;
    }
    return arr;
}

// Optimal Approach:
// Approach:
// Use a stack to store potential next smaller elements, and a result array to store the next smaller values,
// initially filled with -1.
// Traverse the array from right to left.
// Pop all elements from the stack that are greater than or equal to arr[i], because:  
//      -> They can’t be the next smaller element for the current arr[i].
//      -> They also won’t help with future (left-side) elements, since we only care about smaller values.
// If the stack is not empty after popping, then the top of the stack is the next smaller element for arr[i].
// Push arr[i] onto the stack to help find the next smaller element for future (left-side) elements.

// Time Complexity: O(N), since we iterate through the array once.
// Space Complexity: O(N), in the worst case, the stack might store all elements of the array.
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are greater than or equal to the current value.
// - If no smaller element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next smaller elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).


let array =  [4, 8, 5, 2, 25]
class Solution {
    nextSmallerElement(array) {
        let stack = [];
        let result = new Array(array.length).fill(-1);
        
        for (let i = array.length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
                stack.pop();
            }
            
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }
            
            stack.push(array[i]);
        }
        
        return result;
    }
}