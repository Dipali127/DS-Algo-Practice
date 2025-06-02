// Leetcode Problem: 169
// Brute force approach:-
// approach:-
// iterate through each element in the `nums` array.
// for each element, count its frequency by scanning the entire array.
// if the frequency of the current element exceeds `nums.length / 2`, return that element as it is the majority element.
// if no such element is found (which theoretically won't happen in this problem), return undefined.
// Time Complexity (TC): O(N^2), because for each element we count occurrences by scanning the entire array.
// Space Complexity (SC): O(1), as no additional space is used.

var majorityElement = function(nums) {
    let majority = Math.floor(nums.length/2);
    for(let i = 0; i < nums.length; i++){
        let count = 1;
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }

        if(count > majority){
            return nums[i];
        }
    }
};


// Leetcode Problem:- 169
// Optimal Approach:-
// approach:-
// use a Map to store the frequency of each element in the array `nums`.
// traverse the array and update the frequency count for each element in the map.
// after building the frequency map, iterate through its entries to find the element whose count is greater than `nums.length / 2`.
// return that element as the majority element.
// Time Complexity (TC): O(N), to traverse the array once and then iterate over the map entries.
// Space Complexity (SC): O(N), to store the frequency of each unique element in the map.


var majorityElement = function(nums){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }

    let majority = Math.floor(nums.length/2);
    for(let [key,val] of map.entries()){
        if(val > majority){
            return key;
        }
    }
}
