// Leetcode Problem:- 3
// Brute force approach:
// approach:-
// Consider each possible substring and for each substring iterate through each them and store their characters in hash set.
// while iterating throguh current substring if duplicate character found then break loop.
// After breaking, compare the current substring's length (size of the Set) with the previously stored substring length (`longestSubstring`).
// If the current length is greater, update `longestSubstring`.
// Finally, return the value of `longestSubstring`, which holds the maximum length of a substring without repeating characters.
// Time Complexity: O(N^2), as i have use of nested loops to consider all possible substrings.
// Space Complexity: O(N), to store the current substring characters in a hash set.

// Note:- 
// Use -Infinity if you want to handle cases where you might not find any valid substrings and need to guarantee that the first valid 
// substring will always update the initial value.
// Use 0 if you are confident that a valid substring will always be found, and you just want a clean, simple starting point.
// so in the longest substring problem i will always found the longest subtring
// In the "Longest Substring Without Repeating Characters" problem, you will always find a valid substring (at least one character).
// So, use initial value of longestSubstring is 0.
 
var lengthOfLongestSubstring = function (string) {
    if (string == "") {
        return 0;
    }
    let longestSubstring = 0;
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

// Optimal approach: use sliding window approach using two pointer i.e slow and fast and hash set.
// approach:
// Instead of considering each possible substring explicitly, I will use two pointers, `start` and `end` to 
// represent a sliding window.
// using the `end` pointer expand the window by iterating through the string. 
// while iterating through the current substring, add the current character to the hash set if it doesn't exist 
// and update the `longSubstring` variable with the maximum length.
// but If a character is already present in the hash set, it means a duplicate element has been found. 
// In this case, I will shrink the window by moving the `start` pointer to the right and  
// removing the character pointed to by `start` from the hash Set.
// and continues this process until the `end` pointer has iterated through the entire string.
// Finally, I will return the length of the longest substring without repeating characters.
// Time Complexity: O(N), where N is the length of the input string as each character is processed at most twice.
// Space Complexity: O(N), as we store unique characters in a Set.

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

