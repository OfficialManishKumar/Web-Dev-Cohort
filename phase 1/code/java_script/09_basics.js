// "this.name" will not refer to the variable or function named "name" inside the data where the function is used. Instead it points to the name of function/variable in which thie function is used
// Variables made during making any function is called parameter and passing it from anywhere outside is called argument.

// Functions like this:
function hello (x,y,operation){
    return operation(x,y)
}

let hello1 = hello(4,5,(x,y)=>x/y)
// In this operation is an arrow function and passed values of x and y are arguments. And these types of functions where any function is passed as an argument to any other function or function passed as argument to function that returns another function(not this, but they are also called) are called First-class-Functions.


// Now If we try to axis any variable outside the function but present inside the function, then we are not able to do that, like this:
function hello(){
    let hello1 = "Hello"
}
// console.log(hello1) // If we run this, then it will return undefined because we cannot axis them.
// But If we write function like this:
function greed (){
    let count = 0;
    return function(){
        count += 1;
        return count;
    }
}
let hello4 = greed()
console.log(hello4()) 
// But here we can see that we are accessing the count, because we've written "count" in the return, so it is storing the "count" variable from the parent on itself. that's why we can axis count.

// We can also wite functions in this way:
(function(){
    return "Hello"
})()
// Here this function have no name and will run automatically when we run the code because we  alreadywritten "()" in last of function. And these types of functions are used when we want to run that function automatically in starting, whenever we run code.