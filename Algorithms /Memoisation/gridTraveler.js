/*
    You're a traveler on a 2D grid. 
    You begin in the top-left corner. 
    Your goal is to travel to the bottom-right corner. 
    
    You may only move down or right.

    In how many unique ways can you travel to the goal on a grid with dimensions m * n?
*/

/*
    For this function the order of the arugments doesn't matter

    Moving down reduces the number of rows by 1
    Moving right reduces the number of columns by 1
    
    Each pass through reduces a dimension by 1
    Recursively repeat this pattern

    Use memoisation to identify duplicate operations and store the results 
    If we're about to repeat an operation for which we already calculated the result, use the store result instead
    This reduces the amount of functions calls and in turn reduces runtime

    Any node where m AND n are 0 hits a base case and returns 0
    Any node where m AND n are 1 hits a base case and returns 1


*/
function gridTraveler(m, n, memo = {}){
    const key = m + ',' + n // JS stores keys as strings, so we can concat these values // Use comma to differentiate m and n
    
    if(key in memo) return memo[key] // Memoisation // This operation has already been computed, return result instead of calling self again
    
    // Base cases
    if(m === 0 && n === 0) return 0 // Invalid grid
    if(m === 1 && n === 1) return 1
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo) // Add result of recusive call to obj
    return memo[key] // Return newly added value
}

gridTraveler(2, 3) // 3 (right, right, down OR right down, right, OR down, right, right) ways to travel to the bottom-right