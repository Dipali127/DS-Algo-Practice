// Leetcode Problem:- 76
// Brute force approach:
// Approach:-
// consider all possible substrings and for each substring, store each character's frequency of string 't' into a hash map.
// iterate through each substring to check if the current substring contains all characters of string 't'.
// if a character exists in the hash map, decrement its frequency.
// meanwhile, check if all values in the hash map become zero, which means the current substring contains
// all characters of string 't'.
// Once we find such a substring, update 'minWin' and store the current substring in 'minSubstring'.
// After finding the first valid substring, **break the inner loop** because there's no need to check further for this
// starting index.
// Finally, return the minimum window substring once it found that contains all characters of strng 't'.
// TC:- O(N^2 * M), Explanation:-
// O(N), to iterate through each starting index of all the possible subString.
// O(N * M), for each possible substring, iterate through it and check if all characters of 't' 
// in the hash map become zero.
// Overall TC:- O(N^2 * M).
// SC:- O(M), to store the characters of string 't' in the hash map.

var minWindow = function(s, t) {
    let minWin = Infinity, minSubstring = "";
    
    for(let i = 0; i < s.length; i++){
        let map = new Map();
        
        for(let j = 0; j < t.length; j++){
            map.set(t[j], (map.get(t[j]) || 0) + 1);
        } 

        for(let k = i; k < s.length; k++){
            if(map.has(s[k])){
                map.set(s[k], map.get(s[k])-1);
            }

            let flag = true;
            for(let val of map.values()){
                if(val > 0){  
                    flag = false;
                    break;
                }
            }

            if(flag){
                if(k - i + 1 < minWin){
                    minWin = k - i + 1;
                    minSubstring = s.substring(i, k + 1);
                }
                break;
            }
        }
    }

    return minSubstring;
};


// optimal approach: using sliding window and two pointer

// instead of using a new hash map for each substring, I will use a single hash map 
// and store each character of string 't' along with its frequency.
// i will use the sliding window technique with two pointers (start and end), 
// initially both pointing to the start index of the window. 
// additionally, I will take one variable 'requiredCount' equal to the length of string 't', 
// which will help to find out a valid window where all the characters of string 't' exist in that window.

// I will slide (expand) the window using the 'end' pointer.
// If the current character exists in the frequency map, I first check whether
// its frequency is greater than 0. If it is, this means the character is still
// required, so I decrement 'requiredCount' because one required character has
// now been included in the current window.
//
// Regardless of whether the character is still required or has an extra occurrence, I will always decrement
// its frequency in the hash map. 
// If the frequency becomes negative, it means the current window contains an extra occurrences of that 
// character.
// These extra occurrences allow us to shrink the window without making current window invalid. 
// As long as the frequency remains less than or equal to 0 after removing a character, another required
// occurrence of that character is still present in the window.
// Example:- s = "AABC" and t = "ABC". After processing the window, the frequency of A becomes -1, 
// indicating one extra occurrence of A. When we remove the first A while shrinking, its frequency becomes
// 0, meaning another required A is still present in the current window. Therefore, the new window "ABC"
// is still valid.
//
// Once 'requiredCount' becomes zero, it means the current window contains all the
// required characters from string 't'. I then check whether the current window is
// smaller than the previously recorded minimum window. If it is, I update
// 'minWin' and 'minSubstring'.
//
// Next, I start shrinking the window from the left using the 'start' pointer.
// If the character at 'start' exists in the frequency map, I increment its
// frequency because it is no longer part of the current window.
//

// If its frequency becomes greater than 0, it means the current window has lost one required occurrence of that 
// character. Therefore, I increment requiredCount and stop shrinking the window.
//
// I continue expanding the window until I find another valid window.
// After processing the entire string, I return 'minSubstring', which is the
// smallest substring containing all characters of 't'.

// TC:- O(N), Explanation:-
// O(N):- used by outer while loop where both the start and end pointers traverse the array at most once. 
// Even though a nested while loop is used, the overall time complexity remains O(N), since each element
// is visited at most twice: once when the end pointer expands the window and at most once when the start 
// pointer shrinks it. Both pointers only move forward and never move backward or restart from index 0.
// O(m):- To iterate through string 't' to store each character frequency in hash map, where 'm' is the
// length of 't'.
// Overall TC:- O(N + M) and  if we represent M in terms of N then TC:- O(N).
// SC:- O(m), to store each character of string 't' in the map, where 'm' is the length of 't'.

 
var minWindow = function (s, t) {
    let minLength = Infinity, minSub = "", requiredCount = t.length;
    let start = 0, end = 0;
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) + 1);
        } else {
            map.set(t[i], 1);
        }
    }

    while (end < s.length) {

        if (map.has(s[end])) {

            if (map.get(s[end]) > 0) {
                requiredCount--;
            }

            map.set(s[end], map.get(s[end]) - 1);
        }

        while (requiredCount === 0) {

            if (minLength > end - start + 1) {
                minLength = end - start + 1;
                minSub = s.substring(start, end + 1);
            }

            if (map.has(s[start])) {

                map.set(s[start], map.get(s[start]) + 1);

                if (map.get(s[start]) > 0) {
                    requiredCount++;
                }
            }

            start++;
        }

        end++;
    }

    return minSub;

};