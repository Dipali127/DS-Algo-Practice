// Brute force approach:
// approach:
// consider each possible substring and iterate through each substring meanwhile check if the current
// substring is a palindrome or not by calling the function isPalindrome().
// if the current substring is a palindrome, update the longPal variable with the new length of the palindrome substring and also update longSub.
// after iterating through each possible substring, return the longest palindromic substring, longSub.
// Time Complexity: O(N^3), to consider each possible substring and iterate through each substring while calling the function isPalindrome from the inner loop.
// Space Complexity: O(1), since no additional space is used apart from the longPal and longSub variables, which take constant space.

var longestPalindrome = function(s) {
    let longPal = -Infinity;
    let longSub = '';
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(palindrome(s, i, j)){
                if(longPal < j-i+1){
                    longPal = j-i+1;
                    longSub= s.substr(i,j-i+1);
                }
            }
        }
    }

    return longSub;
};

var palindrome = function(string, i, j){
    while(i < j){
        if(string[i] !== string[j]){
            return false;
        }else{
            i++, j--;
        }
    }

    return  true;
}

// optimal approach:
// i will use the "expand around center" technique to find the longest palindromic substring.
// The idea is to consider each character (or pair of characters for even-length palindromes) as a center and expand outward to check for palindromes. Here's how it works:
// maxLength: This variable will store the length of the longest palindromic substring found so far.
// start: This variable will store the starting index of the longest palindromic substring.
// i will iterate through each character and for each character in the string:
// i will call the expandAround function twice:
// Once for odd-length palindromes (where the palindrome has a single center character).
// Once for even-length palindromes (where the palindrome has two center characters).
// the expandAround function uses two pointers, left and right, which start at the current center (or center pair) and expand outward as long as the characters at these pointers are equal. The function will return the length of the palindrome found by expanding outwards.
// during each iteration, i will compare the lengths of the palindromes found for odd and even cases. 
// if the length is greater than the previous maximum length, I will update maxLength and the start index, ensuring that I always have the longest palindrome found so far.
// Finally, the substring from start to start + maxLength will give us the longest palindromic substring.
// TC: O(N^2), as for each character, I call the expandAround function for both even and odd-length palindromes. 
// In the worst case, the expandAround function can iterate through all characters of the string, expanding from the center outward, which results in a time complexity of O(N) for each center. Since there are N centers (one for each character).
// Hence, the overall time complexity is O(N^2).
// SC: O(1), since no additional space is used apart from a few variables to store the current center, maximum length, and start index.

var longestPalindrome = function(s) {
    let maxLength = 1;
    let start = 0;
    for(let i = 0; i < s.length; i++){
        let length1 = expandAround(s, i, i);
        let length2 = expandAround(s, i, i+1);

        let length = Math.max(length1, length2);
        if(maxLength < length){
            maxLength = length;
            start = i - Math.floor((length- 1)/2);
        }
    }

    return s.substring(start, start + maxLength);

}

var expandAround = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--, right++;
    }

    return right - left -1;
}

