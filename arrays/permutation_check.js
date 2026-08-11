// What is a permutation?

// If N = 4, we need the numbers: 1 2 3 4
// A permutation means these numbers appear exactly once each, but they can be in any order.
// For example, all of these are permutations:
// [1, 2, 3, 4]
// [4, 1, 3, 2]
// [2, 4, 1, 3]
// [3, 2, 4, 1]

// Problem:-
// We are given,'N', array of N integers and we can perform one operation:
// Increase or decrease any one element by 1.
// we need to find the minimum number of operations required to transform the array into any permutation of 1...N.
// we don't need to return the permutation.
// we need to return "minimum number of operations".

// Solution:-
let n = 4;
let array = [4, 1, 4, 2];
console.log(checkPermutation(n, array));

function checkPermutation(n, array){
    // Sort an array
    array.sort((a,b) =>  a - b);
    
    // Calculate min operation
    let operation = 0;
    
    for(let i = 0; i < array.length; i++){
        
        // Target value at index i is i + 1
        operation+= Math.abs(array[i] - (i+1));
    }
    
    return operation;
}