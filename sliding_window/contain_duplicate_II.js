// Leetcode Problem:- 219
// Brute force approach:
// approach:
// use of nested loop where the outer loop iterates through each element of the array.
// the inner loop checks if the current element (pointed by the outer loop) is equal to any other 
// element (pointed by the inner loop) within a distance 𝑘.
// TC: O(N^2), because of the nested loop. 
// SC: O(1) , as there is no extra space used.

var containsNearbyDuplicate = function (arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};

// Optimal approach: using sliding window and hash map
// approach:-
// extend the window by moving pointer 'j' to the right.
// check if the current value at 'arr[j]' is in the hash map.
//  - if it is, compare the distance between the current index 'j' and the index stored in the hash map.
//  - if the distance is less than or equal to 'k', return true.
//  - if not, store the current index 'j' of 'arr[j]' in the hash map.
// shrink the window if the window size exceeds 'k' by moving pointer 'i' to the right.
// remove the element at 'arr[i]' from the hash map.
// continue this process until all elements are processed.
// TC:- O(N), where N is the length of the array, as each element is traversed once.
// SC:- O(min(N, k)), where N is the length of the array and 'k' is the window size.
// the space used is proportional to the number of unique elements in the current window.


var containsNearbyDuplicate = function (arr, k) {
    let map = new Map();
    let i = 0, j = 0;
    while (j < arr.length) {
        if (map.has(arr[j])) {
            if (Math.abs(j - map.get(arr[j])) <= k) {
                return true;
            }
        }
        map.set(arr[j], j);
        

        if (j - i >= k) {
            map.delete(arr[i]);
            i++;
        }

        j++;
    }

    return false;
}
