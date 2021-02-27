class _Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    //the queue is empty until something is inserted
    constructor(){
        this.first = null
        this.last = null
    }

    //Complexity O(1)
    enqueue(data){
        const node = new _Node(data)

        //if the queue does not exist add it to the first 
        if(this.first == null){
            this.first = node
        }

        //otherwise add node, next to the last position
        if(this.last){
            this.last.next = node
        }
        //set new node as the new last position
        this.last = node
    }

    //Complexity O(1)
    dequeue(){
        if(this.first == null){ //if queue is empty there is nothing to remove
            return
        }

        const node = this.first //set the node equal to the first value
        this.first = this.first.next //set the first value equal to the second value

        if(node === this.last){ //if this node is the last position set the current last position as null
            this.last = null 
        }

        return node.value 
    }

}