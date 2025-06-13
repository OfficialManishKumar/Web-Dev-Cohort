import { request,response } from "express";
import { ApiError } from "../utils/api-error.js";

function unwantedChars(string){
    return /[0-9]/.test(string) ||  /[!@#$%^&*(),.?":{}|<>_\-=+[\]\\/'`;~]/.test(string)
}

const createProjectValidator = (req,res,next)=>{
    if(req.body === undefined || req.body.name === undefined || req.body.description === undefined || req.body.createdBy === undefined){
        throw new ApiError(400,"Please Provide all the Inputs")
    }
    // Name
    if(req.body.name.length <= 6){
        throw new ApiError(400,"Name is too short")
    }
    if(unwantedChars(req.body.name)){
        throw new ApiError(400,"Name is not valid")
    }

    // Description
    if(req.body.description.length <= 10){
        throw new ApiError(400,"Description is too short")
    }
    
    // Created By
    if(req.body.createdBy.length <= 0){
        throw new ApiError(4000,"Project Creator Not Found")
    }
    next()
}

export {createProjectValidator}