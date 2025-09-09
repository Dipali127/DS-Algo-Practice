// Problem Statement:
// You are given an array of meeting time intervals intervals where intervals[i] = [starti, endi].
// Return true if a person can attend all meetings, otherwise return false.

// Example:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
// Explanation: The person cannot attend all meetings due to overlap between [0,30] and [5,10].

Input: intervals = [[7,10],[2,4]]
Output: true
// Explanation: No overlap; person can attend both.


// Optimal Approach:
// Approach:
// Sort the meetings by their start times so that a person can attend meetings in order, 
// and it will be easier to check for overlapping meetings as well.

// While iterating through the intervals:
// Check if the current interval's start time is less than the previous interval's end time.
// If it is, there is an overlap, so return false immediately.
// If no overlaps are found after checking all intervals, return true.

// Time Complexity: O(N log N)
// - O(N log N) for sorting the intervals by their start time.
// - O(N) for iterating through the intervals once.
// So, overall TC: O(N log N)

// Space Complexity: O(1), since no additional space is used.

let intervals = [[7,10],[2,4]];
console.log(canAttendMeetings(intervals));
function canAttendMeetings(intervals){
  intervals.sort((a,b) => a[0] - b[0]);
  for(let i = 1; i < intervals.length; i++){
    if(intervals[i][0] <= intervals[i-1][1]){
      return false;
    }
  }
  
  return true;
}