// Leetcode Problem:- 76
// Brute force approach:
// approach:-
// consider all possible substring and for each substring store each character's frequency of string 't' into map.
// and iterate through each substring to check if current substring character exist into map.
// if it is then decrement that character frequency from map meanwhile check if map's all character's values are
// zero. it means that current substring character contain all the characters of string 't'.
// so, update the 'minWindow' and add current substring into 'subString'.
// once, found the minimum window substring which contain all characters of string 't', return subString.
// TC:- O(N^2 * M), Explanation:-
// O(N), to iterate through each starting index of the string 's' or to consider each possible substring.
// O(N * M), for each possible substring, iterate through it and check if all characters of string 't' in the hash map become zero.
// Overall TC:- O(N^2 * M)
// SC:- O(N), to store the characters of string 't' in the map. 

 var minWindow = function(string,t){
    let minWindow = Infinity;
    let subString='';
    for(let i=0;i<string.length;i++){
        let map = new Map();
        for(let k=0;k<t.length;k++){
            if(map.has(t[k])){
                map.set(t[k],map.get(t[k])+1);
            }else{
                map.set(t[k],1);
            }
        }

        for(let j=i;j<string.length;j++){
            if(map.has(string[j])){
                map.set(string[j],map.get(string[j])-1);
            }

            let flag = true;
            for(let val of map.values()){
                if(val!=0){
                    flag = false;
                    break;
                }
            }

            if(flag){
                minWindow = Math.min(minWindow,j-i+1);
                subString = string.substring(i,j+1);
            }

        }
    }

    return subString !== ""?subString:"";
 }
// optimal approach:
// if the length of string s is less than the length of string t, there’s no need to proceed, as it’s impossible to find a substring of s that contains all characters of t.
// i will use a sliding window technique with two pointers (start and end) and a hash map. This approach ensures all characters of string t are present in the current window of string s.
// first, I store all characters of string t in a hash map along with their respective frequencies.
// i will expand the window using end pointer and while iterating through the current window,
// I check whether the character at the end pointer exists in the hash map. If it does, and its frequency in the map is greater than 0, I will decrement the requiredCount, as we need this character, and it's present in the current window. Regardless of whether the character’s frequency is greater than 0, I will decrement its frequency in the hash map.
// meanwhile i will check if the requiredCount becomes zero, it means the current window contains all characters of string t. At this point, I calculate the minLength and update the minWindow if the current window size is smaller than the previously recorded minLength.
// after this I will try to shrink the window from the left using the start pointer.
// Before shrinking the window, I will check if the character pointed to by the start pointer exists in the hash map. If it does, it means this character is part of string t, and we need it. Therefore, I will increment its frequency in the hash map. If its frequency in the hash map becomes greater than 0 after incrementing, I will increment the requiredCount, as this character is required in future,after this increment the start pointer.
// Once the requiredCount becomes greater than 0, stop the inner while loop and increment the end pointer to expand the window again.
// Continue the process of expanding and shrinking the window until all characters of s are processed.
// After processing all characters, return the minWindow substring, which represents the smallest substring containing all characters of t.
// TC:- O(N), Explanation:-
// O(m):- to iterate through string 't', where 'm' is the length of the string 't'.
// O(N):- used by outer while loop to iterate through each character of string 's', where 'N' is the length of the string 's'.
// O(N):- for the inner while loop to shrink the window.
// Both the 'start' and 'end' pointers iterate independently through the string 's' (not nested).
// In the worst case, each character of 's' can be visited twice (once by the 'end' pointer and once by the 'start' pointer).
// Overall TC:- O(N + N) = O(2N) = O(N).
// SC:- O(m), to store each character of string 't' in the map, where 'm' is the length of the string 't'.

var minWindow = function (s, t) {
    if(t.length>s.length){
        return "";
    }
    let i = 0, j = 0, minWindow = Infinity, substring = "";
    let requiredCount = t.length, map = new Map();
    for (let k = 0; k < t.length; k++) {
        if (map.has(t[k])) {
            map.set(t[k], map.get(t[k]) + 1);
        } else {
            map.set(t[k], 1);
        }
    }
    while (j < s.length) {
        if (map.has(s[j]) && map.get(s[j]) > 0) {
            requiredCount--;
        }

        map.set(s[j], map.get(s[j]) - 1);

        // once requiredCount is zero, it means we found the window where each characters of window are same as in map.
        while (requiredCount === 0) {
            if (minWindow > j-i+1) {
                minWindow = j - i + 1;
                substring = s.substring(i,j+1)
            }
            
            map.set(s[i], map.get(s[i]) + 1);
            
            if(map.get(s[i])>0){
                requiredCount++;
            }

            i++;
        }

        j++;
    }

    return minWindow === Infinity ?"" : substring;
}

