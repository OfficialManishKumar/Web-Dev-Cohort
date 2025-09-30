import express from "express"

const app = express()

// Improting Routes
import authRoutes from "./routes/auth.route"

// Using Routes
app.use("/api/v1/auth",authRoutes)