// Leetcode Problem:- 452
// Problem Says:
// Given spherical balloons taped onto a flat wall (represented by the XY-plane), 
// each balloon is defined by a 2D integer array 'points' where points[i] = [xstart, xend]. 
// This means that the balloon's horizontal diameter stretches from xstart to xend. 
// You can shoot arrows vertically from any point along the x-axis. An arrow shot at position 'x' 
// will burst all balloons whose horizontal diameter covers 'x' (i.e., xstart <= x <= xend). 
// The goal is to determine the minimum number of arrows required to burst all the balloons.

// Optimal Approach:
// Approach:-
// sort the balloons based on their starting positions (xstart). 
// initialize a variable 'prev' to represent the interval of the first balloon in the sorted list. This variable will
// keep track of the current interval of overlapping balloons.
// initialize 'count' to 1 because at least one arrow is required to burst the first balloon.
// iterate through the remaining balloons in the sorted list:
//    - If the current balloon's starting point (points[i][0]) lies within the interval of the previous balloon (prev[1]), 
//      they overlap so, pdate the overlapping region by setting prev[0] to the maximum starting point and 
//      prev[1] to the minimum ending point of the overlap.
//    - If the current balloon's starting point is outside the previous balloon's interval, 
//      it means a new arrow is required so increment the arrow count and update 'prev' to the current balloon's interval.
// Finally, return the total number of arrows required (count).
// TC:- O(NLOGN), Explanation:
// O(NLOGN), to sort all the balloons of 'points' array.
// O(N), to iterate through the 'points' array to count the arrows required to burst all the ballons.
// overall, TC:- O(NLOGN) + O(N) = O(NLOGN).
// SC:- O(1), since no additional space is used.
// Note:-
// The 'prev' variable always keeps track of the smallest interval where all previously overlapping balloons 
// can be burst by a single arrow. By updating 'prev' with the maximum starting point and minimum ending point, 
// we ensure that future balloons are checked against the correct overlapping region. 
// If a balloon does not overlap, we need a new arrow.

var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
        
        let prev = points[0];
        let count = 1;
        for(let i = 1; i < points.length; i++){
            if(points[i][0] <= prev[1]){
                prev[0] = Math.max(prev[0], points[i][0]);
                prev[1] = Math.min(prev[1], points[i][1])
            }else{
                count++;
                prev = points[i];
            }
        }

        return count;
};