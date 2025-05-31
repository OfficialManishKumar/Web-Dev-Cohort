import express from "express"
import {registerUser,verifyUser,loginUser} from "../controllers/auth.controller.js"

const router = express.Router()
router.route("/register").post(registerUser)
router.route("/verify/:verificationToken").get(verifyUser)
router.route("/login").post(loginUser)
export default router;