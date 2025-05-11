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
// TC: O(N^2), since we use a nested loop to find the next greater element for each element in nums2.
// In the worst case, the inner loop may iterate through all remaining elements of nums2.
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
// approach: 
// instead of finding the next greater element for nums2 through nested loop which increase the time complexity,
// i will use a hash map and a stack to store the next greater element of nums2 efficiently.  
// while processing nums2, I will determine the next greater element for each value of nums2 and store it in the hash map.  
// if a next greater element is found, i will store it in the hash map; otherwise, I will store -1 for that element.  
// then, I will iterate through nums1 and retrieve the next greater elements from the hash map.  
// finally, after finding next greater element for each element of nums1 i will return nums1.
// TC: O(N), Explanation:  
// - O(N) to iterate through each value of nums2 and store the next greater element in the hash map.  
// - O(N) to iterate through each value of nums1 and retrieve the next greater element from the hash map.  
// - Overall TC: O(N) + O(N) = O(2N) = O(N).  
// SC: O(N), to store the next greater elements of nums2 in the hash map.  

var nextGreaterElement = function (nums1, nums2) {
    let map = new Map(), stack = [], n = nums2.length;
    for (let i = n-1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
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