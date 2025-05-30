import express from "express"
import userGet from "../controller/userGet.controller.js"

const router = express.Router()
router.get(`/getUser`,userGet)
export default router;