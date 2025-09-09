// QuickSort is based on the "divide and conquer" algorithm, which recursively divides the array into subarrays around a 
// pivot such that all elements to the left of the pivot are less than the pivot, and all elements to the right of the 
// pivot are greater than the pivot.

// The partition function selects the last element as the pivot and places it in its correct position,
// such that all elements to the left of the pivot are less than it, and all elements to the right are greater.

// Time Complexity (TC):
// Worst Case: O(N^2), occurs when the array is already sorted (either in ascending or descending order).
// Best Case TC: O(N log N)
// Explanation:
// O(log N): when the pivot divides the array evenly into two halves, ensuring the recursion depth is logarithmic.
// O(N): at each level of quicksort(), the partition function takes linear time complexity (O(N)).
// Hence, the overall time complexity is O(N log N) in the best case.
// Quick Sort is not stable sort.
// Space Complexity (SC): O(log N) due to the recursive function call stack.


let arr = [10,80,30,90,40,50,70];
let low = 0, high = arr.length -1;
console.log(quickSort(arr, low, high));
function quickSort(arr, low, high){
    if(low < high){
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot-1);
        quickSort(arr, pivot+1, high);
    }
    
    return arr;
}

function partition(arr, low, high){
    let i = low - 1, pivot = arr[high];
    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            i++;
            let temp= arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    i++;
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    return i;
}