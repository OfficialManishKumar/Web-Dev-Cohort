// For checking
import {prisma} from "../libs/db.js"
import jwt from "jsonwebtoken"

export const authMiddleware = async(req,res,next)=>{
    try {
        const token =req.cookies.jwt
        if(!token){
            return res.status(401).json({message:"Unauthorized - No token provided"})
        }
        let decoded;
        try {
            decoded = jwt.verify(token,process.env.JWT_SECRET)
        } catch (error) {
            return res.status(401).json({
                messgae:"Unauthorized - Invalid Token"
            })
        }
        const user = await prisma.user.findUnique({
            where:{id:decoded.id},
            select:{
                id:true,
                image:true,
                name:true,
                email:true,
                role:true
            }
        })

        if (!user){
            return res.status(404).json({
                message:"User not found"
            })
        }

        req.user = user;
        next()
    } catch (error) {
        console.log("Error authenticating user",error)
        return res.send(500).json({message:"Error authenticating User"})
    }
}