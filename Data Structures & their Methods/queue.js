/*
    Queues work on FIFO (first in first out)
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value){ // Add value to start of queue
        let newNode = new Node(value)
        if (this.length === 0){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }

    dequeue(){ // Remove value from start of queue
        if (this.length === 0) return undefined

        let temp = this.first
        if (this.length === 1){
            this.first = null
            this.last = null
        }else{
            this.first = this.first.next
            temp.next = null
        }

        this.length--
        return temp
    }
}