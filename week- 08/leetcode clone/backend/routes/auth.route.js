import express, { Router } from "express"

const authRoutes = express.Router();

// Importing Controllers
import {register,login,logout,check} from "../controllers/auth.controller"

authRoutes.post("/register", register);

authRoutes.post("/login",login)

authRoutes.post("/logout",logout)

authRoutes.get("/check",check)


export default authRoutes;