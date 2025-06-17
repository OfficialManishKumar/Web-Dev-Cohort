import { request,response } from "express";
import mongoose from "mongoose";
import { AvailableUserRoles } from "../utils/constants.js";
import { ApiError } from "../utils/api-error.js";
import { param } from "express-validator";

function unwantedChars(string){
    return /[0-9]/.test(string) ||  /[!@#$%^&*(),.?":{}|<>_\-=+[\]\\/'`;~]/.test(string)
}

const getProjectsValidator = (req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please Enter all the Inputs")
    }
    if(req.body.userID.length != 24){
        throw new ApiError(400,"Please Enter a valid User Id")
    }
    next()
}

const getprojectByIdValidator = (req,res,next)=>{
    if(req.params === undefined){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    if(req.params.projectId.length !== 24){
        throw new ApiError(400,"Invalid Project Id")
    }
    next()
}

const createProjectValidator = (req,res,next)=>{
    if(req.body === undefined || req.body.name === undefined || req.body.description === undefined || req.body.createdBy === undefined){
        throw new ApiError(400,"Please Provide all the Inputs")
    }
    // Name
    if(req.body.name.length <= 4){
        throw new ApiError(400,"Name is too short")
    }
    if(unwantedChars(req.body.name)){
        throw new ApiError(400,"Name is not valid")
    }

    // Description
    if(req.body.description.length <= 6){
        throw new ApiError(400,"Description is too short")
    }
    
    // Created By
    if(req.body.createdBy.length <= 0){
        throw new ApiError(4000,"Project Creator Not Found")
    }
    next()
}

const updateProjectValidator = (req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    if(param === undefined ||param.projectId === ""){
        throw new ApiError(400,"Invalid Request")
    }
    if(req.body.newName === undefined || req.body.newName === "" || req.body.newDescription === undefined || req.body.newDescription === ""){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    next()
}

const deleteProjectValidator = (req,res,next)=>{
    if(req.params.projectId === undefined || req.params.projectId.length != 24){
        throw new ApiError(400,"Invalid Project Id")
    }
    next()
}

const getProjectMembersValidator = (req,res,next)=>{
    if(req.params === undefined){
        throw new ApiError(400,"Invalid Request")
    }
    next()
}

const addMemberToProjectValidator = async(req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    if(req.body.userId == "" || req.body.userId == undefined){
        throw new ApiError(400, "Please Enter the User Id properly.")
    }
    if(req.body.projectId == "" || req.body.projectId == undefined){
        throw new ApiError(400, "Please Enter the User Id properly.")
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
        return res.status(400).json({ message: "Invalid User ID format" });
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.projectId)) {
        return res.status(400).json({ message: "Invalid Project ID format" });
    }
    next()
}

const deleteMemberValidator = (req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    if(req.body.projectId == undefined || req.body.projectId.length != 24){
        throw new ApiError(400,"Please Enter a Valid Project Id")
    }
    if(req.body.userID == undefined || req.body.userID.length != 24){
        throw new ApiError(400,"Please Enter a Valid User Id")
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.projectId)) {
        throw new ApiError(400,"Invalid Project ID format")
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.userID)) {
        return res.status(400).json({ message: "Invalid User ID format" });
    }
    next()
}

const updateMemberRoleValidator = async(req,res,next)=>{
    if(req.body === undefined){
        throw new ApiError(400,"Please Enter all the Arguments")
    }
    if(req.body.userId == undefined || req.body.userId == ""){
        throw new ApiError(400,"User Id is required")
    }
    if(req.body.projectId == undefined || req.body.projectId == ""){
        throw new ApiError(400,"Project Id is required")
    }
    if(req.body.updatedRole == undefined || req.body.updatedRole == ""){
        throw new ApiError(400,"User role is required")
    }
    if(!AvailableUserRoles.includes(req.body.updatedRole)){
        throw new ApiError(400,"Invalid User Role value")
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.projectId)) {
        throw new ApiError(400,"Invalid Project ID format")
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
        return res.status(400).json({ message: "Invalid User ID format" });
    }
    next()
}

export {createProjectValidator,getProjectsValidator,getprojectByIdValidator,updateProjectValidator,deleteProjectValidator,getProjectMembersValidator,addMemberToProjectValidator,deleteMemberValidator,updateMemberRoleValidator}