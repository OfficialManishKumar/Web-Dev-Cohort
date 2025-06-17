import fs from 'fs'
import crypto from "crypto"
import dotenv from "dotenv"
dotenv.config()

// We can change the number of threads we want in our thread pool using the "UV_THREADPOOL_SIZE" property of our "process.env" file.

// Let we wanna to execute all of those 5 CPU intensive tasks at a time, so for that, we need 5 threads in our Thread Pool and to get it:
// UV_THREADPOOL_SIZE = 5;      // We have use this "$env:UV_THREADPOOL_SIZE=5; node threads-04.js" in windows powershell or cmd to set it for globally to use or check it.

// And now let's try to run 5 cpu intensive task at a time


fs.readFile('./threads-01.js',(error,data)=>{ 
    const startTime = Date.now()

    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{
        console.log(`${startTime-Date.now()} millisecons taken to perform this cpu intensive task`)
    })
    
    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{
        console.log(`${startTime-Date.now()} millisecons taken to perform this cpu intensive task`)
    })

    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{
        console.log(`${startTime-Date.now()} millisecons taken to perform this cpu intensive task`)
    })
    
    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{
        console.log(`${startTime-Date.now()} millisecons taken to perform this cpu intensive task`)
    })
    
    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{
        console.log(`${startTime-Date.now()} millisecons taken to perform this cpu intensive task`)
    })

})

console.log("HELLOOOOOO......")

// -2955 millisecons taken to perform this cpu intensive task
// -2997 millisecons taken to perform this cpu intensive task
// -3115 millisecons taken to perform this cpu intensive task
// -3189 millisecons taken to perform this cpu intensive task
// -5199 millisecons taken to perform this cpu intensive task