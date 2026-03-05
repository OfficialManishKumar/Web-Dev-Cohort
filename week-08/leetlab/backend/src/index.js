// load .env immediately before any other imports that might use it
import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"

const app = express()
app.use(express.json())
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Hello guys welcome to leetlab")
})

// Auth Routes
app.use("/api/v1/auth",authRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is runing on port 8080")
})