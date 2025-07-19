// Leetcode Problem: 1456 - Maximum Number of Vowels in a Substring of Given Length
// Brute-force Approach:
// Approach:
// Iterate through each possible substring of length 'k', starting from every index 'i' in the string 's'.
// For each starting index 'i', count the number of vowels in the substring of length 'k'.
// Update `maxVowel` if the current substring contains more vowels than the previous maximum.
// Once all substrings of length 'k' have been considered, return `maxVowel`.
// Time Complexity: O(N * k), where N is the length of the string and k is the length of the substring.
// For each starting index, we take a substring of length 'k'.
// Space Complexity: O(1), as no additional space is used apart from a few variables.
// Note: The `has` method on the Set takes constant time here, since the Set only stores 5 vowels.
// Therefore, the time and space complexity related to vowel checking remains constant.


var maxVowels = function(s, k) {
    let maxVowel = 0;
    let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i = 0; i <= s.length - k; i++){
        let count = 0
        for(let j = i; j < i+k; j++){
            if(vowel.has(s[j])){
                count++;
            }
        }
        maxVowel = Math.max(maxVowel, count);
    }

    return maxVowel
};

// Optimal Approach: Sliding Window and Two-Pointer Technique
// Approach:
// Extend a window using the 'end' pointer, and while iterating through the current window,
// check if the current character is a vowel. If it is, increment `countVowel`.
// Meanwhile, check if the window size is equal to 'k'. If it is, update `maxVowel`, then shrink the window
// to form a new window that might contain the maximum number of vowels.
// Before shrinking the window, check if the character pointed to by the 'start' pointer is a vowel.
// If it is, decrement `countVowel` since that character will no longer be part of the new window.
// Then increment `start` by 1 to shrink the window.
// Time Complexity: O(N), where N is the length of the string, as we iterate through the string once.
// Space Complexity: O(1), as no additional space is used apart from a few variables.
// Note: The `has` method on the Set takes constant time, since the Set only stores 5 vowels.
// So the time and space complexity remain constant with respect to vowel checking.

var maxVowels = function(s, k){
    let maxVowel = 0;
    let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    let start = 0, end = 0, countVowel = 0;
    while(end < s.length){
        if(vowel.has(s[end])){
            countVowel++;
        }
        
        if(end - start + 1 === k){
            maxVowel = Math.max(maxVowel, countVowel);
            if(vowel.has(s[start])){
                countVowel--;
            }
            start++;
        }
        
        end++;
    }

    return maxVowel;
}
