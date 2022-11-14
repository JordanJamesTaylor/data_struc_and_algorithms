/*
    Write a function that take in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
    
    Return a boolean indicating whether or not there exists a path between nodeA and nodeB.

    Example of edge structure:
        edges: [
            [i, j], --> connection between i to j
            [k, i], --> k to i
            [m, k], ---> etc. 
            [k, l],
            [o, n]
        ]

    We want to convert this edge list to an adjacency list as traversal algorithms work better with adjacency lists.
        graph: {
            i: [j, k],
            j: [i],
            k: [i, m, l],
            m: [k],
            l: [k],
            o: [n],
            n: [o]
        }

    n = number of nodes
    e = number of edges

    1. Use buildGraph helper function to convert edge list to adjacency list
        Graph === Object
        Each key in object represents a node
        Each keys value is an array of that nodes neigbours
            This graph is undirected --> each neigbours neigbour points to itself
        Keep track of visited nodes using Set()
            Set() --> collection of items. Adding to a Set, or looking for a value in a Set, is constant time O(1)  
        Check for visited nodes
        Only visit a node once

    2. Use hasPath helper function recursively to return boolean if there is/isn't a path from source to destination
        BC = src === dst
        Call self recursively until hitting the BC 
        If we do not hit BC return false

    3. Use buildGraph in undirectedGraph to build graph
    4. Pass new graph to hasPath within undirectedGraph
    5. Return the result of the hasPath function

*/
  
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'], 
    ['k', 'l'],
    ['o', 'n']
]
// Depth first search
// Time: O(e) --> travelling through every node
// Space: O(n) --> add every node to stack
function undirectedPath(edges, nodeA, nodeB){
    const graph = buildGraph(edges); // Build graph

    return hasPath(graph, nodeA, nodeB, new Set()); // Look for path from nodeA to nodeB
}

function hasPath(graph, src, dst, visited){
    if(src == dst) return true
    if(visited.has(visited)) return false // Already visited this node, set to false so we don't send it to hasPath again

    visited.add(src) // Add node to the Set of visited nodes to guard against infinite loops

    for(let neigbour of graph[src]){ // src = current position in graph // neigbour = other nodes in array (e.g. 'j' from i: ['j', 'k'])
        if(hasPath(graph, neigbour, dst, visited) === true){ // Travel from current neigbour to its neigbour // If we haven't already visited this node
            return true // if hasPath doesn't return false during recursive calls, then there must be a path from source to the destination
        }  
    }

    return false // If you cannot reach the destination from the source
}

// Helper function to convert edge list to adjacency list
function buildGraph(edges){
    const graph = {}; // Graphs are objects in JS

    for(let edge in edges){ // Fill graph with edge data
        const [ a, b ] = edge; // Each edge is a pair. Deconstruct edges our of edge
        if(!(a in graph)){ // If a node is not already in the graph --> it has not yet been visited
            graph[a] = [] // Set node to be a key of graph and assign it an empty array
        }
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b) // Add neigbours to their edges
        graph[b].push(a) // Undirected graphs are symmetric (nodes pointing to each other if there's a connection, not one way)
    }

    return graph
} 