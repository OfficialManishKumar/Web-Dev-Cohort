import express from "express"
import UserLogout from "../controller/userLogout.controller.js"

const router = express.Router()
router.get(`/logout`,UserLogout)
export default router;