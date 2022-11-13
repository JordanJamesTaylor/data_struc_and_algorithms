/*

    Write a function fib(n) that takes in a number as an argument. 

    The function should return the n-th number of the Fibonacci sequence.

    The 0th number of the sequence is 0
    The 1st number of the sequence is 1

    To generate the next number of the sequence, we sum the previous two

    ..............................................................

    Time: O(n) --> iterating over array of size n
    Space: O(n) --> the size of the array

    Tabulation

    Rather than finding the solution recursively, we find it iteratively by building a table (really just an array)

    The size of the table will be the size of the input + 1
        The indicies of the array won't align with the input (arrays start a 0), so we need to add 1 to its length 
    
    Each element of the array will be a sub problem 

    Seed initial values --> we need initial values to begin summing for the next fibonacci number
        index 0 = 0 --> first number in fibonacci is 0
        index 1 = 1 --> second number in fibonacci is 1
    
    Use seed data to start fibonacci sequence
    
*/
function tabFib(n){
    const table = Array(n+1).fill(0) // Create an array of length n and add the value of 0 to each index // Seed data
    table[1] = 1 // Seed index 1 with the value of 1 // Seed data

    for(let i = 0; i <= n; i++){
        // Fill in the next two positions
        table[i+1] += table[i] 
        table[i+2] += table [i]
    }

    return table[n] // n is the index of the fib number we want
}