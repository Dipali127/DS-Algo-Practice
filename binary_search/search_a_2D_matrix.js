// Leetcode Problem:- 74
// Brute force approach: 
// approach:-
// use of a nested 'for loop' to iterate though the matrix array where, outer loop iterate through each
// row of the matrix .
// and inner loop iterate through each element of the current row.
// During each iteration, check if the current element is equal to the target.
// if the current element matches the target, return true (since the target is found).
// if no element matches the target after iterating through the entire matrix, return false.
// TC:- O(m * n), where 'm' is the number of rows and 'n' is the number of columns as we check each element in the matrix.
// SC:- O(1), since no additional space is used other than loop variables.

var searchMatrix = function(matrix, target) {
    for(let i = 0;i<matrix.length;i++){
        for(let j = 0; j<matrix[i].length;j++){
            if(matrix[i][j] === target){
                return true;
            }
        }
    }

    return false;
};

// Optimal Approach: Using binary search
// approach:-
// let 'm' be the number of rows and 'n' be the number of columns in the matrix.
// treat the matrix as a 1D array where the first element of the matrix is at index 0 and the last element 
// is at index m * n - 1 (total number of elements in the matrix minus 1).
// initialize two pointers:- low = 0 (starting at the first element) and high = m * n - 1 (ending at the last element).
// Calculate the middle index using:-
//                  - mid = Math.floor(low + (high - low) / 2) to avoid overflow issues.
// To convert the mid index from a 1D representation back to the 2D matrix, use the following formulas:-
//                   - Row Index:- Math.floor(mid / n)
//                   - Column Index:- mid % n
// This retrieves the value at the mid index in the matrix:-
//                    - midValue = matrix[Math.floor(mid / n)][mid % n]
// if midValue equals the target, return true.
// if midValue is less than the target, update low = mid + 1 to search the right half.
// if midValue is greater than the target, update high = mid - 1 to search the left half.
// if the loop terminates and the target is not found, return false.
// TC:- O(log(m * n)), where m is the number of rows and n is the number of columns.
// we perform binary search on the entire matrix treated as a 1D array.
// SC:- O(1), since no extra space is used other than a few pointers.
// We divide by the number of columns because each row has n elements.
// Dividing by n gives the row index, and mid % n gives the column index in that row.
// Note:- We use mid = low + (high - low) / 2 to avoid integer overflow that could happen if low + high 
// exceeds the integer limit. It’s not an issue in JavaScript because numbers are stored as 64-bit
// floating-point values with a very large safe integer range, but it’s a good habit to follow from other
// languages like C, C++, and Java, where integer overflow can occur when low + high exceeds the 32-bit integer 
// limit.

var searchMatrix = function (matrix, target) {
    if (matrix.length == 0) {
        return false;
    }

    let m = matrix.length; 
    let n = matrix[0].length;
    let low = 0, high = (m * n) - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];
        if (midValue == target) {
            return true;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}