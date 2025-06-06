// In every pass, Bubble Sort compares the adjacent elements and swaps their positions if they are not in 
// the intended order (either increasing or decreasing), and moves the sorted values to the right of the array.
// if (!swapFlag means value of swapFlag is false), that means no swapping happened inside the inner loop,
// so it breaks the outer loop early if no swaps occur in one complete pass, confirming the array is already sorted.
// TC:- O(N^2), because of the nested loop.
// If the array is already sorted either in ascending or descending order, then 
// Best Case TC:- O(N), because only the outer loop will run and no swapping will be performed.
// SC:- O(1), since no additional space is used.
// Bubble Sort is a stable sort as it maintains the relative order of array elements after sorting.
// Note: Why does the outer loop run only up to arr.length - 1 (i.e., n - 1)?
// Because after each pass, the largest unsorted value is placed at its correct position,
// so after the first pass, the last position of the array contains the largest value.
// And why does j run only up to arr.length - i - 1 (i.e., n - i - 1)?
// Because the inner loop only needs to check the unsorted part of the array.
// In every pass, the rightmost part of the array gets sorted in the intended order
// (ascending or descending). For example, in the first pass, the last position contains 
// the largest value among all elements. In the second pass, the last two positions contain 
// the first and second largest values, and so on.



let arr = [1,2,3,4,5];
console.log(bubblesort(arr))
function bubblesort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let swapFlag = false; 
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapFlag = true;
            }
        }
        
        if(!swapFlag){
            console.log(swapFlag)
                break;
            }
    }
    
    return arr;
}