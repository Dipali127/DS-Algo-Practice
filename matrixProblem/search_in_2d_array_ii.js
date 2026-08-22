// Leetcode Problem:- 240

// Brute Force Approach:
// Approach:
// Traverse through the given matrix using nested loops.
// While traversing, check if the current element is equal to the target.
// If it is, return true immediately.
// Otherwise, after traversing all the elements of the matrix, return false.

// Time Complexity:- O(N*M), where 'N' is the number of rows and 'M' is the number of columns.
// Space Complexity:- O(1), since no additional space is used apart from a few variables.

function searchMatrix(matrix, target) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }

    return false;
}

// Optimal Approach: Using Binary Search
// Approach:
// Traverse through each row.
// For each row, apply binary search to find the target element.
// While traversing each row, if the target element is found using binary search, return true immediately.
// If the target element is not found in any row, return false.

// Time Complexity:- O(N * log M), where 'N' is the number of rows and 'M' is the number of columns.
// Explanation:- For each row, I apply binary search.
// At every step of binary search, I compare the middle element with the target and eliminate half of the
// remaining search space. 
// Therefore, searching one row takes O(log M) time. 
// Since there are N rows and we perform binary search on each row, the overall time complexity is O(N log M).
// Space Complexity:- O(1), since no additional space is used apart from a few variables.

function searchMatrix(matrix, target) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {

        let left = 0;
        let right = cols - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (matrix[i][mid] === target)
                return true;

            else if (matrix[i][mid] < target)
                left = mid + 1;

            else
                right = mid - 1;
        }
    }

    return false;
}