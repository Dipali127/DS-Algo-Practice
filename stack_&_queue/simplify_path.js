// Leetcode Problem:- 71
// Optimal approach:
// Unix-style file system rules:
// -> a single period '.' represents the current directory.
// -> a double period '..' represents the parent directory.
// -> any sequence of periods like '...' or '....' are valid file or directory names.
// Canonical path rules:
// -> the path must start with a single slash '/'.
// -> directories (folders) must be separated by exactly one slash '/'.
// -> the path must not end with a slash '/' unless it is the root directory.
// -> the path must not contain any single ('.') or double periods ('..') representing current or parent directories 
// in the result.

// approach:-
// convert the given path string into an array of directory names or elements by splitting it with the '/' delimiter.
// iterate through this array. 
//    - if the current element is a single period '.' (current directory) or an empty string (indicating multiple slashes), skip it.
//    - if the current element is '..', pop the top of the stack (move up to the parent directory) unless the stack is already empty.
//    - otherwise, treat the element as a valid directory or file name and push it onto the stack.
// after processing all elements, if the stack is empty, return '/' (the root directory).
// if the stack is not empty, construct the canonical path by joining the elements in the stack with '/' and ensure the path starts with a '/'.
// TC:- O(N), Explanation:
// -> O(N): Converting the given path string into an array.
// -> O(N): Iterating through the array to process each element.
// -> O(N): building the final result from the stack.
// Overall, TC:- : O(3N) = O(N).
// SC:- O(N) for storing valid directories or file names in the stack. 
// Note:- converting the path string into array using delimeter '/' equal to path = "/home//foo/" , const parts = path.split('/') => 
    // ["", "home", "", "foo", ""]
// Since strings in JavaScript are immutable, each time I create a new string by popping a file path from the top of
// the stack, adding a forward slash in front of it, and then prepending this new string to the existing file path 
// stored in the result string.
var simplifyPath = function(path) {
    let stack = [];
    path=path.split('/');
    for(let i=0;i<path.length;i++){
        if(path[i] === '.' || path[i] === ''){
            continue;
        }
        if(path[i] !=='..'){
            stack.push(path[i]);
        }else{
            stack.pop();
            continue;
        }
    }
    
    if(stack.length==0){
        return '/';
    }
    let result="";
    while(stack.length!=0){
        result = '/'+ stack.pop()+result;
    }

    return result;
};