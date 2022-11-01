class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    /*
        Create vertices:
        {
            1: [],
            2: []
        }
    */
    addVertex(vertex){ // Add vertices
        if(!this.adjacencyList[vertex]){ // If the adjacency list does not yet contain this vortext
            this.adjacencyList[vertex] = [] // Add vertex to obj and set to an empty array 
            return true
        }
        return false // If the vortext already exists ( i.e. this is a duplicate) then return false
    }

    /*
        Add edges to connect vertices:
        {
            1: ["2"],
            2: ["1"]
        }
    */
    addEdge(vertex1, vertex2){ // Create an edge to connect vertices
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){ // Check both vertices exist within the list
            this.adjacencyList[vertex1].push(vertex2) // Add edges to both vertices arrays
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    /*
        Remove edges:
        {
            1: [],
            2: []
        }
    */
    removeEdge(vertex1, vertex2){ // Removes edges from vertices
        /*
            Create new arrays with .filter that do not contain the edges we want to remove
        */
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){ // Only if BOTH vertices exist
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2) // Remove everything that is not vertex2
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1) // Remove everything that is not vertex1
            return true
        }
        return false
    }

    /*
        Remove vertices
        {
            1: []
        }
    */
    removeVertex(vertex){ // Removes vertex from graph
        /*
            First, we need to remove all edges associated with the vertex, then we can remove the vertex
        */
        if (!this.adjacencyList[vertex]) return undefined // Check that vertex is present in graph
        while(this.adjacencyList[vertex].length){ // Loop through entire vertices array to remove all edges
            let temp = this.adjacencyList[vertex].pop() // Whatever the last edge is
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex]
        return this
    }
}