// Leetcode Problem: 238
// Brute force approach 1:-
// approach:-
// take a result array to store the product of the array elements except the current one.
// use a nested loop, and for each element in the array, calculate the product of all other elements
// by checking a condition: (i !== j), ensuring that the current element is excluded from its own product calculation.
// if the current index 'i' matches the index 'j'  skip multiplying that element .
// once the product of all elements except the current one is calculated, store it in the result array.
// after processing all elements, return the result array.
// TC:- O(N^2), as for each element, we traverse the entire array to calculate the product.
// SC:- O(N), to store the product of each element of the array 'nums' in the result array. 

var productExceptSelf = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        let mul = 1;
        for(let j=0;j<nums.length;j++){
            if(nums[i] === nums[j] && i === j){
                continue;
            }else{
                mul*= nums[j];
            }
        }

        result.push(mul);
    }

    return result;
};

// Brute force approach 2:-
// approach:-
// take the product of all the elements of the given array 'nums' initially.
// take three variables i.e:- product which is initially 1 which will take a product of all the given values of
// 'nums' accept 0 and another is product_without_zero which will take product all the given values of 'nums'
// except 0 and third one is count_of_zero which store all the count of zeroes in the given array 'nums'.
// traverse the given array 'nums' and find the product , product_without_zero and count_of_zeroes.
// again traverse the given array 'nums' and check a condition:-
//       - if current iterated value of 'nums' array is not zero then:-
//              - check if count_of_zero is greater than 0 indicating that there is a single zero then
//                 product for that current iterated value is zero.
//               - but if count_of_zero is not greater than 0 indicating that there is no single zero then
//                 product for that current iterated value is (product_without_zero/nums[i]).
//      - but if current iterated value of 'nums' array is zero then:-
//                - check if count_of_zero is greater than 1 indicating that there is more than one zero then
//                 product for that current iterated value is zero.
//                - but if count_of_zero is not greater than 1 indicating that there is only single zero then product
//                 for that current iterated value of 'nums' array is (product_without_zero).
// after processing all elements, return the nums array which contain product of all elements except the current one.
// TC:- O(N),Explanation:-
// O(N):- to traverse the array to calculate the product, product_without_zero and count_of_zero.
// O(N):- to calculate the product of all other elements except the current one.
// overall, TC:- O(N) + O(N) = O(2N) = O(N).
// SC:- O(1), as there is no additional space used apart from few variables. 

var productExceptSelf = function(nums) {
    let product = 1, product_without_zero = 1, count_of_zero = 0;
    for(let i=0;i<nums.length;i++){
        product *= nums[i];
        if(nums[i] !== 0){
            product_without_zero *= nums[i];
        }
        if(nums[i] === 0){
            count_of_zero++;
        }
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            if(count_of_zero > 0){
                nums[i] = 0;
            }else{
                nums[i] = product_without_zero/nums[i];
            }
        }else{
            if(count_of_zero > 1){
                nums[i] = 0;
            }else{
                nums[i] =product_without_zero;
            }
        }
    }

    return nums;
}

// Optimal Approach:-
// Approach:
// Take a result array of the same size as the given array 'nums'.
// Store 1 at the 0th index of the result array, since the left product for the 0th index value is 0,
// but to correctly compute the left product for all other numbers (except the 0th index), we store 1 at the 0th index of the result array.
// Calculate the left products for each element and store them in the result array.
// Calculate the right products for each element and multiply them with the left products already stored in the result array.
// After processing all elements and calculating the product, return the result array.

// Time Complexity (TC):- O(N)
// Explanation:-
// O(N): to calculate the left products for each element.
// O(N): to calculate the right products for each element.
// Overall, TC = O(N) + O(N) = O(2N) = O(N).

// Space Complexity (SC):- O(N), to store the products in the result array.

var productExceptSelf = function (nums) {
    let n = nums.length;
    let result = new Array(n);
    result[0] = 1;

    // Calculate the left products of each index element and store them in the result array
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let right = 1;

    // Calculate the right products of each index element and multiply them with the left products in the result array
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right *= nums[i];
    }

    return result;
}
