// Leetcode Problem:- 22
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// That means we have to generate n pairs of parentheses.

// Approach:
// Since the problem is about generating all possible n pairs of parentheses, I will use recursion with backtracking.

// Inside generateParenthesis:
// Take a result array to store all combinations of parentheses.
// Call a dfs function with parameters openCount, closeCount, and a string.
// Initially, both openCount and closeCount are 0, and they keep track of the count of open and close parentheses.
// The string is initially empty and will be used to add open or close parentheses at each step.

// Inside dfs function:
// Base Case:
// If the length of the string is equal to twice the given 'n', it means we have found one valid combination of parentheses.
// Add it to the result and return to the previous recursive call.
 
// Recursive Logic:
// At each recursive step/function:
// (i) First, check if openCount is less than the given 'n'. If yes, we can add an open parenthesis
// to the string. After adding it, recursively call dfs by incrementing openCount by 1 and appending "(" to the string.

// (ii) Then, check if closeCount is less than openCount. If yes, we can add a close parenthesis
// to the string. After adding it, recursively call dfs by incrementing closeCount by 1 and appending ")" to the string.

// After generating all possible n pairs of parentheses, return the result.

// Time Complexity = O(Catalan(n) * n), where Catalan(n) is the number of valid
// parentheses combinations, and for each combination we build a string of length 2n.

// Space Complexity: O(n)
// Since at any time the recursion stack stores up to 2n recursive calls (because at each step we add one parenthesis),
// the maximum depth of recursion is 2n. Ignoring constant factors, O(2n) simplifies to O(n).

// Catalan Number Formula:
// Cn = (2n)! / ((n + 1)! * n!)  
// OR  
// Cn = (1 / (n + 1)) * (2n choose n)

var generateParenthesis = function (n) {
    let result = [];

    dfs(0, 0, "");
    return result;

    function dfs(openCount, closeCount, string) {
        if (string.length === 2 * n) {
            result.push(string);
            return;
        }

        // add "("
        if (openCount < n) {
            dfs(openCount + 1, closeCount, string + "(");
        }

        // add ")"
        if (closeCount < openCount) {
            dfs(openCount, closeCount + 1, string + ")");
        }
    }
};