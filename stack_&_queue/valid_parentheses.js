// Optimal approach:-
// approach:-
// i will use of stack to store corresponding closing parenthesis of the opening parenthesis 
// and I will iterate through the given string and 
// while iterating the string, when encountering an opening parenthesis ('(', '{', or '['), push the corresponding 
// closing parenthesis (')', '}', or ']') onto the stack.
// while iterating the strig if you encounter the closing parenthesis (')', '}', or ']'), check if it matches the top 
// character of the stack. 
// if it does, pop the top of the stack element. 
// if it doesn't match or if the stack is empty return `false` immediately.
// after processing all parenthesis of the given string, if the stack is empty, it means all opening parentheses 
// had matching closing parentheses, and the string is valid.
// If the stack is not empty, return `false` as there are unmatched opening parentheses.
// TC: O(N), as we iterate through each character exactly once.
// SC: O(N), due to the stack used to store the expected closing parentheses.

var isValid = function (s) {
    s = s.split('');
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        switch (char) {
            case '(':
                stack.push(')');
                break;

            case '{':
                stack.push('}');
                break;

            case '[':
                stack.push(']');
                break;

            default:
                if (char != stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;

};


//                                                  OR
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(')');
        }else if(s[i] === '{'){
            stack.push('}')
        }else if(s[i] === '['){
            stack.push(']')
        }else if(s[i] !== stack.pop()){
            return false;
        }
    }

    return stack.length === 0;
};