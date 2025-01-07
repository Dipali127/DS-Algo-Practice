// Leetcode 1207 (asked by apple and google)
// Use of a Map to store the frequency of each element in the array. Then, iterate through the frequencies in the Map
// and use a Set to check for repeated frequencies. If a frequency is already in the Set, return false immediately.
// Otherwise, add the frequency to the Set. If all frequencies are unique, return true.
// TC:- O(N), Explanaton:-
// O(N):- to iterate through the array to store the frequency of each element in the Map.
// O(N):- to iterating through the frequencies stored in the Map to check for uniqueness.
// Therefore, the overall time complexity :- O(N) + O(N) = O(2N) = O(N).
// SC:- O(N), Exaplantion:-
// O(N):- to store the frequency of each elements of the array into a Map.
// O(N):- to store the frequencies in the set.
// Therefore, the overall space complexity :- O(N) + O(N) = O(2N) = O(N).

var uniqueOccurrences = function (arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let set = new Set();
    for(let value of map.values()){
        if(set.has(value)){
            return false;
        }else{
            set.add(value);
        }
    }

    return true;
};
