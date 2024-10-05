// Leetcode Problem:- 72
/ Brute Force Approach: [Top-Down Approach] (Using Recursion)
// Approach:-
// using recursion, i will try to explore all the combinations using given three operations i.e; 'insert',
// 'delete' and 'replace' and return that combination which give minimum operation to make both strings equal.
// call a function 'minOperation' to calculates the minimum number of operations (insertions, deletions, or replacements)
// needed to convert 'word1' to 'word2' using a helper recursive function 'minOperation'.
// Inside 'minOperation' function:
// - if index 'i' has reached the end of 'word1' (out of bounds), it means we need to insert the remaining characters 
//   of 'word2' into 'word1', so the function returns (l2 - j), indicating the number of insertions required.
// - if index 'j' has reached the end of 'word2', it means we need to delete the remaining characters 
//   of 'word1', so the function returns (l1 - i), indicating the number of deletions required .
// - if the characters at 's1[i]' and 's2[j]' are equal, the function moves both pointers 'i' and 'j' forward 
//   to compare the next characters, without performing any operation.
// - if the characters are not equal, the function recursively considers three possible operations:
//       1) Insert a character from 'word2' into 'word1' and move the 'j' pointer forward.
//       2) Delete a character from 'word1' and move the 'i' pointer forward.
//       3) Replace the current character in 'word1' with the character from 'word2' and move both pointers forward.
// The minimum of these three operations is returned, representing the least number of edits needed.
// TC:-O(3^min(l1,l2)), as the function makes three recursive calls for each unprocessed character in the shorter string.
// SC:- O(l1+l2) because both strings' lengths contribute to the maximum depth of the recursion stack.


var minDistance = function (word1, word2) {
    let l1 = word1.length, l2 = word2.length;
    return minOperation(word1, word2, 0, 0, l1, l2);
};

function minOperation(s1, s2, i, j, l1, l2) {
    if (i === l1) {
        return l2 - j;  // insert these much character in string1.
    } else if (j === l2) {
        return l1 - i; // delete these much character from string2.
    }

    if (s1[i] === s2[j]) {
        return minOperation(s1, s2, i + 1, j + 1, l1, l2);
    }

    let insert = 1 + minOperation(s1, s2, i, j + 1, l1, l2);
    let delet = 1 + minOperation(s1, s2, i + 1, j, l1, l2);
    let replace = 1 + minOperation(s1, s2, i + 1, j + 1, l1, l2);

    return Math.min(insert, delet, replace);
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization)
// Approach:- 
// use of a 'dp' array to store the results of subproblems and avoid redundant computations.
// call a function 'minOperation' to calculates the minimum number of operations (insertions, deletions, or replacements)
// needed to convert 'word1' to 'word2' using a helper recursive function 'minOperation'.
// Inside 'minOperation' function:
// - if index 'i' has reached the end of 'word1' (out of bounds), it means we need to insert the remaining characters 
//   of 'word2' into 'word1', so the function returns (l2 - j), indicating the number of insertions required.
// - if index 'j' has reached the end of 'word2', it means we need to delete the remaining characters 
//   of 'word1', so the function returns (l1 - i), indicating the number of deletions required .
// - if the characters at 's1[i]' and 's2[j]' are equal, the function moves both pointers 'i' and 'j' forward 
//   to compare the next characters, without performing any operation.
// - if the characters are not equal, the function recursively considers three possible operations:
//       1) Insert a character from 'word2' into 'word1' and move the 'j' pointer forward.
//       2) Delete a character from 'word1' and move the 'i' pointer forward.
//       3) Replace the current character in 'word1' with the character from 'word2' and move both pointers forward.
// The minimum of these three operations is returned, representing the least number of edits needed.
// Time Complexity: O(l1 * l2), where 'l1' is the length of 'word1' and 'l2' is the length of 'word2'.
// with memoization, the number of subproblems is reduced by l1 * l2.
// Space Complexity: O(l1 * l2), which is the space used by the 'dp' array to store intermediate results.

var minDistance = function (word1, word2) {
    let l1 = word1.length, l2 = word2.length;
    let dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(-1));
    return minOperation(word1, word2, 0, 0, l1, l2, dp);
};

function minOperation(s1, s2, i, j, l1, l2, dp) {
    if (i === l1) {
        return l2 - j;
    } else if (j === l2) {
        return l1 - i;
    }

    if (dp[i][j] !== -1) {
        return dp[i][j];
    }

    if (s1[i] === s2[j]) {
        return dp[i][j] = minOperation(s1, s2, i + 1, j + 1, l1, l2, dp);
    }

    let insert = 1 + minOperation(s1, s2, i, j + 1, l1, l2, dp);
    let delet = 1 + minOperation(s1, s2, i + 1, j, l1, l2, dp);
    let replace = 1 + minOperation(s1, s2, i + 1, j + 1, l1, l2, dp);

    return dp[i][j] = Math.min(insert, delet, replace);
}

// Optimal Approach2 (Best Approach): [Iterative Approach] 
// Approach:-
// use of a 2D dp array where word1 represents the row and word2 represents the column.
// each cell dp[i][j] represents the minimum number of operations required to convert 
// the substring word1[0..i-1] to word2[0..j-1].
// Base Case:-
//       - It takes 'i' deletions to convert word1[0..i] to an empty string. This fills out the first column.
//       - It takes 'j' insertions to convert an empty string to word2[0..j]. This fills out the first row.
// then, iterate over the dp table and fill each cell by taking the minimum of (insert, delete, replace).
// after all cells are filled, dp[l1][l2] contains the minimum number of operations required to convert word1 into word2.
// TC:- O(N^2), to iterate over the dp 2D array and fill all the cells.
// SC:- O(N^2), due to the use of the dp array.

var minDistance = function (word1, word2) {
    let l1 = word1.length, l2 = word2.length;
    let dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(0));

    // Base cases: filling out first row and first column
    for (let i = 0; i <= l1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= l2; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1);
            }
        }
    }

    return dp[l1][l2];
};


