//leetcode problem:- 152
// Brute force approach
// approach:
// take a variable 'largestProduct' which is intialised with -Infinity because according to problem there are the test cases where the product is negative.
// consider each possible subarray and for each subarray, compute the product and update it in largestProduct.
// once found maximum product subarray, return it.
// TC:- O(N^2), due to nested loop.
// SC:- O(1), since no additional space is used.
// Note:- why Initialise largestProduct with -Infinity?
// Because it might be possible that the given array contains negative values,
// and the maximum product could also be a negative number.
// To handle such cases, I initialized largestProduct with -Infinity.

var maxProduct = function(nums) {
    let largestProduct = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let prod = 1;
        for(let j = i; j < nums.length; j++){
            prod*= nums[j];
            largestProduct = Math.max(largestProduct, prod);
        }
    }

    return largestProduct;
};

// Optimal approach: Using prefix and suffix product
// approach
// Instead of using a nested loop which leads to a time complexity of O(N^2), we use a prefix and suffix product approach.
// Iterate through the 'nums' array, and while iterating, compute both prefixProduct and suffixProduct.
// This is because it might be possible that all the values at the beginning of the array are negative,
// and the maximum product subarray lies toward the end of the array.
// Additionally, if the current product becomes 0 (due to a zero in the array), reset it to 1,
// since multiplying any number with 0 results in 0 and breaks the product chain.
// After updating prefixProduct and suffixProduct, update 'maxProd' with the maximum value among 
// the current maxProd, prefixProduct, and suffixProduct.
// Once the loop ends, return maxProd.
// Time Complexity: O(N), since each element of the array is iterated once using a single loop.
// Space Complexity: O(1), since no additional space is used.

var maxProduct = function(nums) {
    let maxProd = -Infinity;
    let prefixProd = 1, suffixProd = 1;
    for(let i = 0; i < nums.length; i++){
        if(prefixProd === 0){
            prefixProd = 1;
        }

        if(suffixProd === 0){
            suffixProd = 1;
        }

        prefixProd = prefixProd * nums[i];
        suffixProd = suffixProd * nums[nums.length - i - 1];
        maxProd = Math.max(maxProd, Math.max(prefixProd, suffixProd))
    }

    return maxProd;
};
