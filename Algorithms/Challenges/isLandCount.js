/*

    Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
    
    The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

    r = number of rows
    c = number of columns

    Time: O(r*c) --> one giant island
    Space: O(r*c) --> adding the each node of the giant island as visited to the Set

    1. Send grid to helper function
        1a. Visualise each position in the grid as a node
        1b. Give each node an index for the row and column to denote its position in the grid

    2. Check if the current node has NOT been visited and if it is water ('W') or land ('L')

    3. Remember visited nodes to boost performance and avoiding cycles (undirected graphs will cause cycles if we omit this step)  

    4. If current node is land, use row and column variables to iterate over neighbours -- > question condition says that each node will only have vertical and horizontal neighbours (up, right, down, left) 
        4a. If a neighbour is also a land node, move to that node and repeat step 4 for that node
        4b. Repeat 4 and 4a until the island has been fully explored

    5. Once island has been fully explored, increment counter by 1

    *** ISSUE WITH SET() ***

    const s = new Set() --> define new set
    s.add([1, 3]) --> add an array with the current nodes row and column indices 

    When working with reference types, like arrays and objects, a Set will check for reference equality (same place in memory)
    s.has([1, 3]) --> This is treated as a new array and as such will be pointing to a different location in memory, so this will return FALSE

    To get around this we need to convert the indices to a string ( [1, 3] becomes '1,3' ) --> strings are primitive

*/
const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'], 
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

// Grid graph
function islandCount(grid){
    const visited = new Set();
    let count = 0; // Increment by one when new island has been found and fully explored

    for(let row = 0; row < grid.length; row += 1){ // Explore the grid by row
        for(let col = 0; col < grid[0].length; col += 1){ // Explore the grid by column
            if(explore(grid, row, col, visited) === true){ // Foundn island node and fully explored it
                count += 1;
            } 
        }
    } 

    return count;
};

function explore(grid, row, col, visited){
    /*
        1. Ensure we're still within the boundaries of the grid --> 
        IMPORTANT: Step 1 must come before step 2. 
        We first need to check if we're in bounds because if we try to check the index of an out of bounds position, then we'll get an out of bounds error 
        2. Check if current node is a water node, if so we can skip it
        3. If we're in bounds and current node is not a water node
            3a. Convert position array to string
            3b. Format string with comma to seperate row and column
            3c. Add position string to visited Set
        4.

        *** RESOLVING THE SET() ISSUE ***
        Convert array (reference type) to a string (primitive type)
        Store the string in visited Set
        
        Now that the row and column are store as a primitive type, we can easily compare the actual values of row and column to see if they already exist within the visited Set. Keeping the position as a reference type will cause the Set to check if both values point to the same place in memory, which they won't as it'll treat the array we're checking for as an entirely different array pointing to a difference place in memory.

        We also need to format the string with a comma between row and column to avoid collisions that are meant to represent two different positions.
        
        If we omit the comma...
        row = 12
        column = 4
        positionOne = '124'

        row = 1
        column = 24
        positionTwo = '124'

        Use the comma to distinguish between row and column...
        positionOne = '12,4'
        positionTwo = '1,24'
    */
   
    // BASE CASE: Keep within the bounds of the gird
    const rowInBounds = 0 <= row && row < grid.length; // Inclusive with index 0(top row), exlusive with the length (bounds of the grid)
    const colInBounds = 0 <= col && col < grid[0].length // Length of a column, not a row
    if(!rowInBounds || !colInBounds) return false; // Current node is out of bounds --> return false to avoid out of bounds error

    // BASE CASE: Check if current node is a water node
    if(grid[row][col] === 'W') return false; // We only want to traverse land nodes  

   // BASE CASE: Cycle prevention
    const position = row + ',' + col; // Stringify position array
    if(visited.has(position)) return false; // Return boolean to indicate if this island has already been visited
    visited.add(position); // Has not yet been visited, but we're visiting it now, so mark it as visited
    /*
        We'll only make it to this part of the function if the current node is within bounds, is a land node, and has not yet been visited
        
        Lower row numbers = moving up through the grid
        Lower column numbers = moving left across the gird

        Use Depth first traversal to move through the current nodes neighbours as well as the current nodes neighbour's neighbours until we have explored the entire island
    */
    explore(grid, row-1, col, visited) // Top neighbour
    explore(grid, row, col+1, visited) // Right neighbour
    explore(grid, row+1, col, visited) // Bottom neighbour
    explore(grid, row, col-1, visited) // Left neighbour

    // Finished traversal
    return true; // Finished exploring a brand new island
}   

console.log(islandCount(grid1)); // 3
console.log(islandCount(grid2)); // 4
console.log(islandCount(grid3)); // 1