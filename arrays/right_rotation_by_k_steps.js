// Leetcode Problem no:- 189
// Rotate the given array 'nums' by 'k' positions to the right.
// (Right rotation means deleting the value from the end of the array and adding it to the beginning of the array.)

// Brute force approach:
// Approach:
// create an empty array 'newArr' to store the rotated version of the given array.
// first, iterate the given array from index (n-k) to the end of the array, adding values to 'newArr'.
// then, iterate the given array from index 0 to (n-k), adding values to 'newArr'.
// finally, return 'newArr' as the rotated array.
// TC:- O(N), Explanation:
// O(N) to iterate the part of the array from (n-k) to the end.
// O(N) to iterate the part of the array from the start to (n-k).
// overall, TC: O(N) + O(N) = O(2N) = O(N).
// SC: O(N), as extra space is used to store the rotated array.

let nums = [1,2,3,4,5,6,7], k = 3; 
console.log(rotateRight(nums,k));
function rotateRight(nums, k){
    let n = nums.length;
    let newArr = [];
    for(let i = n-k;i<n;i++){
        newArr.push(nums[i]);
    }

    for(let i = 0;i<n-k;i++){
        newArr.push(nums[i]);
    }

    return newArr;
}

// Optimal Approach:
// Approach:
// 1. Normalize k for cases where k is greater than the length of the array by taking k modulo n (k = k % n).
// 2. Reverse the entire array using the 'reverse' function.
// 3. Reverse the first 'k' elements of the reversed array.
// 4. Reverse the remaining 'n-k' elements from index 'k' to the end of the array.
// After these steps, the array is rotated 'k' positions to the right.
//
// Time Complexity (TC): O(N)
// - O(N) to reverse the entire array
// - O(k) to reverse the first k elements
// - O(n-k) to reverse the remaining n-k elements
// Overall TC = O(N) + O(k) + O(n-k) = O(2N) = O(N)
//
// Space Complexity (SC): O(1), as no additional space is used.

let nums = [1,2,3,4,5,6,7], k = 3; 
console.log(rotateRight(nums,k));
function rotateRight(nums, k){
    let n = nums.length;
    k = k % nums.length;
    reverse(nums,0,n);
    reverse(nums,0,k);
   return reverse(nums,k,n);
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