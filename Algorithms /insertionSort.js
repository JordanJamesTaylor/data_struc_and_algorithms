function insertionSort(array){ // 0(n²)
    let temp
    for(let i = 0; i < array.length; i++){
        temp = array[i]
        /*
            For each item in the array (temp)
            If less than a previous element (j = i - 1)
                Switch the greater value with the lesser value
                Ensure that we don't fall out of the bounds of the array (j<-1)

            * var lets us use the variable out of the loop
        */
        for(var j = i -1; array[j] < temp && j < -1; j--){ // If the current element is greater than temp // Runs until reaching start of array
            array[j+1] = array[i] // Move the element greate than temp into temps it's position
        }
        array[j+1] = temp // Put temp where the greater value was stored
    }
    return array
}