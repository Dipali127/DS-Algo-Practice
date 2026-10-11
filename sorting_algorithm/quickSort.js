// Leetcode problem :- 912
// QuickSort is based on the "divide and conquer" algorithm, which recursively divides the array into
// subarrays around a pivot such that all elements who are on the left of the pivot are less than the 
// pivot, and all elements who are on the right of the pivot are greater than the pivot.

// The partition function selects any random index from array as pivot index and place the value at pivot
// index at it's correct position, such that all the elements to the left of pivot are less than it and
// all the elements to the right of pivot are greater than it, but it doesn't means that value on the left
// of pivot and right of pivot are sorted.

// Time Complexity(Best and Average Case): O(NlogN)
// Explanation:
// - logn:- used by quickSort function to recursively divide the array into subarrays until the size of
// array becomes 1.
// And at each recursive level, partition function traverses through all the elements of the current 
// subarray to place the pivot index element at its correct position, which take a time complexity of O(N).
// So, for logN levels, Time Complexity will be LOGN * N = NLOGN.


//                                 Time Complexity Explanation
// let's Suppose we have an array of size 'N'and Quick Sort recursively divides the array into two roughly 
// equal subarrays until the size of each subarray becomes 1.
// So, recursion tree for diving array of size 'N' will be:-

// Level 0:                  N
//                         /   \
// Level 1:             N/2     N/2
//                     /  \     /  \
// Level 2:         N/4  N/4  N/4  N/4 
//                  ...
// Level k:        N / 2^k

// The above recursion tree goes deep until size of array becomes 1 which is equal to N/2^k = 1.

// Solving N/2^k = 1:
// N = 2^k

// Now the variable k is in the exponent, so we can’t solve it using normal algebra.
// Now take log on both sides:
// log N = log(2^k)
// logn = klog2
// k = logN

// Final Calculation
// Number of levels = logN
// Work at each level(traversal by partition function) = N
// Total Time = N * logN = O(NLOGN)

// Worst Case Time Complexity: O(N^2), Explanation:-
// With a random pivot, the worst-case time complexity is still O(N²), but the probability of encountering
// the worst case is very low. 

// WORST CASE SCENARIO EXAMPLE WHEN WE TAKE LAST INDEX OF ARRAY AS PIVOT INSTEAD OF RANDOM INDEX:
// worst case occurs when the array is already sorted (either in ascending or descending order) and
// we are taking last index of array as pivot.
// In this scenario, partition algorithm will do unnecessary traversal of almost all elements at every 
// recursive call.
// This we call "Highly Unbalanced Partition" means one side has n-1 elements and the other side has 0 
// elements.

// Let's take an example:-
// [7, 6, 5, 4, 3, 2, 1]
//                 ↑ pivot = 1
// After partition:
// No element < pivot
// Pivot moves to start
// [1, 6, 5, 4, 3, 2, 7]
// ↑ pivot index = 0

// Now split:
// Left side → [] → 0 elements
// Right side → [6,5,4,3,2,7] → n-1 elements

// At each recursive level in the worst case (e.g., sorted array with last element as pivot):
// Level 1: n - 1 comparisons
// Level 2: n - 2 comparisons
// Level 3: n - 3 comparisons
// ...
// Level n-1: 1 comparison
// So the total number of comparisons/total work done by partition funcation on all levels:
// n-1 + n-2 + n-3 + .......1 => 1 + 2 + 3 + ..... n-1 which is sum of natural numbers.
// Therefore, Time Complexity = N*(N-1)/2 => O(N^2).

// So, avoid to take pivot as last or first index element. instead, take randomIndex as pivot index then 
// to resuse last index pivot in partition function, swap it with randomIndex.

// Question:-
// If the pivot index is any random index from the array, then why do we use the last index as the pivot?
// I not using last index as pivot index, i am using random index as pivot index and swap random index with
// last index element to reuse the standard partition.

// Space Complexity :-
// Best / Average Case: O(log N), since the depth of the recursion stack is log N because
// each recursive call reduces the size of array roughly by half.
// Worst Case: O(N), since the depth of the recursion stack is N because
// each recursive call reduces the array by only one element.

// QuickSort is not a stable sort.
// Quick Sort is not stable because the swapping performed inside the "partition function" can change the 
// relative order of equal elements.

// About Formula:-  Math.floor(Math.random() * (high - low + 1)) + low;
// Math.random() give decimal value between 0 and 1.
// Math.random() * (high - low + 1) → scales that decimal value returned by Math.random to a range of 
// size (high - low + 1) which is again a decimal value. 
// Math.floor(...) → converts decimal value into an integer value from 0 to high-low.
// + low → shifts that range between 'low' and 'high' where 'low' and 'high' are inclusive.

// Solution:-
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