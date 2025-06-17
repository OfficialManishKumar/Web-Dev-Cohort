import {ApiError} from "../utils/api-error.js"
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"


const authUserLogin = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        throw new ApiError(400,"User is not Logged In")
    }
    const decodedToken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
    if(!decodedToken){
        throw new ApiError(400,"Invalid or Expired Token")
    }
    const user = await User.findById(decodedToken.id)
    if(!user){
        throw new ApiError(400,"User not Found")
    }
    req.user = {
        id:user._id,
        avatar : user.avatar,
        userName:user.userName,
        email:user.email,
        role:user.role
    }
    next()
}

export default authUserLogin