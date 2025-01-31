// Leetcode Problem:- 435
// Problem Statement: We are given an array of intervals and we have to return the minimum number of overlapping intervals to remove.

// Optimal Approach 1:
// Approach:
// I will first sort the intervals by their start time so that all the overlapping intervals are adjacent to each other.
// I will take a count variable which keeps track of the count of overlapping intervals that need to be removed to make the intervals array non-overlapping.
// I will use two pointers, i and j, where pointer i points to the first interval of the intervals array, and j points to the next interval.
// While iterating through the intervals array, I will assign the start and end time of both intervals pointed by pointers i and j to `currentStart` and `currentEnd` for the current interval, and `nextStart` and `nextEnd` for the next interval.
// I will check the following conditions:
// 1. If currentEnd <= nextStart, it means there is no overlap, so I will increment pointers i and j.
// 2. If currentEnd <= nextEnd, it means the intervals are overlapping, so I will increment the count and remove the interval pointed to by pointer j
// because the end time of the interval pointed to by pointer j is greater and might cause overlaps with other intervals in the future.
// 3. If currentEnd > nextStart, it means there is overlap, and I will increment the count and remove the interval pointed to by pointer i
// because the end time of the interval pointed to by pointer i is greater and might cause overlaps with other intervals in the future.
// Once I have iterated through all intervals, I will return the count, which stores the number of overlapping intervals removed.
// Time Complexity: O(N log N), Explanation:-
// O(N log N) for sorting the intervals array.
// O(N) to iterate through the intervals array once using pointers i and j.
// Overall TC: O(N log N) + O(N) = O(N log N).
// Space Complexity: O(1), since no additional space is used apart from a few variables.
// Example for testing: {{3,5}, {2,4}, {1,3}, {0,2}, {4,6}}

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0, j = 1;
    let count = 0;
    while (j < intervals.length) {
        let currentStart = intervals[i][0];
        let currentEnd = intervals[i][1];
        let nextStart = intervals[j][0];
        let nextEnd = intervals[j][1];

        // No overlap
        if (currentEnd <= nextStart) {
            i = j;
            j++;
        } else if (currentEnd <= nextEnd) { // Overlapping
            j++;
            count++;
        } else if (currentEnd > nextStart) { // Overlapping
            i = j;
            j++;
            count++;
        }
    }

    return count;
};

// Optimal Approach 2:
// Approach:
// Instead of sorting the intervals by their start time, I will sort the intervals by their end time because intervals that end later are more likely to overlap with other intervals in the future. 
// By sorting the intervals by their end time, I can focus on removing the intervals that finish the earliest (by checking the end time).
// After sorting, I will take a count variable which will keep track of the number of overlapping intervals that need to be removed.
// I will initialize a variable `lastInterval` to point to the first interval of the intervals array and set pointer i to the next interval.
// While iterating through the intervals array, I will check the following conditions:
// 1. If the current start time is greater than or equal to the end time of the last interval, it means there is no overlap, so I will update `lastInterval` to the current interval and increment pointer i.
// for this refer this example:- (0,2) and (3,6).
// 2. If the current end time is greater than or equal to the end time of the last interval, it means there is an overlap, so I will increment the count and pointer i and keep `lastInterval` unchanged.
// for this refer this example:- (0,3)  and (2,5).
// 3. If the current end time is less than the end time of the last interval, it means I need to remove the last interval, so I will increment the count and update `lastInterval` to the current interval.
// Once I have iterated through all intervals, I will return the count, which stores the number of overlapping intervals removed.
// Time Complexity: O(N log N), Explanation:-
// O(N log N) for sorting the intervals by end time.
// O(N) to iterate through the intervals array once using pointer i and lastInterval.
// Overall TC: O(N log N) + O(N) = O(N log N).
// Space Complexity: O(1), since no additional space is used apart from a few variables.
// Note:- This approach work with meeting room 1 and meeting 2 problem.

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let i = 1;
    let lastInterval = intervals[0];
    while (i < intervals.length) {
        let currentStart = intervals[i][0];
        let currentEnd = intervals[i][1];
        let lastEnd = lastInterval[1];

        if (currentStart >= lastEnd) {
            lastInterval = intervals[i];
            i++;
        } else if (currentEnd >= lastEnd) {
            count++;
            i++;
        } else if (currentEnd < lastEnd) {
            lastInterval = intervals[i];
            i++;
            count++;
        }
    }

    return count;
};
