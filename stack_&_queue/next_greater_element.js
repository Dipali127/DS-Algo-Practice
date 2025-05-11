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
// TC: O(N), as we iterate through the array 'arr' once.
// Each element is pushed onto the stack once and popped at most once, 
// resulting in an overall linear time complexity.

// SC: O(N), as we use an auxiliary stack to store elements. 
// In the worst case (when the array is strictly decreasing), 
// the stack may store up to 'N' elements simultaneously.

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