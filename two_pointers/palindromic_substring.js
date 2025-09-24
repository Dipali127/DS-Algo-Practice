// Leetcode Problem:- 647
// Brute Force Approach:
// Approach:
// Consider each possible substring and check if it is a palindrome by calling the isPalindrome() function.
// If the current substring is a palindrome, increment the count.
// After iterating through all possible substrings, return the count variable, which holds the number of palindromic
// substrings.
//
// Time Complexity: O(N^3).
// - There are O(N^2) possible substrings in a string of length N.
// - For each substring, the isPalindrome function may take O(N) time in the worst case (e.g., when the string is
// already a palindrome).
// - Hence, the total worst-case time complexity is O(N^3).
//
// Space Complexity: O(1), since no additional space is used apart from a few variables like `count`, which take constant space.


var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                count++;
            }
        }
    }
    return count;
};

var isPalindrome = function(string, start, end) {
    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}


// Optimal Approach: Expand Around Center
// Approach:
// I will use the "expand around center" technique to count the number of palindromic substrings.
// In this technique, I will take the current character as a center and expand outward until I find 
// palindromic substrings.
// I will use a `count` variable to keep track of the total number of palindromic substrings found. 
// I will traverse through the given string and While iterating through the given string,
// I will call the `expandAround` function twice for each character:
//   - Once for odd-length palindromes (where the palindrome has a single center character).
//   - Once for even-length palindromes (where the palindrome has two center characters).
// The `expandAround` function will return the number of palindromes found for the current center, which will be added
// to the `count` variable in the main function (countSubstrings).
// Finally, the function will return the total count of palindromic substrings.
//
// Time Complexity: O(N^2), because for each character, the expandAround function is called twice: 
// once for odd-length palindromes and once for even-length palindromes. 
// In the worst case, if the given string is palindrome then the expandAround function can iterate through all 
// characters of the string while expanding outward from the center, resulting in O(N) operations per center.
// Since there are N possible centers (one for each character), the total time complexity is O(N^2).
// Space Complexity: O(1), since no additional space is used apart from a few variables to store the current center 
// and count, making the space complexity constant.

var countSubstrings = function(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
       count += expandAround(s, i, i);     // odd-length palindromes
       count += expandAround(s, i, i + 1); // even-length palindromes
    }
    return count;
}

var expandAround = function(string, left, right){
    let count = 0;
    while(left >= 0 && right < string.length && string[left] === string[right]){
        count++;
        left--, right++;
    }
    return count;
}
