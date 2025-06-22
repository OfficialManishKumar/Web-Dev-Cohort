// Type Script is just types+java script = typeScript
// It just makes the variables to be store only a single type of data, and if we tries to store data of different types, then it shows error
let hello = "Manish"
// hello = 9    // shows "number" is not assignable to type "string". error.

// We can even decalare which type of data we can store in any variable and if we try to store any else data type, then it shows an error:
let num1 : number = 54
// Trying to store data of any other data type.
num1 = 5;
// It can be done without even saying that we will store only numbers. But it is mainly used when we wanna to store data of only some specific data types
let num2 : number | string = 78
num2 = 75
num2 = "Manish"
// But if we try to store data of any other data type, then it shows error
// num2 = undefined


// We can also use it to tell the data type of arguments
function add(x:number , y:number){
    return x+y
}
add(5,8)        // while writing this, we see that we need assign a number
// And if we try to pass parameters of any other data type, then it shows an error
// add("Manish","Saw")
// And it even suggests what is the data type of return and if mistakenly we tries to store it inside a variable of different type, then it sugggests the return type will be different.
// let heloo : string = add(3.5,8)


// Creating a function with object as parameter and also defining its properties types
function createUser(user:{firstName : string; lastname ?:string}){      // "?" in lastname is representing that it is optional
    // console.log(user.lastname.trim())       // We are seeing error because lastname is optional and if it is not provided then how this line will get it.
    // To Use this
    console.log(user.lastname?.trim())
    // OR
    if(user.lastname){
        console.log(user.lastname.trim())
    }
    console.log(user.firstName)
    console.log(user.lastname)
}

createUser({
    firstName:"Manish Kumar Saw",
})
createUser({
    firstName:"Manish",
    lastname:"Saw"      // therefore "lastName" is optional
})



// interface - like creating a data type
interface User{
    firstName:string;
    lastName?:string;
    email:string;
    profileImageURL?:string; 
}

function updateUser(user:User){user}

const payload :User = {
    firstName:"",
    email:""
}

updateUser(payload)