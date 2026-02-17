// leetcode problem:
// Brute force approach:
// Approach:
// Take a hash map to store the next greater element for each element in nums2.
// Iterate through nums2 using a nested loop.
// For each element of nums2, initialize a variable `greater` with -1.
// Then iterate through the elements to the right of the current element (using pointer `j`),
// and check if the current value (nums2[j]) is greater than the value at pointer `i`.
// If it is, update the `greater` variable with that value and break the loop,
// since we need to return only the **first greater element** to the right.
// After the inner loop ends, add the element at `i` as the key and `greater` as its value in the map.
// Once the map is built, iterate through nums1 and update each value with its next greater element using the hash map.
// TC: O(N^2 + M), since we use a nested loop to find the next greater element for each element in nums2.
// For 'n' elements of nums2, the inner loop may in the worst case iterate through all remaining elements, giving O(n²).
// SC: O(N), since a hash map is used to store the next greater element for each value in nums2. 

var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        let greater = -1;
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                greater = nums2[j];
                break;
            }
        }

        map.set(nums2[i], greater);
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]);

    }

    return nums1;
};

// Optimal Approach:
// Approach:
// Instead of finding the next greater element for nums2 using a nested loop, which increases the time
// complexity,
// I will use a hash map and a stack to store the next greater elements of nums2 efficiently.
// While processing nums2, I will determine the next greater element for each value and store it in the
// hash map.
// If a next greater element is found, I will store it in the hash map; otherwise, I will store -1 for
// that element.
// Then, I will iterate through nums1 and retrieve the next greater elements from the hash map.
// Finally, after getting the next greater element for each element of nums1, I will return nums1.

// Time Complexity: O(N)
// - O(N) to iterate through nums2 and compute the next greater element for each value using a stack.
// - O(N) to iterate through nums1 and retrieve values from the hash map.
// Note: Even though a while loop is used inside the for loop,
//       the total number of operations is still O(N) because each element is pushed and popped
//       from the stack at most once.
// - Overall Time Complexity: O(N) + O(N) = O(2N) = O(N).

// Space Complexity: O(N), in the worst case, the stack might store all elements of the array if the 
// given array is in increasing order like : [1, 2, 3, 4].
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are smaller than or equal to the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for hash map to store next greater elements of nums2 along with nums2 elements.
// - Total auxiliary space: O(N).We traverse from right to left because for every element, we need to find the next greater element on its right side. By moving from right to left, the stack already contains all the elements to the right of the current element that are greater, because we remove all the smaller elements. This allows us to efficiently maintain a monotonic decreasing stack and find the next greater element in O(n) time.

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

var nextGreaterElement = function (nums1, nums2) {
    let map = new Map(), stack = [], n = nums2.length;
    for (let i = n-1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <=nums2[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            map.set(nums2[i], stack[stack.length - 1])
        } else {
            map.set(nums2[i], -1)
        }

        stack.push(nums2[i])
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]);

    }

    return nums1;
};