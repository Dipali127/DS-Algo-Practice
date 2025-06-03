// Leetcode Problem:- 150
// Optimal approach:
// the problem is to evaluate an expression given in Reverse Polish Notation (postfix notation).
// in postfix notation, operators follow their operands, i.e., "b operator a".
// to solve this, we can use a stack to store intermediate results of the expression evaluation.
// Approach:
// we iterate through the given array of tokens.
// if the current token is an integer, push it onto the stack.
// if the current token is an operator (e.g., '+', '-', '*', '/'), pop the top two elements from the stack.
// let the top element be 'a' and the second top element be 'b'.
// perform the operation "b operator a", and push the result back onto the stack.
// after iterating through all tokens, the final result will be the single remaining value on the stack.
//
// Example:
// suppose we push values 4 and 3 onto the stack, and encounter the "+" operator.
// we pop 3 and 4, compute "4 + 3", and push the result (7) back onto the stack.

// TC:- O(N), where N is the number of tokens, as we traverse the array once.
// SC:- O(N), in the worst case, all tokens (numbers) are pushed onto the stack.

// Note:
// - when performing division, we handle both positive and negative results.
// - if the division result is positive, it behaves like normal integer division (fractional part discarded).
// - if the result is negative, the division rounds toward zero (closer to zero).
// - we use "Math.trunc()" for this purpose because it discards the fractional part for both positive and
//   negative numbers, ensuring the result is rounded toward zero.
// - "Math.floor()" cannot be used here because it rounds down for negative numbers (away from zero).
//   For example:
//     console.log(Math.floor(-7 / 3)),since Math.floor() goes to the next smaller integer (more negative),
//     so since -3 is smaller than -2.333..., it returns -3.
//     console.log(Math.trunc(-7 / 3)) = -2, since Math.trunc() just chops off the decimal part, giving you -2 in result.
// - "Math.trunc()" provides the correct behavior, rounding the result toward zero, which is required for
//   this problem.


var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b + a);
        } else if (tokens[i] == '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (tokens[i] == '*') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b * a);
        } else if (tokens[i] == '/') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc((b / a)));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }

    return stack[0];
};
