// Problem said:- We have a tree of fruits containing different types of fruits, and you have two 
// baskets in which you can collect two different types of fruits. That means each basket can only hold a single type of fruit, and quantity doesn't matter, but only unique fruits can be held in one basket. 
// This means both baskets can only hold two types of fruits in total.
// Also, you can start from any tree.

// Brute force approach:-
// Approach:-

// I will take one variable `maxFruits`, which is initially initialized to 0, to keep track of the maximum number
//  of fruits we can pick up in the basket.
// I will consider each possible subtree (subarray), and for each subtree (subarray),
//  I will store the fruit in a hash map.
// While storing the fruits in the hash map, I will check if the hash map length is greater than two.
//  If it is, I will break that subtree (subarray).
// Otherwise, I will increment the count since I have added a fruit to the hash map 
// (Note: count will be incremented even if you are increasing that fruit's frequency, but it does not exceed more than 
// two unique fruits).
// Also, I will update `maxFruits` with the current count of fruits in the subtree.
// Finally, after finding `maxFruits`, which contains the maximum number of fruits in the subtree, I will return it.

// TC:- O(N^2) - because of the nested loop for each subarray (subtree).
// SC:- O(2) - since the hash map size can't exceed 2.

var totalFruit = function(fruits){
    let maxFruits = 0;
    for(let i = 0; i < fruits.length; i++){
        let map = new Map();
        let count = 0;
        for(let j = i; j < fruits.length; j++){
            if(map.has(fruits[j])){
                map.set(fruits[j], map.get(fruits[j]) + 1);
            } else {
                map.set(fruits[j], 1);
            }

            if(map.size > 2){
                break;
            }

            count++;
        }

        maxFruits = Math.max(maxFruits, count);
    }

    return maxFruits;
}

// Optimal Approach:-
// Instead of using a nested loop, which increases the time complexity,
// I will optimize the solution by using a sliding window and two pointers: `start` and `end`.
// I will extend the window by using the `end` pointer and store the current fruit's frequency in a hash map. 
// If the map size exceeds 2, then I will shrink the window by incrementing the `start` pointer.
// But before shrinking the window, I will remove the frequency using the `start` pointer and 
// check if that element is equal to 0. If it is, I will delete it permanently since the map can only hold up to two types
// of fruits into the basket.
// Otherwise, I will update `maxFruits` for the current subtree (subarray) if it is greater than the previously stored `maxFruits`.
// Finally, after finding `maxFruits`, which contains the maximum number of fruits in the subtree, I will return it.

// TC:- O(N) - since two pointers, `start` and `end`, iterate over each element once using linear iteration.
// SC:- O(2) - since the hash map size can't exceed 2.

var totalFruit = function (fruits) {
    let maxFruits = 0;
    let start = 0, end = 0;
    let map = new Map();
    while (end < fruits.length) {
        if (map.has(fruits[end])) {
            map.set(fruits[end], map.get(fruits[end]) + 1);
        } else {
            map.set(fruits[end], 1);
        }

        while (map.size > 2) {
            map.set(fruits[start], map.get(fruits[start]) - 1);
            if (map.get(fruits[start]) === 0) {
                map.delete(fruits[start]);
            }
            start++;
        }

        maxFruits = Math.max(maxFruits, end - start + 1);
        end++;
    }

    return maxFruits;
}
