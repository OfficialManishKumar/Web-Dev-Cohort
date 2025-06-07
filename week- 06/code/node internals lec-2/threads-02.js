const fs = require('fs')

setTimeout(()=>{console.log("1st Set time out Function had run")},0)
setImmediate(()=>{console.log("1st Set Immediate Function had run")})

fs.readFile('./threads-01.js',(error,data)=>{
    // We are writing the same code inside this Input Output(IO)
    setTimeout(()=>{console.log("2nd Set time out Function had run")},0)
    setImmediate(()=>{console.log("2nd Set Immediate Function had run")})   
})

console.log("HELLOOOOOO......")

// Now we can see that the 2nd Set Immediate is working before the 2nd setTimeOut, this is because:
// the line 1 and 12 is Top level code, so it ran first then  till that, timer of line 3 expired and it ran, and as per the sequence set immediate runs in last, so the line 4 ran in last.
// But when finally the IO polling of line 6 became true, then setImmediate ran first because as per our sequence, the setImmediate is after the IO polling not setTimeOut, and even there will be thousands of setTimeOut, the SetImmediate will run first, to follow the sequence.