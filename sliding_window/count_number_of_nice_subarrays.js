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


// Optimal Approach:-
// approach:-
// take few variabels such as:- oddCount, prevCount and niceSubarray, all are initialised with zero where ,
// - oddCount is used to count the number of odd numbers from the current subarray. 
// - prevCount tracks the number of valid subarrays ending at index j that contain exactly k odd numbers.
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



