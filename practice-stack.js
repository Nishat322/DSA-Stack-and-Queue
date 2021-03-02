const Stack = require('./stack')

const starTreck = new Stack()

starTreck.push('Kirk')
starTreck.push('Spock')
starTreck.push('McCoy')
starTreck.push('Scotty')

/*************************************** USEFUL METHODS FOR A STACK ******************************************************/
function peek(stack){
    const node = stack.top
    console.log(node.data)
}

//peek(starTreck)

function isEmpty(stack){
    if(stack.top == null){
        console.log('stack is empty')
        return null
    } 
    else (
        console.log('stack is not empty')
    )
}

const emptyStack = new Stack()
//isEmpty(starTreck)
//isEmpty(emptyStack)

function display(stack){
    let node = stack.top
    while (node !== null){
        console.log(node.data)
        node = node.next
    }
}

//display(starTreck)

/*************************************************** CHECKING FOR PALINDROMES USING A STACK *******************************************/
function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const stack = new Stack()
    for(let i = 0; i< s.length; i++){
        stack.push(s.charAt(i))
    }

    let reverseString = ''
    let node = stack.top
    while(node !== null){
        reverseString = reverseString + stack.pop()
        node = node.next
    }

    if( s === reverseString){
        console.log('String is a palindrome')
    }
    else{
        console.log('String is not a palindrome')
    }
    
}

is_palindrome("dad")
is_palindrome("A man, a plan, a canal: Panama")
is_palindrome("1001")
is_palindrome("Tauhida")
