class LinkedList { // Create class
    constructor(value){ // Constructor takes in a value
        const newNode = new Node(value) // Create new node
        this.head = newNode // Set head to point to new node
        this.tail = newNode // Set tail to point to new node
        this.length = 1 // Set the length of the linked list
    }

    push(value) { // Add a node to the end of the list
        const newNode = new Node(value) // Create a new node
        if (!this.head){ // Check if the linked list is empty, if it is...
            this.head = newNode // Set the head to the newly added node
            this.tail = newNode // Set the taile to the newly added node
        } else { // If the linked list is not empty...
            this.tail.next = newNode // Set the penultimate node to point to the newly added node
            this.tail = newNode // // Set the tail to the newly added node
        }
        this.length++ // Increase the length of the list
        return this // Return the entire linked list
    }
}

let myLinkedList = new LinkedList(18)
myLinkedList.push(10)
myLinkedList.push(8)
myLinkedList.push(33)