import asyncHandler from "../utils/async-handler.js";
import jwt from "jsonwebtoken"
import { userRolesEnum } from "../utils/constants.js";
import {ApiError} from "../utils/api-error.js"
import { ProjectMember } from "../models/projectmember.model.js";


export const authPermissions = (permittedPeoples,projectIdPresent=false) => asyncHandler(async(req,res,next)=>{
    permittedPeoples.forEach((permittedPeople)=>{
        if(!Object.values(userRolesEnum).includes(permittedPeople)){
            throw new ApiError(400,"Invalid Permitted Peoples List")
        }
    })
    if(projectIdPresent){
        const projectId = req.body?.projectId || req.params?.projectId || req.query?.projectId
        if(!projectId){throw new ApiError(400,"Project Id not found")}
        const membership =  await ProjectMember.findOne({user:req.user?.id,project:projectId})
        if(!permittedPeoples.includes(membership.role)){
            throw new ApiError(403,"User is not allowed to perform the following tasks")
        }
        else(next())
    }
    else{
        const userRole = req.user?.role;
        console.log(userRole)
        if (!userRole || !permittedPeoples.includes(userRole)) {
            throw new ApiError(403, "You do not have permission for this action");
        }
        next()
    }
})