import User from "../model/User.model.js"

const resetPassword = async(request,response)=>{
    try{        
        // Collect resetPasswordToken from user
        const {resetPasswordToken} = request.params;
        if(!resetPasswordToken || resetPasswordToken == ""){
            return response.status(400).json({
                success:false,
                message:"Invalid Request"
            })
        }
        // get Password from request
        const newPassword = request.body.password
        if(!newPassword || newPassword == ""){
            return response.status(400).json({
                success:false,
                message:"Please Enter the New password First"
            })
        }
        // find user with newPassword token
        const user = await User.findOne({
            resetPassword,
            resetPasswordExpires : {$gt: Date.now()}        // will give whose epiry time is greater than present time. and "$gt" = greater than
        })
        // set password in user
        user.password = newPassword
        // reset resetPasswordToken, resetExpiry in 
        user.resetPasswordToken = ""
        user.resetPasswordExpires = undefined;
        // Save user
        await user.save()
        return response.status(201).json({
            success:true,
            message:"Password Reseted Successfuly"
        })
    }catch(error){
        return response.status(400).json({
            success:false,
            message:`Error Found While reseting Passowrd`
        })
    }
}
export default resetPassword;