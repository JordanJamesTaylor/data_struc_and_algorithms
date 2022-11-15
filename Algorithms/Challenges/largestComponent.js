/*
    Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
    
    The function should return the size of the largest connected component in the graph

    1. Build a Set to keep track of visited nodes
    2. Define a counter and set to 0
    3. Iterate through each node
        1a. Call helper function for current node --> helper function handles traversal
    4. Use helper function to begin traversals (either depth or dreadth first) at each unvisited node
        4a. Check if current node has already been visited, skip it if it has
        4b. Add current node to Set to mark as visited avoiding inifinite loops/counting the same node more than once
        4c. Add sub counter to count amount of nodes in component
        4d. Continue traversal until all connected nodes that have not been visited, incrementing sub counter by 1 each time
        4e. Upon completing each traversal, return sub counter
    5. Repeat steps 3 and 4 comparing the return of the helper function (sub counter) against counter
    6. If sub counter is larger than counter, update counter to sub counter's value
    7. Return count

    n = number of nodes
    e = number of edges
*/

const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
};

// Time: O(e)
// Space: O(n)
function largestComponent(graph){
    const visited = new Set(); // Track visited nodes
    let largestComponent = 0; // Track amount of node in the largest component

    for(let currentNode in graph){
        const size = exploreSize(graph, currentNode, visited) // Depth first search
        if(size > largestComponent) largestComponent = size // Update with number of nodes in the largest component
    }

    return largestComponent;
}

function exploreSize(graph, currentNode, visited){ // Depth first search
    if(visited.has(currentNode)) return 0; // Avoid cycles/counting nodes more than once

    visited.add(String(currentNode)); // Add current node to visited
    let size = 1; // Starts out as 1 as we won't get here if there no nodes to traverse through

    for(let neighbour of graph[currentNode]){ // From current node, traverse through all it's neighbours 
        size += exploreSize(graph, neighbour, visited); 
    }
    
    return size;
}

largestComponent(graph); // 4