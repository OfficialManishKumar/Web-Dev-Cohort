import mongoose  from "mongoose";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken"
import crypto from "crypto"
import {userRolesEnum,AvailableUserRoles} from "../utils/constants.js"

const userSchema = new mongoose.Schema({
    avatar:{
        type:{
            url:String,
            localpath:String
        },
        default:{
            url: "https://yourImage",
            localpath:""
        }
    },
    userName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true      // It helps during Searching
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:[true, "Password is required"],    // text will be returned if not provided
        trim:true,
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    },
    emailVerificationToken:{
        type:String,
    },
    emailVerificationExpiry:{
        type:Date,
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordExpiry:{
        type:Date,
    },
    resetPasswordToken:{
        type:String,
        unique:true
    },
    refreshToken:{
        type:String,
    },
    role: {
        type: String,
        enum: AvailableUserRoles,
        default: userRolesEnum.USER
    }
},{timestamps:true})

// hashing Password
userSchema.pre("save",async function(next) {
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        next()
    }
})

// Creating Methods that can help us
userSchema.methods.isPasswordCorrect = async (password) => {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
        id:this._id,
        email:this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
    )
}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
        id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
    )
}

userSchema.methods.generateForgetPasswordToken = async function(){
    return jwt.sign(
        {
        id:this._id,
        },
        process.env.FORGET_PASSWORD_TOKEN_SECRET,
        {expiresIn:process.env.FORGET_PASSWORD_TOKEN_EXPIRY}
    )
}
userSchema.methods.generateResetPasswordCookie = async function(){
    return jwt.sign(
        {
        id:this._id,
        },
        process.env.RESET_PASSWORD_TOKEN_SECRET,
        {expiresIn:process.env.RESET_PASSWORD_TOKEN_EXPIRY}
    )
}

userSchema.methods.generateTemporaryToken = async function(){
    const unHashedToken = await crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(unHashedToken).digest("hex")
    const tokenExpiry = Date.now()+(20*60*1000)     // = 20 minutes

    return {hashedToken,unHashedToken,tokenExpiry}
}

export const User = mongoose.model("User",userSchema)