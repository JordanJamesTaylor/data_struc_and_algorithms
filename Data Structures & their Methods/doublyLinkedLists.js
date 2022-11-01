class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null // Set second pointer pointing to the node before this one
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){ // Add node to end of list // 0(1)
        const newNode = new Node(value)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail // Set backwards pointer
            this.tail = newNode
        }

        this.length--
        return this
    }

    pop(){ // Remove node from end of list // 0(1)
        if(this.length === 0) return undefined

        let temp = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }

        this.length--
        return temp
    }

    unshift(value){ // Add value to beginning of list // 0(1)
        const newNode = new Node(value)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++
        return this
    }

    shift(){ // Remove node from beginning of list // 0(1)
        if(!this.head) return undefined

        let temp = this.head
        if(this.length === 1){
            this.head = null
            this.tail == null
        }else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }

        this.length--
        return temp
    }
    /*
        Doubly linked lists allows for better optimization for get than singularly linked lists
        As nodes have pointers pointing forward and backwards we can iterate from the tail to the head much easier
        So, we can break the loop in half, checking from the head, or checking from the tail

        This also means that any other doubly linked list method that uses the doubly linked list get method is too more efficent
    */
    get(index){ // Retrieve node from given index // 0(n)
        if(index < 0 || index >= this.length) return undefined

        let temp = this.head
        if(index < this.length/2){ // If index is in the first half of the list
            for(let i = 0; i < index; i++){
                temp = temp.next
            }
        }else{ // If index is in the second half of the list
            temp = this.tail // Move temp to tail
            for(let i = this.length - 1; i > index; i--){ // From the end of the list
                temp = temp.prev // Move backwards
            }
        }
        return temp
    }
    
    set(index, value){ // Change value of node at given index
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(value, index){ // Add new node at given index 
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index < 0 || index > this.length) return false

        const newNode = new Node(value)
        let before = this.get(index - 1)
        let next = this.get(index + 1)
        before.next = newNode
        newNode.prev = before
        newNode.next = next
        next.prev = newNode

        this.length++
        return true
    }

    remove(index){ // Remove node at given index
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || index > this.length) return false

        const temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }
}