const arr = [4, 2, 6, 5, 1, 3]

function bubbleSort(arr){ // 0(n²)
    for(let i = o; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(temp > arr[j+1]){ // Check if current value is larger than the next
                let temp = arr[j]
                arr[j] = arr[j+1] // Switch the values
                arr[j+1] = temp
            }
        }
    }
    return arr
}