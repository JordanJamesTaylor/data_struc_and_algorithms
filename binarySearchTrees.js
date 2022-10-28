/*
    Below are binary trees (each node only has two pointers), but tree nodes can have as many pointers as needed

    Top most node = root
    Top node is the parent
    Nodes directly below are the parent's children
    Children with the same parent are siblings
    Children can only have ONE parent
    Children can also be a parent
    A child with no children is called a leaf

    Types of Trees:
    - Full (every node either points to two node (due to binary tree) or points to no nodes)
    - Perfect (every level of the tree is full)
    - Complete (as compact as you can make the tree with the amount of node you have. This may mean it's not full and/or perfect)

*/

class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST{

    constructor(){
        // Don't need to add a node when constructing a BST
        this.root = null
    }

    insert(value){ // Add a node to the tree
        const newNode = new Node(value)

        if (!this.root){
            this.root = newNode
        }

        let temp = this.root
        while(true){ // Loop will run until hitting a return statement
            if (newNode === temp) return undefined // If there is a duplicate // Can add duplicates by adding a count property to nodes
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value){
        if (this.root === null) return false

        let temp = this.root
        while(temp){ // While we're still hitting node with values, otherwise temp = null, value is NOT in the tree, break out of loop
            if (value < temp.value){
                temp = temp.left
            }else if(value > temp.value){
                temp = temp.right
            }else{
                return true // Found node with passed in value
            }
        }

        return false // Node with passed in value is not in tree
    }


}