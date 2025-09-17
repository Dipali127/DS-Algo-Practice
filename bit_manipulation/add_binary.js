// Optimal Approach:
// Approach:-
// Initialize two pointers 'i' and 'j' to point to the end of strings 'a' and 'b' respectively,
// and a variable 'carry' to 0 to keep track of the carry during addition.
// Use a while loop to iterate as long as there are digits left in either string or there is a carry.
// For each iteration:
//    - Get the current digit from 'a' using pointer 'i' (or 0 if 'i' is out of bounds).
//    - Get the current digit from 'b' using pointer 'j' (or 0 if 'j' is out of bounds).
//    - Compute the sum of these digits and the carry.
//    - Append (sum % 2) to the front of the result string.
//    - Update the carry as Math.floor(sum / 2).
// Decrement both pointers after each iteration.
// Finally, return the result string.
//
// Time Complexity: O(N), where N is the length of the longer input string.
// Space Complexity: O(1), excluding the output string.
//
// Note:
// "result = (sum % 2) + result;" — since strings are immutable in JavaScript, 
// this operation creates a new string each time and appends the previous result to it.

var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1;
    let carry = 0, result = "";
    while (i >= 0 || j >= 0 || carry !== 0) {
        let number1 = i >= 0 ? Number(a[i]) : 0;
        let number2 = j >= 0 ? Number(b[j]) : 0;
        let sum = number1 + number2 + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--, j--;
    }
    return result;
};
