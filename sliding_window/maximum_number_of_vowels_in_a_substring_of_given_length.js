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
// Note: The `includes` method takes constant time here, since the 'array' only stores 5 vowels.
// So the time and space complexity remain constant with respect to vowel checking.

var maxVowels = function(s, k) {
    let maxVowel = 0;
    let array = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i <= s.length - k; i++){
        let count = 0
        for(let j = i; j < i+k; j++){
            if(array.includes(s[j])){
                count++;
            }
        }
        maxVowel = Math.max(maxVowel, count);
    }

    return maxVowel
};


// Optimal Approach: Sliding Window and Two-Pointer Technique
// Approach:
// extend a window using the 'end' pointer, and while iterating through the current window, 
// check if the current character is a vowel. If it is, increment `count`.
// meanwhile, check if the window size is equal to 'k'. If it is, update `maxVowel`, then shrink the window 
// to form a new window that might contain the maximum number of vowels. 
// Before shrinking the window, check if the character pointed by 'start' pointer is a vowel
// if it is, decrement `count` since that character will no longer be part of the new window.
// then increment `start` by 1 to shrink the window.
// Time Complexity: O(N), where N is the length of the string, as we iterate through the string once.
// Space Complexity: O(1), as no additional space is used apart from a few variables.
// Note: The `includes` method takes constant time here, since the 'array' only stores 5 vowels.
// So the time and space complexity remain constant with respect to vowel checking.


var maxVowels = function(s, k){
    let maxVowel = 0, start = 0, end = 0;
    let count = 0;
    let array = ['a', 'e', 'i', 'o', 'u'];
    while(end < s.length){
        if(array.includes(s[end])){
            count++;
        }

        if(end - start + 1 === k){
            maxVowel = Math.max(maxVowel, count);
            if(array.includes(s[start])){
                count--;
            }

            start++;
        }

        end++;
    }

    return maxVowel;
}
