import express from "express"
import resetPassword from "../controller/resetPassword.controller.js"

const router = express.Router()
router.post(`/resetPassword/:resetPasswordToken`,resetPassword)
export default router;