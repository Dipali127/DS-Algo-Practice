// Leetcode Problem:- 394
// We are given an encoded string where the encoding rule is: k[encoded_string]. 
// The encoded string inside the square brackets is being repeated exactly 'k' times. 
// 'k' will always be a positive integer, and the string will not be empty.
// The goal is to decode the given string by following this rule.

// Optimal approach:
// use of a stack to handle nested encodings.
// keep two variables: 
//   - 'curNum' to track the current number which will be multiplied with the encoded string inside the brackets.
//   - 'curString' to track the currently decoded string at each level.
// -  Iterate through the input string character by character:
//   - if we encounter a digit, update 'curNum' (this is to handle multi-digit numbers).
//   - if we encounter a '[', means we've encountered a nested pattern. push the current string and number to the stack, 
//     reset 'curString' and 'curNum' for the new encoded string and number.
//   - if we encounter a ']', pop the stack twice: first to get the  currentNumber till the ']' parentheses and then
//     to get the previous string and repeat 'curString' by 'currentNum' times and concatenate it to 'prevString'.
//   - If we encounter a letter, we append it to 'curString'.
// - In the end, 'curString' will contain the fully decoded string.
// TC:- O(N), as we iterate the given string once.
// SC:- O(N), due to the stack usage for storing strings and numbers.

var decodeString = function(s) {
    let stack = [];  
    let curNum = 0;  
    let curString = '';  

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {  
            curNum = 0;  
            while (!isNaN(parseInt(s[i]))) {
                curNum = curNum * 10 + parseInt(s[i]); 
                i++;
            }
            i--;  
        } else if (s[i] === '[') {
            stack.push(curString);
            stack.push(curNum);
            curString = ''; 
            curNum = 0; 
        } else if (s[i] === ']') {
            let currentNum = stack.pop();  
            let prevString = stack.pop();  
            curString = prevString + curString.repeat(currentNum);  
        } else {
            curString += s[i];
        }
    }

    return curString; 
};

