// Leetcode Problem:- 54
// Optimal Approach:

// Approach:
// I will use four directional variables to print the given matrix in spiral format.

// - The first direction is "top", which points to the first row and helps iterate 
//   through the row from left to right.

// - The second direction is "right", which points to the last column and helps 
//   iterate through the column from top to bottom.

// - The third direction is "down", which points to the last row and helps iterate 
//   through the row from right to left.

// - The fourth direction is "left", which points to the first column and helps 
//   iterate through the column from bottom to top.

// After that, I will use a direction variable to track the current direction.

// If the direction is 0, we print the row from left to right.
// Here, the row is fixed, and the column changes (i.e., matrix[top][i]).
// After printing, increment the `top` variable by 1.

// If the direction is 1, we print the column from top to bottom.
// Here, the column is fixed, and the row changes (i.e., matrix[i][right]).
// After printing, decrement the `right` variable by 1.

// If the direction is 2, we print the row from right to left.
// Here, the row is fixed, and the column changes (i.e., matrix[down][i]).
// After printing, decrement the `down` variable by 1.

// If the direction is 3, we print the column from bottom to top.
// Here, the column is fixed, and the row changes (i.e., matrix[i][left]).
// After printing, increment the `left` variable by 1.

// Repeat this process until top <= down and left <= right.
// After each step, increment the direction.
// If the direction becomes 4, reset it to 0.

// Time Complexity:
// O(M × N), where M is the number of rows and N is the number of columns.
// Even though I used nested loops, each element is visited exactly once.

// Space Complexity:
// O(M × N) for storing the result array.
// Auxiliary space (excluding output) is O(1).


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
