/*
    Write a function that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
    
    The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

    n = number of nodes
    e = number of edges

    Depth first search is not optimal here as we could end up snaking though the longest possible route in the graph (sticking to a path until it reaches the target node, if possible).

    Breadth first search avoids this by exploring more evenly (i.e. it'll check all nodes one node away from nodeA, then all nodes two nodes away, then three nodes away, etc.).

    1. Convert edges to an adjacency list a.k.a graph (JS object)
    2. Iterate through every pair (each edge)
        2a. Check if the current node has already been visited with a Set, if it has then skip it
        2b. If current node has not yet been visited, unpack edge pair into a and b variables
        2c. If graph does not contain these edges, make a key value pair for each edge   
        2d. Key = current node
        2e. Value = empty array
        2f. Push each edge into the other edge's array of neighbours 
    3. Use breadth first search logic to traverse through graph
        3a. Define a queue and as an array with an array of nodeA and 0 ( [ [nodeA, 0] ] )
    4. Use while loop to iterate over queue while it isn't empty
        4a. Remove current node from front of queue by unpacking it into node and distance variables
        4b. Add current node to the visited Set
        4c. Check if current node === nodeB. If they're the same, then we've found a path from nodeA to nodeB
        4d. If they're not the same then continue searching, add this node's neighbours to end of queue, increment distance by 1
        4e. Prevent cycles by maintaining the visited Set
    5. Return number representing the least amount of paths from nodeA to nodeB OR -1 if there are no paths
*/
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

function shortestPath(edges, nodeA, nodeB){
    const graph = buildGraph(edges); // Build adjacency list
    const visited = new Set(); // Track visited nodes
    const queue = [ [nodeA, 0] ] // Define the start of the queue with a path counter of 0

    while(queue.length > 0){ // While we have nodes in the queue
        const [node, distance] = queue.shift(); // Remove node at front of queue, unpack into variables node and distance

        if(node === nodeB) return distance; // Found a path from nodeA to nodeB

        // If we're yet to find a path from nodeA to nodeB
        for(let neighbour of graph[node]){ // Go into neighbours of the current node
            if(!visited.has(neighbour)){ // If current node's neighbour has not been visited
                visited.add(neighbour) // Mark current node as visited
                queue.push([ neighbour, distance+1 ])// Add curren nodes neighbour to queue and increment distance
            }
        }
    }

    return -1 // No paths // If we finish the while loop and we haven't found a path, then we hit this return 
};

function buildGraph(edges){ // Build adjacency list
    const graph = {}; // Initiate adjacency list

    for(let edge of edges){ // Iterate through each pair of edges
        const [ a, b ] = edge; // Unpack edges

        if(!(a in graph)) graph[a] = [] // If edge is not in graph, set a key in graph to this edge
        if(!(b in graph)) graph[b] = [] // Repeat for other edge
        graph[a].push(b) // Connect edges in adjacency list by adding a ref to them into array
        graph[b].push(a) // Repeat for other edge
    }

    return graph // Returns an adjacency list (JS object)
}


console.log(shortestPath(edges, 'y', 'g')) // -1
console.log(shortestPath(edges, 'w', 'z')) // 2