// Leetcode Problem:- 33
// Brute force approach:
// Approach:-
// use of a 'for' loop to iterate through the entire array 'nums'.
// During each iteration, checks if the current element is equal to the target.
// If the target is found, returns the index where the target element is located.
// If the loop completes without finding the target, returns -1 to indicate the target is not present.
// TC:- O(N), where 'N' is the length of the array, since we might need to check every element.
// SC:- O(1), since only a few pointers are used for the search. 

var search = function(nums, target) {
  for(let i=0;i<nums.length;i++){
      if(nums[i] == target){
          return i;
      }
  }

  return -1;
};

// Optimal Approach: Using Binary Search on a Rotated Sorted Array
// Approach:
// i will use binary search and i will use two pointers 'low' and 'high' where low is initialized with 0  
// and high is initialized with nums.length - 1.  
// i will run a while loop until 'low <= high' and calculate the 'mid' index to check if the target is at mid.  
// if the target is found at 'mid', return the mid index immediately.  
// if not, then i will find out which part of the array is sorted (left or right) of mid because binary search can be
// applied only on sorted part of the array.  
// - if the left half (from 'low' to 'mid') is sorted, check if the target lies within that range. 
//   - if the target is within this range, update 'high' to mid - 1 to search the left half.  
//   - otherwise, update 'low' to mid + 1 to search the right half.  
// - if the right half (from 'mid' to 'high') is sorted, check if the target is in this range.  
//   - if the target is within this range, update 'low' to mid + 1 to search the right half.  
//   - otherwise, update 'high' to mid - 1 to search the left half.  
// continue this process until the target is found or 'low' exceeds 'high'.  
// if the target is not found, return -1.  
// TC: O(log N), At every iteration, search space is discarded, so the search space is reduced by approximately 
// half, giving a time complexity of O(log N).
// SC: O(1), since only a few pointers are used for the search. 

// Note: 
// Why do you use target < nums[mid] instead of target <= nums[mid]?
// Because before checking the sorted half, I've already checked whether nums[mid] is equal to the target.
// If nums[mid] === target, I immediately return mid. Therefore, when deciding which half to search, 
// I know the target cannot be at mid anymore, so I exclude mid from the range by using < or >.



var search = function(nums, target) {
  let low = 0, high = nums.length-1;
  while(low <= high){
      let mid = Math.floor(low + (high - low)/2);
      if(nums[mid] === target){
          return mid;
      }else if(nums[low] <= nums[mid]){
          if(target >= nums[low] && target < nums[mid]){
              high = mid-1;
          }else{
              low = mid+1;
          }
      }else if(nums[mid] <= nums[high]){
          if(target > nums[mid] && target <= nums[high]){
              low = mid+1;
          }else{
              high = mid-1;
          }
      }
  }

  return -1;
};