// (1) Convert decimal to binary
// Geeksforgeeks Problem
// Optimal Approach:
// approach:-
// Base Case:- if given 'N' is equal to '0', print '0' and return immediately.
// initialize an empty string to build the binary representation.
// while 'N' is greater than 0, perform the following steps to convert 'N' to binary:
// get the remainder when 'N' is divided by 2 (this gives the current binary digit).
// if 'N' is odd (remainder is 1), append '1' to the string.
// otherwise, if 'N' is even, append '0' to the string.
// divide 'N' by 2 to move to the next binary digit (reduce N for the next iteration).
// the binary string is built from least significant to most significant bit,so reverse it to
// correct the order, then print the result.
// Time Complexity (TC): O(log N) base 2, as we divide 'N' by 2 at each step.
// Space Complexity (SC): O(log N) due to the storage of the binary digits in the string.


class Solution {
    toBinary(N) {
        if (N === 0) {
            console.log('0');
            return;
        }
        let string = '';
        while (N > 0) {
            if (N % 2 === 1) {
                string += '1';
            } else {
                string += '0';
            }
            N = Math.floor(N / 2); // Divide N by 2
        }
        
        console.log(string.split('').reverse().join('')); // Reverse to correct order
    }
}

//                                        OR
// To convert a decimal number N into its binary representation, I repeatedly divide 𝑁 by 2 and append 
// the remainder at each step as the remainder represents the current binary digit.
// While appending the current binary digit, the digits are added in an incorrect order because the most significant
// bit is appended first, even though the correct binary representation starts with the least significant bit. 
// To fix this, I reverse the string after appending all the digits, which gives the correct binary representation.

// For example, let 𝑁 = 10,
// first, divide 10 by 2 to get a remainder of 0 and add '0' to the string, then update 𝑁 to 5.
// Next, divide 5 by 2 to get a remainder of 1, add '1' to the string, and update N to 2.
// Repeat this for 2 (remainder 0, add '0') and 1 (remainder 1, add '1'). 
// At this point, the binary digits collected in reverse order are '0101'.
// Reversing this string results in '1010', which is the correct binary representation of 10. 
// This approach efficiently breaks down the number, collecting binary digits until N becomes 0.
// The final reversal ensures the binary number is in the proper order.
// Time Complexity (TC): O(LOGN), because at each step N is divided by 2, reducing its size by half.
// Space Complexity (SC): O(LOGN), since the binary representation of the number is stored in a string.
                                              
let n = 10;
console.log(decimalTObinary(n))
function decimalTObinary(n){
    if(n === 0){
        return 0;
    }
    
    let string = '';
    while(n > 0){
        string+=  n % 2;
        n = Math.floor(n/2);
    }
    
    return string.split('').reverse().join('');
}            

// (1) Convert binary to decimal
// Geeksforgeeks Problem
// Optimal Approach:
// approach:-
// traverse the given binary string from right to left (starting from the least significant bit).
// for each bit that is '1', add the current power of 2 to the decimal number.
// and multiply the power by 2 for each successive bit (menas moving from least significant bit to most significant bit).
// TC:- O(N), to iterates through each bit of the binary string exactly once.
// SC:- O(1), since no additional space is used.
class Solution {
    toDecimal(str) {
        let n = str.length;
        let power = 1, decimalNumber = 0;
        for(let i = n-1; i>=0; i--){
            if(str[i] === '1'){
               decimalNumber+= power; 
            }
            power*= 2;
        }
        
        return decimalNumber;
    }
}

// Introduction to 1's and 2's Complement
// (1) 1's Complement:
// In 1's complement, invert each bit of the binary representation of a number.
// Example:
// the binary representation of 13 is 1101.
// the 1's complement of 13 is obtained by flipping each bit:- 1101 becomes 0010.
// (2) 2's Complement:
// To obtain the 2's complement of a number, follow these steps:
// Step 1: Compute the 1's complement of the number.
// Step 2: Add 1 to the 1's complement result.
// Example:
// For 13, we already found the 1's complement is 0010.
// Now, add 1 to the 1's complement:
// 0010
// +  1
// --------
// 0011

// Operators Used in bit manipulation
// (1) AND Operator (&):
// The AND operator compares each bit of two numbers. If both bits in a specific position are 1, the resulting bit is 1. 
// If one of the bit is 0, the resulting bit is 0.
// exapmle
// AND operator of 12 and 5 is:
//   1100  (12)
// & 0101  (5)
// --------
//   0100  (4)

// (2) OR Operator (|):
// The OR operator compares each bit of two numbers. If at least one of the bits in a specific position is 1, the
// resulting bit is 1. If both bits are 0, the resulting bit is 0.
// OR operator of 12 and 5 is:
// example
//   1100  (12)
// | 0101  (5)
// --------
//   1101  (13)

// (3) XOR Operator (^):
// The XOR (exclusive OR) operator compares each bit of two numbers. The resulting bit is 1 if both the bits in a specific 
// position are different (i.e., one is 1 and the other is 0).
// If both bits are the same (both are 0 or both are 1), the resulting bit is 0.
// example
//   1100  (12)
// ^ 0101  (5)
// --------
//   1001  (9)

