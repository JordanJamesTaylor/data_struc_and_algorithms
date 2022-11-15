/*
    Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

    The funcion should return the number of ways that the target can be constructed by concatenating elements of the wordBank array.

    You may reuse elements of wordBank as many times as needed.
    
    .................................................................................................................................

    m = target.length
    n = wordBank.length

    Time: O(n * m²)
    Space: O(m²)

    Same logic as canConstruct with the addition of adding to a counter and returning a number rather than a boolean

    Set counter outside of for loop
    Counter default value = 0
    Recursively loop through target string
    If a suffix can be made from a word in wordBank
        Recursively pass suffix as new target
    If we reach the base case of an empty string
        Add 1 to counter
        As recursive calls are taken off the stack, add 1 to counter (totalCount =+ numWays)
    If we can't create any more children in our tree (i.e. we cannot make a suffix using the elements of wordBanks)
        Return counter with its default value (0)
*/
function countConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === '') return 1

    let totalCount = 0

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWays = countConstruct(target.slice(word.length), wordBank, memo)
            totalCount += numWays
        }
    }
    memo[target] = totalCount
    return totalCount
}

countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) // 1
countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) // 2
canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['a', 'aaa', 'aaaaaa', 'aaaaaaaa']) // 0