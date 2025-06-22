import express from "express"
import type { Application } from "express"
import { register as registerHealthRoute } from "./routes/health/route"

export function createApp():Application {
    const app = express()
    app.use("/health", registerHealthRoute())
    return app
}