import express, { Router } from "express"

const app = express()

// router Imports
import healthCheck from "./controller/healthcheck.controller.js"

app.use("/api/v1/healthCheck",healthCheck)

export default app