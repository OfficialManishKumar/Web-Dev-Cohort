import User from "../model/User.model.js"
import crypto from "crypto"
import sendEmail from "../utils/email.js"

const forgotPassword = async(request,response)=>{
    try{
        // Steps:
        // Get Email
        const email = request.body.email
        // Find user from Database
        const user = await User.findOne({email})
        // Create resetPasswordToken and Set Reset Expiry
        user.resetPasswordToken = crypto.randomBytes(32).toString("hex")
        user.resetPasswordExpires = Date.now() + 10*60*1000     // = 10 Minutes from now
        // Save User
        await user.save()
        // Send Email with reset Token
        await sendEmail(user,`${process.env.BASE_URL}/user/forgotPassword/${user.resetPasswordToken}`)
        return response.status(201).json({
            message:"Email Send to Forgot your password"
        })
    }catch(error){
        return response.status(400).json({
            message:`Error Found in forgotting Password: ${error}`
        })
    }
}
export default forgotPassword;
