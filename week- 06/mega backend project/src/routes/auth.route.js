import { Router } from "express"
import {registerUser,verifyUserEmail,logInUser,logOutUser,resendVerificationEmail,forgetPassword} from "../controller/auth.controller.js"
import {validate} from "../middleware/validator.middleware.js"
import {userRegistrationValidator,verifyUserValidator,userLoginValidator,userLogOutValidator,forgetPasswordValidator} from "../validators/validator.js"

const registerRouter = Router()
const emailVerifierRouter = Router()
const resendVerificationRouter = Router()
const logInRouter = Router()
const logOutRouter = Router()
const forgetPasswordRouter = Router()

registerRouter.route("/register").post(userRegistrationValidator(),validate,registerUser)       // we executed the "userRegistrationValidator", because we don't directly said to go to next file in that file.4
emailVerifierRouter.route("/verifyEmail/:emailVerificationToken").get(verifyUserValidator(),validate,verifyUserEmail)
resendVerificationRouter.route("/reVerify/:emailVerificationToken").get(verifyUserValidator(),validate,resendVerificationEmail)
logInRouter.route("/logIn").post(userLoginValidator(),validate,logInUser)
logOutRouter.route("/logOut").get(userLogOutValidator(),validate,logOutUser)
forgetPasswordRouter.route("/forgetPassword").post(forgetPasswordValidator(),validate,forgetPassword)

export {registerRouter,emailVerifierRouter,resendVerificationRouter,logInRouter,logOutRouter,forgetPasswordRouter}