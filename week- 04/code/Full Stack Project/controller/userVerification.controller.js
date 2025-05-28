import User from "../model/User.model.js"

const userVerification = async(request,response) => {
    try{        
        // Works we need to do here
        // get token from URL
        const {token} = request.params

        // Validate Token
        if(!token){
            return response.status(400).json({
                message:"Token Not Found"
            })
        }

        // Find User based on the token
        const user = await User.findOne({verificationToken : token})       // we also had to give the variable because the name of token "token" is different at this file and in the database

        if(!user){
        return response.status(400).json({
            message:"Invalid Verification Token"
        })}
        // If found, set "isVerified" = True
        user.isVerified = true;
        // Remove verification token from User
        user.verificationToken = undefined;
        // Save and return final user
        await user.save()

        // Return success response
        return response.status(200).json({
            success: true,
            message: "Email verified successfully"
        })
    }
    catch(error){
        return response.status(400).json({
            success: false,
            message:`Error Found in Verifying User: ${error}`
        })
    }
}

export default userVerification;