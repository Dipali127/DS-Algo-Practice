// Leetcode Problem:- 81

// Brute force approach:
// Approach:-
// iterate through the given array 'nums'and for each element, check if the current value is equal to the target.
// if a match is found, return true.
// if the loop completes without finding the target, return false.
// TC:- O(N), as we iterate through each element of the array once.
// SC:- O(1), since no additional space is used.

var search = function (nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return true;
        }
    }

    return false;
}


// Optimal Approach: Using Binary Search
// Approach:-
// in each iteration, calculate the middle index 'mid'. If the element at 'mid' is equal to the target, 
// return true.
// if the values at low, mid, and high are all the same (nums[low] === nums[mid] && nums[mid] === nums[high]), 
// this indicates duplicates, which make it unclear which half is sorted. 
// To handle this, increment low and decrement high to shrink the search range and 
// bypass the duplicates. For example: [3, 1, 2, 3, 3, 3, 3] — Here, low, mid, and high all have the same value.
// If we incorrectly assume that the range from low to mid is sorted, it could lead to incorrect results. 
// Thus, shrinking the search space helps to avoid such cases.
// Otherwise, find which half of the array is sorted:
//  - If nums[low] <= nums[mid], the left half is sorted, Check if the target lies within this sorted range If it does, 
// update high = mid - 1; otherwise, update low = mid + 1.
// - If nums[mid] <= nums[high], the right half is sorted. Check if the target lies within this range. If it does,
// update low = mid + 1; otherwise, update high = mid - 1.
// repeat the process until low exceeds high, and return false if the target is not found.
// TC:- O(N), as in the worst case, due to duplicates, we may need to linearly shrink the search space.
// But in the average or best-case, it's O(log n) when the array has few or no duplicates.
// SC:- O(1), since no additional space is used.  

// Note:-
// (i) In the case of duplicates, we are not removing all the duplicates at once. Instead, we increment low by 1 
// and decrement high by 1. We keep doing this again and again in each loop after finding the mid index each time.
// If the whole array has the same number, we shrink the range one step at a time, which takes many steps. 
// That’s why the worst-case time becomes O(n).
// (ii) Here, In short, I first identify which half of the array is sorted, 
// since binary search works only on sorted data.
// If the target lies within that sorted half, I search there; 
// otherwise, I move to the other half.

var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low++;
            high--;
        } else if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (nums[mid] <= nums[high]) {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
};