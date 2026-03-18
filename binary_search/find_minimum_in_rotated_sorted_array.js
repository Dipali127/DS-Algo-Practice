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

// optimal approach 2:
// approach:
// I will use binary search to find the minimum value in the nums array.
// I will use two pointers, low and high, where low is initialized to 0 
// and high is initialized to the last index of the nums array.
// I will run a while loop until low is less than high.
// First, I will find the mid index and then check if the value at mid 
// is greater than the value at high.

// If nums[mid] > nums[high], it means the minimum value lies in the right part 
// of the array (after mid), because the value at mid is greater than the value 
// at high, indicating the rotation point is to the right.
// So, update low = mid + 1.

// Otherwise, if nums[mid] <= nums[high], it means the right part from mid to high 
// is sorted, and the minimum value could be at mid or in the left part.
// So, update high = mid.

// Once low is equal to high, the loop ends, and the pointer low will be 
// pointing to the minimum value.

// I will return nums[low] because it points to the smallest element in the array.

// TC: O(log N), as the search space is halved in each step.
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