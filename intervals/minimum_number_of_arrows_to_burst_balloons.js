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
// sort the balloons by their starting positions (xstart) so that the overlapping balloons are adjacent 
// to each other which will help to find the balloons which can be burst by a single arrow. 
// initialize a variable 'prev' to represent the interval of the first balloon in the sorted list.
// This variable keeps track of the overlapping region where all previous balloons can be burst by a
// single arrow.
// initialize 'count' to 1 because at least one arrow is required to burst the first balloon even all
// the balloons are overlapped to each other.
// iterate through the remaining balloons in the sorted list:
//    - If the current balloon's starting point (points[i][0]) lies within the interval of the previous
//      balloon (prev[1]), they overlap so, update the overlapping region by setting prev[0] to the 
//      maximum starting point and prev[1] to the minimum ending point of the overlap.
//    - If the current balloon's starting point is outside the previous balloon's interval, 
//      it means a new arrow is required so increment the arrow count and update 'prev' to the current 
//      balloon's interval.
// Finally, return the total number of arrows required (count).
// TC:- O(NLOGN), Explanation:
// O(NLOGN), to sort all the balloons of 'points' array.
// O(N), to iterate through the 'points' array to count the arrows required to burst all the ballons.
// overall, TC:- O(NLOGN) + O(N) = O(NLOGN).
// SC:- O(1), since no additional space is used.
// Note:
// The 'range' variable represents the current overlapping region that includes all previously 
// overlapping balloons. 
// By updating 'range' with the maximum starting point and the minimum 
// ending point, we ensure that the arrow can be correctly shot within this region to burst 
// all those balloons at once. If a balloon does not overlap with this region, a new arrow is needed.


var findMinArrowShots = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let range = points[0], countArrow = 1;
    for(let i = 1; i < points.length; i++){
        if(range[1] >= points[i][0]){
            range[0] = Math.max(range[0], points[i][0]);
            range[1] = Math.min(range[1], points[i][1]);
        }else{
            countArrow++;
            range = points[i];
        }
    }

    return countArrow;
};