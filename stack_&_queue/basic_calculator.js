// Leetcode Problem:- 224
// Optimal approach:-
// Problem Says:-
// we are given a string representing an arithmetic expression, and we need to return the result of evaluating this expression.
// the expression only include integers, addition (+), subtraction (-), and parentheses ((, )).
// the '+' is not used as a unary operation (i.e, "+1") and '-' could be used as a unaray operation (i.e, "-1").
// to evaluate this expression correctly, we use a stack to manage intermediate(before parentheses and between parentheses) 
// results and signs, especially when dealing with nested parentheses.

// Approach:
//  Initialize the variables:
//    - result to store the final evaluated result of the expression.
//    - number to build multi-digit numbers from characters in the string.
//    - sign to keep track of the current sign (positive or negative).
// Iterate through each character in the string:
//   - if we encounter the '+' then add the (number * sign) before '+' into the result after then reset number to zero and sign to 1.
//   - if we encounter the '-' then add the (number *sign) before '-' into the result aftern then reset the number to zero and sign to -1.
//   - if we encounter an open parentheses '(' then push the result before an open parentheses '(' onto the stack and after then
//     reset result to zero and sign to 1.
//   - if we encounter the closed parentheses ')' then add first the number into result before the closed parentheses and then
//      pop the oldSign and oldResult from the stack and add it to the result. 
//  After the loop, add any remaining number to the result (considering its sign) and return the result.
// TC:- O(N), as we iterate through the converted array of expression once.
// SC:- O(N), due to the stack used to store intermediate results and signs and in the worst case, the stack might hold result and sign proportional to the depth of nested parentheses.

var calculate = function(s) {
    s = s.split('');
    let result = 0, number = 0, sign = 1, stack = [];
    for(let i=0;i<s.length;i++){
        if(!isNaN(parseInt(s[i]))){
            while(!isNaN(parseInt(s[i]))){
                number = number*10+parseInt(s[i]);
                i++;
            }
            i--;
        }else if(s[i] === '+'){
            result+= (number*sign);
            number = 0;
            sign = 1;
        }else if(s[i] === '-'){
            result+= (number*sign);
            number = 0;
            sign = -1;
        }else if(s[i] === '('){
           stack.push(result);
           stack.push(sign);
           result = 0;
           number = 0;
           sign = 1;
        }else if(s[i] === ')'){
            result+= (number*sign);
            number = 0;
            let oldSign = stack.pop();
            let oldResult = stack.pop();
            result*=oldSign;
            result+=oldResult;
        }
   }
   result+= (number*sign);
   return result;
 }
