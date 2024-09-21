// Leetcode Problem:- 153
// Brute force approach:
// Approach:-
// initializes a variable 'min' with a very large value (Infinity) to ensure that any number from the array will be smaller. 
// iterates through the entire 'nums' array starting from index 0.
// During each iteration, checks if the current element is smaller than 'min'. If it is, 'min' is updated to that element. 
// After the loop completes, the minimum value 'min' is returned.
// TC:- O(N) where 'N' is the number of elements in the array and we iterate through the array 'nums once.
// SC:- O(1), as no extra space is used apart from the 'min' variable.

var findMin = function (nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
};

// Optimal approach: Using Binary Search
// Approach:
// use two pointers, 'low' and 'high', are initialized to point to the start and end of the array, respectively.
// First, checks if the array is already sorted (i.e., if the first element is less than or equal to the last element). 
// If true, it directly returns the first element since the array is sorted, and the minimum element is at the first index of array.
// If the array is not sorted, enter inside while loop and calculate the 'mid' index.
// then, check the following conditions:-
//  - If the element at 'mid' is smaller than its previous element, then 'nums[mid]' is the minimum, so we return it.
//  - If the element at 'mid' is greater than its next element, then 'nums[mid + 1]' is the minimum, so we return it.
//  - If the left part of the array (from 'low' to 'mid') is sorted, the minimum must be in the right part, so we move 'low' to 'mid + 1'.
//  - If the right part of the array (from 'mid' to 'high') is sorted, the minimum must be in the left part, so we move 'high' to 'mid - 1'.
// This process continues until we find the minimum element.
// TC:- O(log N), where 'N' is the number of elements in the array and we in the array, as we only traverse through one half of the array, reducing the search space.
// SC:- O(1), as no extra space is used except for pointers.

// Note:- WHY MINIMUM VALUE WILL BE NOT IN SORTED PART:-
// The sorted part of the rotated array only contains elements larger than the minimum because the array has been "rotated."
// When one part of the array is sorted, the minimum must be in the unsorted part because the rotation has shifted the minimum to that unsorted section. 
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  if (nums[low] <= nums[high]) {
    return nums[low];
  }
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    else if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[low] <= nums[mid]) {
      low = mid + 1;
    } else if (nums[mid] <= nums[high]) {
      high = mid - 1;
    }
  }

  return -1;
}