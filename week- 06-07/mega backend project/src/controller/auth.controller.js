import crypto from "crypto"
import asyncHandler from "../utils/async-handler.js"
import {User} from "../models/user.model.js"
import {emailVerificationEmail,forgetPasswordEmail} from "../utils/mail.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = asyncHandler(async(req,res)=>{
    try{        
        const {email,userName,password} = req.body;
        if(await User.findOne({email})){
            return res.status(400).json({message:"User already Exists"})
        }
        const emailVerificationToken = crypto.randomBytes(32).toString("hex")
        const emailVerificationExpiry = Date.now() + 20 * 60 * 1000
        const user = await User.create({
            email:email,
            userName:userName,
            password:password,
            fullName:userName,
            role:"user",
            emailVerificationToken:emailVerificationToken,
            emailVerificationExpiry:emailVerificationExpiry
        })
        emailVerificationEmail(`${email}`,`127.0.0.1:4000/api/v1/register/${emailVerificationToken}`)

        return res.status(200).json({message:"Email Verification Token sent to the User"})
    }
    catch(error){
        return res.status(400).json({
            message:`Failed to Register User because of ${error}`,error
        })
    }
})

export const verifyUserEmail = asyncHandler(async(req,res)=>{
    try{        
        const {emailVerificationToken} = req.params;
        const user = await User.findOne({emailVerificationToken:emailVerificationToken});
        if(user.emailVerificationExpiry<Date.now()){
            return res.status(400).json({message:"Email Verification Time has Expired"})
        }

        user.isEmailVerified = true;
        user.emailVerificationToken = "";
        user.emailVerificationExpiry = undefined;

        await user.save()
        return res.status(200).json({
            message:"User Email Verified Successfuly"
        })
    }
    catch(error){
        return res.status(400).json({
            message:`Failed to verify User Email ${error}`
        })
    }
})

export const resendVerificationEmail = asyncHandler(async(req,res)=>{
    try{   
        const {emailVerificationToken} = req.params;
        const user = await User.findOne({emailVerificationToken});
        user.emailVerificationExpiry = Date.now()+20*60*1000
        user.save()
        emailVerificationEmail(`${user.email}`,`127.0.0.1:4000/api/v1/register/${emailVerificationToken}`)
        return res.status(200).json({message:"Email Verification Token sent to the User"})
    } catch(error){
        return res.status(400).json({
            message:`Failed to Resend Verification Email ${error}`
        })
    }
})

export const logInUser = asyncHandler(async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if (!await bcrypt.compare(password,user.password)){
            return res.status(400).json({message:"Invalid email or password"})
        }
        if(!user.isEmailVerified){
            return res.status(400).json({message:"Please verify your Email first."})
        }
        const refreshToken = await user.generateRefreshToken()
        await res.cookie('token',refreshToken,{
            httpOnly:true,
            secure:true,
            maxAge: 24*60*60*1000
        })
        return res.status(200).json({message:"User logged in Successfuly"})
    } catch (error) {
        return res.status(400).json({message:`Error in Logging In User ${error}`})
    }
})


export const logOutUser = asyncHandler(async(req,res)=>{
    try {
        const token = req.signedCookies.token
        res.clearCookie('token')
        
        return res.status(400).json({message:"User Logged out successfuly."})
    } catch (error) {
        return res.status(400).json({
            message:`Error Foung in logging out User`
        })
    }
})

export const forgetPassword = asyncHandler(async(req,res)=>{
    try {
        const {email} = req.body
        if(! await User.findOne({email:email})){
            return res.status(400).json({message:"User not Found"})
        }
        const user = await User.findOne({email:email})
        const resetPasswordToken = await user.generateForgetPasswordToken()
        user.forgotPasswordToken = resetPasswordToken;
        user.forgotPasswordExpiry = Date.now()+20*60*1000;
        user.save()
        forgetPasswordEmail(email,`127.0.0.1:4000/user/forgetPassword/${resetPasswordToken}`)
        return res.status(200).json({message:"Forget Password Email sent to the User"})
    } catch (error) {
        res.status(400).json({message: `Failed to Forgot User Password ${error}`})
    }
})

export const resetPassword = asyncHandler(async(req,res)=>{
    try{        
        const{email,password} = req.body;
        if(! await User.findOne({email:email})){
            return res.status(400).json({
                message:"Invalid User"
            })
        }
        const user = await User.findOne({email:email})
        if(!user.isEmailVerified){
            return res.status(400).json({message:"Please verify your email first"})
        }
        if(! await bcrypt.compare(password,user.password)){
            return res.status(400).json({message:"Invalid Email or Password"})
        }
        const resetPasswordToken = await user.generateResetPasswordCookie()
        user.resetPasswordToken = resetPasswordToken;
        user.save()
        res.cookie("resetPasswordToken",resetPasswordToken,{
            maxAge : 20*60*1000,
            httpOnly:true,
            secure:true
        })
        return res.status(200).json({message: `User Password resetted successfuly`})
    } catch (error){
        return res.status(400).json({message: `Failed to reset user password ${error}`})
    }
})

export const forgetPasswordVerifier = asyncHandler(async(req,res)=>{
    try{        
        const {forgotPasswordToken} = req.params;
        const {newPassword} = req.body;
        if (! await User.findOne({forgotPasswordToken:forgotPasswordToken})){
            return res.status(400).json({message:"Invalid user"})
        }
        const user = await User.findOne({forgotPasswordToken:forgotPasswordToken})
        if(user.forgotPasswordExpiry<Date.now()){
            return res.status(400).json({message:"Forget Password Time Expired, retry to forget Password"})
        }
        if(await bcrypt.compare(newPassword,user.password)){
            return res.status(400).json({message:"Please enter a new Password"})
        }
        user.password = newPassword;
        await user.save()

        return res.status(400).json({message:"Password Changed Successfuly"})
    } catch(error){
        return res.status(400).json({message: `Failed to Change User forgotten Password ${error}`})
    }
})

export const resetPasswordVerifier = asyncHandler(async(req,res)=>{
    try {
        const token = req.cookies['resetPasswordToken']
        if(!token){
            res.status(400).json({message:"Invalid Requested"})
        }
        const {newPassword} = req.body;
        if(! await User.findOne({resetPasswordToken:token})){
            return res.status(400).json({message:"Invalid Requested"})
        }
        const user = await User.findOne({resetPasswordToken:token})
        if (await bcrypt.compare(newPassword,user.password)){
            return res.status(400).json({message:"Please Enter a New Password"})
        }
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        await user.save()
        await res.clearCookie('resetPasswordToken')
        return res.status(400).json({message:"Password Changed Successfuly."})
    } catch (error) {
        return res.status(400).json({message:`Failed to Change user resetted password ${error}`})
    }
})

export const getCurrentUser = asyncHandler(async (req,res)=>{
    try {
        const token = req.cookies.token
        const userId = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET).id
        const user = await User.findOne({_id:userId})
        return res.status(400).json({message:user})
    } catch (error) {
        return res.status(400).json({message:`Failed to get Current User ${error}`})
    }
})