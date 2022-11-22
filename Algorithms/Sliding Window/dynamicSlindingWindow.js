/*  

    Write a function called longestSubstringInString, which accepts a string and returns the length of the longest substring with all distinct characters from the START of the string. 
    
    Please write in time complexity of O(n)
    
    *** SLIDING WINDOW ***

    1. Set pointers
        1a. Pointers will shift to create a window of varying size

    2. Move pointers through string
        2a. Pointer one will be the right side of the window
        2b. Pointer two will be the left side of the window
        2c. Pointer one will begin by pointing to the latest character added to the window
        2d. Pointer two will begin by pointing to the first character in the window
        2e. If they're not the same, move pointer two closer to pointer one
        2f. If pointer two reaches pointer one, and no characters are a match...
            - increment counter by 1
            - move pointer two back to the start of the window
            - move pointer one over to the next character in the string  
    
    3. Return counter when...
        3a. Pointer one's value is greater than that of the strings length
        3b. The characters pointer one and two are pointing at are the same (but in different positions)

    Dynamic window expands/shrinks after each iteration based on certain conditions
    Can't use recursion as call stack will overflow.

    Edge Cases:
        Empty string

    Time: O(n)
    Space: O(n)

*/
 
function longestSubstringInString(str){
    let p1 = 1; // Assignment --> O(1)
    let p2 = 0; // Assignment --> O(1)
    let counter = 1; // Assignment --> O(1)

    if(str === '') return 0; // Comparison  --> O(1)

    while(p1 < str.length){ // Iteration --> O(n)
        
        if(str[p1] === str[p2]){ // Comparison  --> O(1)
            return counter; // Return number type --> O(1)
        }

        if(str[p1] !== str[p2] && p2 < p1){ // Comparison  --> O(1)
            p2++ // Addition --> O(1)
        }

        if(p2 > str.length || p1 === p2){ // Comparison  --> O(1)
            counter++; // Addition --> O(1)
            p2 = 0; // Assignment --> O(1)
            p1++; // Addition --> O(1)
        }
    }

    return counter; // Return number type --> O(1) 
};
console.log(longestSubstringInString('rithmschool')); // 7 --> ‘rithmsc’ 
console.log(longestSubstringInString('')); // 0 
console.log(longestSubstringInString('thisisawesome')); // 4 --> ‘this’ 
console.log(longestSubstringInString('thecatinthehat')); // 5 --> ‘theca’ 
console.log(longestSubstringInString('bbbbbb')); // 1 --> ‘b’ 
console.log(longestSubstringInString('longestsubstring')); // 7 --> ‘longest’ 
console.log(longestSubstringInString('thisishowwedoit')); // 4 --> ‘this’