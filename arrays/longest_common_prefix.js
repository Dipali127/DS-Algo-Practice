// Leetcode Problem:- 14
// Optimal approach
// approach:
// First, check if the given array of strings is empty. If it is, return an empty string.
// Otherwise, initialize a variable `prefix` with the first string in the array `strs`.
// Then, iterate through the remaining strings in the array, and for each string,
// call the function `commonPrefix` which returns the common prefix between `prefix` and the current string.
// Update `prefix` with the result after each comparison.
// Finally, return the value of `prefix`.
// TC: O(n * m), where 'n' is the number of strings in the array, 
// and 'm' is the average length of the strings.
// For each string, we compare up to 'm' characters in the `commonPrefix` function.
// SC: O(1), since no additional space is used apart from a few variables (excluding the output prefix string).

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        prefix = commonPrefix(prefix, strs[i]);
    }

    return prefix;
};

var commonPrefix = function(str1, str2){
    let i = 0;
    while (i < str1.length && i < str2.length) {
        if (str1[i] === str2[i]) {
            i++;
        } else {
            break;
        }

    }

    return str1.slice(0, i);
}