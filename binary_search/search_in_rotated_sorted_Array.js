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
// use of two pointers 'low' and 'high' to perform binary search.
// While 'low <= high', calculate the 'mid' index to check if the target is at mid.
// if the target is found at 'mid', return the mid index immediately.
// if not then determine which part of the array is sorted (left or right).
// - If the left half (from 'low' to 'mid') is sorted, check if the target lies within that range.
//   - If the target is within this range, update 'high' to mid - 1 to search the left half.
//   - Otherwise, update 'low' to mid + 1 to search the right half.
// - If the right half (from 'mid' to 'high') is sorted, check if the target is in this range.
//   - If the target is within this range, update 'low' to mid + 1.
//   - Otherwise, update 'high' to mid - 1 to search the left half.
// continue this process until the target is found or 'low' exceeds 'high'.
// TC:- O(LOGN), as binary search divides the array in half in each iteration.
// SC:- O(1), since only a few pointers are used for the search.

var search = function(arr,target) {
let low = 0;
let high = arr.length-1;
while(low<=high){
  let mid = Math.floor(low+(high-low)/2);
  if(arr[mid] === target){
    return mid;
  }
  else if(arr[low]<=arr[mid]){
    if(target<arr[mid] && target>=arr[low]){
      high = mid-1
    }else{
      low=mid+1;
    }
  }else if(arr[mid]<=arr[high]){
    if(target>arr[mid] && target<=arr[high]){
      low=mid+1;
    }else{
      high=mid-1;
    }
  }
}
return -1; 
}