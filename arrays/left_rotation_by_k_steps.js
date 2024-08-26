// Leetcode Problem no:- 189
// Rotate the given array 'nums' by 'k' positions to the left.
// (left rotation means deleting the value from the left of array and adding it to the end of the array.)

// Brute force approach:
// Approach:
// create an empty array 'newArr' to store the rotated version of the given array.
// first, iterate the given array from index k to the end of the array, adding values to 'newArr'.
// then, iterate the given array from index 0 to k, adding values to 'newArr'.
// finally, return 'newArr' as the rotated array.
// TC:- O(N), Explanation:
// O(N) to iterate the part of the array from k to the end.
// O(N) to iterate the part of the array from the start to k.
// overall, TC: O(N) + O(N) = O(2N) = O(N).
// SC: O(N), as extra space is used to store the rotated array.

let nums = [1,2,3,4,5,6,7], k = 3; 
console.log(rotateLeft(nums,k));
function rotateLeft(nums, k){
    let n = nums.length;
    let newArr = [];

   for(let i = k;i<n;i++){
        newArr.push(nums[i]);
    }

    for(let i = 0;i<k;i++){
        newArr.push(nums[i]);
    }

    return newArr;
}

// Optimal approach:
// Approach:
// reverse the entire array using the 'reverse' function.
// reverse the first 'n-k' elements of the reversed array.
// reverse the remaining 'k' elements from index 'n-k' to the end of the array.
// the array is now rotated 'k' positions to the left.
// TC: O(N), Explanation:
// O(N) to reverse the entire array.
// O(N) to reverse the first 'n-k' elements.
// O(N) to reverse the remaining 'k' elements.
// overall, TC: O(N) + O(N) + O(N) = O(3N) = O(N).
// SC: O(1), as no additional space is used.

let nums = [1,2,3,4,5,6,7], k = 3; 
console.log(rotateRight(nums,k));
function rotateRight(nums, k){
    let n = nums.length;
    reverse(nums, 0, n);
    reverse(nums,0,n-k);
    return reverse(nums,n-k,n);
}

function reverse(arr, left,right){
    let i = left, j = right-1;
    while(i<j){
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i++;
        j--;
    }

    return arr;
}