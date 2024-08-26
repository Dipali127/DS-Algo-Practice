// Leetcode Problem:
// brute force approach:
 // approach:-
 // convert the given number 'n' to a string.
 // then convert that string into array of numbers to apply reverse function on it.
 // after then again join back it into string so that we can easily convert back it to a number as we have to 
 // return reverse number of given number.
 // after reverse a number, check a case if the given number 'n' is negative if it is then convert the reverseNumber
 // into negative.
 // also check overflow condition, if the reverseNumber exceed the given range return 0.
 // TC: O(N), Explanation:-
 // O(N):- to convert the given number into a string.
 // O(N):- to convert the string into array of number.
 // O(N):- to reverse the array.
 // O(N):- to join back array into string. 
 // overall, TC:- O(N) + O(N) + O(N) + O(N) = O(4N) = O(N).
 // SC: O(N):- to covert the string into an array use extra space to store string value in array.

// var reverse = function (n) {
//     const INT_MIN = -(2**31); // -2147483648
//     const INT_MAX = 2**31 - 1; // 2147483647
//     let reverseNumber = parseInt(n.toString().split('').reverse().join(''));
//     if (n < 0) {
//         reverseNumber *= -1;
//     }
//     // Check for overflow
//     if (reverseNumber < INT_MIN || reverseNumber > INT_MAX) {
//         return 0;
//     }

//     return reverseNumber;
// };

// optimal approach:-
// approach:
// take reverseNumber variable to store reverse number and originalNumber to store the original number
// to keep the original value for sign restoration.
// Store the original number in originalNumber to handle its sign.
// use of while loop and do following below operation to reverse the given number until n is not equal to 0.
// step 1:- extract the last digit
// step 2:- remove the last digit from n.
// step 3:- check for overflow: Ensure that `reverseNumber` will not exceed INT_MAX when the next digit is added
// step 4:- update `reverseNumber` by shifting left and adding the new digit
// restore the sign of `reverseNumber` based on the original number.
// TC:- O(N) to iterate the given number.
// SC:- O(1) as there is no additional space used apart from few pointers.
var reverse = function (n) {
    const INT_MIN = -(2**31); // -2147483648
    const INT_MAX = 2**31 - 1; // 2147483647
    let reverseNumber = 0;
    let originalNumber = n;
    n = Math.abs(n); 
    while(n !== 0){
        let remainder = n % 10;
        n = Math.floor(n/10);
        if (reverseNumber > (INT_MAX - remainder) / 10) {
            return 0; // Overflow condition
        }
        reverseNumber = reverseNumber * 10 + remainder;
    }

     return originalNumber < 0 ? -reverseNumber : reverseNumber;
}