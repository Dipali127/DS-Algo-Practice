// Leetcode Problem:- 14
// Optimal approach
// approach:
// Leetcode Problem:- 14
// Optimal Approach
//
// Approach:
// First, check if the given array of strings is empty. If it is, return an empty string.
// Otherwise, initialize a variable `prefix` with the first string in the array `strs`.
// Then, iterate through the remaining strings in the array.
// For each string, call the `findCommon` function, which returns the common prefix between `prefix` and the 
// current string.
// Update `prefix` with the result after each comparison.
// Also, check if `prefix` becomes empty after each comparison.
// If it becomes empty, return an empty string because there is no common prefix among the strings.
// Finally, return the value of `prefix`.
//
// TC: O(n * m), where `n` is the number of strings in the array
// and `m` is the length of the strings in the worst case.
// For each string, we compare characters until either the end of
// the current prefix or the current string is reached.
//
// SC: O(1), excluding the space used for the returned prefix string,
// because we use only a few additional variables.

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        prefix = findCommon(prefix, strs[i])

        if(prefix === ""){
            return "";
        }
    }

    return prefix;

    function findCommon(str1, str2) {
        let i = 0, j = 0;
        while (i < str1.length && j < str2.length) {
            if (str1[i] === str2[j]) {
                i++, j++;
            } else {
                break;
            }
        }

        return str1.substr(0, i);
    }
};