// Optimal Approach
// approach:
// I will use a stack to store the opening parentheses.
// While iterating through the given string of parentheses:
// - If the current character is an opening parenthesis '(', I will add it to the stack.
// - If the current character is a closing parenthesis ')':
//    - I will check if the stack is not empty and the top of the stack is an opening parenthesis '('.
//      If so, that means we found a valid pair of parentheses, so I will pop the opening one from the stack.
//    - Otherwise, I will push the closing parenthesis onto the stack as it is unmatched.
// After iterating through all the parentheses in the string, the number of unmatched parentheses remaining in the stack will be the minimum number of insertions required to make the string valid.
// Time Complexity: O(N), where N is the length of the string, since we iterate through the string once.
// Space Complexity: O(N), in the worst case, we might store all characters in the stack (e.g., all '(' characters).

var minAddToMakeValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop(); 
            } else {
                stack.push(')'); 
            }
        }
    }

    return stack.length;
};

