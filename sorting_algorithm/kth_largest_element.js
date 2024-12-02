// we have given an array and k which contain the index and we have to return the kth largest value from array.
// Brute force approach:-
// use the built-in `sort` method to sort the array in ascending order.
// return the value at the `arr.length - k` index to get the kth largest element, as arrays are 0-based indexed.
// TC:- O(NLOGN)
let arr =[4,5,10,11,1,3,19,8,7], k = 5;
console.log(kthSmallest(arr,k))
function kthSmallest(arr, k){
    arr.sort((a,b) => a-b)
    return arr[arr.length - k];
}

// Optimal Appraoch:-
// use the Quickselect algorithm, which is similar to Quicksort, but only partitions the array until the 
// kth element reach at its correct position.
// Quickselect repeatedly partitions the array around a pivot until it finds the kth smallest element.
// Time Complexity (TC):
// Worst Case:- O(N^2), occurs when the array is already sorted (either in ascending or descending order).
//  In this scenario, the algorithm will go through each element in the array multiple times, leading to O(N^2).
// Best Case Time Complexity: O(N), Explanation:
// O(logN): Quickselect only needs to search one side of the array (either left or right of the pivot),
// which reduces the search space by half each time, resulting in O(logN) recursive levels in the best case.
// O(N): Partition function itself takes O(N) time, as it linearly compares and swaps elements around the pivot.
// Therefore, the overall time complexity is O(N) + O(logN) ≈ O(N).
// SC:- O(1), since no additional space is used.

// Note:- why arr.length - k hold the kth largest value? => because, In a zero-indexed array, the k-th largest element
// is located at the index arr.length - k. For example, if you want the first largest element, you'd need the element at
// arr.length - 1; for the second-largest element, it’s at arr.length - 2, and so on .

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

function partition(arr, low, high){
    let i = low - 1, pivot = arr[high];
    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            i++;
            let temp = arr[i];
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