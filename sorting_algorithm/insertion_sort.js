// In Insertion Sort, we start by assuming that the first element of the array is already sorted. Then, for each 
// element in the array (starting from the second element), we take it as the "key" and compare it with elements 
// to its left.
// If an element to the left of the key is greater than the key, we shift that element one position to the right.
// and We repeat this process until we find an element that is less than or equal to the key or reach the 
// beginning of the array.
// once, we found that element we place the key in that element's position.  
// TC:- O(N^2), in the worst case (when the array is in descending order), as
// each element might need to be compared with every other element in the sorted portion.
// Best Case TC:- O(N), when array is already sorted in ascending order. In this case , each element only needs 
// to be compared once with the previous element.
// insertion sort is stable sort as it maintains the order after sorting.

let arr=[4,1,9,3,7];
let n=arr.length;
console.log(insertionSort(arr,n));
function insertionSort(arr,n)
{
    for(let i=1;i<n;i++)
    {
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}
