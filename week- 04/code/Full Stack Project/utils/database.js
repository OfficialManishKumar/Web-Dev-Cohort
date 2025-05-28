// In Utils, we store the the code of utilities like code to connect databse and load images etc.

// To connect with databse, we have to write this boiler plate code in this file:
import mongoose from "mongoose"     // Used to connect with databse and makes the process to use databse easy
import dotenv from "dotenv"     // Helps to secure ".env" file data and makes a file named "process.env" that also stores the variables present inside env file.

// Now let's create a function with promises that connects us with mongodb
const database = ()=>{
    mongoose
        .connect(process.env.MONGODB_URL)      // will get the Url from the process.env file.
        .then(console.log("Database connected successfuly"))
        .catch((error)=>console.log("Error found during Connecting with database: ",error))
}

// Now lastly we need to export the "database" variable, so that we can use them anywhere
export default database;