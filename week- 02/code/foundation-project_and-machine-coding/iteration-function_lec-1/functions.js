// Making an reusable function
function greet (name){
    console.log(`Hello ${name}`)
}
// Using this reusable and customizable function
// greet("Hitesh")
// greet("Piyush")

// Concept of global and function variable
let globalVariable = "I am the global Variable"
function functionalVariable(){
    globalVariable = "I am modified because I was present globally and can be modified from anywhere."
    console.log(globalVariable)
    let localVariable = "I am the Local Variable"
    console.log(localVariable)
}
// functionalVariable()
// console.log(globalVariable)
// console.log(localVariable)      // Trying to access or print function variable or block-scoped variable globally will display an error


let person1 = {
    "name":"Manish",
    "greet":function(){
        // console.log(`Hello ${name}`)     // running this line will return an error because code runner is not ale to find "name" variable, because it's neither availale gloally nor in his function or block level scope. And to solve this, we can use "this" to tell him to find that variable in that object/parent.
        console.log(`Hello ${this.name}`)
    }
}

let person2 = {
    "name":"Sagar"
}
// Now If we wanna to use greet function, but with value at person 2. then we need to call that "greet" function for person2 like this:
// person1.greet.call(person2)
// Or we can also give custom input like this:
// person1.greet.call({"name":"Shubham"})z