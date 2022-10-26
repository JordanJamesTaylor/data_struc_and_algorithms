/*
    Linked list do not have to be sequential in memory (unlike arays)
    Consists of nodes
    Nodes are have a value and a pointer which points to the next node in the list
*/

class Node { // Create a node
    constructor(value){
        this.value = value // Set value of node to passed in value
        this.next = null // Hasn't been added to list yet, so set next to null
    }
}

class LinkedList { // Create class
    constructor(value){ // Constructor takes in a value
        const newNode = new Node(value) // Create new node
        this.head = newNode // Set head to point to new node
        this.tail = this.head // Set tail to point to new node
        this.length = 1 // Set the length of the linked list
    }

    push(value){ // Add value to end of list
        const newNode = new Node(value)

        if(!this.head) { // this = entire list
            this.head = newNode // If there's no nodes in list set this node to head
            this.tail = newNode // If there's no nodes in list set this node to tail
        }else{ // If the list is not empty
            this.tail.next = newNode // Set the next value of the current tail in list to the new node
            this.tail = newNode // Set new node to tail
        }

        this.length++ // Increase list length 
        return this // Return entire list
    }

    pop(){ // Remove node from end of list
        if(!this.head) return undefined // No nodes in list

        let temp = this.head // Need to iterate from start of list to find node with a next value = null
        let pre = this.head // Keep track of the node before the node that points to null
    
        while(temp.next){ // Runs while current nodes next points to another node, ends when current nodes next points to null
            pre = temp // Continue looping through the list
            temp = temp.next // Move up list
        }
        
        this.tail = pre // Change tail to penultimate node
        this.tail.next = null // Remove the last node
        this.length-- // Decrement the length

        if(this.length === 0){ // If there is only one node in list, while loop won't run and length will be set to 0
            this.head = null 
            this.tail = null
        }

        return temp // Return the removed node
    }

    unshift(value){ // Add node to beginning of the list
        const newNode = new Node(value)

        if(!this.head){ // If list is empty
            this.head = newNode
            this.tail = newNode
        }else{ // If list is not empty 
            newNode.next = this.head // Set new node to point to current node in head
            this.head = newNode // Set head to point to new node
        }

        this.length++
        return this
    }

    shift(){ // Remove node from beginning of the list
        if(!this.head) return undefined
        
        // If there are 2 or more nodes present
        let temp = this.head // We want to return the node we remove, so we need to store it in a variable
        this.head = this.head.next // Set head to be the second node in list, if there is only 1 node in list then head = null
        temp.next = null // Remove the node that was previously the head from the list
        this.length--

        // If there was 1 node in the list, the list is now empty

        if(!this.length === 0){ // If the list is empty
            this.tail = null // Set tail to null
        }
        
        return temp
    }

    get(index){ // Retrieve node from given index
        if(index < 0 || index >= this.length) return undefined // If index is less than or greater than the length of the list
        
        const temp = this.head

        for(let i = 0; i < index; i++){
            temp = temp.next
        }

        return temp
    }

    set(index, value){ // Change value at given index
        let temp = this.get(index) // Either = undefined if index is outside of list, or the node at the index

        if(temp){ // If temp is point to a node i.e. not undefined
            temp.value = value
            return true // Stop running the function
        }
        return false // If temp is undefined
    }

    insert(value, index){ // Add node at given index
        if(index === 0) return this.unshift(value) // Add to start

        if(index === this.length) return this.push(value) // Add to end

        if(index < 0 || index > this.length) return false // If index falls outside of list

        const newNode = new Node(value)
        const temp = this.get(index - 1)

        newNode.next = temp.next
        temp.next = newNode

        this.length++
        return true
    }

    remove(index){ // Remove node at given index
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || index >= this.length) return undefined

        const prev = this.get(index - 1)
        // const temp = this.get(index) --> DON'T DO THIS! Doing this will make this method an 0(n) operation
        const temp = prev.next // This keeps it at 0(1) as it keeps it at one operation
        
        prev.next = temp.next // Set node before index to point to node after index
        temp.next = null // Remove node from list at given index

        this.length--
        return temp 
    }

    reverse(){ // Reverse the list
        // Flip head and tail
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        // Create variables to keep track of where we are in list
        let next = temp.next
        let prev = null

        for(let i = 0; i < this.length; i++){ // Iterate through list and flip each nodes pointer
            next.next = temp 
            temp.next = prev
            prev = temp // Link the gap
            temp = next 
        }
    }
}

let myLinkedList = new LinkedList(18) // LinkedList calls calss, new calls the classes constructor
myLinkedList.push(10) // 0(1)
myLinkedList.pop() // 0(n) due to looping from head to find the penultimate node
myLinkedList.unshift(4) // 0(1)
myLinkedList.shift() // 0(n)
myLinkedList.get(2) // 0(n)
myLinkedList.set(2, 3) // 0(1)
myLinkedList.insert(5, 4) //0(1)
myLinkedList.remove(3) // 0(1)
myLinkedList.reverse() // 0(n)