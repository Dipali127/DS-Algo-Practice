// Given a string S, return the reversed string where all characters that are not a letter stay in the same place
// and all letters reverse their positions.

// input:- "ab-cd"
// output:- "dc-ba"

// input:- "abcd-"
// output:- "dcba-"

let str = "ab-cd-";
console.log(reverseStr(str));

function reverseStr(str) {
    let arr = str.split("");
    let start = 0, end = arr.length - 1;
    let reg = /[a-zA-Z]/;

    while(start < end) {
        if(!reg.test(arr[start])) {
            start++;
        } else if(!reg.test(arr[end])) {
            end--;
        } else {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    return arr.join("");
}