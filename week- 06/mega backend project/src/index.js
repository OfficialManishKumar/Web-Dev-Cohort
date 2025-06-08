import app from "./app.js"
import dotenv from "dotenv"
dotenv.config({
    path:"../.env"
})
import express from "express"
import database from "./app.js"


const app = express()
const PORT = process.env.PORT || 4000

database()   // Connect DB
    .then(()=>{
        app.listen(PORT,()=>console.log("Server is listening on port: ",PORT))
    })
    .catch((error)=>{
        console.log("Will never run, because we had exited already while connecting😁",error);
        process.exit(1)
    })