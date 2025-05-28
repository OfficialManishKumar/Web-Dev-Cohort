// For Checking or adding User
import User from "../model/User.model.js"
// For Generating verification Token
import crypto from "crypto"
import sendEmail from "../utils/email.js"

const registerUser = async(request,response)=>{
    try {
        // Steps to Register User
        // Get Data
        const {name,email,password} = request.body  // Using destructuring to get all three variables at a time
        // Validate Data
        if (!name || !email || !password){
            return response.status(400).json({
                message:"All fields are Required."
            })
        }
        // There are libraries also like "zord", "yup", "formic" and "express validator" for these checkings

        // Check if user alreay exists:
        const existingUser = await User.findOne({email})
        if (existingUser){
            return response.status(400).json({
                message:"User Already Exists"
            })
        }
        // If user don't exist, create the user in database
        const user = await User.create({
            name,email,password
        })
        if(!user){
            return response.status(400).json({
                message:"User not Registered"
        })}

        // Creating a Verfication Token
        const token = crypto.randomBytes(32).toString("hex")    // Generates a random token of given size.
        user.verificationToken = token; // adding token in User verification token
        // Save token in Database
        await user.save()

        // Send token as Email to the User. Will use Nodemailer to send emails and mailtrap for the email we will use.
        await sendEmail(user,token)

        // Send Success status to user
        return response.status(201).json({
            success: true,
            message: "Email sent to the User",
            user
        })
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: `Registration Error ${error}`,
        })
    }
}

export default registerUser;