// Leetcode Problem:- 162
// The goal is to find a peak element in the array. A peak element is an element that is greater than both of its 
// neighbors (the elements directly before and after it).
// Brute force approach:
// approach:-
// If the array has only two elements(size of array is 2), compare the first and second elements:-
//     - check if the first element is a peak by comparing it with the second element. If nums[0] > nums[1], return 0.
//     - check if the last element is a peak by comparing it with the second-to-last element. If nums[n-1] > nums[n-2], 
// return n-1.
// otherwise(if size of array is more than 2)(from index 1 to n-2), i will use of a loop to iterate through the array and
// check if the current element is a peak element by comparing it with both of its neighbors:
// if nums[i] is greater than or equal to both nums[i-1] and nums[i+1], return i as the peak index.
// if no peak element is found after checking all elements, return 0 as a default, assuming that the first element is the
// peak element.
// TC:- O(N), since we are iterating through the entire array once to find the peak.
// SC:- O(1), as no additional space is required beyond a few variables.
var findPeakElement = function (nums) {
    let n = nums.length;
    if (nums[0] > nums[1]) {
        return 0;
    }
    if (nums[n - 1] > nums[n - 2]) {
        return n - 1;
    }
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] <= nums[i] && nums[i + 1] <= nums[i]) {
            return i;
        }
    }
    return 0;
};

// Optimal Approach: Using Binary Search
// approach:-
// initialized two pointer 'low' and 'high' as 'low' starts at index 0 (beginning of the array) and 'high' 
// starts at the last index of the array (nums.length - 1). 
// Calculate the mid index using mid = Math.floor(low + (high - low) / 2).
// Compare nums[mid] with nums[mid + 1]:-
// - If nums[mid] < nums[mid + 1], it means the peak element lies on the right side of mid, so update low to mid + 1 
// (move the search to the right half).
// - If nums[mid] > nums[mid + 1], it indicates that the peak element is either at mid or on the left side of mid, 
// so update high to mid (move the search to the left half).
// Continue the loop until 'low < high', which will give the index of the peak element.
// TC:- O(log n), since the binary search reduces the search space by half in each iteration.
// SC:- O(1), as no additional space is used other than the variables for pointers.
// Note:- This binary search is not like the usual one where we check if nums[mid] === target or returning something 
// inside from the while loop, Instead, we are trying to find the peak element by narrowing down the search area.
// We use low < high in the loop so that the search stops when only one element is left.
// If we used low <= high, it could cause an infinite loop.
// Once low and high point to the same index, it means we’ve found the peak element, so we return low as the answer.

var findPeakElement = function(nums) {
  let low = 0, high = nums.length-1;
  while(low < high){
   let mid = Math.floor(low + (high-low)/2);
   if(nums[mid] > nums[mid+1]){
       high = mid;
   }else{
       low = mid+1;
   }
  }

  return low;
};