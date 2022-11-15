/*
    Write a function that take in an object representing the adjacency list of a directed acyclic (no cycles --> don't need to worry about infinite loops) graph and two nodes (src, dst).

    The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

    Example of edge structure:
        edges: [
            [i, j], --> connection between i to j
            [k, i], --> k to i
            [m, k], ---> etc. 
            [k, l],
            [o, n]
        ]

    n = number of nodes
    e = number of edges

*/

// DEPTH FIRST --> STACK
// Time: O(e)
// Space: 0(n)
function hasPathDF(graph, src, dst){
    if(src === dst) return true // BC --> Found path

    for(let neighbour of graph[src]){ // Loop through all a given nodes neighbours
        // graph[src] = all neighbouring nodes
        if(hasPathDF(graph, neighbour, dst) === true){ // If there is a neighnour, traverse to it. Continue until hitting a BC
            return true // If there is a path from neighbours to the dstination
        }
    }

    return false // After the loop (after searching all paths), then return false if no paths are found
}

// BREADTH FIRST --> QUEUE
// Time: O(e)
// Space: O(n)
function hasPathBF(graph, src, dst){
    const queue = [ src ]

    while (queue.length > 0){
        const currentNode = queue.shift() // Remove and store the first node from the queue
        if(currentNode === dst) return true 
        for(let neighbour of graph[currentNode]){ // graph[src] = all neighbouring nodes
            queue.push(neighbour) // Add neighbour to the end of the queue
        } 
    }
    /*
        We go through the entire queue in the while loop
        If a path to destionation isn't found 
        We exit the while loop and return false
    */ 
    return false 
}