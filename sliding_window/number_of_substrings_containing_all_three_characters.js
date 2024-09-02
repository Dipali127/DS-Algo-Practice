// Leetcode Problem:- 1358
// Brute force approach:-
// approach:-
// consider all possible substring and store the occurrence of current substring's character into map
// meanwhile check if map length is equal to three then increment the numberSubstring by 1, it means 
// that we found the substring where the each characters count is aleast one.
// once find all the substring where the characters count is atleast one times then return numberSubstring.
// TC:O(N^2), Explanation:-
// O(N):- to find the maxElement.
// O(N^2):- to find number of subStirng where count of each character is alteast one times. 
// SC:- O(1), as there is no additional space used apart from map which use constant space. 

var numberOfSubstrings = function (s) {
    let numberSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map();
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                map.set(s[j], map.get(s[j]) + 1);
            } else {
                map.set(s[j], 1);
            }

            if (map.size === 3) {
                numberSubstring++;
            }
        }
    }

    return numberSubstring;
};

// Optimal approach:- using sliding window and map
// approach:-
// extend the window by moving the `j` pointer to the right and store the occurrences of each characters of the current window into map
// meanwhile check the length of map is equal to three then find the numberSubstring by using (n-j) after then before shrinking the window 
// toward right check first that if map contain the value at pointer i then remove that value from map and increment the pointer 'i'.
// once find all the substring where the characters count is atleast one times then return numberSubstring.
// TC:- O(N), as each element in the string is processed at most twice (once by `j` and once by `i`) 
// SC:- O(1), as there is no additional space used apart from map which use constant space. 

var numberOfSubstrings = function (s) {
    let map = new Map();
    let numberSubstring = 0;
    let i = 0, j = 0;
    while (j < s.length) {
        if (map.has(s[j])) {
            map.set(s[j], map.get(s[j]) + 1);
        } else {
            map.set(s[j], 1);
        }

        while (map.size >= 3) {
            numberSubstring += s.length - j;
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) - 1);
                if (map.get(s[i]) === 0) {
                    map.delete(s[i]);
                }
            }
            i++;
        }

        j++;
    }

    return numberSubstring;
}