import bcrypt from "bcryptjs"
import {Request,Response,NextFunction} from "express"
import {db} from "../libs/db";
import { UserRole } from "../generated/prisma";

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
    } catch (error) {
       return res.status(400).json({error:"Failed to create user"}) 
    }
}

export const login = async(req:Request,res:Response)=>{}

export const logout = async(req:Request,res:Response)=>{}

export const check = async(req:Request,res:Response)=>{}