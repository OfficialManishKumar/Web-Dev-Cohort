// In Java script, we can axis some things like var or functions before their initialization, and this property of js is called "hoisting". Ex:
// console.log(hello2)
greet("Manish")     // We are accessing function before his initialization.
function greet (name){
    console.log(`Hello ${name}`)
}


console.log(hello1)     // we are accessing "var" before its initialization, and it is returning "undefined" not an error.
// We can even modify them even above its initialization, and if that declaration is above initialixation as well as accessing then the value will be the above declaration untill its main declaration.
hello1 = "Hello"
console.log(hello1)
var hello1 = "Hello Manish"
console.log(hello1)

// In case of Function in variable
// greet1("Manish");      // Will show error, because greet1 is not a function
greet1;
var greet1  = function (name){
    console.log(`Hello ${name}`)
}
// Function is stored a an variable and variable's previous value is undefined as variables and then later value is a function
greet1("Manish")

// But If try hoisting with let and const, it will show error:
let hello2 = "Hello from 2"
console.log(hello2)

// Now we might think that they don't support hoisting, but in reality, "let" and "const" also supports hoisting and we can see them in Global variables, but a concept named TDZ(Temporal dead zone)(term used to describe the states where the variables are un-reachable. They are in the scope but they aren't declared) and the all the area above the let and const declaration is called Dead zone. And we can verify it seeingthe error in that case, which is, let or const cannot be accessed before Initialization.
