// Counting Sort is a sorting algorithm that sorts the elements of an original array by counting the number of occurrences
// of each unique element. 
// These counts are stored in an auxiliary array. Then, a cumulative sum (prefix sum) is computed from the count array, 
// which helps in placing the elements of the original array in their correct sorted positions.

// Steps of Counting Sort:-
// (i) find the maximum value in the input array.
// (ii) create a count array of size max + 1 and fill all with zeros initially.
// (iii) count the frequency of each number from the original array and store it in the count array.
// (iv) convert the count array into a prefix sum (cumulative sum) array.
// (v) create a new output array of the same size as the original array.
// (vi) traverse the original array from right to left to maintain stability (i.e., to ensure that duplicate elements 
// retain their original order in the sorted array).
// (vii) use the prefix sum array to determine the correct position of each element.
// (viii) place the element in the sorted array and decrement its count in the prefix sum array so that any duplicates 
// are also placed correctly.

// When to Use Counting Sort
// all elements are non-negative integers.
// the maximum value (k) is not much larger than the number of elements (n).
// you need a stable sort (i.e., maintain the original order of equal elements).

// TC:- O(N+K), where 'N' is the length of the original array AND 'K' is the length of the countArray (cumulative sum).
// Explanation of Time Complexity:- 
// O(N) to find the maximum value from the original array.
// O(N) to store the frequency of each element of the original array in countArray.
// O(K) to find the cumulative sum of each element stored in countArray.
// O(N) to iterate through the original array to store the elements in the correct position.

let array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array));

function countingSort(array) {
    let maxVal = Math.max(...array);
    let countArray = new Array(maxVal + 1).fill(0);

    // step 1: count frequency
    for (let i = 0; i < array.length; i++) {
        countArray[array[i]]++;
    }

    // step 2: compute cumulative sum
    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }

    // step 3: place elements in sorted array (right to left for stability)
    let sortedArr = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
        let value = array[i];
        let position = countArray[value] - 1;
        sortedArr[position] = value;
        // decrement the count of current iterated element of original array in countArray to store the duplicate value 
        // in the correct position to make the counting sort stable.
        countArray[value]--;
    }

    return sortedArr;
}
