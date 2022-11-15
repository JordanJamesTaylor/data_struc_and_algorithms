/*
    Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

    The function should return an array containing the shortest combination of numbers that add up to exactly targetSum.

    If there is a tie for the shortest combination, then you may return any one of the shortest.

    ...........................................................................................................................

    m = targetSum
    n = numbers.length

    Time: O(m² * n) --> iterate through table (m) * iterate through arrays stored in table elements * copying and adding numbers to arrays with valid combinations (n) 
    Space: O(m²) --> table size (m) * each element of the table might be an array (m)
    
*/
function tabBestSum(targetSum, numbers){
    const table = new Array(targetSum + 1).fill(null) // Seed
    table[0] = [] // Seed

    for(let i = 0; i <= targetSum; i++){
        if(table[i] !== null){ // Don't need to consider more moves if current position is not reachable to begin with 
            for(let num of numbers){ // If we can reach this position
                const combination = [...table[i], num] // Copy current array and add the new number
                /*
                    if position ahead is null 
                        this will also keep us within the bounds of the table and avoid comparing null to table[i+num].length
                    OR 
                    if new array is the smallest valid combination
                */
                if(!table[i+num] || table[i+num].length > combination.length){ 
                    table[i+num] = combination
                }
            }
        }
    }

    return table[targetSum] 
}


console.log(tabBestSum(7, [5, 3, 3, 7])) // [7]
console.log(tabBestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]