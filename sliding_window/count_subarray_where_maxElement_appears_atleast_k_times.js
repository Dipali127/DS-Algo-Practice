// Leetcode Problem:- 2962
// Brute force approach: 
// approach:-
// first find the max element from the nums array.
// consider all possible subarray and count the maxElement appears in that subarray.
// if maxElement count in that subarray is greater than equal to k then increment the numberSubarray by 1.
// once find all the subarray where the maxElmenet count is atleast k times then return numberSubarray.
// TC:O(N^2), Explanation:-
// O(N):- to find the maxElement.
// O(N^2):- to find number of subarray where count of maxElement is alteast k times. 
// overall , TC:- O(N)+O(N^2) = O(N^2).
// SC:- O(1), as there is no additional space used.

var countSubarrays = function(nums, k) {
    let maxElement = Math.max(...nums);
    let subarrayCount = 0;
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = i; j < nums.length; j++){
            if(nums[j] === maxElement){
                count++;
            }

            if(count >= k){
                subarrayCount++;
            }
        }
    }

    return subarrayCount;
};

// Optimal approach: using sliding technique
// approach:-
// first find the max element from the nums array.
// extend the window by moving the `j` pointer to the right and count the occurrences of `maxElement` within that window.
// if the count of `maxElement` in the current window is greater than or equal to `k`, 
// increment the `numberSubarray` by (nums.length - j), which gives exact number of subarrays ending at or after `j`.
// before shrinking the window toward right by using pointer 'i',
// check if the element at `i` is equal to `maxElement`. if it is, decrement the count of `maxElement` and move `i` to the 
// right and again in the shrinked window check that count is greater than equal to k continue this process until all subarrays are checked.
// once find all the subarray where the maxElmenet count is atleast k times then return numberSubarray.
// TC:- O(N),because each element is processed at most twice (once by `j` and once by `i`).
// SC:- O(1), as there is no additional space used.
// Note:- the 'nums.length - end will count the number of subarray ending at index 'end' or after 'end' or 
// In other words, once the window [start...end] is valid (i.e., it contains k or more max elements), any extension of that
// subarray ending beyond end is also valid — because adding more elements can’t remove the already counted max elements. 

var countSubarrays = function(nums, k) {
    let maxElement = Math.max(...nums);
    let subarrayCount = 0;
    let start = 0, end = 0, count = 0;
    while(end < nums.length){
        if(nums[end] === maxElement){
            count++;
        }

        while(count >= k){
         subarrayCount+= nums.length - end;
         if(nums[start] === maxElement){
            count--
         }
         start++;
        }

        end++;
    }

    return subarrayCount;
};

