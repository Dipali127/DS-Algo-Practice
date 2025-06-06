// Selection Sort selects the smallest or largest element from the unsorted array and places that 
// element at the beginning of the array to achieve the intended order (either increasing or decreasing).

// TC: O(N^2) in the average, best, and worst cases, regardless of the array's initial order.
// Why is the time complexity O(N^2) even in the best case and not O(N)?
// Because for each element in the outer loop (or for every pass), the inner loop compares it with every other value.
// So for n elements, there will be approximately n comparisons per pass.
// In general, if there are n elements, around n^2 comparisons would be performed.
// Hence, TC = O(N^2).
// SC: O(1), since no additional space is used.

// Selection Sort is not stable, as it doesn't maintain the relative order of equal elements after sorting.
// Relative order refers to the original positions of elements with equal values in an array.
// A stable sorting algorithm keeps this relative order unchanged after sorting.
// An unstable sorting algorithm, like Selection Sort, may change this order.

//Example:- Original array:
// [2(1st), 1, 2(2nd), 3]
// Two elements have the value 2:
// - The first 2 is at index 0 (2(1st))
// - The second 2 is at index 2 (2(2nd))

// After a stable sort (like Insertion Sort), the array becomes:
// [1, 2(1st), 2(2nd), 3]
// The relative order of the two 2s is maintained (2(1st) stays before 2(2nd))

// After an unstable sort (like Selection Sort), the array could become:
// [1, 2(2nd), 2(1st), 3]
// The relative order of the two 2s is changed (2(2nd) comes before 2(1st))


let arr=[4,3,9,7,6,8];
let n=arr.length;
console.log(selectionSort(arr,n));
function selectionSort(arr,n)
{
    for(let i=0;i<n-1;i++)
   {
        let min=i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[min]>arr[j])
            {
                min=j;
            }
        }
        let temp=arr[min]
        arr[min]=arr[i];
        arr[i]=temp;
    }
    return arr
}
