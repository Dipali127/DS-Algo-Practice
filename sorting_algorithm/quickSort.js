// QuickSort is based on the "divide and conquer" algorithm, where the array is divided into subarrays around a pivot index.
// To get the pivot index, the QuickSort calls the "partition function" which picks an element as a pivot and sorts the
// array around the pivot such that all elements less than the pivot are left of the pivot, and all elements greater than
// the pivot are right of it.
// Time Complexity (TC):
// Worst Case:- O(N^2), occurs when the array is already sorted (either in ascending or descending order).
// Best Case TC:- O(N log N), Explanation:
// O(log N):- when the pivot divides the array evenly into two halves, ensuring the recursion depth is logarithmic.
// O(N):- at each level of recursion, the partitioning step takes linear time (O(N)).
// Hence, the overall time complexity is O(N log N) in the best case.

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