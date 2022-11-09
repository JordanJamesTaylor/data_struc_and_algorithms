/*
    Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

    The function should return an array containing the shortest combination of numbers that add up to exactly targetSum.

    If there is a tie for the shortest combination, then you may return any one of the shortest.

    ..............................................................................................................................
    
    m = targetSum
    n = numbers.length

    Time: O(m² * n)
        The amount of keys in the memo object is equal to the vlaue of targetSum - O(m * n)
        Spreading over the array - O(m * n * m) OR O(m² * n)

    Space: 0(m²)
        The amount of keys in the memo object is equal to the vlaue of targetSum - O(m)
        Each key can have an array with a length of m - O(m²)
*/
function bestSum(targetSum, numbers, memo={}){
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null

    let shortestCombination = null 

    for(let num of numbers){ // We use of because we want the elements not their indicies 
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers, memo)
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num]
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
        }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination
}