import User from "../model/User.model.js";

const getUser = async function(request,response) {
    try {
        const user = await User.findById(request.user.id).select('-password');        // Dont give password
        if (!user){
            return response.status(400).json({
                success:false,
                message:"No User Found"
            })
        }
        response.status(200).json({
            success:true,
            user
        })

    } catch (error) {
        return response.status(400).json({
            success:false,
            message:`Error Found While Getting User: ${error}`
        })
    }
}
export default getUser;