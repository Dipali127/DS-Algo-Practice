// Leetcode Problem:- 1143
// Problem Statement:
// Given two strings 'text1' and 'text2', return the length of the longest common subsequence between them.
// A subsequence of a string is a new string generated from the original string by deleting some characters 
// without changing the relative order of the remaining characters. 
// For example, "ace" is a subsequence of "abcde".
// In a subsequence, you can skip characters from the string.

// Brute Force Approach: [Top-Down Approach] (Using Recursion)
// Approach:
// Call the function 'common' with arguments: string1, string2, index 'i', index 'j', and their lengths: length1, length2.
// Inside the 'common' function:
//   - Check if index 'i' (pointing to string1) or index 'j' (pointing to string2) is out of bounds. 
//     If either index is out of bounds, return 0 as there are no more characters to compare, so the length is 0.
//   - If the characters at the current indices (string1[i] and string2[j]) are equal:
//       - Add 1 to the result since we have found a common character of length 1, and recursively
//         call the function with the next indices (i + 1, j + 1) to continue checking subsequent characters.
//   - If the characters are not equal, make two recursive calls: 
//       (1) Skip the current character in string2 (move j forward, i remains the same).
//       (2) Skip the current character in string1 (move i forward, j remains the same).
//     We skip characters to try different combinations and find common characters between both strings.
//   - Return the maximum of the two results, which represents the longest common subsequence found so far.
// Time Complexity: O(2^M * 2^N) = O(2^(M+N)), where 'M' is the length of string1 and 'N' is the length of string2.
// Explanation: For each index in string1 and string2, we have two choices — 
// skip a character from string1 and take a character from string1 or skip character from string2 and take character from
// string2. This leads to an exponential number of combinations, hence the exponential time complexity.
// Space Complexity: O(min(M, N)), due to the recursion stack as the maximum depth of recursion
// is determined by the length of the shorter string.


var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length, length2 = text2.length;
    return common(text1, text2, 0, 0, length1, length2);

};

function common(string1, string2, i, j, length1, length2){
    if(i >= length1 || j >= length2){
        return 0;
    }

    if(string1[i] === string2[j]){
        return 1 + common(string1, string2, i+1, j+1, length1, length2);
    }else{
        return Math.max(common(string1, string2, i, j+1, length1, length2), 
        common(string1, string2, i+1, j, length1, length2));
    }
}

// Optimal Approach1:- [Top - Down Approach](Using Recursion + Memoization) 
// Approach:-
// use a 2D DP array 'dp' where dp[i][j] stores the length of the longest common subsequence for the 
// substrings starting at indices 'i' of string1 and 'j' of string2. 
// call the function 'solve' with arguments string1, string2, index 'i', index 'j', and 
// lengths:- s1 (length of string1), s2 (length of string2), and 'dp' array to store intermediate results.

// Inside the 'common' function:
//   - Check if index 'i' (pointing to string1) or index 'j' (pointing to string2) is out of bounds. 
//     If either index is out of bounds, return 0 as there are no more characters to compare, so the length is 0.
//   - Before making any recursive calls, first check if the result for this subproblem (dp[i][j])
//     has already been computed. If yes, return the stored value to avoid redundant computation.
//   - If the characters at the current indices (string1[i] and string2[j]) are equal:
//       - Add 1 to the result since we have found a common character of length 1, and recursively
//         call the function with the next indices (i + 1, j + 1) to continue checking subsequent characters.
//   - If the characters are not equal, make two recursive calls: 
//       (1) Skip the current character in string2 (move j forward, i remains the same).
//       (2) Skip the current character in string1 (move i forward, j remains the same).
//     We skip characters to try different combinations and find common characters between both strings.
//   - Store the maximum of the two results in dp[i][j] and return it to avoid recalculating for the same subproblems.
// TC: O(M * N) due to memoization (since there are M * N unique subproblems,
// where M is the length of text1 and N is the length of text2).
// SC: O(M * N) for the 2D dp array, and O(M + N) for the recursion stack in the worst case
// (since each recursive call can go up to M + N depth in the call stack).
// So, overall space complexity is O(M * N).

// Note:- "Array.from() is used to create a new array. The first argument { length: n1 } defines how many elements (rows)
// the outer array should have. It's an array-like object that tells Array.from to create an array with n1 slots.
// The second argument is a mapping function: () => Array(n2).fill(-1).
// This function is called for each index of the array and returns a new inner array of length n2, filled with -1. 
// These inner arrays act as columns, so overall this gives us a n1 x n2 2D array where each cell is initialized to -1,
// and each row is independent."

var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length, length2 = text2.length;
    let dp = Array.from({ length: length1 }, () => Array(length2).fill(-1));
    return common(text1, text2, 0, 0, length1, length2, dp);

};

function common(string1, string2, i, j, length1, length2, dp){
    if(i >= length1 || j >= length2){
        return 0;
    } 
    if(dp[i][j] !== -1){
        return dp[i][j];
    }
    if(string1[i] === string2[j]){
        return 1 + common(string1, string2, i+1, j+1, length1, length2, dp);
    }else{
        return dp[i][j] = Math.max(common(string1, string2, i, j+1, length1, length2, dp), 
        common(string1, string2, i+1, j, length1, length2, dp));
    }
}

// Optimal Approach [Using Bottom Up DP] (Iterative Solution)
// Approach:-
// We use a 2D DP array 'dp' where dp[i][j] stores the length of the longest common subsequence (LCS) 
// for the substrings of length i and j that is text1[0..i-1] and text2[0..j-1].
// In dp[i][j], 'i' and 'j' are lengths of the substrings text1 and text2 not the actual indices of the characters.

// Steps:-
// 1. Initialize a 2D DP array 'dp' of size (length1+1) x (length2+1), where 'length1' and 'length2' are the lengths of 
// text1 and text2, respectively and each element of 'dp' is initially set to -1, except for the first row and column.
// 2. The extra row and column in the DP array (i.e., dp[0][*] and dp[*][0]) are used to handle the base case 
//    where one of the substrings is of length 0 as the LCS of any string with an empty string is 0. 
//    Therefore, the first row and first column are initialized to 0.
// 3. Iterate over both strings starting from index 1. For each pair of characters (text1[i-1], text2[j-1]):
//    - If the characters are equal, set dp[i][j] = 1 + dp[i-1][j-1], which is the LCS between text1 and text2.
//    - If the characters are not equal, set dp[i][j] = max(dp[i-1][j], dp[i][j-1]), as we either skip a character from 
//     text1 or text2.
// 4. After the loops, dp[length1][length2] will hold the length of the longest common subsequence between text1 and text2.
// TC:- O(N^2) where 'N' is the length of the strings (since we need to fill the entire DP array).
// SC:- O(N^2) for the 2D DP array (of size (length1+1) x (length2+1)).

var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length, length2 = text2.length;
      let dp = Array.from({ length: length1 + 1 }, () => Array(length2 + 1).fill(-1));
    // first row and first column will be 0 
    for(let row = 0; row <= length1; row++){
        dp[row][0] = 0;
    }

    for(let col = 0; col <= length2; col++){
        dp[0][col] = 0;
    }

    for(let i = 1; i <= length1; i++){
        for(let j = 1; j <= length2; j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    return dp[length1][length2];

}; 