// Selection sort select the smallest element or largest element from unsorted array and place that 
// Element at beginning of the array to get the intended order either it is (increasing or decreasing).
// TC:- O(N^2), in average,best and worst case regardless of the array's initial order.
// SC:- O(1), since no additional space used.
// Selection sort is not stable as they don't maintain the intended order. 

let arr=[4,3,9,7,6,8];
let n=arr.length;
console.log(selection sort(arr,n));
function selection sort(arr,n)
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
