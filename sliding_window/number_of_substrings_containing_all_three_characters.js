// Leetcode Problem: 1358 - Number of Substrings Containing All Three Characters
// Brute-force Approach:
// Approach:
// Consider all possible substrings by iterating through each starting index `i` of the string.
// For each starting index `i`, use a hash map to store the frequency of characters in the current substring.
// While expanding the substring using the `j` pointer, update the character count in the map.
// Whenever the map size becomes 3, it means the substring contains all three characters ('a', 'b', and 'c').
// At that point, all substrings starting from index `i` and ending at `j` or any position after `j`
// will also contain all three characters. So, add `s.length - j` to the count and break the inner loop.
// After checking all substrings, return the total count.
// Time Complexity: O(N^2)
// - O(N): for the outer loop to fix the starting index of the substring.
// - O(N): for the inner loop to find the first substring starting at index `i` that contains all three characters.
// Space Complexity: O(1)
// - The hash map stores at most 3 characters ('a', 'b', 'c'), so it uses constant space.


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
                count+= s.length - j;
                break;
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
// the character at pointer start then remove that character from hash map and increment the pointer 'start' and once find 
// all the substring where the characters count is atleast one times then return numberSubstring.
// TC:- O(N), as each element in the string is processed at most twice (once by `j` and once by `i`) 
// SC:- O(1), as there is no additional space used apart from map which use constant space. 
// Note:
// The formula (s.length - end) counts all substrings starting from the current `start` index to the end of the string.
// Once the window contains all three required characters, any extension of this window to the right will also be valid.

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