/// (4) Shift Operator
// (i.(a)) Right Shift Operator Of Positive Numbers:
// - The rightmost bit is discarded, and shifts all the bits of the number to the right.
// - And the leftmost bit is filled with 0 (for positive numbers).
// Note:
// - In JavaScript, numbers are represented as 32-bit signed integers for bitwise operations.
// - If the result exceeds 32 bits, only the lower 32 bits are kept (extra higher bits are discarded).

// example:- 
// 46 >> 1 (shift 46 by 1 bit to the right)
// Solution:-
// Binary representation of 46 = 00101110
// Performing the Right Shift:- Shifting right by 1 position
// Original:   00101110  (46)
// Shifted:    00010111  (23)
// here, the rightmost bit (0) is discarded, shift all the bits to the right and 0 is filled in the 
// leftmost position.
// Formula for right shift(>>):
// if 'x' is number and 'k' is a number of bits to shift bit then [right shift = x/2^k].
// For example, shifting 46 by 1 bit results in:-  46/2^1 => 23.

// (i.(b)) Right Shift Operator Of a Negative Number (-46):
// Step 1: Binary of +46
// Positive 46 in 8-bit binary = 00101110

// Step 2: Convert +46 to Two’s Complement (for -46)
// - Invert all bits (1’s complement): 11010001
// - Add 1: 11010001 + 1 = 11010010
// So, -46 is represented as 11010010 in 8-bit two’s complement form.

// Step 3: Apply Right Shift by 1
// Original: 11010010 (-46)
// Shifted : 11101001
// -> The rightmost bit is discarded, and the leftmost bit is filled with 1
//    (because for negative numbers, >> keeps the sign bit).

// Step 4: Convert 11101001 back to decimal
// - Since it starts with 1, it’s negative (two’s complement form).
// - Invert bits: 00010110
// - Add 1: 00010110 + 1 = 00010111 = 23
// - So the value = -23

// Final Answer: -46 >> 1 = -23

// (i.(a)) Left Shift Operator Of Positive Number:-
//  - discards the leftmost bit, shifts all the bits to the left, and fills the rightmost bit with 0.
// Note:
// - In JavaScript, numbers are represented as 32-bit signed integers for bitwise operations.
// - If the result exceeds 32 bits, only the lower 32 bits are kept (extra higher bits are discarded).
// example:- 
// 46 << 1 (shift 46 by 1 bit to the left)
// Solution:-
// Binary representation of 46 = 00101110
// Performing the left Shift:- Shifting left by 1 position
// Original:   00101110  (46)
// Shifted:    01011100  (92)
// here, leftmost bit is discarded, and a 0 is added to the rightmost position.
// Formula for left shift(<<):
// if 'x' is number and 'k' is a number of bits to shift bit then [left shift = x*2^k].
// For example, shifting 46 by 1 bit results in:-  46*2^1 => 92.

// (i.(b)) Left Shift Operator Of a Negative Number (-46):
// Solution:
// Step 1: Binary of +46 (8-bit):  00101110
// Step 2: Two's complement for -46:
//   - 1's complement (invert): 11010001
//   - Add 1:                   11010001 + 1 = 11010010
//   => -46 in 8-bit two's complement: 11010010
//
// Step 3: Left shift by 1 position:
//   Original: 11010010  (-46)
//   Shifted : 10100100  (leftmost bit dropped, rightmost filled with 0)
//
// Step 4: Convert shifted result 10100100 back to decimal:
//   - It's negative (MSB = 1). To get magnitude:
//     invert: 01011011
//     add 1:  01011011 + 1 = 01011100 = 92
//   - Apply sign: -92
// So, -46 << 1 = -92.

// Steps to Handle Shifts for Negative Numbers
// Get the binary of the negative number (two’s complement form):
// Start with the positive number’s binary.
// Take the two’s complement (invert + add 1).
// Now you have the binary representation of the negative number.
// Perform the shift (right shift >> or left shift <<):
// Right shift (>>): discard rightmost bits, fill leftmost with 1 (to preserve the sign).
// Left shift (<<): discard leftmost overflow bits, fill rightmost with 0.
// Convert the result back to decimal:
// If the leading bit is 0, it’s positive → directly convert to decimal.
// If the leading bit is 1, it’s negative →
// Take two’s complement again to get the magnitude.
// Apply the negative sign. 

// (5) Not Operator (~):
// The Not operator is a unary operator that inverts all the bits of its operand.
// In other words, it changes all 1s to 0s and all 0s to 1s.

// Example:
// Let's take the number 5.
// Binary representation of 5: 00000000 00000000 00000000 00000101

// Applying the Not operator:
// ~5 = Inverted bits: 11111111 11111111 11111111 11111010

// If the result is positive, it remains as is. If the result is negative, we interpret it as a negative
// number in two's complement form.
// The resulting binary 11111111 11111111 11111111 11111010 is in two's complement representation.
// To find its value, we take the two's complement:
// 1. Invert the bits: 00000000 00000000 00000000 00000101
// 2. Add 1: 00000000 00000000 00000000 00000110 (which is 6).

// Therefore, the Not operator effectively gives us:
// ~5 results in -6.







