import { Router } from "express"
import {registerUser,verifyUserEmail,logInUser,logOutUser,resendVerificationEmail,forgetPassword,resetPassword,forgetPasswordVerifier,resetPasswordVerifier,getCurrentUser} from "../controller/auth.controller.js"
import {validate} from "../middleware/validator.middleware.js"
import {userRegistrationValidator,verifyUserValidator,userLoginValidator,userLogOutValidator,forgetPasswordValidator,resetPasswordValidator,forgetPasswordVerifierValidator,resetPasswordVerifierValidator,getCurrentUserValidator} from "../validators/validator.js"

const registerRouter = Router()
const emailVerifierRouter = Router()
const resendVerificationRouter = Router()
const logInRouter = Router()
const logOutRouter = Router()
const forgetPasswordRouter = Router()
const resetPasswordRouter = Router()
const forgetPasswordVerifierRouter = Router()
const resetPasswordVerifierRouter = Router()
const getCurrentUserRouter = Router()

registerRouter.route("/register").post(userRegistrationValidator(),validate,registerUser)       // we executed the "userRegistrationValidator", because we don't directly said to go to next file in that file.4
emailVerifierRouter.route("/verifyEmail/:emailVerificationToken").get(verifyUserValidator(),validate,verifyUserEmail)
resendVerificationRouter.route("/reVerify/:emailVerificationToken").get(verifyUserValidator(),validate,resendVerificationEmail)
logInRouter.route("/logIn").post(userLoginValidator(),validate,logInUser)
logOutRouter.route("/logOut").get(userLogOutValidator(),validate,logOutUser)
forgetPasswordRouter.route("/forgetPassword").post(forgetPasswordValidator(),validate,forgetPassword)
resetPasswordRouter.route("/resetPassword").post(resetPasswordValidator(),validate,resetPassword)
forgetPasswordVerifierRouter.route("/forgetPassword/:forgotPasswordToken").get(forgetPasswordVerifierValidator(),validate,forgetPasswordVerifier)
resetPasswordVerifierRouter.route("/resetPassword/verify").get(resetPasswordVerifierValidator(),validate,resetPasswordVerifier)
getCurrentUserRouter.route("/getUser").get(getCurrentUserValidator(),validate,getCurrentUser)

export {registerRouter,emailVerifierRouter,resendVerificationRouter,logInRouter,logOutRouter,forgetPasswordRouter,resetPasswordRouter,forgetPasswordVerifierRouter,resetPasswordVerifierRouter,getCurrentUserRouter}