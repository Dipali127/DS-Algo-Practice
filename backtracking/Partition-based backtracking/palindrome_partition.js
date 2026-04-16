// Leetcode Problem:- 131
// Given a string s, partition s such that every substring of the partition is a palindrome.
// That means, we have to generate all possible partitions of the string such that every
// substring in that partition is a palindrome.

// Partition = cutting the string into pieces such that every piece is a palindrome.

// Example:- s = "aab"
// Possible ways to cut:
// a | a | b
// aa | b

// Key idea:- The same substring can be reused in different partitions, but each partition (path) is unique.

// Why not use Nested loop?
// Because nested loops cannot explore all possible partition combinations and cannot handle variable-depth decisions.

// Approach:
// Since the problem is about generating all possible partitions, I use recursion with backtracking to explore all
// possible substrings starting from the current index. If a substring is a palindrome, I include it in the current
// partition and recursively explore the remaining string.

// Inside DFS function:
// Base Case:
// If index is equal to the length of the string, it means we have found a valid partition.
// Add the current partition (containing all palindromic substrings) to the result array.

// Recursive Logic:
// At each recursive level, run a for loop starting from the current index of that level and check if the substring
// starting from index to i is a palindrome. If yes, add the substring to the path array and
// recursively call dfs with index + 1 to explore further partitions from the remaining string.
// After exploring all possible substrings and finding all valid partitions, return the result array.

// Time Complexity:- O(N * 2^N)
// Since 2^N is the number of possible partitions (recursive calls), and for each partition,
// a loop is used to traverse all possible substrings of length N.

// Extra Explanation:
// At each recursive call, we try all possible substrings using a for loop, and we check whether each substring is a palindrome
// by traversing its characters from the start index to the end of that substring.

// Space Complexity:- O(N)
// O(N) is used by the recursion stack in the worst case, where recursion depth can go up to N.
// O(N) is used by the path array to store the current partition of substrings.
// Note: The result array is not considered in auxiliary space complexity as it stores the final output.

// Extra for Time Complexity:-
// Let's take string = "aa"
// For "aa", partition will be ["a" "a"] and ["aa"].
// And number of recursive calls are :- From dfs(0) -> call to dfs(1) -> call to dfs(2)[Base Case] -> go back to dfs(1) ->
// go back to dfs(0) -> call dfs(2).
// Structure Flow:-
// dfs(0)
//  ├── "a" → dfs(1)
//  │        ├── "a" → dfs(2)  (base case)
//  │
//  └── "aa" → dfs(2) (base case)
// So, from above it's clear that for n = 2, we have 4 recursive calls.

var partition = function (s) {
    let result = [], path = [];
    dfs(0);
    return result;
    function dfs(index) {
        if (index === s.length) {
            result.push([...path]);
            return;
        }

        // explore all possible partition for current index.
        for (let i = index; i < s.length; i++) {
            let substring = s.slice(index, i + 1);

            if (isPalindrome(substring, 0, substring.length - 1)) {
                path.push(substring);
                // explore all possible substring from current index
                dfs(i + 1);
                // backtrack/remove current palindrome substring
                path.pop();
            }
        }
    }

    function isPalindrome(s, i, j) {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }

            i++, j--;
        }

        return true;
    }
};