/*
    Poor implementation - DO NOT USE
    Long runtime on larger number due to the amount of recursive calls

    Go to ../Memoisation/quicjFibonacciSequence.js to see better solution
    
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