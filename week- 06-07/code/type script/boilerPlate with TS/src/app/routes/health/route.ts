import express, { RequestHandler, Router } from "express"
import HealthController from "./controller";

export function register():Router{
    const router = express.Router();
    const controller = new HealthController();
    router.get('/', (req,res,next)=>{controller.handleHealthCheck(req,res,next)})
    return router
}