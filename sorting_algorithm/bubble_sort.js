// In every pass, Bubble sort compares the adjacent elements and swaps their position if they are not in 
// the intended order either(in increasing or decreasing) and moves the sorted values to the right of the array.
// if (!swapFlag) check outside the 'inner for loop' so it breaks the outer loop early if no swaps occur in a 
// complete pass, confirming the array is already sorted.
// TC:- O(N^2), because of nested loop.
// if array is already sorted either in ascending or descending then , 
// Best Case TC:- O(N) because only the outer loop will run and no swapping and comparison will perform.
// SC:- O(1), since no additional space is used.
// Bubble sort is stable sort as it maintains the relative order of array elements after sorting.

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