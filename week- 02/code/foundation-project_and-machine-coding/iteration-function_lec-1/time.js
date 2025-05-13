// "Set time out" is a function used to run code after a delay of time(in milliseconds).
// 1 second = 1000 millisecond
// Syntax: setTimeout(function, delay in milliseconds).
// setTimeout(() => console.log("Hello World"),2000)

// But if we set time for any function like this:
let person1 = {
    "name" : "Manish",
    greet  : function (){
        console.log(`Hello ${this.name}`)
    }
}
// setTimeout(person1.greet(), 2000)        // Here we can see that it's displaying error because when the function reached the even loop, till that, the "name" variable had already removed. And to do it, we can bind thevariale and function so that when the function is runned, variable is stitched with him, and he will also run.
setTimeout(person1.greet.bind(person1), 2000)