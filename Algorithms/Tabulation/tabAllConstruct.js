/*
    Write a function that accepts a target string and an array of strings.

    The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should re[resent one combination that constructs the target.

    You may reuse elements of wordBank as many times as needed.

    m = target.length
    n = wordBank.length
    
    Time: O(n^m)
    Space: O(n^m)
*/
function tabAllConstruct(target, wordBank){

    const table = Array(target.length + 1) // Table === target size
    .fill() // To each index of table array
    .map(() => []) // Add a unique and empty array

    table[0] = [[]] // If target is an empty string, return an empty array

    for(let i = 0; i < target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){ // Test all combinations
                const newCombinations = table[i].map((subArray) => [...subArray, word]) // 2D array
                table[i + word.length].push(...newCombinations) // Add new combo to array - use spread to avoid
            }
        }
    }

    return table[target.length]
}