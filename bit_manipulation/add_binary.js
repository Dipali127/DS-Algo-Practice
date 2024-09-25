// Optimal Approach:
// Approach:-
// initialize variables 'alen' and 'blen' to hold the lengths of 'a' and 'b', and 'carry' to 0.
// use a while loop to iterate until all digits are processed, considering the carry.
// for each position, determine the binary values of 'a' and 'b' at the current index.
//    - If the character in 'a' is '1', set 'x' to 1.
//    - If the character in 'b' is '1', set 'y' to 1.
// calculate the current sum of bit using (x + y + carry) % 2 and prepend it to the result string.
// update the carry using Math.floor((x + y + carry) / 2).
// continue until all digits and the carry are processed.
// TC:- O(N), where 'N' is the length of the longer input string.
// SC:- O(1), since no additional space is used.

var addBinary = function(a, b) {
    let alen = a.length;
    let blen = b.length;
    let i=0,carry=0;
    let str = "";
    while(i<alen || i<blen || carry!=0){
        let x = 0;
        if(i<alen && a[alen-i-1] == '1'){
            x=1;
        }

         let y = 0;
        if(i<blen && b[blen-i-1] == '1'){
            y=1;
        }
        str = String((x + y + carry) % 2)+str;
        carry = Math.floor((x + y + carry) / 2);
        i++;
    }

    return str;
};