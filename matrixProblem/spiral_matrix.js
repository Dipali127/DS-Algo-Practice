// Leetcode Problem:- 54
// Optimal Approach:
// approach:
// i will use of four directions variable to print the given matrix in a spiral format:
// - The first direction is "top", which points to the first row and help to iterate through the row from left to right.
// - The second direction is "down", which points to the last row and help to iterate through the row from right to left.
// - The third direction is "left", which points to the first column and help to iterate through the column from down to top.
// - The fourth direction is "right", which points to the last column and help to iterate through the column from top to down.
// after then i will take one direction variable which will help to print the matrix in spiral format with the help of
// top, down, right and left.
// If the direction is 0, it means that we have to print the row from left to right.
// Here, the row is fixed, and the column changes (i.e., matrix[top][i]).
// Once the row from the top is printed, increment the `top` variable by 1. 
// If the direction is 1, it means that we have to print the column from top to down.
// Here, the column is fixed, and the row changes (i.e., matrix[i][right]).
// Once the column from the right is printed, decrement the `right` variable by 1. 
// If the direction is 2, it means that we have to print the row from right to left.
// Here, the row is fixed, and the column changes (i.e., matrix[down][i]).
// Once the row from the bottom is printed, decrement the `down` variable by 1.
// If the direction is 3, it means that we have to print the column from down to top.
// Here, the column is fixed, and the row changes (i.e., matrix[i][left]).
// Once the column from the left is printed, increment the `left` variable by 1. 
// Repeat this process until top <= down and left <= right. Meanwhile, increment the `direction` by 1.
// If the direction reaches 4, reset it to 0 again. 
// Time Complexity: O(m × n), where 'm'is the number of rows and 'n' is the number of columns.
//                  We traverse the matrix layer by layer in spiral order until all elements are visited.
//                  Inside the while loop, based on the current direction, we run a for loop over each row or column,
//                  ensuring each element is visited exactly once.
// Space Complexity: O(m × n), for storing all elements in the result array.


var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let down = m - 1;
    let left = 0;
    let right = n - 1;
    let direction = 0;
    let result = [];

    while (top <= down && left <= right) {
        if (direction === 0) { // print from left to right
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
        }

        if (direction === 1) { // print from top to down
            for (let i = top; i <= down; i++) {
                result.push(matrix[i][right]);
            }
            right--;
        }

        if (direction === 2) { // print from right to left
            for (let i = right; i >= left; i--) {
                result.push(matrix[down][i]);
            }
            down--;
        }

        if (direction === 3) { // print from down to top
            for (let i = down; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }

       direction++;
        if (direction === 4) {
            direction = 0;
        }
    }

    return result;
};
