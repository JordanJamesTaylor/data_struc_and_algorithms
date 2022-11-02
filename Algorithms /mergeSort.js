/*
    Recursive sorting 

    merge
        Called by mergeSort
        Sorts two arrays items into one array smallest --> largest
        Returns new array

    mergeSort
        Break an array in half
        Find the mid point of the array
        Store the first half
        Store the second half
        Call self with first half
        Call self with second hald
        Repeat until original array has been broken down into arrays with with one item in them
        Call helper function with two single item arrays
        The order in which the single item arrays are sorted is determined by the call stack
*/

function merge(array1, array2){ // Helper function
    let combined = []
    let i = 0
    let j = 0

    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i])
            i++
        }else{
            combined.push(array2[j])
            j++
        }
    }

    while(i < array1.length){
        combined.push(array1[i])
        i++
    }

    while(j < array2.length){
        combined.push(array2[j])
        j++
    }

    return combined
}

function mergeSort(array){ 
    if(array.length === 1) return array // Base case

    let mid = Math.floor(array.length / 2) // Divide the array by two (.floor ensures mid is a whole number as indices have to be whole number)
    let left = array.slice(0, mid) // First half of the array
    let right = array.slice(mid) // Second half of the array

    return merge(mergeSort(left), mergeSort(right)) // Recusion. Call self until base case is hit, then call helper function
}

console.log("SORTED: ", mergeSort([3,5,4,9,6]))