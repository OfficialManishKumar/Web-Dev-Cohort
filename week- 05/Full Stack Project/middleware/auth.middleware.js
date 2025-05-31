import jwt from "jsonwebtoken" 

const isLoggedIn = async(request,response,next)=>{
    // Steps:
    // Check Token
    try {
        const token = await request.cookies.token
        // Verifying Token Presence
        if(!token){
            return response.status(401).json({
                success:false,
                message:`Authentication Failed`
            })
        }
        const decodedToken = jwt.verify(request.cookies.token,process.env.jsonwebtoken_secret)

        // Adding a key in user
        request.user = decodedToken;

        // Finally going to the next step
        return next()
    } catch (error) {
        return response.status(500).json({
            message: `Error Found in Checking User: ${error}`
        })
    }
}

export default isLoggedIn;