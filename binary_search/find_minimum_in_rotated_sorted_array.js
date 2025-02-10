// Leetcode Problem:- 153
// Brute force approach:
// approach:
// i will sort the array nums in ascending order so that the minimum value is at the first position of the nums array,
// Then, I will return the first element.
// TC:- O(NLOGN), to sort the array nums in ascending order.
// SC:- O(1), since no additional space is used.
var findMin = function(nums) {
  nums = nums.sort((a,b) => a - b);
  return nums[0];
};


// optimal approach 1:
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

// optimal approach2:-
// approach:
// i will use of binary search to find the minimum value in the nums array.  
// i will use two pointers, low and high, where low is initialized with 0 and high is initialized
// with the last index of the nums array.  
// i will run a while loop until low is less than high. First, i will find the mid index and then check if the value at mid is greater than the value at high.  
// If nums[mid] > nums[high], it means the left part of the array is already sorted, and the minimum value must be in the right part of mid because the given array nums is right rotated and intially array is in ascending order.  So, I will update low to mid + 1.  
// Otherwise, if nums[mid] <= nums[high], it means the right part of the array is not sorted, and it might be possible that the value pointed by mid itself is the minimum among all the values in the array, or the minimum value could be in the left part of mid. So, I will update high to mid.  
// Once low is greater than or equal to high, the loop ends, and the value pointed by low has the minimum value.  
// I will return nums[low] because it might be possible that high moves before low, and the element before low has a greater value Thus, nums[low] is the minimum element.  
// TC: O(log N), as only half of the array is iterated in each step.  
// SC: O(1), since no additional space is used.  
var findMin = function(nums){
  let low = 0, high = nums.length - 1;
  while(low < high){
     let mid = Math.floor(low + (high - low)/2);
     if(nums[mid] > nums[high]){
      low = mid+1;
     }else{
      high = mid;
     }
  }

  return nums[low]; 
}