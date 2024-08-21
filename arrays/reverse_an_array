// brute force approach:-
// take an empty array.
// traverse the  given array from right to left and while traversing add the current iterated element in newArr.
// once added all element of given array in newArr in reverse order return it.
// TC: O(N) :- to traverse the given array from right to left.
// SC: O(N) :- to add elements in newArr in reverse order.

let array = [1,2,3,4,5];
function reverseArray(array){
    let newArr = [];
    for(let i=array.length-1;i>=0;i--){
        newArr.push(array[i]);
    }

    return newArr;
}

console.log(reverseArray(array));

// optimal approach1:- using built-in reverse() methos in javascript
// TC :- O(N) to reverse the array using reverse method.
// SC :- O(1)
let array1 = [1,2,3,4,5];
function reverseArray(array1){
    return array1.reverse();
}

console.log(reverseArray(array1))

// optimal approach2:- using two pointer
// take two pointers i and j.
// traverse the given array from both end and while traversing swap their values and increment i and decrement j pointer.
// once array reversed, return reverse array.
// TC :- O(N), to traverse the given array.
// SC:- O(1) as here is no additional space used.
let array2 = [1,2,3,4,5];
function reverseArray(array2){
    let i = 0, j = array2.length-1;
    while(i<j){
        array2[i] = array2[i] + array2[j];
        array2[j] = array2[i] - array2[j];
        array2[i] = array2[i] - array2[j];
        i++;
        j--;
    }

    return array2;
}

console.log(reverseArray(array2))