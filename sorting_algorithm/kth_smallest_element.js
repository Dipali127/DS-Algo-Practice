// we have given an array and k which contain the index and we have to return the kth smallest value from array.
// Brute force approach:-
// use the built-in `sort` method to sort the array in ascending order.
// return the value at the `k-1` index, since arrays are 0-based indexed.
// TC:- O(NLOGN)
let arr =[4,5,10,11,1,3,19,8,7], k = 6;
function kthSmallest(arr, k){
    arr.sort((a,b) => a-b)
    return arr[k-1];
}

// Optimal Appraoch:-
// I will use the Quickselect algorithm, which is similar to Quicksort, but it doesn't sort the array 
// completely like QuickSort; instead, it only partitions the array until the kth smallest element reaches 
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

// Space Complexity (SC): O(1), because the algorithm is implemented iteratively using a while loop, so 
// there is no recursion stack, and all operations are performed in-place without using extra memory.

// Note:- In the below implementation, pointer 'low' and 'high' stops at same index.

let arr =[4,5,10,11,1,3,19,8,7];
let low = 0, high = arr.length - 1, k = 6;
console.log(kthSmallest(arr, low, high, k))
function kthSmallest(arr, low, high, k){
    while(low < high){
        let pivot = partition(arr, low, high);
        if(pivot === k-1){
            return arr[pivot];
        }else if(pivot < k-1){
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