// Leetcode Problem:- 1358
// Brute force approach:-
// approach:-
// consider all possible substring and store the occurrence of current substring's character into hash map
// meanwhile check if hash map length is equal to three then increment the numberSubstring by 1, it means 
// that we found the substring where the each characters count is aleast one.
// once find all the substring where the characters count is atleast one times then return numberSubstring.
// TC:O(N^2), Explanation:-
// O(N):- used by outer loop to iterate through starting index of each substring.
// O(N):- used by inner loop to find number of subString where count of each character is alteast one times. 
// SC:- O(1), since there is no additional space used apart from hash map which use constant space. 

var numberOfSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let map = new Map();
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                map.set(s[j], map.get(s[j]) + 1);
            } else {
                map.set(s[j], 1);
            }

            if (map.size === 3) {
                count++;
            }
        }
    }

    return count;
};

// Optimal approach:- using sliding window and map
// approach:-
// extend the window by moving the `end` pointer to the right and store the occurrences of each characters of the 
// current window into hash map , meanwhile check the length of hash map is equal to three then find the number of string
// by using (s.length-end) after then before shrinking the window toward right check first that if hash map contain
// the value at pointer start then remove that value from hash map and increment the pointer 'start' and once find all
// all the substring where the characters count is atleast one times then return numberSubstring.
// TC:- O(N), as each element in the string is processed at most twice (once by `j` and once by `i`) 
// SC:- O(1), as there is no additional space used apart from map which use constant space. 
// Note:-  the formula:- s.length - end counts all substrings starting from the current 'start index' to every possible end
// index from 'end to s.length - 1', because once the window contains all three required characters (a, b, and c), 
// any extension beyond 'end pointer' will also contain all three character.

var numberOfSubstrings = function (s) {
    let count = 0;
    let start = 0, end = 0
    let map = new Map();
    while(end < s.length){
        if(map.has(s[end])){
            map.set(s[end], map.get(s[end])+1);
        }else{
            map.set(s[end], 1);
        }

        while(map.size === 3){
            count+= s.length - end;
            if(map.has(s[start])){
                map.set(s[start], map.get(s[start])-1);
            }

            if(map.get(s[start]) === 0){
                map.delete(s[start]);
            }

            start++;
        }

        end++;
    }
    
    return count;
};