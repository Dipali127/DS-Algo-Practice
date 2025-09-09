// Leetcode Problem: 435
// Problem Statement: We are given an array of intervals and we have to return the minimum number of overlapping
// intervals to remove.

// Optimal Approach (Greedy)
// Approach:
// Sorting the intervals by their end time helps you keep more non-overlapping intervals and remove the overlapping intervals.
// For example, suppose you have multiple activities to choose from, and each activity has a time interval.
// Your strategy would be to choose the activitiess that end first so that you can participate in more activities without 
// overlapping. This approach also helps you easily skip intervals that overlap with the previously selected one.

// After sorting, I will take a `count` variable to keep track of the number of overlapping intervals that need to be
// removed. I will initialize a variable `lastInterval` to point to the first interval in the array, 
// and set a pointer `i` to the next interval.

// While iterating through the array, I will check the following conditions:
// 1. If the current start time (CS) >= end time of `lastInterval` (LE),
//    it means there is no overlap. So, I will update `lastInterval` to the current interval and move `i` forward.
//    (Example: (0,2) and (3,6)) → No overlap; update `lastInterval` to (3,6).

// 2. If the current end time (CE) >= LE, it means there is an overlap.
//    In this case, I will keep `lastInterval` (since it ends earlier) and remove the current interval by 
//    incrementing `count`. (Example: (1,3) and (2,4)) → Overlap; keep (1,3), remove (2,4).

// 3. If the current end time (CE) < LE, it also means there is an overlap.
//    But this time, I will remove `lastInterval` and update `lastInterval` to the current interval, 
//    as it ends earlier. Then, increment both `count` and `i`.
//    (Example: (1,5) and (2,3)) → Overlap; remove (1,5), keep (2,3).

// After iterating through all intervals, I return `count`, which represents the minimum number of overlapping intervals
// removed.

// Time Complexity: O(N log N)
// - O(N log N) for sorting the intervals by end time.
// - O(N) for iterating through the intervals once using pointer `i` and `lastInterval`.
// - Overall TC: O(N log N) + O(N) = O(N log N)

// Space Complexity: O(1), since no additional space is used apart from a few variables.

// Note: This approach also works for related problems like Meeting II.

// Remember the three conditions:
// (1) currentStart >= lastEnd → No overlap  
// (2) currentEnd <= lastEnd → Overlap; remove lastInterval  
// (3) currentEnd > lastEnd → Overlap; remove current interval


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
