// Leetcode Problem:- 1143
// Problem Statement:
// Given two strings 'text1' and 'text2', return the length of the longest common subsequence between them.
// A subsequence of a string is a new string generated from the original string by deleting some characters 
// without changing the relative order of the remaining characters. 
// For example, "ace" is a subsequence of "abcde".
// In a subsequence, you can skip characters from the string.

// Brute Force Approach: [Top-Down Approach] (Using Recursion)
// Approach:
// I will explore all the common subsequences using a recursive approach.
// I will call the function to solve the bigger problem and recursively call for subproblems to get the common 
// characters between them.
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
// Time Complexity: O(2^n × 2^m), which is equal to O(2^(n+m)). 
// For each character in both strings, we have two possibilities: we can either take it or skip it.
// Therefore, the number of possibilities grows exponentially, resulting in exponential time complexity.
// Space Complexity: O(N + M) because of the recursion stack. 
// In the worst case, the recursion can go as deep as N + M calls, where N and M are the lengths of the two
// strings.


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
// substrings starting from indices 'i' of string1 and 'j' of string2. 
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
// TC: O(M * N) Since each recursive function are computed once,
// where M is the length of text1 and N is the length of text2).
// SC: O(M * N) for the 2D dp array, and O(M + N) for the recursion stack in the worst case,
// as the depth of recursive stack is proportional to M + N levels.
// So, the overall space complexity is O(M * N), as it dominates the recursion stack space.


// Note:- "Array.from() is used to create a new array. The first argument { length: n1 } defines how many
// elements (rows) the outer array should have. It's an array-like object that tells Array.from to create an
// array with n1 slots.
// The second argument is a mapping function: () => Array(n2).fill(-1).
// This function is called for each index of the array and returns a new inner array of length n2, filled with -1. 
// These inner arrays act as columns, so overall this gives us a n1 x n2 2D array where each cell is initialized to -1,
// and each row is independent."

var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length, length2 = text2.length;
    let dp = Array.from({ length: length1 }, () => new Array(length2).fill(-1));
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
        return dp[i][j] = 1 + common(
            string1, string2, i+1, j+1, length1, length2, dp
        );
    }else{
        return dp[i][j] = Math.max(
            common(string1, string2, i, j+1, length1, length2, dp),
            common(string1, string2, i+1, j, length1, length2, dp)
        );
    }
}


// Optimal Approach: [Bottom-Up DP] (Iterative Solution)
// Approach:
// We use a 2D DP array 'dp' where dp[i][j] stores the length of the longest common subsequence between the 
// text1 and text2 of length 'i' and 'j'.
//
// Here,'i' and 'j' represent the lengths of the substring/prefixes we are considering,not the actual character indices.
// Steps:
// 1. Create a 2D DP array of size (length1 + 1) x (length2 + 1).
//    We use one extra row and one extra column to handle the case where one of the substring/prefixes has
//    length 0.
//    The LCS with an empty string is 0, so dp[0][j] and dp[i][0] are 0.
//
// 2. Start filling the DP table from i = 1 and j = 1, Since i and j represent lengths, we use i - 1 and j - 1
//  to access the actual characters because strings use 0-based indexing.
//
// 3. If text1[i - 1] and text2[j - 1] are equal: dp[i][j] = 1 + dp[i - 1][j - 1]
//    We found one common character, so we add 1 to the LCS of the previous substring/prefixes because we 
//    haven't found future substring/prefixes LCS that is dp[i+1][j+1].
//
// 4. If the characters are not equal: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//    We try both choices:
//    - Skip the current character of text1.
//    - Skip the current character of text2.
//    Then we take the maximum result.
//
// 5. After filling the table, dp[length1][length2] contains the length of the longest common subsequence of 
// the two complete strings.
//
// Time Complexity: O(M * N), Since we fill each cell of the DP table once.
// Space Complexity: O(M * N), Since we use a 2D DP array of size (M + 1) x (N + 1).

var longestCommonSubsequence = function (text1, text2) {
    let dp = Array.from(
        { length: text1.length + 1 },
        () => new Array(text2.length + 1).fill(0)
    );

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    return dp[text1.length][text2.length];
};