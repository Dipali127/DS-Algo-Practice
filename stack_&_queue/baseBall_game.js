// Leetcode Problem:- 682
// Optimal Approach:-

// Problem Says:-
// We are given a list of operations representing scores in a baseball game.
// Initially, the record is empty. Each operation can be one of the following:
// - An integer x  -> Record x as a new score.
// - '+'           -> Record the sum of the previous two scores.
// - 'D'           -> Record double the previous score.
// - 'C'           -> Remove the previous score from the record.
// We need to return the sum of all valid scores after processing all the operations.

// Approach:
// We use a stack to maintain the valid scores because all the operations
// ('+', 'D', and 'C') depend only on the most recently recorded scores.
//
// 1. Initialize an empty stack because every operation (C, D, and +) depends only on the most recently recorded scores.
// A stack provides efficient access to the latest scores using push(), pop(), and the top element in O(1) time, making
//  it the most suitable data structure for this problem..
// 2. Traverse each operation in the given operations array.
//    - If the operation is 'C', remove the last valid score from the stack.
//    - If the operation is 'D', take the last score from the stack,
//      double it, and push the new score onto the stack.
//    - If the operation is '+', take the last two scores from the stack,
//      calculate their sum, and push the new score onto the stack.
//    - Otherwise, the operation is an integer, so convert it into a number
//      and push it onto the stack.
// 3. After processing all operations, traverse the stack (or pop each element)
//    and calculate the sum of all remaining valid scores.
// 4. Return the final sum.

// TC:- O(N), where N is the number of operations.
//      We iterate through the operations array once.
//      Summing all scores in the stack also takes O(N).
//      Therefore, the overall time complexity remains O(N).

// SC:- O(N), in the worst case, if every operation is an integer (or '+'/'D')
//      and no 'C' operation removes any score, all scores will be stored
//      in the stack.

var calPoints = function (operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop();
        } else if (operations[i] === 'D') {
            let val = stack[stack.length - 1];
            stack.push(val * 2);
        } else if (operations[i] === '+') {
            let num1 = stack[stack.length - 1];
            let num2 = stack[stack.length - 2];
            stack.push(num1 + num2);
        } else {
            stack.push(parseInt(operations[i]));
        }
    }

    let sum = 0;
    while (stack.length > 0) {
        sum += stack.pop();
    }

    return sum;
};