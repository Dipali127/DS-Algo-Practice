// Leetcode Problem: 215
// we have given an array and k which contain the index and we have to return the kth largest value from
// array.
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
// use the Quickselect algorithm, which is similar to Quicksort, but it only partition the array until 
// the kth element reach at its correct position.
// That means, quickSelect doesn't sort the array completely like quicksort do.
// Quick select is not recursive solution, instead it is iterative approach.
// And this iterative approach, after each partition, update low or high to reduce the search space, 
// and in the next iteration, we call the partition function again on the new subarray.

// Time Complexity (TC):
// Worst Case:- O(N^2), occurs when the array is already sorted (either in ascending or descending order).
// In this scenario, partition algorithm will do unnecessary traversal of almost all elements at every 
// recursive call.
// Random pivot reduces the chances of worst case, but it can still occur.
// Best/Average Case: O(N)
// Explanation:
// - Initially, the partition operation takes O(N) time.
// - After partitioning, QuickSelect only recurses into one side of the array.
// - The size of the subarray reduces at each step.
// - So total work becomes: N + N/2 + N/4 + ... = O(N)
// Space Complexity (SC): O(1), because the algorithm is implemented iteratively using a while loop, so 
// there is no recursion stack, and all operations are performed in-place without using extra memory.
// Keep Note:-
// In QuickSelect, we are not recursively calling the array; instead, we are reusing the same array by updating the low
// or high pointers, which reduces the search space. In this way, the partition function traverses at most n elements.
// Just to be clear, the partition function is called multiple times, but each time it operates on the updated subarray.

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

// So, avoid to take pivot as last index element. instead, take randomIndex as pivot index then to resuse
// last index pivot in partition function, swap it with randomIndex.

// Note:- We use arr.length - k because QuickSelect place the pivot element at the correct position where it would be if
// the array were sorted. The k-th largest element is at index n - k in a zero-indexed array, even though
// the whole array is not fully sorted.


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