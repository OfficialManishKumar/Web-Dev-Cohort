import express, { Router } from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())

// router Imports
import healthCheck from "./routes/healthcheck.route.js"
import {registerRouter,emailVerifierRouter,logInRouter,logOutRouter,resendVerificationRouter,forgetPasswordRouter} from "./routes/auth.route.js"

app.use("/api/v1/healthCheck",healthCheck)
app.use("/user",registerRouter)
app.use("/user",emailVerifierRouter)
app.use("/user",resendVerificationRouter)
app.use("/user",logInRouter)
app.use("/user",logOutRouter)
app.use("/user",forgetPasswordRouter)

export default app