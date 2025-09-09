// Brute force approach:
// Approach:
// 
// Optimal approach:
// Approach:
// Instead of iterating through each interval after sorting by their start times—which increases the time 
// complexity to O(N^2)—I will sort the intervals by their start times so that all overlapping intervals are
// adjacent to each other. 
// Then, I will store the first interval in a `range` array.
// Next, I will iterate through the remaining intervals.
// While iterating, I will check:
// - If the current interval overlaps with the previous interval (stored in the `range` array):
//   If there is an overlap, I will update the `range` array’s start and end times.
// - If there is no overlap, I will add the current `range` to the result array and update `range`
//   with the current interval.
//
// This approach ensures that I only need a single iteration through the intervals after sorting,
// making the process more efficient.
//
// Time Complexity (TC): O(N log N)
// - Sorting the intervals takes O(N log N).
// - Iterating through each interval to find overlapping intervals takes linear time, i.e., O(N).
// - Thus, the overall time complexity is O(N log N).
//
// Space Complexity (SC): O(N)
// - The space complexity is O(N), as we need extra space to store the merged non-overlapping
//   intervals in the result array.
//
// Why is the range's end set to the maximum and start to the minimum?
// - Because it allows future intervals to overlap with the current merged interval, ensuring
//   that we don’t miss any potential overlapping intervals.s

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