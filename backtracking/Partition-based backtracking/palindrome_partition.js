// Leetcode Problem:- 131
// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible ways to partition the string such that every part is a palindrome.

// Partition = cutting the string into pieces such that every piece is a palindrome.

// Example:- s = "aab"
// Possible ways to cut:
// a | a | b
// aa | b

// Key idea:- Same substring can be reused in different partitions, but each partition (path) is unique.

// Why not use Nested loop?
// Because nested loops cannot explore all possible partition combinations and cannot handle variable depth decisions.

// Approach:
// Since the problem is about generating all possible partitions, i use recursion with backtracking to explore all
// possible substrings starting from the current index. If a substring is a palindrome, i will include it in the current
// partition and recursively explore the remaining string.

// Inside DFS function:
// Base Case:
// If index is equal to result's length, if it is then add current partition containing all the palindrome in result array.

// Recursive Logic:
// Run a for loop to traverse through all possible substring, and for each substring check is it palindrome, if yes then
// explore all possible susbtring starting from the current index of current recursive level.
// After exploring through all possible substring and finding all possible partition, return result array.

// Time Complexity:- O(N * 2^N), where N is the length of the string.
// O(2^N) is the number of possible partitions, and for each partition,
// a loop is used to traverse through all possible substrings.

// Extra Explanation: Since at each recursive call, we try all possible substrings
// using a for loop, we check whether each substring is a palindrome by traversing
// its characters from the current index to the end of that substring.

// Space Complexity:- O(N)
// O(N) is used by the recursion stack in the worst case, where recursion depth can go up to N.
// O(N) is used by the path array to store the current partition of substrings.
// Note: The result array is not considered in auxiliary space complexity as it stores the final output.

var partition = function (s) {
    let result = [], path = [];
    dfs(0);
    return result;
    function dfs(index) {
        if (index === s.length) {
            result.push([...path]);
            return;
        }

        // explore all possible substring for current partiotn.
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