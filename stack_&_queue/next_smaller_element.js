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
// Finally, replace the current element in given array with the value stored in `smaller` variable.
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
// approach:
// I will take a result array of size equal to the given array and initialize all values with -1.
// I will also take a stack to store the next smaller elements.
// I will start iterating from the last index of the array to maintain next smaller element for future untraversed element.

// Inside for loop:-
// Run a while loop and check, If the top element of the stack is greater than or equal to the current element, pop elements
// from the stack until this condition is false or the stack becomes empty.
// Otherwise, the top of the stack is the next smaller element for the current element, 
// which I will store in the result array.
// After that, I will push the current element into the stack, as it may be the next smaller element for future elements.
// Repeat this process until I reach the first element of the array.
// Finally, return the result array containing the next greater elements for each element of the array.

// Time Complexity: O(N), Explanation:-
// - We iterate through the array once from right to left And each element is pushed to the stack and popped out of a 
//   stack at most once.
// - Therefore, the total operations remain linear despite the inner while loop.
// - Overall Time Complexity: O(N).

// Space Complexity: O(N), in the worst case, the stack might store all elements of the given array.
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are greater than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).

// Note: 
// We traverse from right to left because for every element, we need to find the next smaller element on 
// its right side. 
// By moving from right to left, the stack already maintains elements that can be greater for current traverse 
// element or left-side untraversed elements of current traverse element.
// This allows us to efficiently maintain a monotonic increasing stack[bottom to top] and find the next smaller element
// in O(n) time.

// In the above solution, what is happening:
// Before pushing the current element into stack:
// We remove all elements that are greater than or equal to the current element.
// Only elements smaller than the current element remain in the stack.
// Then we push the current element.
// Because of this, the stack always contains elements in strictly increasing order (from bottom to top).


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

// Using left to right traversal:
// Approach:-
// I will take a result array of size equal to the given array and initialize all values with -1.
// I will take a stack to store the indices of the elements whose next smaller element is not found.
// I will traverse the given array from left to right to find the next smaller element for the elements who are on the 
// left of the current traversed element.
// 
// Inside the for loop:-
// Run a while loop and check if the top index element of the stack is greater than the current traversed element, it means 
// the current traversed element is the next smaller element for the top index element of the stack. And if this is the
// case, then pop the top index from the stack and add the current traversed element in the result array at the top index 
// of the stack.
// And continue this process until the stack becomes empty.
// But if the top index element of the stack is not greater than the current traversed element, then skip it and add the 
// index of the current traversed element onto the stack.
// Repeat this process until I reach the last element of the array.
// Finally, return the result array containing next greater elements for each element of the array

// Time Complexity: O(N), Explanation:-
// - We iterate through the array once from left to right. And each element is pushed to the stack and popped out of the 
//   stack at most once.
// - Therefore, the total operations remain linear despite the inner while loop.
// - Overall Time Complexity: O(N).

// Space Complexity: O(N), in the worst case, the stack might store all elements of the given array.
// We iterate from left to right, and for each element:
// - We remove (pop) only those elements from the stack that are greater than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).

// Note:-
// In left → right, current element may be the next smaller for some elements on the left that are still waiting for
// a smaller value.

// Why indices and not elements like in right to left traversal?
// Because in right to left traversal, the stack already maintains/store elements that can be greater for current 
// traversed element or left-side untraversed elements of the current traversed element.
// But in left to right traversal, the next smaller element is hidden that's why stack stores the indices of those elements
// of the array whose next smaller element is still not found.  

// FINAL NOTE:-
// In "right to left", we are storing those elements onto the stack who can be the next smaller element for the current 
// traversed element or left-side untraversed elements of the current traversed element.
// And In "left to right", we store those indices onto the stack whose next smaller element is still not found.

class Solution {
    nextSmallerEle(arr) {
        let stack = [];
        let result = new Array(arr.length).fill(-1);
        for(let i = 0; i < arr.length; i++){
            while(stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]){
                result[stack[stack.length - 1]] = arr[i];
                stack.pop();
            }
            
            stack.push(i);
        }
        
        return result;
    }
}