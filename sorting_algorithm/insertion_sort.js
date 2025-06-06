// In Insertion Sort, we start by assuming that the first element of the array is already sorted.
// We start iterating from the second element in the array, and while iterating, take the current iterated element as the "key"
// and compare it with all the elements that are to the left of the key.
// If an element to the left of the key is greater than the key, we shift that element one position to the right.
// Repeat this process until we find a position for the key element.
// Once we find that position, we place the key in that element's position.
//
// TC: O(N^2), in the worst case (when the array is in descending order), as
// each element might need to be compared with every other element in the sorted portion.
// Best Case TC: O(N), when the array is already sorted in ascending order. In this case, each element only needs
// to be compared once with the previous element, and the inner while loop does not run; it only runs once for the first comparison with the key, then stops.
// Insertion sort is a stable sort as it maintains the order after sorting.

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
