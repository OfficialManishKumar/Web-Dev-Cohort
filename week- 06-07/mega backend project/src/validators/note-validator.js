import mongoose, { mongo } from "mongoose"
import { ApiError } from "../utils/api-error.js"


export const getNoteByIdValidator = (req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please provide all the Arguments")
    }
    if(req.body.noteId === undefined){
        throw new ApiError(400,"Please Provide the Note id")
    }
    if(req.body.noteId == "" || req.body.noteId.length != 24){
        throw new ApiError(400,"Invalid Note id Value")
    }
    if(!mongoose.Types.ObjectId.isValid(req.body.noteId)){
        throw new ApiError(400,"Invalid Note id Format")
    }
    next()
}

export const createNoteValidator = (req,res,next)=>{
    if(req.params.projectId === undefined || req.params.projectId.length != 24){
        throw new ApiError(400,"Invalid Request")
    }
    if(req.body === undefined){
        throw new ApiError(400,"Please Provide the Note content also")
    }
    if(!mongoose.Types.ObjectId.isValid(req.user.id)){
        throw new ApiError(400,"Invalid User Id Format")
    }
    if(!mongoose.Types.ObjectId.isValid(req.params.projectId)){
        throw new ApiError(400,"Invalid Project Id Format")
    }
    if(!req.params.projectId || ! req.user.id){
        throw new ApiError(400,"Required Arguments are not Provided")
    }
    if(!req.body.noteContent){
        throw new ApiError(400,"Please provide the Content for the Note.")
    }
    if(req.body.noteContent.length <= 15){
        throw new ApiError(400,"Content for the Note is too short")
    }
    next()
}

export const updateNoteValidator = (req,res,next)=>{
    if(req.body === undefined || req.body.noteContent == ""){
        throw new ApiError(400,"Please Enter the updated Note content.")
    }
    if(!mongoose.Types.ObjectId.isValid(req.params.noteId)){
        throw new ApiError(400,"Invalid Note ID format")
    }
    if(!mongoose.Types.ObjectId.isValid(req.user.id) || req.user?.id == ""){
        throw new ApiError(400,"Invalid User ID")
    }
    if(req.body.noteContent.length <= 15){
        throw new ApiError(400,"Content for the Note is too short")
    }
    next()
}

export const deleteNoteValidator = (req,res,next)=>{
    if(mongoose.Types.ObjectId(req.params.noteId)){
        throw new ApiError(400,"Invalid Noteid Format")
    }
    next()
}