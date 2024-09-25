// Leetcode Problem:- 191
// Brute force approach:
// approach:-
// first, the `convertToBinary` function is called to convert the number 'n' into its binary string representation.
// once the binary string is returned, a loop iterates over the binary string.
// during each iteration, it checks if the character is '1'. If it is, the counter `count` is incremented.
// the final value of `count` represents the number of set bits (1's) in the binary representation of 'n' and is returned by the function.
// TC:- O(N + LOGN), Explanation:-
// O(N), to count the number of 1 by iterating through the string 'str'.
// O(LOGN), to convert the decimal numer into its binary representation.
// overall TC:- O(N) + O(LOGN) = O(N + LOGN).
// SC: O(log N), due to the storage of the binary digits in the string.

var hammingWeight = function (n) {
    let str = convertTobinary(n);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++;
        }
    }

    return count;
};

function convertTobinary(n) {
    if (n === 0) {
        return '0';
    }

    let string = "";
    while (n > 0) {
        if (n % 2 === 1) {
            string += '1';
        } else {
            string += '0';
        }
        n = Math.floor(n / 2);
    }

    return string.split('').reverse().join('');
}

// Optimal Approach:- Using Bit Manipulation.
// approach:-
// This approach uses the fact that performing 'n = n & (n - 1)' removes the rightmost set bit of binary representation of 'n'.
// each time this operation is performed, it clears one rightmost set bit, reducing the number of 1s by 1.
// and while loop continues until all bits are cleared (i.e., 'n' becomes 0).
// Explanation:-
// - For any given 'n', the expression 'n & (n - 1)' flips the rightmost set bit to 0.
// - Example:- If n = 6 (binary 110), n - 1 = 5 (binary 101), and n & (n - 1) = 4 (binary 100).
// - This effectively counts the number of set bits by repeatedly removing the least significant set bit.
// TC:- O(number of set bits), as the time complexity is proportional to the number of set bits in 'n'.
// SC: O(1), since no additional space is used. 

var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        n = n & n - 1;
        count++;
    }

    return count;
};
