/*
    You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

    Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

    You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

    *** Solution ***

    Aim for O(log n) with a binary search

    1. Split array in half

    2. Isolate the middle element
    
    3. Check if the middle element is true/false
        - We only care about finding the FIRST bad version
        - All version after the first bad version will also be bad

    4. If the middle is...
        ...false, we know every element before it is false, but we don't know how many true elements are in front of it
        ...true, we know every element after it is true, but we don't know how many false elements are in behind it
    
    5. Move either left/right through the array based on middle's value
    
    6. Repeat step 5 until finding !== value
    
    7. Return the index of the first bad version

    n = total size of the array

    Time: O(log n)
    space: O(log n)
*/

function findFirstBadVersion(n){

    let left = 0;
    let right = n;
    let middle;
    
    while(left < right){
        middle = Math.floor(left + (right - left) / 2); 
        if(!isBadVersion(middle)){
            left = middle + 1;
        }else{
            right = middle;
        }
    }

    return left;
};

findFirstBadVersion()