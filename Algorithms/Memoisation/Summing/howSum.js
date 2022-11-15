/*
    Write a function 'howSumtargetSum, numbers) that taakes in a targetSum and an array of numbers as arguments. 
    
    The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the target, then return null.

    You can use the same number multiple times.
    If there are multiple combinations, you may return any single one.
*/

/*
    m = targetSum            
    n = numbers.length

    Time complexity (described in terms of the recursive tree) = O(n^m * m)
    Space complexity (described in terms of the stack space) = O(m) 

    Base cases
        targetSum = 0 --> empty array
        return is a negative number --> null

    If operation has already been performed it will be in the memo obj, if in the memo obj
        Skip recursion
        Return array from memo
    If we can subtract the current number in the loop without hitting a base case
        Add this iteration of targetSum as memo key
        Copy array
        Add current number to array 
        Add array to memo as the key's value
        Recursively recall self with the remainder of targetSum - current number, the original array, and the memo object
    If we hit a base case of targetSum === 0
        Return empty array
        bubble back up through the tree levels, adding the numbers to the array as we rise up through the tree levels
        Retrun array of numbers that sum to target
    If we hit a base case of a negative number
        Return null

    Return null --> No solution
    Return array --> Array of numbers that can be added together to reach targetSum
*/
function howSum(targetSum, numbers, memo={}){
    if(targetSum in memo) return memo[targetSum] // Already performed operation
    if(targetSum === 0) return [] // BC - Solution
    if(targetSum < 0) return null // BC - No solution
    
    for(let num of numbers){ // Recursively call self for each number from the array
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo) // Return either and array or null
        if(remainderResult !== null){ // Early return - if we enter this block, then a valid combination is possible
            /*
                Bubble up possible solution 
                Spread through results array and add the new number
                Spread copies an array linearly, dramatically adding to poor time complexity

                Worse case WITHOUT memoisation: 
                    Time: O(n^m * m) 
                    Space: o(m)
                    
                    If targetSum is 50, and the array has one element with the value of 1 (array = [1]) then it would take 50 operations (1+1 50 times) to find the solution. This gives us a time complexity of 0(m)
                    
                    However, this will need to be done for each recursive call. Now the time complexity is O(m * m)
                
                Worse case WITH memoisation:
                    Time: O(n*m²)
                    Space: O(m²)
            */
            memo[targetSum] = [...remainderResult, num] // Store copy of array plus new num in memo obj // Adds to space complexity
            return memo[targetSum] // Return array
        }
    }
    memo[targetSum] = null
    return null
     // Unable to reach targetSum
}

//console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 4, 3, 7])) // [4, 3]
// console.log(howSum(7, [2, 4])) // null
// console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
// console.log(howSum(1801, [9, 18, 105, 900])) // null