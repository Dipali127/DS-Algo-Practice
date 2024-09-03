// Leetcode Problem:- 3
// Brute force approach:
// approach:-
// consider each possible substring from string 's'.
// for each substring, create a set to store each character of the current substring.
// while storing the characters of the current substring into the set, check if the current character doesn't exist in the set.
// if it doesn't exist, add it to the set and find the length of the longest substring by using set.size, as the set only stores unique characters.
// if the character already exists in the set, break the inner loop since we've encountered a duplicate character.
// after iterating through all possible substrings, return the length of the longest substring.
// TC:- O(N^2)
// Explanation:
// O(N): to iterate through each character for considering each possible substring.
// O(N): to store each character of the current substring into the set.
// overall, TC: O(N) + O(N) = O(N^2).
// SC:- O(N), as we use a set to store characters, and in the worst case, the given string may contain unique characters.

var lengthOfLongestSubstring = function (string) {
    if (string == "") {
        return 0;
    }
    let longestSubstring = -Infinity;
    for (let i = 0; i < string.length; i++) {
        let set = new Set();
        for (let j = i; j < string.length; j++) {
            if (!set.has(string[j])) {
                set.add(string[j]);
                longestSubstring = Math.max(longestSubstring, set.size);
            } else {
                break;
            }
        }
    }

    return longestSubstring;
}

// Optimal approach: using sliding window with Two Pointers and set
// approach:-
// extend the window by moving the pointer 'j' toward right of given string 's' meanwhile store character of current window
// in set which keeps track of unique characters.
// if the character at `j` is already in the set (indicating a duplicate), move the left pointer `i` to the right
// and remove the character at `i` from the set until the duplicate is removed.
// if the character at `j` is not in the set, add it to the set and update `longestSubstring` with the size of the current window using `set.size`.
// continue expanding the window and updating the set and `longestSubstring` until `j` reaches the end of the string.
// after iterating through the entire string, return the length of the longest substring found without repeating characters.
// TC:- O(N), as we traverse the string once with the right pointer `j`, and each character is added and removed from the set at most once,
// making the time complexity linear.
// SC:- O(N), as the set is used to store the unique characters of the substring, which in the worst case can be as large as the string itself.

var lengthOfLongestSubstring = function (s) {
    if(s === ""){
        return 0;
    }
    let i = 0, j = 0, set = new Set(), longestSubstring = 0;
    while(j<s.length){
        if(set.has(s[j])){
            set.delete(s[i]);
            i++;
        }else{
            set.add(s[j]);
            longestSubstring = Math.max(longestSubstring, set.size)
            j++;
        }
    }

    return longestSubstring;
}

