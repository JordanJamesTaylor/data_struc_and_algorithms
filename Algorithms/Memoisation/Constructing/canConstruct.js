/*
    Write a function canConstruct(target, wordBank) taht accepst a target string and an array of strings.

    The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.

    You may reuse elements of wordBank as many times as needed.
    
    .................................................................................................................................................

    m = target.length
    n = wordBank.length

    Time: O(n^m²)
        n = target.length
        m = using memo to remove duplicate operations
        m = .slice()

    Space: O(m²)
        m = target.length
        m = .slice() 

    Visualise operation structure as a tree
    
    Look in wordBank for prefixes 
    Only branch to children if there is a matching prefix in the wordBank array
    Continue target becomes an empty string --> return true
    If there are no prefixes available in the wordBank array before target becomes an empty string --> return false

    Don't want to take characters out of the middle of the word
        This can create new sequences of characters that are not a part of the original target
            target = abcdef
            array[2] = 'cd'
            target = 'abef'
            'abe' of 'abef' is a new sequence of characters not present in the original array 
        This new sequence can result in an incorrect output  
*/
function canConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target] // Use the current target as memo keys // wordBank doesn't change so don't need to memoise it 
    if(target === '') return true

    for(let word of wordBank){
        if(target.indexOf(word) === 0){ // If our substring can be found at the beginning of the current target string 
            /*
                If an element in wordBank matches the current iteration of target
                Use .slice() to remove that current iteration of target from the original target string
                Pass suffix recursively as the new target
                    Passing one argument to .slice() will remove characters starting from that index till the end of the enumerable
                    .slice() iterates over the target string adding to time complexity (max length of target is m)
            */
            const suffix = target.slice(word.length)
            if(canConstruct(suffix, wordBank, memo) === true){ // Can we make the suffix with the words in wordBank
                /*
                    Target can be made if we're able to enter this block, so we don't have to continue searching and can return early
                    If suffix can be made and the word used to generate the suffix is in the wordBank, then we can make the original target
                */
                memo[target] = true
                return memo[target]
            }
        }
    }
    memo[target] = false
    return memo[target]
}

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) // true
canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) // false
canConstruct('', ['cat', 'dog', 'mouse']) // true // Generate the empty string by taking 0 elements from the array
canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf', ['a', 'aaa', 'aaaaaa', 'aaaaaaaa']) // false // Slow without memoisation  