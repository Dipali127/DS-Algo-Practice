// Brute force approach:
// approach:
// consider each possible substring and iterate through each substring meanwhile check if the current
// substring is a palindrome or not by calling the function isPalindrome().
// if the current substring is a palindrome, update the longPal variable with the new length of the palindrome
// substring and also update longSub.
// after iterating through each possible substring, return the longest palindromic substring, longSub.
// Time Complexity: O(N^3), to consider each possible substring and iterate through each substring 
// while calling the function isPalindrome from the inner loop.
// Space Complexity: O(1), since no additional space is used apart from the longPal and longSub variables,
//  which take constant space.

var longestPalindrome = function(s) {
    let longPal = -Infinity;
    let longSub = '';
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(palindrome(s, i, j)){
                if(longPal < j-i+1){
                    longPal = j-i+1;
                    longSub= s.substr(i,j+1);
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

// Optimal Approach:
// I will use the "expand around center" technique to find the longest palindromic substring.
// This technique takes a character and expands outward as long as it finds a palindromic substring.
// I will use one variable, `maxLengthSub`, to store the longest substring found so far.
// I will iterate through each character of the string, and for each character:
// I will call the `expandAround` function twice:
//   - Once for odd-length palindromes (where the palindrome has a single center character).
//   - Once for even-length palindromes (where the palindrome has two center characters).
// The `expandAround` function uses two pointers, `left` and `right`, which start at the current center (or center pair),
// and expand outward as long as the characters at `left` and `right` form a palindrome.
// The function `expandAround` will return the palindromic substring found by expanding outward.
// During each iteration, I will compare the lengths of the odd and even palindromes.
// If the length of the odd palindrome is greater than the previously stored `maxLengthSub`,
// then I will update `maxLengthSub` with the odd-length palindrome substring;
// otherwise, I will update it with the even-length palindrome substring.
// Finally, the longest palindromic substring is returned.

// Time Complexity: O(N^2)
// For each character, I call the `expandAround` function for both even- and odd-length palindromes.
// In the worst case, `expandAround` can expand to the entire string (O(N)) for each center.
// Since there are N centers, the overall time complexity is O(N^2).

// Space Complexity: O(1)
// No additional space is used apart from a few variables to store the current result.
// We're not using any data structures that scale with input size.



var longestPalindrome = function(s) {
    let maxLengthSub = "";
    for(let i = 0; i < s.length; i++){
        let length1 = expandAround(s, i, i);
        let length2 = expandAround(s, i, i+1);

        if(length1.length > maxLengthSub.length){
            maxLengthSub = length1;
        }
        
        if(length2.length > maxLengthSub.length){
            maxLengthSub = length2;
        }
    }

    return maxLengthSub;

}

var expandAround = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--, right++;
    }

    return s.slice(left + 1, right);
}