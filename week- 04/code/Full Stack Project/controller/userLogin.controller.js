import User from "../model/User.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const loginUser = async(reqest,response)=>{
    const {email,password} = reqest.body;
    // Validation are the required fields are passed or not
    if(!email || !password){
        return response.status(400).json({
            message:"Invalid user or password"
        })
    }

    // Check if the user is in database or not
    try {
        const user = await User.findOne({email})
        if (!user){
            return response.status(400).json({
                message:"Invalid Email or Password"
            })
        }
        const ismatched = await bcrypt.compare(password,user.password)
        if(!ismatched){
            return response.status(400).json({
                message:"Invalid Email or Password"
            })
        }

        if(!user.isVerified){
            return response.status(400).json({
                message:"Please Verify your Email First"
            })
        }

        // Getting JWT Token
        const jwtToken = jwt.sign({id:user._id,role:user.role},process.env.jsonwebtoken_secret,{expiresIn : process.env.jsonwebtoken_expiresin})

        // Sending this as cookie to user, so that if he requests for anything, then we can see that either he have that same jwttoken or not.
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
        }
        response.cookie("token",jwtToken,cookieOptions)

        // Token Send and now everything is done
        return response.status(200).json({
            success : true,
            message : "Login Successful",
            jwtToken,
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })


    } catch (error) {
        return response.status(400).json({
            message:`Error Found in Logging in user: ${error}`,
            success:false
        })
    }
}

export default loginUser;