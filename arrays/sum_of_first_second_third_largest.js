// question:- find the sum of first, second and third largest elements of an array.

// Brute force approach:-
// approach:-
// sort the given array in non - increasing order.
// take the first, second and third element from sorted (non - increasing order) and add them to get the sum.
// TC:- O(NLOGN), as sort method is used to sort the given array in 'non - increasing' order.
// SC:- O(1), as there is no additional space used.

let arr = [-12,4,67,2,34];
console.log(sum(arr))
function sum(arr){
    arr.sort((a,b) => b-a);
    return arr[0] + arr[1] + arr[2];
}

// Optimal Approach:-
// approach:-
// initialize three variables, firstLargest, secondLargest, and thirdLargest, with a very low value (-Infinity) 
// to handle all possible cases, including arrays with negative numbers.
// traverse the array to find the first, second, and third largest elements of the array.
// during the iteration, for each element in the array:
//   - if the current iterated element is greater than firstLargest:
//       - update thirdLargest to the current value of secondLargest.
//       - update secondLargest to the current value of firstLargest.
//       - then update firstLargest to the current iterated element.
//   - else if the current iterated element is greater than secondLargest but less than or equal to firstLargest:
//       - update thirdLargest to the current value of secondLargest.
//       - then update secondLargest to the current iterated element.
//   - else if the current iterated element is greater than thirdLargest but less than or equal to secondLargest:
//       - update thirdLargest to the current iterated element.
// after the loop completes, firstLargest will hold the largest value in the array, secondLargest will hold 
// the second-largest value, and thirdLargest will hold the third-largest value.
// return the sum of firstLargest, secondLargest, and thirdLargest.
// TC:- O(N), where 'N' is the number of elements in the array, as we are traversing the array only once.
// SC:- O(1), as no extra space is used other than the variables firstLargest, secondLargest, and thirdLargest.



let arr1 = [-12,4,67,2,34];
console.log(sum1(arr1));
function sum1(arr1){
    let firstLargest = -Infinity, secondLargest = -Infinity, thirdLargest = -Infinity;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] > firstLargest){
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr1[i];
        }else if(secondLargest<arr1[i] && arr1[i]<firstLargest){
            thirdLargest = secondLargest;
            secondLargest = arr1[i];
        }else if(thirdLargest<arr1[i] && arr1[i]<secondLargest){
            thirdLargest = arr1[i];
        }
    }

    return firstLargest + secondLargest + thirdLargest;
}
