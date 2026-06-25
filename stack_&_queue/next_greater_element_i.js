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

// Optimal Approach 1: Using right to left traversal
// Approach:
// Instead of finding the next greater element for nums2 using a nested loop, which increases the time
// complexity,
// I will use of a hash map and a stack to store the next greater elements for each elements of nums2 efficiently.
// While traversing through nums2, I will determine the next greater element for each element and store it in the
// hash map.
// If a next greater element is found, I will store it in the hash map; otherwise, I will store -1 for
// that element.
// Then, I will iterate through nums1 and retrieve the next greater elements from the hash map.
// Finally, after getting the next greater element for each element of nums1, I will return nums1.

// Time Complexity: O(N+M)
// - O(N) to iterate through nums2 and compute the next greater element for each value using a stack.
// - O(M) to iterate through nums1 and retrieve values from the hash map.
// Note: Even though a while loop is used inside the for loop,
//       the total number of operations is still O(N) because each element is pushed and popped
//       from the stack at most once.

// Space Complexity: O(N), in the worst case, the stack might store all elements of the array if the 
// given array is in increasing order like : [1, 2, 3, 4].
// We iterate from right to left, and for each element:
// - We remove (pop) only those elements from the stack that are smaller than or equal to the current value.
// - If greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - O(N) for hash map to store next greater elements of nums2 along with nums2 elements.
// - Total auxiliary space: O(N).We traverse from right to left because for every element, we need to find the next 
// greater element on its right side. By moving from right to left, the stack already contains the valid
// elements that can act as the next greater element for the current element, because all smaller or equal
// elements are removed.
// This allows us to efficiently maintain a monotonic decreasing stack and find the next greater element
// in O(n) time.

// Note: 
// We traverse from right to left because, for every element, we need to find the next greater element on
// its right side.
// By moving from right to left, the stack already maintains elements that can be greater for the current
// traversed element or left-side untraversed elements of the current traversed element.
// This allows us to efficiently maintain a monotonic decreasing stack[from bottom to top] and find the
// next greater element in O(n) time.

// In the above solution, what is happening:
// Before pushing the current element:
// We remove all elements that are smaller than or equal to the current element.
// Therefore, if the stack is not empty, the top element is greater than the current element.
// When the current element is pushed, it becomes smaller than the previous top.
// Because of this, the stack always contains elements in strictly decreasing order (from bottom to top).

// Example to see that how stack maintain monontonic decreasing order even if the given array contains
// random order of elements:-

// Consider [4, 1, 7, 3, 9, 2].
// Since we traverse from right to left:
// Push 2 → Stack: [2]
// Encounter 9 → Pop 2, Push 9 → Stack: [9]
// Encounter 3 → Push 3 → Stack: [9, 3]
// Encounter 7 → Pop 3, Push 7 → Stack: [9, 7]
// Encounter 1 → Push 1 → Stack: [9, 7, 1]
// Encounter 4 → Pop 1, Push 4 → Stack: [9, 7, 4]


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

// Optimal Approach: Using left to right traversal
// Approach:
// Instead of finding the next greater element for nums2 using a nested loop, which increases the time
// complexity,
// I will use a hash map to store the next greater elements for each element of nums2.
// And I will take a stack to store the indices of the elements whose next greater element is not found or
// who are waiting for their next greater element.
// I will traverse the given array nums2 from left to right to find the next greater element for the 
// elements who are on the left of the current traversed element.
//
// Inside the for loop:-
// Run a while loop and check if the top index element of the stack is smaller than the current traversed
// element. It means the current traversed element is the next greater element for the top index element 
// of the stack. If this is the case, then pop the top index from the stack and add the current traversed
// element in the map for that index.
//
// Continue this process until the stack becomes empty.
// But if the top index element of the stack is not smaller than the current traversed element, 
// then skip it and add the index of the current traversed element onto the stack.
// Repeat this process until I reach the last element of the array.
// Finally, return the result array containing next greater elements for each element of the array.
//
// Time Complexity: O(N + M), Explanation:-
// - O(N) to iterate through the array once from left to right, and each element is pushed to the stack
//    and popped out of the stack at most once.
// - O(M) to iterate through nums1 and retrieve values from the hash map to update nums1 with their next
//    greater element.
// Note: Even though a while loop is used inside the for loop,
//       the total number of operations is still O(N) because each element is pushed and popped
//       from the stack at most once.
//
// Space Complexity: O(N), in the worst case, the stack might store all elements of the given array.
// We iterate from left to right, and for each element:
// - We remove (pop) only those elements from the stack that are smaller than the current value.
// - If no greater element exists in the stack (i.e., the stack is empty initially or after popping),
//   then the current element will be pushed into the stack, and later elements may not remove it,
//   resulting in storing all elements in the stack.
// - The result array also uses additional space to store the next greater elements.
// - O(N) for the stack used while processing the array.
// - Total auxiliary space: O(N).
//
// Note:-
// In left → right traversal, the current element may be the next greater element for some elements on the
// left that are still waiting for a greater value in stack.
//
// Why indices and not elements like in right to left traversal?
// Because in right to left traversal, the stack already maintains/store elements that can be greater for 
// current traversed element or left-side untraversed elements of the current traversed element.
// But in left to right traversal, the next greater element is “unknown in advance”, that's why the stack
// stores the indices of those elements whose next greater element is still not found and storing index 
// will help to easily know about index of the element store on stack so that we can easily get element 
// and store its next greater element in hash map.
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

var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    for(let i = 0; i < nums2.length; i++){
        while(stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]){
            map.set(nums2[stack[stack.length - 1]], nums2[i])
            stack.pop();
        }

        stack.push(i);
    }

    for(let i = 0; i < nums1.length; i++){
        if(map.has(nums1[i])){
            nums1[i] = map.get(nums1[i]);
        }else{
            nums1[i] = -1;
        }
    }

    return nums1;
};
