// Leetcode Problem:- 162
// The goal is to find a peak element in the array. A peak element is an element that is greater than both of its 
// neighbors (the elements directly before and after it).
// Brute force approach:
// approach:-
// If the array has only two elements, compare the first and second elements:-
//     - check if the first element is a peak by comparing it with the second element. If nums[0] > nums[1], return 0.
//     - check if the last element is a peak by comparing it with the second-to-last element. If nums[n-1] > nums[n-2], return n-1.
// for all other elements (from index 1 to n-2), use a loop to iterate through the array and check if the current element is a 
// peak by comparing it with both its neighbors:
// if nums[i] is greater than or equal to both nums[i-1] and nums[i+1], return i as the peak index.
// if no peak element is found after checking all elements, return 0 as a default, assuming that the first element is the peak.
// TC:- O(N), since we are iterating through the entire array to find the peak.
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
// initialized two pointer 'low' and 'high' as 'low' starts at index 0 (beginning of the array) and 'high' starts at the
// last index of the array (nums.length - 1). 
// Calculate the mid index using mid = Math.floor(low + (high - low) / 2).
// Compare nums[mid] with nums[mid + 1]:-
// - If nums[mid] < nums[mid + 1], it means the peak element lies on the right side of mid, so update low to mid + 1 (move the search to the right half).
// - If nums[mid] > nums[mid + 1], it indicates that the peak element is either at mid or on the left side of mid, so update high to mid (move the search to the left half).
// Continue the loop until 'low < high', which will give the index of the peak element.
// O(log n), since the binary search reduces the search space by half in each iteration.
// O(1), as no additional space is used other than the variables for pointers.

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