// Optimal approach:
// approach:
// Instead of iterating through each interval after sorting the intervals by their start times which increase the time ,
// complexity i.e; O(N^2), i will sort the intervals by their start so that all the overlapping intervals are 
// adjacent to each other then i will store the first intervals in a range arrray. 
// Then, I will iterate through each of the remaining intervals. While iterating, I will check 
// if the current interval overlaps with the interval stored in the `range` array. If there is 
// an overlap, I will update the `range` array's start and end times.
// If there is no overlap, I will add the current `range` to the result array and update the 
// `range` with the current iterated interval.
// This approach ensures that I only need a single iteration through the intervals after sorting, 
// making the process more efficient.

// Time Complexity (TC): O(N log N)
// - Sorting the intervals takes O(N log N).
// - And iterating through each intervals to found the overalpping intervals takes linear time complexity O(N).
// - Thus, the overall time complexity is O(N log N).

// Space Complexity (SC): O(N)
// - The space complexity is O(N), as we need extra space to store the merged non-overlapping 
//   intervals in the result array.

var merge = function (intervals) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let range = [intervals[0][0], intervals[0][1]];
    for (let i = 0; i < intervals.length; i++) {
        if (range[1] >= intervals[i][0]) {
            range[1] = Math.max(range[1], intervals[i][1]);
            range[0] = Math.min(range[0], intervals[i][0]);
        } else {
            result.push(range);
            range = [intervals[i][0], intervals[i][1]];
        }
    }

    result.push(range);
    return result;
}