import express from "express"
import userVerification from "../controller/userVerification.controller.js"

const router = express.Router()
router.get(`/verify/:token`,userVerification)
export default router;