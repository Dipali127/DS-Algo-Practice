// Leetcode Problem:- 88
// Brute force approach:
// Approach:
// - Take an empty array 'arr' to add all elements of nums1 and nums2 in sorted order.
// - Use two pointers 'i' and 'j' to traverse through nums1 and nums2.
// - While traversing through nums1 and nums2:
//   - If the value at nums1[i] is less than or equal to nums2[j], then add nums1[i] to 'arr' and move 'i' forward.
//   - Otherwise, add nums2[j] to 'arr' and move 'j' forward.
// - After that, use two more while loops to add the remaining values of nums1 or nums2 (if any).
// - Finally, traverse through 'arr' and copy its values back into nums1.
// - We don't need to return anything, since the question requires modifying nums1 in-place.

// Time Complexity:
// - The first while loop runs until one array is fully traversed → O(min(M, N)).
// - The next two while loops together cover the leftover elements → O(M) + O(N).
// - Copying back from 'arr' to nums1 takes O(M+N).
// - Overall TC = O(M + N).

// Space Complexity:
// - O(M + N), for the extra array 'arr'.

var merge = function(nums1, m, nums2, n) {
    let arr = [];
    let i = 0, j = 0;
    while(i < m && j < n){
        if(nums1[i] <= nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }

    while(i < m){
        arr.push(nums1[i]);
        i++;
    }

    while(j < n){
        arr.push(nums2[j]);
        j++;
    }

    for(let i = 0; i < m+n; i++){
        nums1[i] = arr[i];
    }
};

// Optimal Approach (with sort):
// Approach:
// - Take two pointers 'i' and 'j' where 'i' points to the last element of nums1 (valid part)
//   and 'j' points to the first element of nums2. Since both nums1 and nums2 are already
//   sorted in ascending order, this setup helps ensure that smaller elements stay in nums1
//   and larger elements stay in nums2.
// - While traversing through nums1 and nums2:
//   - If nums1[i] is greater than nums2[j], swap their values. This ensures nums1 contains
//     only smaller values and nums2 contains only larger values.
//   - Otherwise, break the loop because both arrays are already in the correct order.
// - After ensuring smaller values are in nums1 and larger values are in nums2, append all
//   values of nums2 into nums1 (filling the extra space).
// - Finally, sort nums1 in ascending order because even after placing all smaller values
//   in nums1 and larger values in nums2, nums1 may not yet be fully sorted.
//
// Time Complexity:
// - O(min(M, N)): for the first while loop, which runs until one of the arrays is completely sorted.
// - O(N): for copying elements of nums2 into nums1.
// - O((M + N) log(M + N)): for sorting nums1 at the end.
// - Overall: O((M + N) log(M + N)).
//
// Space Complexity:
// - O(1), since no extra array is used (only a few pointers).

var merge = function(nums1, m, nums2, n){
    let i = m - 1, j = 0;
    while(i >= 0 && j < n){
        if(nums1[i] > nums2[j]){
            let temp = nums1[i];
            nums1[i] = nums2[j];
            nums2[j] = temp;
            i--;
            j++;
        }else{
            break;
        }
    }

    let k = 0;
    while(k < n){
        nums1[m + k] = nums2[k++];
    }

    nums1.sort((a,b) => a - b);
}