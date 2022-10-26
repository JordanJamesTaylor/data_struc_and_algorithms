
// const arr = [1,2,3,4,5];
// const arr2 = [6,7];
// concat = non mutative method
// console.log(arr.concat([8,9])) // join two arrays together

// const newArr =[...arr, ...arr2] // spread operator makes a shallow copy

// .filter returns a copy of an array based on a condition
// if statement is backed into the method

// filter is non mutative
// const filterByNums = arr2.filter(num => num <= 3)

// splice is mutative
// splice(startingIndex, howManyToDelete, addItem1, addItemN...)

// flat method - flattens nested arrays

// const arr = [[1,2,3], 3, [4,5]]
// console.log(arr.flat(2)) // creates new array

array.includes(3) // checks if value is in array, returns boolean 

const findIndex = array.indexOf(3) // Returns index of value in array
// Returns -1 if value is not in the array

array.pop() // Removes last item in array. Mutative
array.push() // Adds to end of array. Mutative
array.unshift() // Add to beginning of array. Mutative
array.shift() // Remove from beginning of array. Mutative

// 
array.reduce()