// Working with Arguments of a Function
// "arguments" is an array like object inside the functions that contains the values of arguments passed to that function
function patanahi(hello,hii){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[1])
}
// patanahi("Hello","Hii")

// High Order functions: Functions returning Functions
function hello (hello,hii){
    let helllo = "HElloooooo"
    return new function(){};   // And If anybody have reference of this function, then he can also access all the content inside the parent function like the "hello" variable.
}

// return of a Time Function
function time(delay){
    let time = setTimeout(()=> {},delay)    // The Variable "time" will store the reference of the location of time out function
}

// call : The call() method of Function instances calls this function with a given this value and arguments provided individually. or calling the function only with "this" attribute or parents context.
// bind : The bind() method of Function instances creates a new function that, when called, calls this function with its "this" keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called. or calls the function with arguments but returns a new function.
// Apply : The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object). or calls the function with arguments as array.
// this : returns the context of the function

// If we wanna to call the input argument function
function myId(functions,delay){
    return function(...args){       // Separating the arguments to make them independent and pass the copy array of arguments
        myId = setTimeout(()=> {
            functions.bind(this,args)   // We used args also, because to run "function", we also need the arguments to know what function we got
        },delay)
        // clearTimeout(myId)      // It delets the time out function or bouncting-off of time out function
    }
}


//  DEBOUNCING
// And Now this complete below concept is called debounce: because we run a function and waits for some time, and if that fubction called again in that delay interval, then we stops the previous function and will wait for the next function(which is also called bounce-off).
// Use case: User tries to click multiple times on "Sign-in" button but you wanna to take only the last request. Google keep changes the older search suggestions and deletes the previous one continuously.
function myIdes(functions,delay){
    let myId;       // We declared it here not at the initialization place because in first time, there would be no variable named "myId", and it will show error.
    return function(){
        clearTimeout(myId)      // In first time, it will just do nothing, because there is just undefined in that variable, in second run of this function, it will delete the time out fuction stored in this variable(and after that, the new function will be added)
        myId = setTimeout(()=>{
            functions.apply(this,arguments);      // joining the function with arguments and context
        },delay)
    }
}

// running above function more than once to see the "clearTimeout":
let sayHelllo = myIdes(()=>console.log("Helllo"),3000)
sayHelllo()
sayHelllo()
sayHelllo()
sayHelllo()

// THROTTLING   
// In throttling, all the next functions will not be executed even they try anythings untill the first function is completely executely
// Use case: Run button of Stackblits of assignments at chaicode.
function yourId(functions,delay){
    let yourId = null;
    return function(...args){
        if (yourId == null){        // Now if the new function runs before its delay overs then the value of youId will not be null and nothing will happen and because when the first completely runs and makes the value of yourId to null, then the next function after previous completion can easily run.
            functions(...args)      // parameter function will run with the arguments
            yourId = setTimeout(()=>{
                console.log("hii")
                yourId = null;
            },delay*1000)
        }
    }
}
let callHelllo = yourId(()=>console.log("Helllo OPPP"),5)
callHelllo()
callHelllo()
callHelllo()
callHelllo()
let callHello = yourId(()=>console.log("Helllo OPPP"),6)     // We can see above that the delay was 5 second and it have a delay of 6 seconds, so let's see will it run or not
callHello()     // Here we can see that, it is working because it is running after the first function had already executed. 