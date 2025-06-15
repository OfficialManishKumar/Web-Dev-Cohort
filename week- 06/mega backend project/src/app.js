import express, { Router } from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())

// router Imports
import healthCheck from "./routes/healthcheck.route.js"
import authRouter from "./routes/auth.route.js"
import projectRouter from "./routes/project.route.js"

app.use("/api/v1/healthCheck",healthCheck)
app.use("/api/v1/user",authRouter)
app.use("/project",projectRouter)

export default app