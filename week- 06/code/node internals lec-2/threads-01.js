// If we have simple code like this:
const fs = require('fs')

setTimeout(()=>{console.log("Set time out Function had run")},0)
setImmediate(()=>{console.log("Set Immediate Function had run")})

console.log("HELLOOOOOO......")

// Our output had came as per the sequence