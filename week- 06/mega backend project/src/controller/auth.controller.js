import { response } from "express";
import asyncHandler from "../utils/async-handler.js"

const registerUser = asyncHandler(async(req,res)=>{
    const {email,username,password,role} = req.body;
    // Validation
    if(!email || !password || !username || ! role){
        return res.st
    }
})