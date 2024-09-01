// Leetcode Problem:- 713
// Brute force approach:
// Approach:
// consider all possible subarrays and find the product of each subarray.
// use a nested loop to find all possible subarrays where the outer loop iterates through each element as the starting index 
// of the subarray, and the inner loop starts from the current index set by the outer loop and calculates the product 
// of the subarray. If the product is less than k, increment the count; otherwise, break out of the inner loop, it means that 
// product is greater than equal to k.
// TC: O(N^2) due to the nested loop, and SC: O(1) as there is no additional space used.

var numSubarrayProductLessThanK = function(nums, k){
    let count=0;
    for(let i = 0;i<nums.length;i++){
        let prod=1;
        for(let j=i;j<nums.length;j++){
            prod*=nums[j];
            if(prod<k){
                count++;
            }else {
                break;
            }
        }
    }

    return count;
};

// Optimal Approach: Using Sliding Window
// Approach:
// outer loop compute the product by considering each element meanwhile inner loop check if the product is greater than equal to k
// Until the product is greater than equal to k, the inner loop shrinks the window from left by incrementing the start pointer 'i'.
// and dividing the product by the element at the start pointer to remove its effect on the product. 
// for each valid window (where product < k), the count of subarrays ending at the current element is added to the count.
// TC: O(N), as each element traversed once and SC: O(1), as there is no additional space used.

var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) {
        return 0;
    }
    let prod = 1, count = 0, i = 0, j = 0;
    while (j < nums.length) {
        prod *= nums[j];

        while (prod >= k) {
            prod /= nums[i++];
        }

        count += j - i + 1;
    }

    return count;

};