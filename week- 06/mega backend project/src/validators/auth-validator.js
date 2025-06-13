import { request } from "express"
import {body, cookie,param} from "express-validator"

const userRegistrationValidator = ()=>{
    return[
        body('email')
            .trim()
            .notEmpty().withMessage("Email is Required")
            .isEmail().withMessage("Email is Invaide"),

        body("userName")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({min:3}).withMessage("Username is too short")
            .isLength({max:30}).withMessage("Username is too long"),
        body("password")
            .notEmpty().withMessage("Please Enter the password first")
            .isLength({min:8}).withMessage("Password should be more than 8 chars")
            .isStrongPassword({minUppercase:2,minLowercase:2,minSymbols:1}).withMessage("Password should have 2 Capital, 2 Small, 1 Number and 1 Special characters")
    ]
}

const verifyUserValidator = ()=>{
    return[
        param("emailVerificationToken")
            .notEmpty().withMessage("Invalid Request")
    ]
}

const userLoginValidator = ()=>{
    return[
        body("email")
            .trim()
            .notEmpty().withMessage("Please Enter the Email first")
            .isEmail().withMessage("Email is not valid"),
        body("password")
            .trim()
            .notEmpty().withMessage("Please Enter the Password also.")
    ]
}

const userLogOutValidator = ()=>{
    return[
        cookie("token")
            .notEmpty().withMessage("Invalid User.")
    ]
}

const forgetPasswordValidator = ()=>{
    return[
        body("email")
            .notEmpty().withMessage("Please Enter the Email First")
            .isEmail().withMessage("Please Enter a valid Email")
    ]
}

const resetPasswordValidator = ()=>{
    return [
        body("email")
            .notEmpty().withMessage("Please Enter the Email first")
            .isEmail().withMessage("Please enter a Valid email."),
        body("password")
            .notEmpty().withMessage("Please Enter the Password first"),
    ]
}

const forgetPasswordVerifierValidator = ()=>{
    return [
        param("forgotPasswordToken")
            .notEmpty().withMessage("Invalid Request"),
        body("newPassword")
            .notEmpty().withMessage("Please Enter a New password first")
            .isStrongPassword({minUppercase:2,minLowercase:2,minSymbols:1}).withMessage("Password should have 2 Capital, 2 Small, 1 Number and 1 Special characters")
    ]
}

const resetPasswordVerifierValidator = ()=>{
    return[
        cookie('resetPasswordToken')
            .notEmpty().withMessage("Invalid Request"),
        body("newPassword")
            .notEmpty().withMessage("Please Enter a New password first")
            .isStrongPassword({minUppercase:2,minLowercase:2,minSymbols:1}).withMessage("Password should have 2 Capital, 2 Small, 1 Number and 1 Special characters"),
    ]
}

const getCurrentUserValidator = ()=>{
    return[
        cookie('token')
            .notEmpty().withMessage("User not Found")
    ]
}

export {userLoginValidator,userRegistrationValidator,verifyUserValidator,userLogOutValidator,forgetPasswordValidator,resetPasswordValidator,forgetPasswordVerifierValidator,resetPasswordVerifierValidator,getCurrentUserValidator};