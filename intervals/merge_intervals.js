// Brute force approach:
// approach:
// first, I will sort the interval array by their start times so that overlapping intervals are adjacent to each other.
// then, I will use a nested loop where the outer loop iterates through each interval, and the inner loop iterates through the remaining intervals.
// inside the inner loop, I will check if the intervals overlap. If they do, I will merge them into one and remove the overlapping interval after merging.
// once all overlapping intervals are merged, I will add them to the result array.
// after processing all intervals and merging the necessary ones, I will return the result array.
// TC:- O(N^2), Explanation;
// O(N log N) to sort the intervals array. 
// O(N) to run through each interval by the outer loop (since in the worst case, if there is no overlapping interval, it will run through each interval).
// O(N^2) to run through each other interval by the inner loop. The `splice` method is only invoked when an overlapping interval is found. 
// If an overlap occurs, the interval is merged, and the merged interval is removed using `splice`, which is an O(N) operation.
// However, in the worst case, if there is no overlap, the inner loop will simply run through each interval for each outer loop interval without invoking `splice`.
// So, in the worst case where no intervals overlap, the inner loop will iterate through every remaining element, resulting in O(N^2) complexity.
// Thus, the overall time complexity: O(N log N) + O(N) + O(N^2) = O(N^2)
// Space Complexity (SC): O(N)
// - The space complexity is O(N), as we need extra space to store the merged non-overlapping 
//   intervals in the result array.

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [];
    for(let i = 0; i < intervals.length; i++){
        let range = [intervals[i][0], intervals[i][1]];
        for(let j = i+1; j <intervals.length; j++){
            if(range[1] >= intervals[j][0]){
                range[1] = Math.max(intervals[j][1], range[1]);
                range[0] = Math.min(intervals[j][0], range[0]);
                intervals.splice(j, 1);
                j--;
            }
        }

        result.push(range);
    }

    return result;
};

// Optimal approach:
// approach:
// Approach:
// Instead of iterating through each interval after sorting the intervals by their start times, 
// I will store the first interval in a `range` array.
// Then, I will iterate through each of the remaining intervals. While iterating, I will check 
// if the current interval overlaps with the interval stored in the `range` array. If there is 
// an overlap, I will update the `range` array's start and end times.
// If there is no overlap, I will add the current `range` to the result array and update the 
// `range` with the current interval.
// This approach ensures that I only need a single iteration through the intervals after sorting, 
// making the process more efficient.

// Time Complexity (TC): O(N log N)
// - Sorting the intervals takes O(N log N).
// - The loop iterates through each interval once, and the merging operation (extending the range) 
//   is linear O(N) in time complexity.
// - Thus, the overall time complexity is O(N log N).

// Space Complexity (SC): O(N)
// - The space complexity is O(N), as we need extra space to store the merged non-overlapping 
//   intervals in the result array.

var merge = function(intervals){
    let result = [];
    intervals.sort((a,b) => a[0] - b[0]);
    let range = [intervals[0][0], intervals[0][1]];
    for(let i = 0; i < intervals.length; i++){
        if(range[1] >= intervals[i][0]){
            range[1] = Math.max(range[1], intervals[i][1]);
            range[0] = Math.min(range[0], intervals[i][0]);
        }else{
            result.push(range);
            range = [intervals[i][0], intervals[i][1]];
        }
    }

    result.push(range);
    return result;
}