import bcrypt from "bcryptjs";
import {prisma} from "../libs/db.js"
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

export const register = async (req , res)=>{
    // Basic validation of body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Please enter all the required fields." });
    }

    // Destructure once and validate each field explicitly
    const { name, email, password, image } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Please enter your name." });
    }
    if (!email) {
        return res.status(400).json({ message: "Please enter your email." });
    }
    if (!password) {
        return res.status(400).json({ message: "Please enter your password." });
    }
    if (!image) {
        return res.status(400).json({ message: "Please enter your image." });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where:{ email}
        })

        if(existingUser){
            return res.status(400).json({
                error:"User already exists"
            })
        }
        

        const hashedPassword = await bcrypt.hash(password , 10);

        const newUser = await prisma.user.create({
            data:{
                email,
                password:hashedPassword,
                name,
                role:UserRole.USER,
                image
            }
        })

        const token = jwt.sign({id:newUser.id} , process.env.JWT_SECRET , {
            expiresIn:"7d"
        })

        res.cookie("jwt" , token , {
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development",
            maxAge:1000 * 60 * 60 * 24 * 7 // 7 days
        })

        return res.status(201).json({
            success:true,
            message:"User created successfully",
            user:{
                id:newUser.id,
                email:newUser.email,
                name:newUser.name,
                role:newUser.role,
                image:newUser.image
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:"Error creating user"
        })
    }
}

export const login = async(req,res)=>{
    // Basic validation of body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Please enter all the required fields." });
    }

    // Destructure once and validate each field explicitly
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Please enter your email." });
    }
    if (!password) {
        return res.status(400).json({ message: "Please enter your password." });
    }

    try {
        const user = await prisma.user.findUnique({where:{email}})
        if(!user){
            return res.status(401).json({error:"User not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({error:"Invalid credentials"})
        }

        
        const token = jwt.sign({id:user.id} , process.env.JWT_SECRET , {
            expiresIn:"7d"
        })

        res.cookie("jwt" , token , {
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development",
            maxAge:1000 * 60 * 60 * 24 * 7 // 7 days
        })    

        return res.status(201).json({
            success:true,
            message:"User Logged In successfully",
            user:{
                id:user.id,
                email:user.email,
                name:user.name,
                role:user.role,
                image:user.image
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:"Error logging in user"
        })
    }
}

export const logout = async(req,res)=>{
    try {
        res.clearCookie("jwt",{
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV !== "development"
        })
        return res.status(200).json({success:true,message:"User logged out successfuly"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:"Error logging out user"
        })
    }
}

export const check = async(req,res)=>{
    try {
        return res.status(200).json({
            success:true,
            message:"User Authenticated Successfuly",
            user:req.user  // we got user from middleware
        })
    } catch (error) {
        console.log("Error checking user: ",error)
        return res.status(500).json({error:"Error checking user"})
    }
}