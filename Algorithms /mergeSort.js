/*
    Recursive sorting 

    Space complexity = 0(n)    
        The amount of single item arrays is determined by the length of the original array

    Time complexity = 0(n log n)
        Halving arrays is 0(log n)
        Putting the arrays back together 0(n)

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

    while(i < array1.length && j < array2.length){ // While i and j are less than the lengthes of either array 1 or array 2
        if(array1[i] < array2[j]){ // Check if array2 has the larger value 
            combined.push(array1[i]) // If it does, add it to combined
            i++ // Increment i only
        }else{ // Otherwise array1 has the larger vlaue
            combined.push(array2[j]) // Add to combined
            j++ // Increment j only
        }
    }
    // If we have reached the end of one array but the other is still populated
    // Push the remaining items of the remaining array into combines
    while(i < array1.length){ // Array 1 
        combined.push(array1[i])
        i++
    }

    while(j < array2.length){ // Array 2
        combined.push(array2[j])
        j++
    }

    return combined
}

function mergeSort(array){  // 0(n log n)
    if(array.length === 1) return array // Base case

    let mid = Math.floor(array.length / 2) // Divide the array by two (.floor ensures mid is a whole number as indices have to be whole number)
    let left = array.slice(0, mid) // First half of the array
    let right = array.slice(mid) // Second half of the array

    return merge(mergeSort(left), mergeSort(right)) // Recusion. Call self until base case is hit, then call helper function
}

console.log("SORTED: ", mergeSort([3,5,4,9,6]))