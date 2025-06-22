import type{Request,Response,NextFunction} from "express"
class HealthController {
    public handleHealthCheck(req:Request,res:Response,next:NextFunction){
        return res.json({
            status:'healthy'
        })
    }
}

export default HealthController;