import dotenv from "dotenv"
dotenv.config({path:""})
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// Importing custom routes
import registerUser from "./routes/auth.route.js"

// Variables
const app = express()
const port = process.env.PORT || 5173
// Using all packages
app.use(cookieParser())
app.use(cors({
    origin:process.env.BASE_URL,
    method:["GET","Post","Delete"]
}))

// Adding listener at Port
app.listen(port,()=>{
    console.log("Backend is ready for fighting with Errors from Port",port)
})

// Adding basic Features
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Checking Code working
app.get("/",(request,response)=>{
    response.status(200).json({
        success:true,
        message:"Test Checked Successfuly"
    })
})

// Using custom routes
app.use("/api/v1/user",registerUser)