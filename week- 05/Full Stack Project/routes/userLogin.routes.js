import express from "express"
import userLogin from "../controller/userLogin.controller.js"

const router = express.Router()
router.post(`/login`,userLogin)
export default router;