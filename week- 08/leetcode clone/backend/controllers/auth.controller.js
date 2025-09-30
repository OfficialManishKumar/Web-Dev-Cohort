import bcrypt from "bcryptjs"
import {Request,Response,NextFunction} from "express"
import {db} from "../libs/db";
import { UserRole } from "../generated/prisma";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

export const register = async(req:Request,res:Response)=>{
    const {email,password,Username} = req.body;
    // Creating user
    try {
        const userExists = await db.user.findUnique({where:{email:email}})
        if(userExists){
            return res.status(400).json({error:"User Already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await db.user.create({
            data:{
                email:email,
                password:hashedPassword,
                name:Username,
                role:UserRole.USER
            }
        })
        if(process.env.JWT_SECRET){
            const token = jwt.sign({id:newUser.id}, process.env.JWT_SECRET)
            res.cookie("refreshToken",token,{
                maxAge:24*60*60*1000,
                sameSite:true,
                httpOnly:true,
                secure:true
            })
        }
        res.status(201).json({
            message:"User Created successfuly.",
            user:{
                id:newUser.id,
                name:newUser.name,
                email:newUser.email
            }
        })
    } catch (error) {
       return res.status(400).json({'error':`Failed to create user ${error}`}) 
    }
}

export const login = async(req:Request,res:Response)=>{}

export const logout = async(req:Request,res:Response)=>{}

export const check = async(req:Request,res:Response)=>{}