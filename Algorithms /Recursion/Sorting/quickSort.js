/*
    Recursive sorting 
        
    Good function to use when data is not already sorted O(n log n)
    Bas to use if data is sorted 0(n²)
    
    pivot
        From pivot point
        Loop through array from the next item over
        We'll use veriables pointing to
            The pivot point
            Swap will initially be set to pivot and be used to swap elements
        If i is less than the pivot
            Move swap to to the next element over from pivot
            Swap item at i with item at swap
        At the end of each loop, swap pivot and swap
        Return swap variable
            We return swap so we can use it as an anchor in quickSort
            quickSort will sort the items in the array either side of swap ([swap - 1] / [swap + 1])

    quickSort
        Will be passed an array where every element before the pivot index is has a value less than that stored at the pivot index, everything after has a greater value
        quickSort will sort the array either side of the pivot index

*/

function swap(array, firstIndex, secondIndex){ // Swap indices of two values
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1){ // Helper function
    /*
        Why do we use default values
            These run quickSort on a sub section of the array
            We need to know the first and last index of that array
    */
    let swapIndex = pivotIndex
    for(let i = pivotIndex + 1; i<= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++ // Move swap over
            swap(array, swapIndex, i) // Then swap them elements
        }
    }
    
    swap(array, pivotIndex, swapIndex) // Swap pivot and swap // Now all items less than pivot are before it in the array
    return swapIndex // Every value before swapIndex is less than the value at swapIndex, everything after is greater than
}

function quickSort(array, left=0, right=array.length-1){ // 0(n²) // Sort the array either side of the pivot index
    if(left < right){
        let pivotIndex = pivot(array, left, right) // Store index returned by the pivot function
    
        //Recursively call quickSort
        quickSort(array, left, pivotIndex-1) // Sort items on the left
        quickSort(array, pivotIndex+1, right) // Sort items on the right
    }
    return array
}

let myArray = [4,6,1,7,3,2,5]
/*
    pivot returns an array
    pivot uses the first item in the array as the pivotIndex
    The returned array will have all elements with a value less than the pivotIndexes value appearing before it unsorted, all elements with a value greater than that of the pivotIndexes will be placed after it in the array unsorted
*/
pivot(myArray)
// returns [2, 1, 3, 4, 6, 7, 5]
// 4 was the pivotIndex
// All values < 4 appear before it
// All value > 4 appear after it