/*
    Write a function that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

const graph1 = { 
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
};

const graph2 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
/*
    e.g. graph1 has three components
        3
        
        1 -- 2 

        4
        |
     5--6--8 
        |
        7

    1. Build a Set to keep track of visited nodes
    2. Define a counter and set to 0
    3. Iterate through each node
        1a. Call helper function for current node --> helper function handles traversal
    4. Use helper function to begin traversals (either depth or dreadth first) at each unvisited node
        4a. Check if current node has already been visited, skip it if it has
        4b. Add current node to Set to mark as visited avoiding inifinite loops/counting the same node more than once
        4c. Continue traversal until all connected nodes have been visited
        4d. Upon completing each traversal, increment count by 1
    5. Repeat steps 3 and 4 
    6. Return count

    n = number of nodes
    e = number of edges

*/

// Time: O(e)
// Space: O(n)
function countConnectedComponents(graph){
    const visited = new Set(); // Set is a collection of unique values // Looking for a value in a Set is constant time
    let count = 0;

    for(let node in graph){ // Begin traversal // in will give us access to obj keys, not the key's value
        if(explore(graph, node, visited) === true){ // Finished exploring component
            count += 1
        }
    }

    return count;
}

// Depth First Search
function explore(graph, currentNode, visited){
    /*
        Keys of JS objects are converted to strings
        Each key has an array of numbers representing that nodes neigbours
        Set can store both strings a numbers
        Sets can become confused when they have both data types
            A set will store both a number and string version of the neigbour
            We should only store one version
    */
    if(visited.has(String(currentNode))) return false // Already visited this node

    visited.add(String(currentNode)); // Track visited nodes // Only store string version // .add() only adds unique values

    for(let neigbour of graph[currentNode]){
        explore(graph, neigbour, visited) // Explore all neigbours
    } // We only want to check how many components there are. Move to return once we've visited all connecting nodes 

    return true // Finished exploring all neigbours
}

console.log("GRAPH ONE: ", countConnectedComponents(graph1)); // 3
console.log("GRAPH TWO: ", countConnectedComponents(graph2)); // 2