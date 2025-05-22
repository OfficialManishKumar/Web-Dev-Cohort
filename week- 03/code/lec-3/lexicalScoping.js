let name = "Manish";
function greet(){
    console.log(`Good Evening ${name}`)         // We can axis the "name" variable inside this function because function internally have a "scope" which have the reference of his parent
}
function greeting(){
    console.log(`Good Evening ${name}`)
    let greeting = `Good Evening ${name}`
    function internalGreet(){
        console.log(`Hello and ${greeting}`)        // its scope will have variable of his parent or "greeting" scope which will have the scope of globe.
    }
}

// Now If we try to redeclare any variable like this, then we faces an error like this:
// let name = "Manish";
// But why do we not face it if we redeclare any variale inside functions like this:
function greeted(){
    let name = "Manish Kumar Saw";      // We are not facing any error because, global variables reference is stored in "scope". but this "name" variable will be stored inside the function memory part of Function execution context. And when we run the code, then it firstly checks in memory part and then it checks on "scope" of parent and then it will goes to scope of parent of parent and this will happen until he reach Global execution context.    And this is called "LEXICAL SCOPING" and it determines how variable are accessible in a block of code
    console.log(`Good Evening ${name}`)
}