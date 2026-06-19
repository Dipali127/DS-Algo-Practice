// Leetcode Problem:- 71
// Optimal approach:
// absolute path rules in unix(linux) file system:
// -> always start from root directory and forward slash.
// -> a single period '.' represents the current directory.
// -> a double period '..' represents the parent directory.
// -> any sequence of periods like '...' or '....' or any number of forward slashes are valid file or directory names.
// example:- /home/user/Documents/../Pictures

// Canonical path rules:
// -> the path must start with a single slash '/'.
// -> directories (folders) must be separated by exactly one slash '/'.
// -> the path must not end with a slash '/' unless it is the root directory.
// -> the path must not contain any single ('.') or double periods ('..') representing current or parent directories 
// in the result.
// example:- "/home/user/Pictures"

// approach:-
// I will use a stack where I will add the directories that I have encountered so far.
// Once I encounter a double dot (..), it will be very easy to remove the current directory and move back to the previous
// directory with the help of a stack using stack.pop().

// convert the given path string into an array of directory names/file names or folder names by splitting
//  it with the '/' delimiter.
// iterate through this array. 
//    - if the current element is a single period '.' (current directory) or an empty string (indicating multiple slashes),
//      skip it.
//    - if the current element is '..', pop the top of the stack (move up to the parent directory) unless
//     the stack is already empty.
//    - otherwise, push the current directory onto the stack.
// after processing all elements, if the stack is empty, return '/' (the root directory).
// if the stack is not empty, construct the canonical path by joining the elements in the stack with '/' and ensure the 
// path starts with a '/'.

// TC:- O(N), Explanation:
// -> O(N): Converting the given path string into an array.
// -> O(N): Iterating through the array to process each element.
// -> O(N): building the final result from the stack.
// Overall, TC:- : O(3N) = O(N).
// SC:- O(N) for storing valid directories or file names in the stack. 

// Note:- converting the path string into array using delimeter '/' equal to path = "/home//foo/" , 
// const path = /home//foo/, path = path.split('/') =>  ["", "home", "", "foo", ""], before first forward slash
// '/' there is nothing so split method add empty string.
// Empty strings appear only when the delimiter is at the beginning, at the end, or repeated forward slash.
// A single delimiter between characters never creates an empty string.
// Example:- "/a/b/c" => ["", "a", "b", "c"]
// Example:- "a/b/c/" => ["a", "b", "c", ""]
// Example:- "a//b/c" => ["a", "", "b", "c"]

// Since strings in JavaScript are immutable, once a string is created, its value cannot be changed.
// However, a string variable can reference a new string.
// Strings in JavaScript are a primitive data type, which means that once a string is created, its value cannot be changed.
// However, a variable can reference a new value.

// what happen when we not assign path to some variable:-
// if we will not store path in some variable like "path = path.split('/')"" and use just like 
// path.split('/'), then path will be splitted and created a result like:- ["", "home", "user", "docs"]
// but it is immediately garbage collected(deleted from memory)since, we haven't store it any variable 
// and path is still the original string like :- "/home/user/docs"
   
var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');
    for(let i=0;i<path.length;i++){
        if(path[i] === '.' || path[i] === ''){
            continue;
        }
        if(path[i] !=='..'){
            stack.push(path[i]);
        }else{
            stack.pop();
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