class _Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

//LIFO Last In First Out
class Stack {
    constructor(){
        this.top = null
    }

    //Complexity O(1)
    push(data){
        //if the stack is empty, then the node will be added to the top of the stack
        if(this.top == null){
            this.top = new _Node(data, null)
            return this.top
        }

        //if stack exists create node at the top and then set ptr to the new top
        const node = new _Node(data, this.top)
        this.top = node
    }

    //Complexity O(1)
    pop(){ //to remove from the top of the stack, the pointer has to ppoint to the next item and the next item becomes the top of the stack
        const node = this.top
        this.top = node.next
        return node.data
    }
}

module.exports = Stack