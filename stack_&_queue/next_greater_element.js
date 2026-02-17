// geeks for geeks
// Brute force approach:
// Approach:
// Iterate through each value of `arr`. For each value, initialize a variable `greater` with -1.
// Then, iterate through the remaining elements to the right of the current element.
// If a greater element is found (i.e., arr[j] > arr[i]), update the `greater` variable with that value
// and break the loop, since we only need the first next greater element.
// After processing each element, update the current value of `arr` with the `greater` value.
// Finally, return the modified `arr`.
//
// TC: O(N^2), due to the nested loop.
// SC: O(1), since no additional space is used.
class Solution {
    nextLargerElement(arr) {
        for(let i = 0; i < arr.length; i++){
            let greater = -1;
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] < arr[j]){
                    greater = arr[j];
                    break;
                }
            }
            
            arr[i] = greater;
        }
        
        return arr;
    }
}

// optimal approach:
// approach:
// I will take a result array of size equal to the given array and initialize all values with -1.
// I will also take a stack to store the next greater elements.
// I will start iterating from the last index of the array.
// If the top of the stack is less than or equal to the current element,
// I will pop elements from the stack until this condition is false or the stack becomes empty.
// Otherwise, the top of the stack is the next greater element for the current element, 
// which I will store in the result array.
// After that, I will push the current element into the stack, as it may be the next greater
// element for future elements.
// I will repeat this process until I reach the first element of the array.
// Finally, I will return the result array containing the next greater elements for each index.

// Time Complexity: O(N)
// - We iterate through the array once from right to left.
// - Each element is pushed to the stack and popped at most once.
// - Therefore, the total operations remain linear despite the inner while loop.
// - Overall Time Complexity: O(N).

// Space Complexity: O(N), in the worst case, the stack might store all elements of the array.
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are smaller than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).
// Note: 
// We traverse from right to left because for every element, we need to find the next greater element on 
// its right side. By moving from right to left, the stack already contains all the elements to the right 
// of the current element that are greater, because we remove all the smaller elements. 
// This allows us to efficiently maintain a monotonic decreasing stack and find the next greater element
// in O(n) time.
// A monotonic stack is a stack that maintains its elements in either strictly increasing or 
// strictly decreasing order by removing elements that violate that order during insertion. 
// A monotonic decreasing stack stores elements in decreasing order.
// In the above solution, what is happening:
// Before pushing the current element:
// We remove all elements that are smaller than or equal to the current element.
// Only elements greater than the current element remain in the stack.
// Then we push the current element.
// Because of this, the stack always contains elements in strictly decreasing order (from bottom to top).

class Solution {
    // Function to find the next greater element for each element of the array.
    nextLargerElement(arr) {
        let n = arr.length;
        let result = new Array(n).fill(-1)
        let stack = [];
        for(let i = n-1; i >= 0; i--){
            while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
                 stack.pop();
            }
            
            if(stack.length > 0){
                result[i] = stack[stack.length - 1];
            }
            
            stack.push(arr[i]);
        }
        
        return result;
    }
}