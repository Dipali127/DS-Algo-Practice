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
// Sort the intervals by their start time so that all overlapping intervals become adjacent.
// Sorting the intervals by their start time helps to identify overlapping intervals early and 
// ensures that meetings can be checked in order.

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