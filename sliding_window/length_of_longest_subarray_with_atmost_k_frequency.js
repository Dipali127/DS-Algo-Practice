// Leetcode Problem:- 2958
// Brute force approach:
// approach:
// consider all possible subarrays from the given array `nums`. For each subarray, use of a map to   
// store the frequency of each element within the current subarray. 
// iterate through the map to check if the frequency of each element in the current subarray is less than or equal to `k`. 
// then calculate the length of the current subarray using (j - i + 1) and update it in lengthOflongestSubarray.
// after checking all possible subarrays, return the lengthOflongestSubarray.
// TC:- O(N^3), Explanation:
// O(N): to iterate through all possible starting points of subarrays.
// O(N): for each starting point, iterate through all possible ending points to form subarrays.
// O(N): for each subarray, iterate through the map to check if all frequencies are <= k.
// Overall TC: O(N) * O(N) * O(N) = O(N^3).
// SC:- O(N), because we use a map to store the frequency of elements in the subarray, and in the worst case, all elements could be unique.

var maxSubarrayLength = function (nums, k) {
    let lengthOflongestSubarray = 0;
    for (let i = 0; i < nums.length; i++) {
        let map = new Map();
        for (let j = i; j < nums.length; j++) {
            if (map.has(nums[j])) {
                map.set(nums[j], map.get(nums[j]) + 1);
            } else {
                map.set(nums[j], 1);
            }

            for (let val of map.values()) {
                if (val <= k) {
                    lengthOflongestSubarray = Math.max(lengthOflongestSubarray, j - i + 1);
                } else {
                    break;
                }
            }
        }
    }

    return lengthOflongestSubarray;
}

// Optimal approach:
// approach:-
// extend the window by moving pointer `j` to the right, and store the frequency of the current subarray elements in the map.
// if the frequency of the current element exceeds `k`, increment pointer `i` to shrink the window 
// from the left until the condition is satisfied again (i.e., the frequency of the element becomes 
// less than or equal to `k`).
// continue the above process until pointer 'j' reach to end of the array 'nums'.
//  after checking all possible subarrays, return the lengthOflongestSubarray.
// TC: O(N), as both pointers `i` and `j` traverse the array only once.
// SC: O(N), because we use a map to store the frequency of elements of the window, which in the worst case, could store all elements in the array.  

var maxSubarrayLength = function(nums,k){
    let map = new Map();
    let i=0,j=0, lengthOflongestSubarray = 0;
    while(j<nums.length){
      if(map.has(nums[j])){
          map.set(nums[j],map.get(nums[j])+1);
      }else{
          map.set(nums[j],1);
      }
  
      while(i<j && map.get(nums[j])>k){
          map.set(nums[i], map.get(nums[i])-1);
          i++;
      }
  
      lengthOflongestSubarray = Math.max(lengthOflongestSubarray, j-i+1);
      j++;
    }
  
    return lengthOflongestSubarray;
  }