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
// I will start iterating from the last index of the array to maintain next greater element for future untraversed element.

// Inside for loop:-
// Run a while loop and check, If the top element of the stack is less than or equal to the current element, pop elements
// from the stack until this condition is false or the stack becomes empty.
// Otherwise, the top of the stack is the next greater element for the current element, 
// which I will store in the result array.
// After that, I will push the current element into the stack, as it may be the next greater
// element for future elements.
// Repeat this process until I reach the first element of the array.
// Finally, return the result array containing the next greater elements for each element of the array.

// Time Complexity: O(N), Explanation:-
// - We iterate through the array once from right to left And each element is pushed to the stack and popped out of a 
//   stack at most once.
// - Therefore, the total operations remain linear despite the inner while loop.
// - Overall Time Complexity: O(N).

// Space Complexity: O(N), in the worst case, the stack might store all elements of the given array.
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are smaller than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).

// Note: 
// We traverse from right to left because, for every element, we need to find the next greater element on
// its right side.
// By moving from right to left, the stack already maintains elements that can be greater for the current traversed
// element or left-side untraversed elements of the current traversed element.
// This allows us to efficiently maintain a monotonic decreasing stack[from bottom to top] and find the next greater
// element in O(n) time.

// In the above solution, what is happening:
// Before pushing the current element:
// We remove all elements that are smaller than or equal to the current element.
// Therefore, if the stack is not empty, the top element is greater than the current element.
// When the current element is pushed, it becomes smaller than the previous top.
// Because of this, the stack always contains elements in strictly decreasing order (from bottom to top).

// Example to see that how stack maintain monontonic decreasing order even if the given array contains random order of
// elements:-

// Consider [4, 1, 7, 3, 9, 2].
// Since we traverse from right to left:
// Push 2 → Stack: [2]
// Encounter 9 → Pop 2, Push 9 → Stack: [9]
// Encounter 3 → Push 3 → Stack: [9, 3]
// Encounter 7 → Pop 3, Push 7 → Stack: [9, 7]
// Encounter 1 → Push 1 → Stack: [9, 7, 1]
// Encounter 4 → Pop 1, Push 4 → Stack: [9, 7, 4]

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

// Using left to right traversal:
// Approach:-
// I will take a result array of size equal to the given array and initialize all values with -1.
// I will take a stack to store the indices of the elements whose next greater element is not found.
// I will traverse the given array from left to right to find the next greater element for the elements who are on the left
// of the current traversed element.
// 
// Inside the for loop:-
// Run a while loop and check if the top index element of the stack is less than the current traversed element, it means 
// the current traversed element is the next greater element for the top index element of the stack. And if this is the
// case, then pop the top index from the stack and add the current traversed element in the result array at the top index 
// of the stack.
// And continue this process until the stack becomes empty.
// But if the top index element of the stack is not less than the current traversed element, then skip it and add the 
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
// - We remove (pop) only those elements from the stack that are smaller than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).
// Note:-
// In left → right traversal, the current element may be the next greater element for some elements on the left that are 
// still waiting for a greater value in stack.
//
// Why indices and not elements like in right to left traversal?
// Because in right to left traversal, the stack already maintains/store elements that can be greater for current
// traversed element or left-side untraversed elements of the current traversed element.
// But in left to right traversal, the next greater element is “unknown in advance”, that's why the stack stores the 
// indices of those elements whose next greater element is still not found and storing index will help to easily know about
// index of the element store onn stack so that we can easily get element and store its next greater element in hash map.
//
// In the above solution, what is happening:
// Before pushing the current element index:
// We remove all indices from the stack whose corresponding elements
// are smaller than the current element.
// Therefore, if the stack is not empty, the element corresponding
// to the top index is greater than or equal to the current element.
// When the current index is pushed, the stack continues to maintain
// elements in decreasing order from bottom to top.

// Example to see that how stack maintain monontonic decreasing order even if the given array contains random order of
// elements:-

// Consider [4, 1, 7, 3, 9, 2].
// Since we traverse from left to right:

// Encounter 4 → Push index 0 → Stack: [0] → Elements: [4]

// Encounter 1 → Push index 1 → Stack: [0, 1] → Elements: [4, 1]

// Encounter 7 → Pop index 1, Pop index 0, Push index 2
// Stack: [2] → Elements: [7]

// Encounter 3 → Push index 3
// Stack: [2, 3] → Elements: [7, 3]

// Encounter 9 → Pop index 3, Pop index 2, Push index 4
// Stack: [4] → Elements: [9]

// Encounter 2 → Push index 5
// Stack: [4, 5] → Elements: [9, 2]

// Notice that after every operation, the elements corresponding to the indices
// stored in the stack remain in strictly decreasing order from bottom to top.

// FINAL NOTE:-
// In "right to left", we store elements that can be the next greater element for the current
// traversed element or left-side untraversed elements of the current traversed element.
// And in "left to right", we store indices of elements whose next greater element is still not found.

// In left → right, current element may be the next greater for some elements on the left that are still waiting for
// a greater value.


class Solution {
    nextLargerElement(arr) {
        let stack = [], result = new Array(arr.length).fill(-1);
        for (let i = 0; i < arr.length; i++) {
            while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
                result[stack[stack.length - 1]] = arr[i];
                stack.pop();
            }

            stack.push(i);
        }

        return result;
    }
}