// Leetcode Problem:- 647
// Brute force approach:
// approach:
// consider each possible substring and iterate through each substring meanwhile check if the current
// substring is a palindrome or not by calling the function isPalindrome() function.
// if the current substring is a palindrome, increment count. 
// after iterating through each possible substring, return the count variable which hold the number of palindromic
//  substring.
// Time Complexity: O(N^3), to consider each possible substring and iterate through each substring while calling the 
// function isPalindrome from the inner loop.
// Space Complexity: O(1), since no additional space is used apart from the longPal and longSub variables, which take 
// constant space.

var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(isPalindrome(s, i, j)){
                count++;
            }
        }
    }

    return count;
};

var isPalindrome = function(string, start, end){
    while(start < end){
        if(string[start] !== string[end]){
            return false;
        }else{
            start++, end--;
        }
    }

    return true;
}

// Optimal approach:
// Approach:
// i will use the "expand around center" technique to count the number of palindromic substrings.
// The idea is to treat each character (or pair of adjacent characters for even-length palindromes) as a potential center
//  and expand outward to check for palindromes. 
// i will use a `count` variable to keep track of the total number of palindromic substrings found. 
// while iterating through the given string, i will call the `expandAround` function twice for each character:
// Once for odd-length palindromes (where the palindrome has a single center character).
// Once for even-length palindromes (where the palindrome has two center characters).
// The `expandAround` function will return the number of palindromes found for the current center, which will be added
//  to the `count` variable in the main function i.e, (countSubstrings).
// Finally, the function will return the total count of palindromic substrings.
// TC: O(N^2), as for each character, the expandAround function is called twice: once for odd-length palindromes and 
// once for even-length palindromes. 
// In the worst case, the expandAround function can iterate through all characters of the string, expanding outward from
// the center, resulting in O(N) operations per center.
// Since there are N possible centers (one for each character), the total time complexity becomes O(N^2).
// SC: O(1), since no additional space is used apart from a few variables to store the current center and count, making
// the space complexity constant.

var countSubstrings = function(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
       count+= expandAround(s, i, i);
       count+= expandAround(s, i, i+1);
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