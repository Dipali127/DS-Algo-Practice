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

// Optimal approach:-
// approach:-
// first check a condition that is length of string 't' is greater than length of string 's' then return an empty string as
// it's impossible to check for all characters of 't' to exist in 's'.
// create a frequency map to store all characters of string 't'. it will help us to track the count of each required character.
// extend the window by moving pointer 'j' toward right of the given string 's' meanwhile check if the current character s[j]
// exists in the map. 
// if it does and its frequency is greater than 0, it means we need this character, so decrement its frequency and also decrease requiredCount.
// once requiredCount becomes zero, this means we found a valid window that contains all characters of string 't'.
// now, try to minimize the window by moving i to the right . for each valid window, update minWindow and the substring
// if the current window is smaller than the previously one.
// before shrinking the window, restore the count of the character at i in the map, and if the restored count becomes greater than 0,
// increment requiredCount as we need this character again in future windows.
// continue expanding and shrinking the window until the end of string 's' is reached.
// finally, return the smallest valid window (substring) or an empty string if no valid window was found.
// TC:- O(N), Explanation:-
// O(t):- to iterate through string 't', where 't' is the length of the string 't'.
// O(N):- to iterate through each character of string 's'.
// overall, TC:- O(N)
// SC:- O(N), to store each character of string 't' in map. 

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

