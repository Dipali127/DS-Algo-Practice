// Problem:- sort an array in waveform (Asked by amazon)
// To sort an array in waveform, meaning the elements should be arranged such that:
// arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4]........
// Approach:-
// Sort the array to arrange elements in increasing order.
// Swap adjacent elements to create a wave-like pattern.

// Solution:-
let array = [4,5,3,1,2];
console.log(sortarrrayInwaverform(array));
function sortarrrayInwaverform(array){
    // Step 1: Sort the array
    array.sort((a,b) => a-b);

    // Step 2: Swap adjacent elements to create wave pattern 
    for(let i = 0; i < array.length-1; i+=2){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    // also we can sort like this:-
        // [array[i], array[i+1]] = [array[i+1], array[i]];
    }

    return array;
}