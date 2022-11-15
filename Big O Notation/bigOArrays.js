// Adding to the front of arrays = 0(n)
// Adding to the end of arrays = 0(1)
// Arrays are good if you want to find values by an index, as this has a big 0 of 0(1) (one opertation)
// Arrays are bad if you want to add to the beginning of a data structure, as it'll have to increment all the other elements indices  by 1, giving it a big 0 of 0(n) 

const myArray = [11, 3, 23, 7];

/*
    .pusn and .pop have a big 0 of 0(1)
    They only add/remove an item to the end of the array while giving it an index
    It does not affect any other elements in the array
    Just one operation
*/
myArray.push(17); // 0(1)
myArray.pop(17); // 0(1)

/*
    .shift and .unshift have a big 0 of 0(n)
    They add/remove elements to the beginning of the array and setting those elements to index 0
    This means that every other element in the array needs to have their indices  incremented by 1
    n is the length of the array, the number of operations that need to be performed is dictated by the arrays length 
*/
myArray.shift() // 0(n)
myArray.unshift() // 0(n)

/*
    .splice has a big 0 of 0(n)
    As big 0 notation always measures worse case, and as we can be adding to the very beginning of the array, we have a big 0 of 0(n) i.e. the length of the array

    It is not 0(1/2 n) as:
        - Big 0 always measures for worse case
        - 1/2 is a constant, and constants are always dropped
*/
// Add an item and idex 1, do not remove any items, add value of 'hi' at index 1
myArray.splice(1, 0, 'hi') // 0(n)
myArray.splice(1, 1) // 0(n)

