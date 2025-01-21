// Leetcode Problem:- 424
// Brute force approach:
// approach:
// i will consider each possible substring, and for each substring, I will iterate through its characters and store the frequency of each character in a hashArr.
// meanwhile, i will compute the maximum frequency of any character in the current substring and update it in the maxFreq variable.
// then, i will calculate the number of characters to be replaced by subtracting maxFreq from the current substring length.
// if the characters_to_be_replaced is less than or equal to k, I will update maxLength, which represents the maximum length of a substring with all the same repeating characters.
// after computing the maxLength for all possible substrings, I will return it.
// TC:- O(N^2), as I use a nested loop: the outer loop considers each possible starting index of the substrings, and the inner loop iterates through each substring to calculate frequencies.
// SC:- O(1), since Only a constant-size hashArr is used to track character frequencies, which is independent of the input size.

var characterReplacement = function(s, k) {
    let maxLength = 0;
    for(let i = 0; i < s.length; i++){
        let maxFreq = 0;
        let hashArr = new Array(26).fill(0);
        for(let j = i; j < s.length; j++){
            // Update the frequency of the current character
            let charIndex = s[j].charCodeAt(0) - 'A'.charCodeAt(0);
            hashArr[charIndex]++;
            maxFreq = Math.max(maxFreq, hashArr[charIndex]);
            // Check if the substring is valid
            let windowLength = j - i + 1;
            let character_to_be_replace = windowLength - maxFreq;
            if (character_to_be_replace <= k) {
                maxLength = Math.max(maxLength, windowLength);
            }
        }
    }

    return maxLength;
};

// Optimal approach: using sliding window and two pointer start and end.
// approach:
// instead of considering all possible substrings, I will maintain a sliding window using two pointers (start and end), which will represent the current substring being processed. I will use a hashArr of size 26 to store the frequency of characters within the current window.
// while expanding the window using the end pointer, I will update the frequency of the current character in hashArr and keep track of the maximum frequency of any character within the current window in the maxFreq variable.
// i will calculate the number of characters that need to be replaced by subtracting maxFreq from the window length (end - start + 1). If the number of characters to be replaced exceeds k, I will shrink the window by moving the start pointer to the right. This reduces the number of characters to replace, ensuring that the replacement constraint is met.
// i will update the maxLength variable, which tracks the longest window where the number of characters to replace is less than or equal to k.
// After iterating through the entire string, I will return the maximum length of the substring with all the same repeating characters that can be obtained.
// Time Complexity: O(N), as we only iterate through the string once with the start and end pointers, adjusting the window efficiently.
// Space Complexity: O(1), as we use a constant-size hashArr of size 26 to track the character frequencies, which is independent of the input size.


var characterReplacement = function (s, k) {
    let maxLength = 0;
    let hashArr = new Array(26).fill(0);
    let start = 0, end = 0;
    let maxFreq = 0;
    while (end < s.length) {
        let charIndex = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
        hashArr[charIndex]++;
        maxFreq = Math.max(maxFreq, hashArr[charIndex]);
        let windowLength = end - start + 1;
        let character_to_be_replace = windowLength - maxFreq;
        if(character_to_be_replace > k) {
            let startCharIndex = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
            hashArr[startCharIndex]--;
            start++;
        }

        windowLength = end - start + 1;
        maxLength = Math.max(maxLength, windowLength);
        end++;
    }

    return maxLength;
}