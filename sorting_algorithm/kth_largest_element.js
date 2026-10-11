// Leetcode Problem: 215
// we are given an array and k, and we have to return the kth largest value from the array.
// Brute force approach:-
// use the built-in `sort` method to sort the array in descending order.
// return the value at the `nums[k-1]` index to get the kth largest element, since arrays are 0-based 
// indexed.
// TC:- O(NLOGN)
 var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b-a);
    return nums[k-1]
};

// Optimal Appraoch:-
// I will use the Quickselect algorithm, which is similar to Quicksort, but it doesn't sort the array 
// completely like QuickSort; instead, it only partitions the array until the kth largest element reaches 
// its correct position.
// In this implementation, QuickSelect is iterative rather than recursive, where we are reusing the same
// array by updating the low or high pointers, which reduces search space.
// In this way, the partition function traverses at most 'n' elements.
// Just to be clear, the partition function is called multiple times, but each time it operates on the
// same updated subarray.

// Time Complexity (TC):
// Best/Average Case: O(N), because after each partition, QuickSelect reduces the search space by 
// continuing only one side of the array.
// Explanation:
// - Initially, the partition function traverses through all the elements of the array which take O(N) time.
// - After first partitioning, QuickSelect only recurses into one side of the array.
// - The size of the subarray reduces at each step.
// - So total work becomes: N + N/2 + N/4 + ... = O(N)

// Worst Case:- O(N^2), occurs when the array is already sorted (either in ascending or descending order).
// In this scenario, partition algorithm will do unnecessary traversal of almost all elements at every 
// iteration.
// Random pivot reduces the chances of worst case, but it can still occur.

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

// So, avoid to take pivot as last index element. instead, take randomIndex as pivot index then to reuse
// last index pivot in partition function, swap it with randomIndex.

// Space Complexity (SC): O(1), because the algorithm is implemented iteratively using a while loop, so 
// there is no recursion stack, and all operations are performed in-place without using extra memory.

// Why arr.length - k?
// Because arrays are zero-indexed. If we consider the array sorted in ascending order, the largest element
// is at index n-1, the second largest is at n-2, and so on.
// Therefore, the kth largest element is at index n-k, where n is the array length.

// Note:- In the below implementation, pointer 'low' and 'high' stops at same index.

let arr =[4,5,10,11,1,3,19,8,7];
let low = 0, high = arr.length - 1, k = 5;
console.log(kthLargest(arr, low, high, k))
function kthLargest(arr, low, high, k){
    while(low < high){
        let pivot = partition(arr, low, high);
        if(pivot === arr.length - k){
            return arr[pivot];
        }else if(pivot < arr.length - k){
            low = pivot + 1;
        }else{
            high = pivot - 1;
        }
    }
    
    return arr[low];
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