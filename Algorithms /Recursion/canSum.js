/*
    Write a function that takes in a target and an array of numbers as arguments. The function should return a boolean indicating whether or not it is possible to generate the target using numbers from the array.

    You may use an element of the array as many times as needed. 
    You may assume that all input numbers are nonnegative.
*/

/*
    Space complexity = O(m)
    Time complexity = 0(m * n)

    Recursion & Memoisation

    Visualise as a tree
    Go through array and create a node for each element

    Loop through array
    Subtract current value from target
        Repeat if it results in a positive number (still looking for solution) and store solution in memo obj
    Return false (no solution) if it results in a negative number
    Return true (solution found) if it results in 0 (bubble up result through recursive calls)
*/
function canSum(target, numbers, memo={}){
    if(target in memo) return memo[target] // Already performed operation
    if (target === 0) return true // Found solution
    if (target < 0) return false // Base case

    for (let num of numbers){
        const remainder = target - num
        /*
            Question allows us to use the same number multiple times, so we pass in the same array
            If the recursive call returns true - the function doesn't end with a negative number and there is at least one way to subtract the numbers in the array to make the target number - then return true
        */
        if(canSum(remainder, numbers, memo) === true){
            memo[target] = true // Store key and result in memo
            return true
        }
    }
    /*
        If no numbers can be used to reach the target number then return false after of the loop
        After the loop to ensure all number combinations have been tested before determining that target cannot be reach with the numbers in the array
    */
   memo[target] = false // Store key and result in memo
   return false
}

canSum(7, [5, 3, 4, 7]); // True
canSum(5, [3, 2]); // True
canSum(7, [2, 4]); // False
canSum(300, [2, 4]); // False // Even though there are only two elements in this array, it would still be too slow without memoisation