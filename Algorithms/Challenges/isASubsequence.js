/*
    
    Write a function called isASubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 
 
    Write your solution with time complexity O(n) and space O(1) 


    *** MULITPLE POINTERS ***

    1. Set pointers for main string and sub-string

    2. While the sub-string pointer is still within the main string, loop through the entirety of the main string
        2a. Begin with main string pointer and sub-string pointer at the start of their respective strings 
        2b. Iterate over the main string and sub-string checking if the current character from both are a match
        2c. If they are a match, increase the value of both pointer by 1 to continue moving through the strings
        2d. If the characters are not a match...
            ...keep the sub-string pointer where it is...
            ...move the main string pointer to the next character in the main string...
            ...check the new character from the main string with the same character from the sub-string...
            ...only increase the sub-string pointer if both characters are a match
        2e. If sub-string is in main string, return true

    3. If we exit the while loop without returning then the sub-string does not exist within the main string, return false

    Edge Case:
        Sub-string is an empty string
        Main string is an empty string

    Time: O(n)
    Space: O(1)

*/

function isASubsequence(string1, string2){

    if(string1 === "" || string2 === "") return false;

    // Set multiple pointers
    let subPointer = 0; // Assignment --> O(1)
    let mainPointer = 0; // Assignment --> O(1)

    while(subPointer < string2.length){ // Iteration --> O(n)
        if(string1[subPointer] === string2[mainPointer]){ // Comparison  --> O(1)
            subPointer++; // Addition --> O(1)
            mainPointer++; // Addition --> O(1)
        }else{
            mainPointer++; // Addition --> O(1)
            if(mainPointer > string2.length) return false; // Return --> O(1)
        }
    }

    return true; // Return --> O(1)
};

console.log(isASubsequence('', 'no, I am your father')); // false
console.log(isASubsequence('hello', 'hello world')); // true 
console.log(isASubsequence('sing', 'sting')); // true
console.log(isASubsequence('abc', 'acb')); // false 
console.log(isASubsequence('abc', 'abracadabra')); // true
console.log(isASubsequence('Stella!', '')); // false