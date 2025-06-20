import mongoose, { Schema }  from "mongoose";
import { AvailableUserRoles, userRolesEnum } from "../utils/constants.js"

const projectMemberSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true 
    },
    role:{
        type:String,
        enum:AvailableUserRoles,
        default:userRolesEnum
    }
},{timestamps:true})

export const ProjectMember = mongoose.model("ProjectMember",projectMemberSchema)  