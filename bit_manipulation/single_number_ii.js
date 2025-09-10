// Leetcode Problem:- 137
// Brute force appraoch:- Use of a Hashmap 
// first, check if the 'nums' array contains only a single value. If so, return nums[0] directly.
// Otherwise, iterate through the 'nums' array and store the frequency of each element in a hashmap (Map).
// and iterate through the map to find the key (number) that has a frequency of 1, which is the single number.
// after iterating through the map return that single number. 
// TC:- O(N), where 'N' is the number of elements in the 'nums' array, since we traverse the 'nums' array and the map.
// SC:- O(N), in the worst case, we might store all elements of 'nums' in the map.

var singleNumber = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
    
    let keys;
    map.forEach((value,key)=>{
        if(value==1){
            keys = key;
        }
    })

    return keys;

};

// approach2:-
// sort the array 'nums' in non-decreasing (ascending) order.
// iterate through the array 'nums' starting from index 1.
// while iterating, check if the current number is not equal to the previous number.
// if they are not equal, it indicates that the current number is the single number.
// if the loop completes without finding a single number, return the last element in the array.
// TC:- O(NLOGN), Explanation:-
// O(N log N):- to sort the array 'nums'.
// O(N):- to iterate through the array 'nums'.
// Overall, TC:- O(N log N) + O(N) = O(N log N).
// SC:- O(1), since no additional space is used.

var singleNumber = function(nums) {
   nums.sort((a,b) => a-b);
   for(let i=1; i<nums.length; i+=3){
    if(nums[i] !== nums[i-1]){
        return nums[i-1];
    }
   }

   return nums[nums.length-1];

};

// approach3:-
// loop over each bit position from 0 to 31, which corresponds to the possible bit positions for 32-bit integers.
// for each bit position k, create a bitmask using the expression temp = 1 << k. This bitmask will help us check if the
// kth bit is set (i.e., equals 1) in each number.
// for each number in the input array nums, check whether the kth bit is set or not using the expression (num & temp).
// If the result is 0, it means the kth bit is not set (i.e., 0), so we increment countZero.
// Otherwise, if the kth bit is set (i.e., 1), we increment countOnes.
// after counting the occurrences of 1s and 0s at the kth bit for all numbers, check if countOnes % 3 === 1.
// if this condition is true, it indicates that the single number contributes a 1 at the kth bit. 
// this is because numbers that appear three times will contribute 0s at that bit position, while the single number will
// leave a remainder of 1.
// If the condition is met,update the result by performing a bitwise OR operation: 'result = result | temp'. This sets the kth bit in the result.
// after iterating through all bit positions, the function returns result, which contains the number that appears only once in the array.

// (Time Complexity) TC:- O(32 * n),  as the outer loop runs from 0 to 31, iterating 32 times (for each bit position of a 32-bit integer)
// and inner loop for each bit position, the inner loop iterates through all the elements in the nums array, which has a length of n.
// Overall, TC:- O(32×n)= O(n), Since 32 is a constant, it can be omitted in Big O notation.
// (Space Complexity) SC:- O(1), since no additional space is used apart from few variables.

// Example:-
// Example with nums = [2, 2, 3, 2]
// Initialize result = 0.
// Iterating over each bit position from k = 0 to k = 31:
// We want to examine the kth bit of each number in nums.
// Step-by-Step Breakdown for Each Bit Position:
// For k = 0 (Checking the least significant bit):
// The bitmask temp = 1 << 0 = 1 (binary 0001).
// Count the number of 1s and 0s at the 0th bit for each number in nums:
// 2 (binary 10) has 0 at the 0th bit.
// 2 (binary 10) has 0 at the 0th bit.
// 3 (binary 11) has 1 at the 0th bit.
// 2 (binary 10) has 0 at the 0th bit.
// The total count of 1s at the 0th bit is 1, and the count of 0s is 3.
// Since countOnes % 3 = 1, the 0th bit of the single number is 1. Set the 0th bit in result by doing result = result | temp = 0 | 1 = 1.
// For k = 1 (Checking the second least significant bit):

// The bitmask temp = 1 << 1 = 2 (binary 0010).
// Count the number of 1s and 0s at the 1st bit for each number in nums:
// 2 (binary 10) has 1 at the 1st bit.
// 2 (binary 10) has 1 at the 1st bit.
// 3 (binary 11) has 1 at the 1st bit.
// 2 (binary 10) has 1 at the 1st bit.
// The total count of 1s at the 1st bit is 4, and the count of 0s is 0.
// Since countOnes % 3 = 1, the 1st bit of the single number is 1. Set the 1st bit in result by doing result = result | temp = 1 | 2 = 3.
// For k = 2 to k = 31:

// For all higher bit positions, the numbers in nums have 0s in those positions.
// Therefore, countOnes % 3 = 0 for all these positions, and no more bits are set in result.
// Final Result:

// After iterating through all bit positions, result = 3, which is the single number in the array nums = [2, 2, 3, 2].  

var singleNumber = function(nums) {
  let result = 0;
  for(let k = 0; k <= 31; k++) {
    let temp = 1 << k; 
    let countZero = 0, countOnes = 0;
    
    // Count the number of ones and zeros at the kth bit for all numbers in the array
    for(let num of nums) {
      if((num & temp) === 0) {  // Check if the kth bit is 0
        countZero++;
      } else {  // Else, the kth bit is 1
        countOnes++;
      }
    }

    // If countOnes mod 3 equals 1, it means that the single number contributes a '1' at the kth bit
    if(countOnes % 3 === 1) {
      result = result | temp;  // Set the kth bit in the result
    }
  }

  return result; // Return the single number
};


