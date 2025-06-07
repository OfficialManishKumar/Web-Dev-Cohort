// If we perform a very cpu intensive task like this:

import fs from "fs"
import crypto from "crypto"


fs.readFile('./threads-01.js',(error,data)=>{ 
    // Perofrming lots of cpu intensive task while calculating the time taken to perform the task from here
    const startTime = Date.now()

    crypto.pbkdf2('password','salt1',100000, 1024, 'sha512',(error,data)=>{         // This is very-very CPU intensive Task
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

// We can see that Starting 4 crypto's are taking similar time, but the 5th one is taking approximately double time because by-default we have 4 threads in thread pool and if we have more than that cpu intensive task, then we need to wait for becoming any thread free and then running that task there. That's why the 5th task taken double time because he firstly need to wait for completion of any task and then he taken the time again to execute himself. But we can modify or change the number of threads we should have: