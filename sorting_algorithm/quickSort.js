// Leetcode problem :- 912
// QuickSort is based on the "divide and conquer" algorithm, which recursively divides the array into
// subarrays around a pivot such that all elements who are on the left of the pivot are less than the 
// pivot, and all elements who are on the right of the pivot are greater than the pivot.

// The partition function selects any random index from array as pivot index and place value at pivot 
// index at it's correct position, such that all elements to the left of the pivot are less than it, 
// and all elements to the right are greater but it doesn't means that value on the left of pivot and 
// right of pivot are sorted .

// If the pivot index is any random index from the array, then why do we use the last index as the pivot?
// I use a random pivot to avoid worst-case performance and swap it to the end to reuse the
// standard partition logic.

// Time Complexity (TC):
// Worst Case: O(N^2), occurs when the array is already sorted (either in ascending or descending order)
// and the random pivot consistently picks the leftmost or rightmost index from the array.
// Best Case TC: O(N log N)
// Explanation:
// - O(log N): used by QuickSort to recursively divide the array into two halves.
// - O(N): at each level of QuickSort, the partition function takes linear time complexity (O(N)).
// Hence, the overall time complexity is O(N log N) in the best case.
// Quick Sort is not stable sort.
// Space Complexity (SC): O(log N) due to the recursive function call stack.


var sortArray = function (nums) {
    let low = 0, high = nums.length - 1;
    return quickSort(nums, low, high);
    function quickSort(nums, low, high) {
        if (low < high) {
            let pivot = partition(nums, low, high);
            quickSort(nums, low, pivot - 1);
            quickSort(nums, pivot + 1, high);
        }

        return nums;
    }
   

    function partition(arr, low, high) {
        let randIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        [arr[randIndex], arr[high]] = [arr[high], arr[randIndex]]; // swap random pivot to end
        let pivot = arr[high];
        let i = low, j = low - 1;
        for (i; i < high; i++) {
            if (arr[i] < pivot) {
                j++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        j++;
        let temp = arr[j];
        arr[j] = arr[high];
        arr[high] = temp;
        return j;
    }
};