// Leetcode Problem:- 35
// Problem says:- 
// find the index of the target in the sorted array nums. If the target is not found, we need to determine the 
// appropriate index where the target should be inserted while maintaining the sorted order.
// Brute force approach:
// Approach:-
// Use a for loop to iterate through the nums array to check where the target should be placed.
// If the target is found (i.e., nums[i] >= target), return the index 'i' as the target should be inserted at or before it.
// If the loop completes without returning, it means the target is greater than all elements in the array.
// In this case, return nums.length as the insertion index (i.e., the target would be inserted at the end). 
// Time Complexity: O(N), as we may iterate through the entire array in the worst case.
// Space Complexity: O(1), since we are only using a few extra variables (constant space).

var searchInsert = function (nums, target) {
   for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    
    return nums.length;
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