import express, { Router } from "express"

const app = express()
app.use(express.json())

// router Imports
import healthCheck from "./routes/healthcheck.route.js"
import authUser from "./routes/auth.route.js"

app.use("/api/v1/healthCheck",healthCheck)
app.use("/api/v1/auth",authUser)

export default app