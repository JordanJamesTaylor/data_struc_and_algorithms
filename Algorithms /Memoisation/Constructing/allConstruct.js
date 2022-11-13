/*
    Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

    The function should return a 2D array containing ALL of the ways that the target can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs the target.

    You may reuse elements of wordBank as many times as needed.

    ....................................................................................................................................................
    m = target.length
    n = wordBank.length

    Time: O(n^m) --> the result is exponential due to worse case potentially being a very large array
    Space: O(m) 

    Mostly the same logic as canConstruct and countConstruct except we want to return an array of all possible combinations, or an empty array if there are none

    If target is initially an empty string
        Return 2D array 
    If we hit base case ''
        Push current edge label (current target) used to transition to this child into the subarray in the return to start building the 2D array
    If we cannot make the target string 
        Return an empty array 
*/
function allConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === '') return [[]]
    
    const result = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way]) // Insert word into the front of every sub array   
            result.push(...targetWays) // Use spread to avoid additional nesting
        }
    }
    
    memo[target] = result 
    return result
}

allConstruct('hello', ['cat', 'dog', 'mouse']) // []
allConstruct('', ['park', 'bar']) // [[]] // There will always be one way to create an empty string, by not using any of the words in wordBank 
allConstruct('abcdef', ['ab', 'abd', 'cd', 'def', 'abcd', 'ef', 'c']) // [['ab', 'cd', 'ef'], ['ab', 'c', 'def'], ['abc', 'def'], ['abcd', 'ef]]
allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) // [['purp', 'le'], ['p', 'ur', 'p', 'le']]