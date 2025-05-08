// leetcode problem:
// Brute force approach:
// approach:-
// i will use a result array to store the next greater element for each element in the nums1 array.
// i will iterate through each value in nums1, and for each value:
// i will take a variable found, initially set to false, to track whether I have found the element in nums2.
// i will take another variable nextGreater, initially set to -1, to store the next greater element if found.
// For each element in nums1, I will iterate through each value in nums2 and check if the current iterated value
//  matches the current value of nums1.
// Once I find the matching element in nums2, I will set found = true. Then, I will continue iterating through nums2 
// to check if there is a greater element. If found, I will update nextGreater and break the loop.
// Finally, I will push nextGreater into the result array.
// TC: O(N * M), where N is the length of nums1 and M is the length of nums2.  
//    - For each element in nums1, we iterate through nums2 to find the next greater element.  
//    - In the worst case, for each element in nums1, we might iterate through all elements of nums2, making the complexity O(N * M).  
// SC: O(N), where N is the length of nums1.  
//    - We use a result array to store the next greater element for each element in nums1.  
//    - No additional data structures (except a few variables), so the space complexity is O(N).  

var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let nextGreater = -1;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                found = true;
            }

            if (found && nums2[j] > nums1[i]) {
                nextGreater = nums2[j];
                break;
            }
        }

        result.push(nextGreater);
    }

    return result;
};


// Optimal Approach:  
// instead of checking each element of nums1 in nums2, which increases the time complexity,  
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

var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    let n = nums2.length;
    for(let i = n - 1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1] <= nums2[i]){
            stack.pop();
        }

        if(stack.length > 0){
            map.set(nums2[i] , stack[stack.length - 1]);
        }else{
            map.set(nums2[i], -1);
        }

        stack.push(nums2[i]);
    }

    for(let i = 0; i < nums1.length; i++){
        nums1[i] = map.get(nums1[i]);
    }

    return nums1;
};