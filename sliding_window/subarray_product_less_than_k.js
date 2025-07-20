// Leetcode Problem:- 713
// Brute force approach:
// Approach:
// consider all possible subarrays and for each subarray take 'prod' variable and intialised it with 1 and compute
// the product for each subarray meanwhile check if the prod is less than k , increment the count; 
// otherwise, break out of the inner loop, it means that product is greater than equal to k.
// TC: O(N^2) due to the nested loop.
// SC: O(1) as there is no additional space used.

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

// Optimal Approach: Using Sliding Window and Two pointer technique
// Approach:
// i will take two pointer 'start' and 'end' and i will extend the window using pointer 'end' 
// meanwhile i will compute the product and check if the product is greater than equal k , 
// if it is then i will shrink the window by using 'start' pointer until the product is greater than equal to k
// but if the product is less than k , that means i have found a subarray and i wil increment the count by adding 
// current window size which give exact number of subarray in that window.
// after finding all the subarray whose product is less than k , i will return the count of it. 
// TC: O(N), as each element are traversed once using start and end pointer.
// SC: O(1), as there is no additional space used.

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
        j++;
    }

    return count;

};