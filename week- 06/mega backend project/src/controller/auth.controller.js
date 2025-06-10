import { response } from "express";
import asyncHandler from "../utils/async-handler.js"

const registerUser = asyncHandler(async(req,res)=>{
    const {email,username,password,role} = req.body;
    return res.status(400).json({message:"Task Done"})
})

export default registerUser;