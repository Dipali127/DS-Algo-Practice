// Leetcode Problem:- 56
// Problem Says:-
// Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.
// Optimal approach:
// Approach:-
// sort the intervals array by their start times. This ensures that once we start merging intervals, 
//    overlapping intervals will be adjacent to each other.
// use of a single loop to iterate through the sorted intervals. Initialize the first interval as the starting 'range'.
// for each subsequent interval, check if it overlaps with the current 'range'. 
// if the interval overlaps (i.e., intervals[j][0] <= range[1]), merge them by extending the range's end to the maximum of range[1] and intervals[j][1].
// if there is no overlap (i.e., intervals[j][0] > range[1]), push the current 'range' into the final result and start a new range with the current interval.
// after processing all intervals, ensure to push the last range to the final result.
// the final array will contain all non-overlapping intervals.
// Time Complexity (TC):- O(N log N), Explanation:
// - Sorting the intervals takes O(N log N).
// - loop iterates through each interval once, and the merging operation (extending the range) is linear O(N) in time complexity.
// Thus, overall TC:- O(NLGON)
// Space Complexity (SC):- O(N), space to store the merged non-overlapping intervals in the 'final' array.

var merge = function(intervals) {
    let final = [];
    intervals.sort((a, b) => a[0] - b[0]); 
    let range = [intervals[0][0], intervals[0][1]]; 
    
    for (let j = 1; j < intervals.length; j++) {
        if (intervals[j][0] <= range[1]) {
            range[1] = Math.max(range[1], intervals[j][1]); 
        } else {
            final.push(range);
            range = [intervals[j][0], intervals[j][1]]; 
        }
    }

    final.push(range);

    return final;
};

