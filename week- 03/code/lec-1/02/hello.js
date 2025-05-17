// Reading the "hello.txt" file using fs module
const fs = require('fs')        // "require" is an Module in js
console.log('Starting Program')
const contents = fs.readFileSync('./hello.txt','utf-8')
console.log("Reading file succeded and this is the result:", contents)
// But it's an Synchronous code because if the loaded file is so big, then it will take lots time. And the synchronous code are also called blocking code because let if the server takes 10 seconds to load any data and 3 users requested for that data at a time, then that server will take 10 seconds in first person, 20 seconds for 2nd person and lastly 30 seconds for 3rd person. And if there are more than 1000 users, then it will become a very big issue this code will not work for 2nd person until the task by 1st person had not comleted.
// And let if promises are not available, then programmers uses Asynchronous code and callbacks(callbacks are just functions calling another function)
// And Asychronous function + callback function is just, instead of returning data, we just writes a callback function that will take that data, and now we can do anything we the function.
// Example: Synchronous function
const fs = require('fs')        // "require" is an Module in js
console.log('Starting Program')
const content = fs.readFileSync('./hello.txt','utf-8')
console.log("Reading file succeded and this is the result:", content)
// Example: Asynchornous using callback function
function content(cbfunction){
    const content = fs.readFileSync('./hello.txt','utf-8')
    cbfunction(content)
}
content((contents)=> console.log("Reading file succeded and this is the result:", contents))
// And now we and user don't need to wait only for this function, it will just work in the background and when the work is done, then the given callback function will be executed. It is same as using ".then"  method in promises nowadays, but in past, it was not present.
// We can also know about errors from this, without even using promises
fs.readFile('./hello.txt','utf-8',function(error, content){
    if(error){
        console.log("There is this error in reading file",error)
    }
    else{
        console.log("File readed Successfuly",content)
    }
})