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
// Best Case TC:- O(N), Explanation:
// O(N):- as in quick select it only sort one part of the array either it is the left or right part of the array and linearly search in one part of the array.
// O(N):- partition function linearly compare and swap will take O(n) complexity.
// Hence, the overall time complexity is O(N) in the best case.
// SC:- O(1), since no additional space is used.

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