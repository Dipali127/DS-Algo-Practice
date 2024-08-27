// question:- find the sum of first and second largest elements of an array.

// Brute force approach:-
// approach:-
// sort the given array in non - increasing order.
// take the first and second element from sorted (non - increasing order) and add them to get the sum.
// TC:- O(NLOGN), as sort method is used to sort the given array in 'non - increasing' order.
// SC:- O(1), as there is no additional space used.

let arr = [12,4,67,2,34];
console.log(sum(arr));
function sum(arr){
    arr.sort((a,b) => b-a);
    return arr[0] + arr[1];
}

// optimal approach:-
// approach:-
// initialize two variables, firstLargest and secondLargest, with a very low value (-Infinity) to handle 
// all possible cases, including arrays with negative numbers.
// traverse the array to find the first and second largest elements of the array.
// during the iteration, for each element in the array:
//   - if the current iterated element is greater than firstLargest, update secondLargest to the current value 
//     of firstLargest, then update firstLargest to the current iterated element.
//   - if the current element is not greater than firstLargest but is greater than secondLargest, update 
//     secondLargest to the current iterated element.
// after the loop completes, firstLargest will hold the largest value in the array, and secondLargest 
// will hold the second-largest value.
// return the sum of firstLargest and secondLargest.
// TC:- O(N), where 'N' is the number of elements in the array, as we are traversing the array only once.
// SC:- O(1), as no extra space is used other than the variables firstLargest and secondLargest.


let arr1 = [12,4,67,2,34];
console.log(sum1(arr1));
function sum1(arr1){
    let firstLargest = -Infinity, secondLargest = -Infinity;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr1[i];
        }else if(secondLargest<arr1[i] && arr1[i]<firstLargest){
            secondLargest = arr1[i];
        }
    }

    return firstLargest + secondLargest;
}
