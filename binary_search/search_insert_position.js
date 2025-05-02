// Leetcode Problem:- 35
// Problem says:- 
// find the index of the target in the sorted array nums. If the target is not found, we need to determine the 
// appropriate index where the target should be inserted while maintaining the sorted order.
// Brute force approach: 
// approach:-
// use of a for loop to iterate through the nums array to check if the target exists.
// if the target is found, update the variable 'ind' with the index 'i' where the target is located.
// if the target is not found after the first iteration ('ind' remains unchanged), iterate through the array again to
// find the appropriate insertion index for the target.
// for each element in nums, check if it is less than the target.
// if nums[i] < target, the next position (i + 1) will be the correct place to insert the target. Update 'ind' accordingly.
// if ind is still 0, return 0 (indicating the target would be inserted at the beginning).
// otherwise, return 'ind' as the index where the target is either found or should be inserted.
// TC:- O(N), as we are iterating through the array twice in the worst case (once to check for the target and again to 
// find the appropriate insertion index).
// SC:- O(1) since, we are only using a few extra variables (constant space).

var searchInsert = function (nums, target) {
    let ind = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        ind = i;
      }
    }
    if (!ind) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
          ind = i + 1;
        }
      }
    }
    if (ind !== 0) {
      return ind;
    }
    return 0;
  };
  
  
  // Optimal Approach:
  // approach:-
  // initialize two pointers:- low (starting at 0) and high (starting at nums.length - 1).
  // calculate the middle index, mid, using the formula: mid = Math.floor(low + (high - low) / 2). This avoids potential 
  // overflow that could occur when using (low + high) / 2 in some languages.
  // if nums[mid] is equal to target, return mid because the target is found.
  // else if nums[mid] is less than target, set low = mid + 1 to search the right half of the array (since target must be in the higher half).
  // else, set high = mid - 1 to search the left half of the array (since the target must be in the lower part).
  // continue the loop until low exceeds high.
  // if the loop ends without finding the target, return low because it represents the position where the target should
  //  be inserted to maintain the sorted order.
  // TC:- O(LOGN), as we either search in left or right part of the array. 
  // SC:- O(1), since no additional space is used apart from few pointers. 
  
  var searchInsert = function (nums, target){
      let low = 0, high = nums.length-1;
      while(low<=high){
          let mid = Math.floor(low+(high-low)/2);
          if(nums[mid] === target){
              return mid;
          }else if(nums[mid]<target){
              low = mid+1;
          }else{
              high = mid-1;
          }
      }
  
      return low;
  }