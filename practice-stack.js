const Stack = require('./stack')

const starTreck = new Stack()

starTreck.push('Kirk')
starTreck.push('Spock')
starTreck.push('McCoy')
starTreck.push('Scotty')

function peek(stack){
    const node = stack.top
    console.log(node.data)
}
peek(starTreck)

function isEmpty(stack){
    if(stack.top == null){
        console.log('stack is empty')
    } 
    else (
        console.log('stack is not empty')
    )
}

const emptyStack = new Stack()
isEmpty(starTreck)
isEmpty(emptyStack)

function display(stack){
    let node = stack.top
    while (node !== null){
        console.log(node.data)
        stack.pop()
        node = stack.top 
    }
}

display(starTreck)