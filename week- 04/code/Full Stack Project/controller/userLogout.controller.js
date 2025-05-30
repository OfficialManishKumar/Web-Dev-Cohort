const UserLogout = async(request,response)=>{
    try {
        response.clearCookie('token')

        return response.status(200).json({
            success:true,
            message:`User Logged out Successfuly`,
        })
    } catch (error) {
        return response.status(400).json({
            success:false,
            message:`User not Logged out Successfuly: ${error}`
        })
    }
}
export default UserLogout;