import express from "express"
import forgotPassword from "../controller/forgotPassword.controller.js"

const router = express.Router()
router.post(`/forgotPassword`,forgotPassword)
export default router;