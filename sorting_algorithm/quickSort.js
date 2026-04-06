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

// Explanation:
// TC (Best and Average Case): O(N log N)
// Explanation:
// - logn:- used by quickSort function to recursively divides the array into subarrays until size of
// array will become 1. That's mean recursive levels can go deep until size of array becomes 1, So
// total levels for division of array into subarray until it reach to 1 is logN.
//
// At each level, the partition function traverses all the elements of the current subarray 
// (which we consider as N) to place the pivot in its correct position.
// So, for logn levels; Time Complexity will be logN * N = NLOGN. 
// QuickSort is not a stable sort.
// In the worst case (highly unbalanced partitions means sorted either in 
// ascending or descending order), time complexity becomes O(N^2).

// Random pivot reduces the chances of worst case, but it can still occur.
// Space Complexity :-
// Best / Average Case: O(log N), since the depth of the recursion stack is log N because
// each recursive call reduces the array roughly by half.
// Worst Case: O(N), since the depth of the recursion stack is N because
// each recursive call reduces the array by only one element.
// In the worst case (highly unbalanced recursion), space complexity becomes O(N).

// About Formula:-  Math.floor(Math.random() * (high - low + 1)) + low;
// Math.random give decimal value between 0 and 1.
// Math.random() * (high - low + 1) → scales decimal value returned by Math.random to a range of size 
// (high - low + 1) which is a decimal value again. 
// Math.floor(...) → converts it into an integer from 0 to high-low.
// + low → shifts the range to [low, high] inclusive.

// Extra for knowledge:
// Recursion Tree (Best Case QuickSort)
// Assume perfectly balanced splits:
// Level 0:                  N
//                         /   \
// Level 1:             N/2     N/2
//                     /  \     /  \
// Level 2:         N/4  N/4  N/4  N/4 
//                  ...
// Level k:        N / 2^k
// How much deep we can divide the above quick sort problem?
// we can divide an array until the size of array becomes one which is equal to N/2^k = 1.

// Solving N/2^k = 1:
// N = 2^k
// Now the variable k is in the exponent, so we can’t solve it using normal algebra.
// Now take log on both sides:
// log N = log(2^k)
// logn = klog2
// k = logN

// Final Calculation
// Number of levels = log N
// Work at each level(traversal by partition function) = N
// Total Time = N * logN = O(NLOGN)

// WORST CASE SCENARIO EXAMPLE:
// worst case occurs when the array is already sorted (either in ascending or descending order).
// In this scenario, partition algorithm will do unnecessary traversal of almost all elements at every 
// recursive call.
// "Highly Unbalanced Partition" means one side has n-1 elements and the other side has 0 elements.
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
// So the total number of comparisons/total worsk done by partition funcation on all levels: n*(n-1)/2 => O(N^2).

// So, avoid to take pivot as last or first index element. instead, take randomIndex as pivot index then 
// to resuse last index pivot in partition function, swap it with randomIndex.

// Extra about space complexity:- 
// Best / Average Case: O(log N), since the depth of the recursion stack is log N because
// each recursive call reduces the array roughly by half.
// Worst Case: O(N), since the depth of the recursion stack is N because
// each recursive call reduces the array by only one element.

// STRUCTURE OF FUNCTION STORE ON STACK:-
// (1) Best / Average Case (Balanced Partition)
// Level 0:                  N
//                        /   \
// Level 1:             N/2     N/2
//                      /  \     /  \
// Level 2:         N/4  N/4  N/4  N/4
// ...
// Level k:        N / 2^k

// Depth of recursion = k
// Solve N / 2^k = 1 → k = log2 N
// Maximum number of active calls on stack = log N
// Space Complexity = O(log N)

// (2) Worst Case (Highly Unbalanced Partition)
// Example: sorted array with last element as pivot:
// Level 0: quickSort(0, n-1)
// Level 1: quickSort(0, n-2)
// Level 2: quickSort(0, n-3)
// ...
// Level n-1: quickSort(0, 0)
// Each recursive call reduces array by only 1 element
// Depth of recursion = N
// Maximum number of active calls on stack = N
// Space Complexity = O(N)

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