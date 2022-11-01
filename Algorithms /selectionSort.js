const arr = [4, 2, 6, 5, 1, 3]

function selectionSort(arr){ // 0(n²)
    let min
    /*
        Nested loop checking each index against all other indices
        Store index of lowest value
        Check all indices for a lower value
        If one is found
            Switch their indices
        Return sorted ( small - large ) array 
    */

    for(let i = 0; i < arr.length - 1; i++){ 
        min = i // Store current index
        for(let j = 0; j < arr.length; j++){  
            /*
                If next value in array is larger than the current indices value
                    store larger values index
                    This will mean that this loop ends with min referencing the index of lowest value found in array that has not yet been sorted
                Once the lowest value has been found we move back out into the outer loop...
            */
            if(arr[j] < arr[i]) min = j 
        }
        // ...moving back into the outer loop
        let temp = arr[i] // Store value at current index
        arr[i] = arr[min] // Switch value at current index with lowest value
        arr[min] = temp // Place value that was at current index into the index where the lowest value was stored
    }

    return arr
}