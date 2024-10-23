// Leetcode Problem:- 2390
// Optimal approach:
// approach:-
// iterate through the given string 's' and while iterating check if current iterated character is a star
// then pop(delete) the top character from the stack which indicates the deletion of the recent character before the
//  star otherwise, push it onto the stack.
// once, traverse through each character of the given string return stack by converting it into string
// TC:- O(N), to iterate through each characters of the string 's' exactly once.
// SC:- O(N), since, there is a use of stack to store characters of string apart from the star.

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