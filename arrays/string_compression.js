// Leetcode Problem :- 443
/**
 * @param {character[]} chars
 * @return {number}
 */
// Brute force approach:
// Approach:
// Take a result array to store each character along with its frequency.
// Traverse through each character, and for each character initialize a count with 1 since
// at least one occurrence of that character is already present.
// For each character, traverse through the next characters and check if they are equal. 
// If they are equal, increment the count and also increment the pointer 'i'.
// If the characters are not equal, then first add the character to the result array, 
// followed by its frequency (only if the frequency is greater than 1).
// To add the frequency of the current character, first convert the count into a string 
// (since we can’t directly add the number as multiple characters), and then add each digit one by one.
// After traversing and counting the frequency of each character, update the given array 
// with the characters and their frequencies from the result array, and return the result’s length.
//
// Note: In this approach, I have only used one pointer 'i', which is also used in the while loop.
//
// Time Complexity: O(n²), because for each character we traverse through the subsequent characters 
// to find the count of that particular character. In the worst case, if all characters are the same, 
// the inner loop will run through almost all other characters, making the complexity O(n²).
//
// Space Complexity: O(n), since a separate result array is used to store the characters along with their frequencies.

var compress = function(chars) {
    let result = [];
    
    for (let i = 0; i < chars.length; i++) {
        let count = 1;

        while (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            count++;
            i++;
        }

        result.push(chars[i]);
        if (count > 1) {
            for (let digit of count.toString()) {
                result.push(digit);
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        chars[i] = result[i];
    }

    return result.length;
};

// Optimal Approach:
// Approach:
// In this solution, we use the two-pointer technique (left and right) to efficiently compress the characters in a single pass.
//
// 1. Initialize two pointers, 'left' and 'right', and a variable 'count'.
//    - 'left' represents the start of the current group of characters.
//    - 'right' is used to scan forward until the group ends.
//    - 'count' keeps track of how many times the current character repeats.
// 2. Traverse the array using 'right':
//    - If chars[left] === chars[right], it means we are still in the same group, 
//      so increment 'count' and move 'right' forward.
//    - If chars[left] !== chars[right], it means the group ended. 
//      At this point:
//         - Add chars[left] to the result array.
//         - If count > 1, convert count into a string and add each digit separately to the result array.
//      After that, move 'left' to the new group (left = right), and reset 'count' to 0.
// 3. After the loop ends, handle the last group by adding its character 
//    and its count (if greater than 1) to the result array.
// 4. Copy the contents of the result array back into chars (as required by the problem).
// 5. Return the length of the result array.
//
// Time Complexity: O(n), since we traverse the characters only once and process each character/group directly.
// Space Complexity: O(n), due to the use of the result array to store the compressed characters.
// (Can be optimized further to O(1) if we write directly into chars instead of using a result array.)

var compress = function(chars) {
    let result = [];
    let count = 0, left = 0, right = 0;

    while (right < chars.length) {
        if (chars[left] === chars[right]) {
            count++;
            right++;
        } else {
            result.push(chars[left]);
            if (count > 1) {
                for (let digit of count.toString()) {
                    result.push(digit);
                }
            }
            left = right;
            count = 0;
        }
    }

    result.push(chars[left]);
    if (count > 1) {
        for (let digit of count.toString()) {
            result.push(digit);
        }
    }

    for (let i = 0; i < result.length; i++) {
        chars[i] = result[i];
    }

    return result.length;
};
