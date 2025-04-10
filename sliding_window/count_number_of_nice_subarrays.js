// Leetcode Problem:-1248
// Brute force approach:-
// approach:-
// consider all possible subarrayouter loop iterates through each starting index i of the subarray.
// and the inner loop iterates through each possible ending index j for the subarray starting at i.
// as the inner loop runs, we keep track of the count of odd numbers in the current subarray.
// each time the count of odd numbers in the subarray becomes equal to k, increment niceNumber to count that subarray as a "nice" subarray.
// finally, after considering all possible subarrays, return the total number of "nice" subarrays.
// TC: O(N^2), since we use a nested loop to check all possible subarrays.
// SC:- O(1), as no additional space is used apart from a few variables.
var numberOfSubarrays = function (nums, k) {
    let niceNumber = 0;
    for (let i = 0; i < nums.length; i++) {
        let countOdd = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 !== 0) {
                countOdd++;
            }
            if (countOdd === k) {
                niceNumber++;
            }
        }
    }

    return niceNumber;
};


// Optimal Approach:- using sliding window and two pointer
// approach:-
// take few variabels such as:- oddCount, prevCount and niceSubarray, all are initialised with zero where ,
// - oddCount is used to count the number of odd numbers from the current subarray. 
// - prevCount tracks the number of valid subarrays ending at index j that contain exactly k odd numbers from current window.
// - niceSubarray accumulates the total count of valid subarrays (with exactly k odd numbers) from the array nums.
// extend the window by moving pointer 'j' toward right meanwhile check if value at pointer 'j' is odd. if it is
// then increment the oddCount and make prevCount is zero which indicates the start of new subarrays with exactly k odd numbers.
// once oddCount is equal to 'k' increment the prevCount as we found the new window of nice subarray after then 
// shrink the window by moving pointer 'i' to the right but before shrink the window check if value pointed by pointer 'i' is odd
// if it is then decrement the oddCount because we're removing an odd number from the current window and increment pointer 'i'
// otherwise simply increment pointer 'i' and add the 
// prevCount(count of nice subarray ending at index 'j') to niceSubarray  variable and then increment pointer 'j'.
// but if the current number pointed by pointer 'j' is even, keep adding prevCount to niceSubarray since the number of 
// valid subarrays does not change. 
// continue this process until pointer j reaches the end of the array.
// finally, return niceSubarray, which will contain the total number of valid subarrays with exactly k odd numbers.
// TC:- O(N), since we traverse the array once with two pointers (i and j).
// SC:- O(1), since no additional space is used other than the few variables.

var numberOfSubarrays = function(nums, k) {
  let n = nums.length;
  let oddCount = 0;
  let prevCount = 0;
  let niceSubarray = 0;
  let i = 0;
  let j = 0;

  while (j < n) {
    if (nums[j] % 2 !== 0) { // ODD
      oddCount++;
      prevCount = 0;
    }

    while (oddCount === k) {
      prevCount++; // Count subarrays ending at j with exactly k odd numbers

      if (nums[i] % 2 !== 0) { // If i points to an odd number
        oddCount--; // Decrease odd count as we are moving i forward
      }
      i++; // Shrink window from left
    }

    niceSubarray += prevCount; // Add valid subarrays to result
    j++; // Expand window from right
  }

  return niceSubarray;
};


// Optimal Approach2: Using Sliding Window and Two Pointer
// Instead of solving using a brute force approach which uses a time complexity of O(N²), I will use sliding window
//  with a two-way calling method, where I will:
//  Call the sliding window function first with at most k odd numbers, which includes subarrays with count 0, 1, 2, ..., up to k.
// and then Call the sliding window function again with at most k-1 odd numbers, which includes subarrays with count 0, 1, 2, ..., up to k-1.
// Subtracting findCount(nums, k) with findCount(nums, k-1) eliminates all common subarrays between both counts, 
// leaving only the count of subarrays with exactly k odd numbers.

// Inside findCount(nums, k):
// - I will use two pointers, start and end, both initialized at 0, which point to the starting index of the window.
// - I will also declare two variables: oddCount and niceSubarray, both initialized to 0. 
//   oddCount keeps track of the number of odd numbers found in the current window,
//   and niceSubarray keeps track of all the valid subarrays ending at index 'end'.
// While iterating through the array nums, I will check:
// - If the value pointed to by 'end' is odd, increment the oddCount variable by 1.
// - Once the oddCount is greater than k, shrink the window. But before shrinking the window, 
//   check if the value pointed to by the 'start' pointer is odd. If it is, decrement oddCount 
//   since that number is no longer part of the new window. Otherwise, just increment the 'start' pointer.
// - Always add (end - start + 1) to the niceSubarray variable, which represents all valid subarrays ending at index 'end'.
// - Continue expanding the window by moving 'end' forward.

// Time Complexity: O(N), since each element is processed at most twice (once when 'end' expands the window and once when 'start' shrinks it).
// Space Complexity: O(1), since no additional space is used, only a few integer variables.


var numberOfSubarrays = function(nums, k){
  return findCount(nums, k) - findCount(nums, k-1);
  function findCount(nums, k){
      let start = 0, end = 0, niceSubarray = 0, oddCount = 0;
      while(end < nums.length){
          if(nums[end] % 2 !== 0){
              oddCount++;
          }

          while(oddCount > k){
              if(nums[start] % 2 !== 0){
                  oddCount--;
              }
              start++;
          }
          
          niceSubarray+= end - start + 1;
          end++;
      }

      return niceSubarray;
  }
}