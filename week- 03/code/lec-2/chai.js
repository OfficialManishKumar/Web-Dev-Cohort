// Working with Arguments of a Function
function patanahi(hello,hii){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[1])
}
patanahi("Hello","Hii")

// High Order functions: Functions returning Functions
function hello (hello,hii){
    let helllo = "HElloooooo"
    return new function(){helllo};   // And If anybody have reference of this function, then he can also axis the "hello" variable because this function will also carry all the variable and objects inside the parent function.
}

// return of a Time Function
function time(delay){
    let time = setTimeout(()=> {},delay)    // The Variable "time" will store the reference of this time function
}

// call : The call() method of Function instances calls this function with a given this value and arguments provided individually.
// bind : The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.
// Apply : The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).
// this : returns the context of the function
function myId(functions,delay){
    return function(...args){
        myId = setTimeout(()=> {
            functions.bind(this,args)   // We used args also, because to run "function", we also need the arguments to know what we get
        },delay)
        // clearTimeout(myId)      // It delets the time out function or bouncting-off of time out function
    }
}
// And this complete above concept is called debounce: trying to delete then creating and then next time, deleting the previous one and creating new one.