/*
    Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
    
    The function should return the size of the largest connected component in the graph

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

function largestComponent(graph){
    const visited = new Set();

    for(let currentNode in graph){
        if(explore(graph, currentNode, visited) === true){
            // Check if this component is the biggest
        }
    }


}

function explore(graph, currentNode, visited){ // Depth first search
    if(visited.has(String(currentNode))) return false; // Visited node

    visited.add(String(currentNode)); // Add current node to visited

    for(let neigbour of graph[currentNode]){ // From current node, traverse through all it's neigbours
        explore(graph, neigbour, visited)
    }
    

}

largestComponent(graph); // -> 4