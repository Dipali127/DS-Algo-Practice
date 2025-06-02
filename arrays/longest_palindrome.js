// Leetcode Problem:- 409
// Optimal Approach:
// Approach:
// - Use a hash map to store the frequency of each character in the input string.
// - Since a palindrome is symmetric(that means use equal number of character in left and right halves), 
// we aim to use as many pairs of characters as possible.
// - We can only use an even number of each character for symmetry.
// - At most **one** character with an odd count can be placed in the **center** of the palindrome.
// - We use a variable `hasOdd` (initially false) to track whether any character has an odd count.
// - After counting all characters, we iterate through the values in the map:
//   - For each character frequency, we add the maximum even number of characters that can form pairs.
//   - If the frequency is odd, we mark `hasOdd` as `true` to consider adding one central character later in the 
// palindrome string.
// - Finally, if `hasOdd` is true, we add 1 to the total length to account for the center character.
// Time Complexity (TC): O(N)
// Explanation:
// - O(N) to iterate through each character in string `s` to build the frequency map.
// - O(N) to iterate through the map values to calculate the palindrome length.
// - Overall TC: O(N) + O(N) = O(2N) = O(N)

// Space Complexity (SC): O(N)
// Explanation: To store each character's count in the hash map.
var longestPalindrome = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    let length = 0;
    let hasOdd = false;

    // Step 2: Use the maximum number of pairs from each character
    // here, Math.floor(val/2) count the number of pairs that we can use to from palindrome and *2 count the 
    // number of character in that pair which will be added in length variable.
    for (let val of map.values()) {
        length += Math.floor(val / 2) * 2; 
        if (val % 2 !== 0) {
            hasOdd = true; 
        }
    }

    if (hasOdd) {
        length += 1;
    }

    return length;
};
