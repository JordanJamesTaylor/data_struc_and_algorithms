// Breadth first search

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(!newNode.left){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(!temp.right){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    
    BFS(){
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)
    
        while(queue.length){ // While queue has a length greater than 0
            /*
                Search from the top of the tree
                Search across the entire breadth of the current level of the tree
                Move down a level
                Repeat
            */
            currentNode = queue.shift() // Remove first element from queue array a set it to the current node
            results.push(currentNode.value) // Add node to end of results array
            if(currentNode.left) queue.push(currentNode.left) // Add the next left to queue
            if(currentNode.right) queue.push(currentNode.right) // Add the next left to queue
        }
        return results
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(88)
myTree.insert(39)
myTree.insert(22)
myTree.insert(13)