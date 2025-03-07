// Leetcode Problem:- 1456

// Brute force approach:
// Approach: 
// Iterate through each possible substring of length 'k', starting from every index 'i' in the string 's'.
// For each starting index 'i', count the number of vowels in the substring of length 'k'.
// Update `maxVowelCount` if the current substring contains more vowels than the previous maximum count.
// Once all substrings of length 'k' have been considered, return `maxVowelCount`.
// TC:- O(N * k), where N is the length of the string and k is the length of the substring.  
// Since for each substring, the inner loop runs for 'k' steps.
// SC:- O(1), as no additional space is used apart from a few variables.

var maxVowels = function (s, k) {
    let maxVowelCount = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        let vowelCount = 0;
        for (let j = i; j < i + k; j++) {
            if (vowel.includes(s[j])) {
                vowelCount++;
            }
        }

        maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }

    return maxVowelCount;
};


// Optimal approach: Sliding Window and Two-Pointer Technique
// Approach:
// Extend or slide a window using pointer 'end', and while iterating through the current window, 
// check if the current character is a vowel. If it is, increment `count`.
// Meanwhile, check if the window size exceeds 'k'. If the character pointed to by 'start' is a vowel, 
// decrement `count` and shrink the window by incrementing 'start'.
// Even if the character at 'start' is not a vowel, but the window size exceeds 'k', still shrink the window by incrementing 'start'.
// Keep track of the maximum number of vowels found in any window of size 'k' by updating `maxVowel`.
// TC: O(N), where N is the length of the string, as we iterate through the string once.
// SC: O(1), as no additional space is used apart from a few variables.

var maxVowels = function (s, k) {
    let maxVowel = -Infinity;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let start = 0, end = 0, count = 0;
    while (end < s.length) {
        if (vowel.includes(s[end])) {
            count++;
        }

        if (end - start + 1 > k) {
            if (vowel.includes(s[start])) {
                count--;
            }
            start++;
        }

        maxVowel = Math.max(maxVowel, count);
        end++;
    }

    return maxVowel;
};
