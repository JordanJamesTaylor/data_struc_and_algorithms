/*
    Stacks work on LIFO (last in first out)
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.height = 1
    }

    push(value){ // Add to top of stack
        const newNode = new Node(value)

        if(this.height === 0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }

        this.height++
        return this
    }

    pop(){ // Remove from top of stack
        if (this.height === 0) return undefined

        const temp = this.top
        this.top = this.top.next
        temp.next = null

        this.height--
        return temp
    }
}