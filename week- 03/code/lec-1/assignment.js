// Create an Asynchronous function that reads the content of file from "hello.txt" and then create a new file named as "backup.txt" and copy-paste the content of hello to bakup file, and lastly delete the hello file
const fs = require('fs')
fs.readFile('./hello.txt',function(error,content){
    if (error){
        console.log("Error found during reading hello.txt file: ",error)
    }
    else{
        console.log(`hello.txt read successfuly`);
        fs.writeFile('backup.txt',content,function(error,content){
            if (error){
                console.log(`erro is creating backup.txt file: `,error)
            }
            else{
                console.log(`backup.txt file created succesfully.`)
                fs.unlink('./hello.txt',function(error,content){
                    if (error){
                        console.log(`Error occured in deleting hello.txt file: ${error}`)
                    }
                    else{
                        console.log(`hello.txt file deleted succesfully.`)
                    }
                })
            }
        })
    }
})

// In this example, we can see that, there is a callback inside a callack inside a callback. and these types of nested callback functions are called callback hell.
// And these types of callback hells creates an problem in code maintenance and called "Legacy code"(older code)

// And it's solution is using modern function/way called "promises"
const fsPromises = require('fs/promises');
const { resolve } = require('path');
fsPromises
    .readFile('./op.txt','utf-8',function(error,content){let contents = content})
    .then((contents) => fsPromises.writeFile('backedUp.txt',contents))
    .then(()=>fsPromises.unlink('./op.txt'))
    .catch((error)=> `Error occured: ${error}`)

// Now to convert these Legacy codes, we can create a promise like this:

// Creating Read File promise
function readFilePromise(file,encoding){
    return new Promise (function(resolve,reject){      // "reject" = ".catch" and "resolve" = ".then"
        fs.readFile(file,encoding,function(error,content){
            if (error){
                reject(error)
            }
            else(resolve(content))
        })
    })
}

// Writing file promise
function writeFilePromise (file,content){
    return new Promise(function(resolve,reject){
        fs.writeFile(file,content,function(error){
            if(error){
                reject(error)
            }
            else{
                resolve()
            }
        })
    })
}

// Deleting file Promise
function unlinkPromise (file){
    return new Promise(function(resolve,reject){
        fs.unlink(file,function(error){
            if(error){
                reject(error)
            }
            else{
                resolve()
            }
        })
    })
}

// Checking whether they are working or not:
readFilePromise('./op.txt','utf-8',function(error,content){let contents = content})
    .then((contents) => writeFilePromise('backedUp.txt',contents))
    .then(()=>unlinkPromise('./op.txt'))
    .catch((error)=> console.log(`Error occured: ${error}`))
    .finally(()=> console.log("All Done"))

// And this, converting of Legacy callback code to support promises is called Promisification.
// And the above one is Asynchronous(not requesting to wait) code but internally(line 83-87) are running synchronously because to run line 86, he had to wait for completing line 85.
// Another way to do it is, we uses "await" keyword and we write these codes inside async functions, it's also runs sync internally, but looks good.
const fs = require('fs')
async function doTasks() {
    let reading = await readFilePromise('./op.txt','utf-8')
    await writeFilePromise('backedUp.txt',reading)
    await unlinkPromise('./op.txt')
}
doTasks().then(()=> console.log("All Done"))
// In other way, to consist error situations also, we can use "try" keyword
async function doTasks() {
    try{
        let reading = await readFilePromise('./op.txt','utf-8')
        await writeFilePromise('backedUp.txt',reading)
        await unlinkPromise('./op.txt')
    }
    catch(error){console.log(`Error occured: ${error}`)}
    finally{
        console.log("All Done")
    }
}