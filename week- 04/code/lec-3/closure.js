// Let if we wanna to make thie function which will return one more wheever it is called then previous one:
// console.log(increment())    // output: 1
// console.log(increment())    // output: 2
// console.log(increment())    // output: 3
// console.log(increment())    // output: 4

// We are not able to do it like this:
let num1 = 0;
function increment(){
    num1++
    return num1
}
// ecause if anybody changed the variable globally, then it will become an problem. So we need to declare that variable inside the function.
function increment(){
    let x = 0;
    return function(){      // so here we are actually returning just this function not the value of x.
        x++;
        return x;     
    }
}

let incremented = increment()       // So we are getting only the return function
// And now if we call "incremented", then it will call only thr return function not the increment function, and the increment function is just called one time in the above variable.
console.log(incremented())
console.log(incremented())
console.log(incremented())
console.log(incremented())
console.log(incremented())
console.log(incremented())

// And this is called:
function increments(){
    let x = 0;
    return function(){      // "CLOSURE FUNCTION": function binded by its lexical scope
        return x;     
    }
}




// Diference between Lexical scoping and closure
// - Lexical Scoping in java script is a convention that determines how variables are accessible in a block of code
// - In java script, a closure is a function that has access to the variables of its outer function, even after the outer function has finished executing.

// let we have a function like this:
function func(){
    let value = {"value":"asdfghjkl"}       // Let it's of memory size 10MB.
    return true;
}

// Untill now, the function "func" is taking 0 MB space, because we hadn't called that function.
func()      // On calling it took 10 MB of space
// And it had returns true. and now the garase collector will delete the space occupied by the function and now the function is occupying 0Mb of space.


// But if we do like:
let funct = func()      // Now the garbage collector will not remove this call and this function will occuy 10MB of space because garbase collector found that variable "funct" have reference of this call. So he will not remove this function and memory from here.
// And disadvantage of closure is that, untill this variable "funct" is present, garbase collector will not delete the complete functon calling and if the parent function occupies space of 100 MB, then due to this variable, that 100 MB will not be cleared. And it is also called "Memory leak" due to closure functons. And that 100 Mb will be occupied in the complete code even we used that referenced variable once or twice in complete code.
// So to solve this memory leak problem, after complete using of this variable, we makes it value "null" or "undefined" or any other thing, and now garbage collector will delete those 100 MB storage, because now the reference deleted:
funct = null;
// And only that's why we are able to access the variable "funct" anytime, because its reference is not cleaned.
// And that's why we say that those inner functions were closure functions because they has access of the variables of outer function, even after te outer functions has finished executing. or A function returning a function with its lexical scope binded is known as closure function and it allowed for controlled access to data while keeping it hidden from the outside scope. It also allows us to prevent controlling the innerdate from user by storing them in parent function and returning the child function and creating a variable of the child function and now user is not able to modify parent function things without we permit them in the child function
// Use case of closure is debounce, because there we also write the similar code and we give access of the variable having reference of child function.