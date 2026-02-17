// Leetcode Problem:- 2390
// Optimal Approach:
// Approach:-
// iterate through the given string 's' and while iterating check if current iterated character is a star
// then pop(delete) the top character from the stack which indicates the deletion of the recent character before the
// star otherwise, push it onto the stack.
// once, traverse through each character of the given string return stack by converting it into string.
// TC:- O(N), to iterate through each characters of the string 's' exactly once.
// SC:- O(N), since, there is a use of stack to store characters of string apart from the star, 
// in the worst case, if there are no stars in the string, all characters will be stored in the stack.
// How do you know there may be no stars?
// Since the problem does not guarantee that there will be at least one star in the string, a valid input 
// could contain no stars. In that case, all characters will be stored in the stack, leading to O(n) space
// in the worst case.
var removeStars = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '*') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');

};