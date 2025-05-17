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