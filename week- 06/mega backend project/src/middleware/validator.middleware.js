import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req,res,next)=>{
    const errors = validationResult(req)
    const extractedError = []
    if(errors.isEmpty()){
        return next()
    }
    errors.array().map((error)=>extractedError.push({
        [error.path]:error.msg
    }))
    return res.status(400).json(extractedError)
}