// Leetcode Problem:- 76
// Brute force approach:
// Approach:-
// consider all possible substrings and for each substring, store each character's frequency of string 't' into a hash map.
// iterate through each substring to check if the current substring contains all characters of string 't'.
// if a character exists in the hash map, decrement its frequency.
// meanwhile, check if all values in the hash map become zero, which means the current substring contains all characters 
// of string 't'.
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
// which will help to find out a window where all the characters of string 't' exist in that window.
// i will slide/extend the window using the 'end' pointer and check if the current character 
// at 'end' exists in the hash map and has a positive frequency. 
// If it does, I will decrement 'requiredCount' since this character is needed 
// and now exists in the current window.
// Regardless of whether the current character at 'end' exists in the hash map or not, 
// I will always decrement its frequency in the hash map. This will helps to track how many times 
// a character has been used and allows handling extra or irrelevant characters correctly.
// Once 'requiredCount' reaches zero, it means I have found a valid window containing 
// all characters of string 't'. At this point, I will check if the previous minimum window 
// is larger than the current window size. If it is, I will update 'minWin' and 
// 'minSubstring' accordingly, then attempt to shrink the window.
// Before shrinking the window, I will increment the frequency of the character 
// pointed by 'start' in the hash map because it is now excluded from the window(no longer part of new window).
// However, if this character's frequency in the hash map becomes greater than zero 
// after incrementing, it means I need this character again, so I will increment 'requiredCount'.
// This process continues until 'requiredCount' becomes greater than zero, at which point 
// the shrinking stops, and the 'end' pointer continues expanding the window.
// After processing all characters, return 'minSubstring', which represents the 
// smallest substring containing all characters of 't'.

// TC:- O(N), Explanation:-
// O(m):- To iterate through string 't', where 'm' is the length of 't'.
// O(N):- Used by the outer while loop to iterate through each character of string 's', 
//        where 'N' is the length of 's'.
// O(N):- Used by the inner while loop to shrink the window.
// Both the 'start' and 'end' pointers iterate independently through the string 's' (not nested).
// In the worst case, each character of string 's' can be visited twice (once by the 'end' pointer 
// and once by the 'start' pointer).
// Overall TC:- O(N + N) = O(2N) = O(N).
// SC:- O(m), to store each character of string 't' in the map, where 'm' is the length of 't'.

 
var minWindow = function(s, t) {
    let minWin = Infinity, minSubstring = ""
    let requiredCount = t.length;
    let map = new Map();
    for(let i = 0; i < t.length; i++){
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i])+1);
        }else{
            map.set(t[i], 1);
        }
    }

    let start = 0, end = 0;
    while(end < s.length){
        if(map.has(s[end]) && map.get(s[end]) > 0){
            requiredCount--;
        }

        map.set(s[end], map.get(s[end]) - 1);

        while(requiredCount === 0){
            if(end - start + 1 < minWin){
                minWin = end - start + 1;
                minSubstring = s.substring(start, end+1);
            }

            map.set(s[start], map.get(s[start])+1);
           if(map.get(s[start]) > 0){
            requiredCount++;
           }

           start++;
        }

        end++;
    }

    return minSubstring !== "" ? minSubstring : "";
};