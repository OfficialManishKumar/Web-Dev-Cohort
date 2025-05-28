// Let's load the database in this file
import dotenv from "dotenv"
dotenv.config()     // Dotenv should be used first because might require env to work.
import cors from "cors"
import express from "express"
import database from "./utils/database.js"
import router from "./routes/user.routes.js"
import userVerification from "./routes/userVerification.route.js"


// Connecting Database
database()

// General way to use "express"
const app = express()

// Using Cors to allow things from Frontend
app.use(
  cors({
      origin:process.env.BASE_URL,
      credentials:true,
      methods:['GET','POST','DELETE'],
      allowedHeaders:['Content-Type','Authorization']
  })
)

// Allowing "json" formats input
app.use(express.json())

// Adding support of Modern URL encoding
app.use(express.urlencoded({extended:true}))

// Best way to write port number
const port = process.env.PORT || 4000;      // So that If we don't got port from server or env file then this "4000" port will be used.

// Using User Route
app.use("/api/v1/user",router)     // It's essentially telling the application that all the routes defined in the `userRouter` object` should be used after the `/api/v1/user` path(inside "/api/v1/user/register" because we also written to use the controller in "/register" at the router). This helps organize your routes into different modules.
app.use("/api/v1/user/register",userVerification)

app.listen(port, () => {  // It will listen at the ip address for any type of request
  console.log("Code is Listening at Port ",port)
});

app.get("/", (request, response) => {
  response.send("Hello Brooooo")
});