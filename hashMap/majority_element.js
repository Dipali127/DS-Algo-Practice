// Leetcode Problem: 169
// Brute force approach:-
// approach:-
// take a function count which take value as an argument and counts how many times this value appears in the array nums.
// iterate through each element in the nums array.
// and for each element, use the count function to determine its frequency in the array.
// if the frequency of the current element exceeds nums.length / 2, return that element as it is the majority element,
// then return that element.
// TC:- O(N^2), because for each element, we are counting occurrences by scanning the entire array.
// SC:- O(1), as there is no additional space used.

var majorityElement = function (nums) {
  function count (value) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === value) {
        count++
      }
    }

    return count
  }

  let length = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    let countOFcurrentValue = count(nums[i])
    if (countOFcurrentValue > length) {
      return nums[i]
    }
  }
}

// Leetcode Problem:- 169
// Optimal Approach:-
// approach:-
// take a map(ordered map) to store the frequency of each element so that its easy to find out which element
// occurs more than nums.length/2 times.
// traverse the array 'nums' and store the frequency of each element in the map.
// after storing all elements frequencies in map, find which element frequency is greater than nums.length/2
// once find that element, return it.
// TC:- O(N), to traverse the array 'nums'.
// SC:- O(N), to store each elements frequencies in map.

var majorityElement = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  let majority
  let length = nums.length / 2
  map.forEach((value, key) => {
    if (value > length) majority = key
  })

  return majority
}
