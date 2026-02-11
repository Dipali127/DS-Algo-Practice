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
// Instead of using a nested loop which would lead to O(N^2) time, we use a prefix and suffix product
// approach.
// I will iterate through the 'nums' array once, computing both prefixProduct (left to right) and 
// suffixProduct (right to left) simultaneously.
// The reason we consider both directions is to handle negative numbers correctly: 
// multiplying an even number of negative numbers can result in a large positive product,
// and zeros can reset the product chain. For example, in [-2, 3, -4], the maximum product subarray is 
// = 24, which might be missed if we only go in one direction or reset incorrectly.
// Additionally, if the current product becomes 0 (due to a zero in the array), we reset it to 1,
// since multiplying by 0 breaks the product chain.
// After updating prefixProduct and suffixProduct, we update 'maxProd' with the maximum of maxProd, 
// prefixProduct, and suffixProduct.
// Finally, we return maxProd.
// Time Complexity: O(N), as we traverse the array once.
// Space Complexity: O(1), no extra space is used.

// Note:- my first optimal approach fails for cases like [-2, 3, -4] because resetting on negative 
// discards values that later become part of the maximum product when multiplied by another negative. 
// That’s why i will use prefix and suffix products instead.
// output for [-2, 3, -4] = 24.
// my first optimal approach:
// function maxProd(nums){
//     let maxProd = 0;
//     let prod = 1;
//     for(let i = 0; i < nums.length; i++){
//         prod *= nums[i];
//         maxProd = Math.max(maxProd, prod);
//         if(maxProd < 0){
//             maxProd = 1;
//         }
//     }
//     return maxProd;
// }


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
