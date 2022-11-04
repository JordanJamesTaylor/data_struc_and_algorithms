/*
    Poor implementation 
    Long runtime on larger number due to the amount of recursive calls

    Fix time complexity bottleneck
    
    Poor time complexity = O(2n) 
    Good Space complexity = O(n) 
*/  

function slowFib(n){ // O(2n)
    if(n <= 2) return 1 // Base case
    return slowFib(n - 1) + slowFib(n - 2) // Recursion
}

slowFib(6) // Quick
slowFib(7) // Quick
slowFib(50) // Already too slow

/*
    Memoisation
    
    Good Time complexity = O(n)
    Good Space complexity = O(n)

    Use memoisation to store sub problems

    When building a tree to represent the recusrive nature of fib() we can see that there is a lot of repeating patterns
    i.e. we know that fib(5) is always 5
    Preempt for repeating sub problem such as fib(5) always being 5 to greatly reduce runtime
*/

function quickFib(n, memo = {}){ 
    /*
        Pass in default obj as memo (default will be available even if no obj is passed in function call)
        Will only get a new top level memo object on the top level call as we're not passing an obj at that time
        All other memo objects will be passed recursively so that we keep track of the same obj

        memo keys are function arguments, key values are that functions return value
        As we calculate fib(n) we store the results in the memo obj, if we need to compute that same fib(n) again we can instead immediately ref the obj for the value and avoid repeated calculation. 
        This will remove any duplicated logic (i.e. repeated calculation of fib(5)) and drasitcally reduce runtime
    */
    if(n in memo) return memo[n] // Get the value store at n key
    if(n <= 2) return 1 // Base case
    memo[n] = quickFib(n - 1, memo) + quickFib(n - 2, memo) // Add result to memo obj
    return memo[n] // Return lastest key value pair added to memo obj
}

quickFib(6) // Quick
quickFib(7) // Quick
quickFib(50) // Quick