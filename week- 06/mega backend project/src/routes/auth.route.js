import { Router } from "express"
import {registerUser,verifyUserEmail,logInUser,logOutUser,resendVerificationEmail,forgetPassword,resetPassword,forgetPasswordVerifier,resetPasswordVerifier,getCurrentUser} from "../controller/auth.controller.js"
import {validate} from "../middleware/validator.middleware.js"
import {userRegistrationValidator,verifyUserValidator,userLoginValidator,userLogOutValidator,forgetPasswordValidator,resetPasswordValidator,forgetPasswordVerifierValidator,resetPasswordVerifierValidator,getCurrentUserValidator} from "../validators/auth-validator.js"

const router = Router()


router.route("/register").post(userRegistrationValidator(),validate,registerUser)       // we executed the "userRegistrationValidator", because we don't directly said to go to next file in that file.4
router.route("/verifyEmail/:emailVerificationToken").get(verifyUserValidator(),validate,verifyUserEmail)
router.route("/reVerify/:emailVerificationToken").get(verifyUserValidator(),validate,resendVerificationEmail)
router.route("/logIn").post(userLoginValidator(),validate,logInUser)
router.route("/logOut").get(userLogOutValidator(),validate,logOutUser)
router.route("/forgetPassword").post(forgetPasswordValidator(),validate,forgetPassword)
router.route("/resetPassword").post(resetPasswordValidator(),validate,resetPassword)
router.route("/forgetPassword/:forgotPasswordToken").get(forgetPasswordVerifierValidator(),validate,forgetPasswordVerifier)
router.route("/resetPassword/verify").get(resetPasswordVerifierValidator(),validate,resetPasswordVerifier)
router.route("/getUser").get(getCurrentUserValidator(),validate,getCurrentUser)

export default router;