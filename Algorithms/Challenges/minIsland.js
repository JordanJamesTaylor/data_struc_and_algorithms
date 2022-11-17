/*
    Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

    You may assume that the grid contains at least one island.
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

const grid4 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];

/*
    r = number of rows
    c = number of columns

    Time: O(r*c) --> Traverse the entire island
    Space: O(r*c) --> The entire grid is one island
*/
function minimumIsland(grid){
    const visited = new Set(); // Cycle prevention // Assignment O(1)
    let smallesIsland = Infinity; // Assignment O(1)

    for(let row = 0; row < grid.length; row++){ // Iteration O(n)
        for(let col = 0; col < grid[0].length; col++){ // Iteration O(n)
            let currentIsland = getIslandSize(grid, row, col, visited); // Fully explore each island // Recursion O(n)
            if(currentIsland > 0 && currentIsland < smallesIsland){
                smallesIsland = currentIsland; // Comparison and assignment O(1)
            }
        }
    }

    return smallesIsland;
};

function getIslandSize(grid, row, col, visited){
    // BC: Check if we're in bounds
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;
    if(!rowInBounds || !colInBounds) return 0;

    // BC: Check if current node is water
    if(grid[row][col] === 'W') return 0;

    // Convert coordinates to string to maintain data accuracy
    const currentPosition = row + ',' + col;

    // BC: Check if current node has already been visited
    if(visited.has(currentPosition)) return 0;
    
    // Mark as visited if not yet visisted
    visited.add(currentPosition);

    // Set counter for the size of the current island
    let islandSize = 1; 

    // Found land node, explore the entire island
    islandSize += getIslandSize(grid, row-1, col, visited); // Top neighbour
    islandSize += getIslandSize(grid, row, col+1, visited); // Right neighbour
    islandSize += getIslandSize(grid, row+1, col, visited); // Bottom neighbour
    islandSize += getIslandSize(grid, row, col-1, visited); // Left neighbour

    // Return the amount of land nodes that make up this island
    return islandSize; // Return O(1)
};

console.log(minimumIsland(grid1)); // 2
console.log(minimumIsland(grid2)); // 1
console.log(minimumIsland(grid3)); // 9
console.log(minimumIsland(grid4)); // 1