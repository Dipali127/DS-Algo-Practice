// Leetcode Problem:- 9
// Brute force approach:
// Approach:-
// check if the given 'x' is negative. If it is, return false, because negative numbers can't be palindromes.
// otherwise, reverse the number by performing the following steps:-
//      - convert the given 'x' into a string using `toString()`.
//      - convert the string into an array of characters (digits) using `split('')`.
//      - reverse the array using `reverse()`.
//      - join the reversed array back into a string using `join('')`.
//      - convert the resulting string back into a number using `parseInt()`.
// finally, compare the reversed number with the original number 'x'. 
// if the reversed number and the original number 'x' are the same, return true; otherwise, return false.
// TC:- O(N), where 'N' is the number of digits in 'x'.
// Explanation:-
// O(N), to convert the number into a string.
// O(N), to split the string into an array of characters.
// O(N), to reverse the array.
// O(N), to join the reversed array back into a string.
// O(N), to convert the string back into a number.
// Overall, TC is O(N).
// SC:- O(N), because converting the string into an array and then manipulating the array uses extra space.

var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    
   let reverse = parseInt(x.toString().split('').reverse().join(''))
   return x === reverse;
};


// Optimal Approach:
// Approach:-
// check if the given 'x' is negative. If it is, return false, because negative numbers can't be palindromes.
// assign the given number 'x' to a variable 'num'. This allows us to modify 'num' during the reverse operation without altering 'x'.
// initialize 'reverse' to 0, which will hold the reversed digits of 'num'.
// use a while loop to reverse the digits of 'num'.
// - In each iteration, extract the last digit of 'num' using 'num % 10' and add it to 'reverse' after shifting 'reverse' by one decimal place (i.e., multiplying by 10).
// - Update 'num' by removing its last digit using 'Math.floor(num / 10)'.
// After the loop finishes, 'reverse' will contain the reversed version of 'x'.
// Finally, compare 'reverse' with the original number 'x'. 
// If they are equal, return true (indicating 'x' is a palindrome); otherwise, return false
// TC:- O(N), where 'N' is the number of digits in 'x'.
// Explanation:- each iteration of the loop processes one digit of 'x', so the time complexity is linear in the number of digits.
// SC:- O(1), since no additional space is used.


var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let num = x;
    let reverse = 0;
    while(num!=0){
        reverse = reverse*10+num%10;
        num=Math.floor(num/10);
    }

    if(x===reverse){
        return true;
    }
    return false;
};

