/*
    Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

    In how many ways can you travel ti tge fiak ib a grid with dimensions m * n?

    Write a function gridTraveler(m, n) to calculate this.

    ........................................................................................................................

    Tabulation

    m = table rows
    n = table columns

    Time = O(m * n) --> iterating over each element in table
    Space = O(m * n) --> the size of the table

    Build table (really just an array)
    Add 1 to length of table (need to account for arrays starting at 0)
    Seed each index of the table with data that is of the same type as the expected output
        A good initial value is commonly 0 --> insert 0 into each indicies
        gridTraveler(1, 1) will always return 1 (there's only one way to travel though a 1x1 grid), so we can include this in our initial seed data

*/
function gridTraveler(m, n){
    /*
        Build an initial array with an extra index --> this will be the table rows
        Use .fill().map() together to add a new array instance to each element of the original array --> this will give us our columns
        Fill the columns with seed data

        Must use .map() with .fill()
            Building the new array directly  in fill (.fill(new Array(n+1))) will add the SAME array instance to each element, NOT a completely new array
            .fill() --> at every index of our array
            .map(() => Array(n+1).fill(0)) --> add a new array instance and add 0 at each of it's indicies
    */
    const table = Array(m+1).fill().map(() => Array(n+1).fill(0)) // Build table and add seed data
    table[1][1] = 1 // Seed data

    for(let i = 0; i <= m; i++){ // Loop over rows
        for(let j = 0; j <= n; j++){ // Looop over columns
            const current = table[i][j] // Grab current element
            if(j+1 <= n) table[i][j+1] += current  // Ensure that we're still in the bounds of the table then add current to right neighbour
            if(i+1 <= m) table[i+1][j] += current // Ensure that we're still in the bounds of the table then add current to bottom neighbour
        }
    }

    return table[m][n] // Bottom right corner
}

gridTraveler(1, 1) // 1
gridTraveler(3, 3) // 6
gridTraveler(30, 30) // 30067266499541040
