/*
    One way - key bottles goes in, number 25 comes out. You cannot then put 25 in and get bottles out. It only goes in one way.
    Deterministic - bottles will always produce 25 once it has been added to the table
*/ 

class HashTable { // 0(1)
    /*
        Why have we used 7 as a default value? 

        Items in a has table are distributed more randomly when the amount of address spaces is a prime number.
        A more random distribution of items is more optimal
    */
    constructor(size = 7){ // Give it a default length of 7 if no value is passed
        this.dataMap = new Array(size)
    }

    _hash(key){ // Set keys for data in table // 0(1)
        /*
            The underscore ( _ ) signifies that this method should only be called within another method

            Loop for the amount of characters in the key word.
            Every letter has a numerical value asscoiated with it.
            
            We multiply that number by 23-23 is a prime number, making the allocation of the data more random. Any prime number will do.
            We use modular operator (%) to get the remainder when dividing the character number by the length of the dataMap (dataMap is our address space).

            As our dataMap has a length of 7, so the remainder will always be a number between 0-6; this will determine which address space the string will go in to.
            
            We return hash, which will be a number 0-6 (due to our dataMap having a length of 7), which will be the address for the place in memeory
        */
       let hash = 0
        for (let i = 0;i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }

        return hash
    }

    set(key, value){ // Add data to table // 0(1)
        let index = this._hash(key) // Set memory address

        if(!this.dataMap[index]){ // If there isn't already an array in this location in memory
            this.dataMap[index] = [] // Build an empty array (which we will push the key value pairs into) in that location
        }

        this.dataMap[index].push([key, value]) // Add data to hash table at the current index/location in memory
        return this
    }

    get(key){ // Return value based on key // 0(1)
        let index = this._hash(key) // Find address in memory

        if(this.dataMap[index]){ // If location is not empty
            /*
                If location is not empyt, loop through all the key value pairs at that location.

                [index] = location of arrays in memory
                [i] = current array/key value pair (there may be more than one key value pair at this location in memory)
                [0] = key in current array/key value pair
                [1] = value in current array/key value pair

                If array/key value pair cannot be found, return undefined.
            */
            for(let i = 0; i < this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0] === key){
                    return this.dataMap[index][i][1]
                }
            }
        }
        
        return undefined // Cannot find key
    }

    keys(){ // Returns an array of all keys // 0(n)
        /*
            Loop through table to find a populated address in memory
            Loop through items at that particular location
            Continue looping through table. looking for more populated addresses in memory
        */
       let allKeys = []
       for(let i = 0; i < this.dataMap.length; i++){ // Loop through entire table
        if(this.dataMap[i]){ // If current address is populated
            for(let j = 0; j < this.dataMap[i].length; j++){ // Loop through that particular address
                /*
                    Each address has the potential to have multiple items at any given address
                    We need to be able to loop through these items

                    [i] = Current address in memory
                    [j] = Current array/key value pair at particular address
                    [0] = Key from that particular array/key value pair

                    As we loop through the entire table, and each populated address within that table, we push they key into the allKeys array
                    Once we finish the loop we return the array containing all the keys from this table
                */
                allKeys.push(this.dataMap[i][j][0])
            }
        }
       }

       return allKeys // Return array of all the keys
    }
}

let myHasTable = HashTable() // 0(1) - constant time 
myHasTable.set('Busts', 27) // 0(1)
myHasTable.set('Paintings', 50) // 0(1)
myHasTable.get('paintings') // 0(1) 
myHasTable.key() // 0(n)
/*
    For set(), as address spaces are large, and the _hash is good at randomising the addresses, colisions are rare, meking this an 0(1) operation rather than 0(n)
*/ 
myHasTable.set('Bones', 66) // 0(1) 
myHasTable.key() // 0(n)

/*
    INTERVIEWW QUESTION:
    Go through two arrays, return true if they have any items in common, and false if they don't
*/

// DON'T USE THIS ONE
function itemInCommonBadSolution(arr1, arr2){ // 0(n²) due to nested for loop // NOT A GOOD SOLUTION
    for(let i = 0; i < arr1.length; i++){ // Loop through first array
        for(let j = 0; j < arr2.length; j++){ // For each index in first array, loop through the entirety of the second array 
            if(arr1[i] === arr2[j]) return true // If they match, return true
        }
    }
    return flase // If no matches are found
}

// DO USE THIS ONE
function itemInCommonBetterSolution(arr1, arr2){ // 0(n) // Better solution, use this or something similar in an interview
    let obj = {} // Build an empty object
    for(let i = 0; i < arr1.lenght; i++){ 
        obj[arr1[i]] = true // Create a key that's set to the value at arr[i], set the new key's value to true
    }

    // Second for loop is no longer nested, dramatically reducing the potential amount of operations
    for(let j = 0; j < arr2.lenght; j++){
        if (obj[arr2[j]]) return true // If one of the keys is the same as the current key in obj
    }

    return false // If no matches are found
}