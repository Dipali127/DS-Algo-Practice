// Leetcode Problem:- 852

// Brute Force Approach:
// Approach:
// Run a loop from index 1 to n-2 to iterate through the array and check whether the current element is a
// peak element by comparing it with both of its neighbors.
// If arr[i] is greater than both arr[i-1] and arr[i+1], return i as the peak index.
// If no peak element is found after checking all the elements, return 0 as a default, assuming that the first
// element is the peak element.
// TC:- O(N), since we are iterating through the entire array once to find the peak.
// SC:- O(1), as no additional space is required beyond a few variables.

var peakIndexInMountainArray = function(arr) {
    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            return i;
        }
    }
};

// Optimal Approach:
// Approach:
// Initialize two pointers, 'low' and 'high', where 'low' starts at index 0 (the beginning of the array)
// and 'high' starts at the last index of the array (arr.length - 1).
// Calculate the mid index using mid = Math.floor(low + (high - low) / 2).
// Compare arr[mid] with arr[mid + 1]:
// - If arr[mid] < arr[mid + 1], it means the peak element lies on the right side of mid, so update low
//   to mid + 1 (move the search to the right half).
// - If arr[mid] > arr[mid + 1], it indicates that the peak element is either at mid or on the left
//   side of mid, so update high to mid (move the search to the left half).
// Continue the loop until 'low < high', which will give the index of the peak element.
// TC:- O(log N), since binary search reduces the search space by half in each iteration.
// SC:- O(1), as no additional space is used other than the variables for pointers.

// Note:- This binary search is not like the usual one where we check if arr[mid] === target or
// return from inside the while loop. Instead, we are trying to find the peak element by
// narrowing down the search area.
// We use low < high in the loop so that the search stops when only one element is left.
// If we used low <= high, it could cause an infinite loop.
// Once low and high point to the same index, we've found the peak element, so we return low (or high)
// as the answer.
// When arr[mid] > arr[mid + 1], it means we're on a descending slope from mid, so the peak could be at
// mid itself. That's why we do high = mid instead of mid - 1; otherwise, we might skip the actual peak.
// If arr[mid] < arr[mid + 1], we're on an ascending slope from mid, so the peak lies on the right side.
// Hence, low = mid + 1.

var peakIndexInMountainArray = function(arr) {
    let low = 0, high = arr.length - 1;

    while(low < high){
        let mid = Math.floor(low + (high - low) / 2);

        if(arr[mid] > arr[mid + 1]){
            high = mid;
        }else{
            low = mid + 1;
        }
    }

    return high;
};