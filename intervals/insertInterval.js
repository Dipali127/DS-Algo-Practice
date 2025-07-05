// Leetcode Problem:- 57
// Brute force Approach:
// approach:-
// since, intervals are already sorted in ascending order that means all overlapping intervals are adjacent to each other So,
// i will initialize a pointer i with 0.
// i will run a while loop to iterate through each interval:
// and check If the current interval's end time is less than the newInterval's start time, this means the current 
// interval is non-overlapping and newInterval comes later so i simply increment the pointer i by 1.
// but if the start time of the current interval is greater than the end time of newInterval, 
// it means I have found the correct position to insert newInterval.
//  I will insert it using splice() and return immediately, as all overlapping intervals are already merged.
// otherwise, if the end time of the current interval is greater than or equal to the start time of newInterval, 
// it means they overlap. I will merge them by updating newInterval to have the minimum start time and 
// maximum end time of both intervals. Then, I will remove the merged interval using splice().
// if the current interval does not overlap with newInterval, I will simply move to the next interval.
// if newInterval is not inserted during the loop (meaning it belongs at the end), I will append it to the intervals array.
// finally, I will return the updated intervals array.
// TC:- O(N^2), because in the worst case (where all intervals overlap with newInterval), the time complexity could be O(N²) 
// due to the repeated calls to splice() and the shifting of elements.
// SC:- O(1), since we modify the input array in place without using additional space, 
// except for a few extra variables.

var insert = function (intervals, newInterval) {
    let i = 0;
    while(i < intervals.length){
        if(intervals[i][1] < newInterval[0]){
            i++;
        }
        else if(intervals[i][0] > newInterval[1]){
            intervals.splice(i, 0, newInterval);
            return intervals;
        }else{
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            intervals.splice(i, 1);
        }
    }
    
    intervals.push(newInterval);
    return intervals;
};


// Optimal Approach:
// approach:
// instead of modifying the existing intervals array (which could unnecessarily increase time complexity), 
// I will use a result array to store the newInterval and all non-overlapping intervals.
// i will run a while loop to iterate through the intervals array. During each iteration, I will check that:
// If the current interval's end time is less than the newInterval's start time, this means the current interval
// is non-overlapping, So I will insert it into the result array.
// If the current interval's start time is greater than the newInterval's end time, it means I have found the correct
// position to insert the newInterval. I will break the loop and then insert the newInterval.
// If the current interval overlaps with the newInterval, I will merge the two intervals by updating the newInterval's
// start and end time, and increment the pointer i.
// Once all the intervals are processed and the newInterval and non-overlapping intervals are added to the result array, 
// I will return the result array.
// TC:- O(N), to iterated through the intervals array once.
// SC:- O(N), as we store the intervals in the result array. In the worst case (when there are no overlapping intervals),
// we will insert all intervals into the result array.

var insert = function (intervals, newInterval) {
    let result = [];
    let i = 0;
    while (i < intervals.length) {
        if(intervals[i][1] < newInterval[0]){
            result.push(intervals[i]);
        }else if(intervals[i][0] > newInterval[1]){
            break;
        }else{
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }

        i++;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}


