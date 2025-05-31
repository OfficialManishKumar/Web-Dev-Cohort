import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs"
import crypto from "crypto"
import sendEmail from "../utils/email.js"
import express from "express";
import jwt from "jsonwebtoken"


const prisma = new PrismaClient()

const registerUser = async(request,response)=>{
    try{
        // Get all the requred data
        const {name,email,password,phoneNumber} = request.body;
        if(!name || !email || !password || !phoneNumber){
            return response.status(400).json({
                success:false,
                message:"All fields are Required"
            })
        }
        

        // Check If user already Exist
        const existingUser = await prisma.user.findUnique({
            where:{email}
        })
        if(existingUser){
            return response.status(400).json({
                success:false,
                message:"User Already Exists"
            })
        }

        // Create the new User
        // Hash the password
        const hashedPassword = await bcrypt.hash(password,10)
        // Create the verify email token
        const verificationToken = crypto.randomBytes(32).toString("hex")
        // Saving the user in database
        const user = await prisma.user.create({data:{
            name,
            email,
            phoneNumber, 
            password:hashedPassword,
            verificationToken
        }})

        // Send Email
        await sendEmail(user,`${process.env.BASE_URL}/api/v1/user/verify/${verificationToken}`)  

        return response.status(200).json({
            success:true,
            message:"User authenticated Successfuly"
        })
    } catch(error){
        return response.status(400).json({
            success:false,
            message:`Error Found while authenticating ${error}`
        })
    }
}

const verifyUser = async(request,response)=>{
    try{        
        const {verificationToken} = request.params;
        if(!verificationToken){
            return response.status(404).json({
                success:false,
                message:"Page Not Found"
            })
        }
        const user = await prisma.user.findUnique({where:{verificationToken}});
        if(!user){
            return response.status(400).json({
                success:false,
                message:"Invalid Verification Token"
            })
        }

        await prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                verificationToken: null  // Use null instead of undefined in Prisma
            }
        });

        return response.status(400).json({
            success:true,
            message:"User Verified Successfuly"
        })
    }catch(error){
        return response.status(400).json({
            success:false,
            message:`Error found in Verifying User ${error}`,
        })
    }
}

const loginUser = async(request,response)=>{
    const {email,password} = request.body;
    if(!email || !password){
        return response.status(400).json({
            success:false,
            message:"Please provide all required Fields"
        })
    }
    try {
        const user = await prisma.user.findUnique({where:{email}})
        if(!user || user == ""){
            return response.status(400).json({
                success:false,
                message:"User not Found"
            })
        }
        const isPasswordMatching = await bcrypt.compare(password,user.password)
        if(!isPasswordMatching){
            return response.status(400).json({
                success:false,
                message:"Invalid User or Email"
            })
        }

        if(!user.isVerified){
            return response.status(400).json({
                success:false,
                message:"Please Verify your Email First"
            })
        }

        const jwtToken = jwt.sign({id:user.id},process.env.jsonwebtoken_secret,{expiresIn : process.env.jsonwebtoken_expiresin})

        // Sending this as cookie to user, so that if he requests for anything, then we can see that either he have that same jwttoken or not.
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
        }
        await response.cookie("token",jwtToken,cookieOptions)

        return response.status(200).json({
            success:true,
            message:"User Logged in Successfuly",
            user
        })
    } catch (error) {
        return response.status(400).json({
            success:false,
            message:`Login Failed due to `,error
        })
    }
}


export {registerUser,verifyUser,loginUser};