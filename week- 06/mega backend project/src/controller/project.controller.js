import {Project} from "../models/projects.model.js"
import {ProjectMember} from "../models/projectmember.model.js"
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";
import mongoose from "mongoose";

const getProjects = asyncHandler(async (req, res) => {
  const {userID} = req.body;
  const projects = await Project.find(({createdBy:userID}))
  
  if(projects.length == 0){
    const user = await User.findById(userID)
    if(!user){
      return res.status(400).json({message: "User of this Id not Found"})
    }
    return res.status(400).json({message:"There ar no Projects of this user"})
  }
  return res.status(200).json(projects)
});

const getProjectById = async (req, res) => {
  const {projectId} = req.params;
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({ message: "Invalid Project ID format" });
  }
  const project = await Project.findById(projectId)
  if(project === null){
    throw new ApiError(400,"Invlaid Project Id")
  }
  return res.status(200).json(project)
};

const createProject = asyncHandler(async (req, res) => {
  try{  const {name,description,createdBy} = req.body;
    const project = await Project.create({
      name:name,
      description:description,
      createdBy:createdBy})
    return res.status(400).json({message:"Project Created Successfuly"})
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(409).json({ message: "A project with this same name already exists." });
    }
    // Other errors
    return res.status(500).json({ message: `Internal Server Error ${error}`});
  }
});

const updateProject = async (req, res) => {
  const {newName, newDescription} = req.body
  const {projectId} = req.params;
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({ message: "Invalid Project ID format" });
  }
  const project = await Project.findById(projectId)
  if(project === null){
    throw new ApiError(400,'Invalid Request')
  }
  const updatedProject = await Project.findByIdAndUpdate(projectId,{name:newName,description:newDescription})
  return res.status(200).json({message: "Project updated Successfuly."})
};

const deleteProject = async (req, res) => {
  const {projectId} = req.params;
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({ message: "Invalid Project ID format" });
  }
  const project = await Project.findById(projectId)
  if(project === null){
    throw new ApiError(400,'Invalid Request')
  }
  await Project.findByIdAndDelete(projectId)
  return res.status(200).json({message:"Project Deleted Successfuly"})
};

const getProjectMembers = async (req, res) => {
  const {projectId} = req.params;
  const projectMembers = await ProjectMember.find({project:projectId})
  if(projectMembers.length == 0){
    throw new ApiError(400,"Invalid Project Id")
  }
  return res.status(200).json(projectMembers)
};

const addMemberToProject = async (req, res) => {
  const {userId,projectId,role="member"} = req.body;
  if(await ProjectMember.findOne({project:projectId,user:userId})){
    throw new ApiError(400,"User already exists in the Project")
  }
  const member = await ProjectMember.create({
    user:userId,
    project:projectId,
    role:role
  })
  return res.status(200).json({member})
};

const deleteMember = async (req, res) => {
  const {projectId,userID} = req.body;
  if(!await Project.findById(projectId)){
    throw new ApiError(400,"project Not Found")
  }
  if(!await User.findById(userID)){
    throw new ApiError(400,"User Not Found")
  }
  if(!await ProjectMember.findOne({project:projectId,user:userID})){
    throw new ApiError(400,"User does not exists in the Project")
  }
  await ProjectMember.findOneAndDelete({project:projectId,user:userID})
  return res.status(200).json({message:"Member Deleted Successfuly"})
};

const updateMemberRole = async (req, res) => {
  const {userId,projectId,updatedRole} = req.body;
  if(!await Project.findById(projectId)){
    throw new ApiError(400,"project Not Found")
  }
  if(!await User.findById(userId)){
    throw new ApiError(400,"User Not Found")
  }
  if(!await ProjectMember.findOne({project:projectId,user:userId})){
    throw new ApiError(400,"User does not exists in the Project")
  }
  await ProjectMember.findOneAndUpdate({user:userId,project:projectId},{role:updatedRole})
  return res.status(200).json({message:"User Role Updated Successfuly"})
};

export {
  addMemberToProject,
  createProject,
  deleteMember,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  updateMemberRole,
  updateProject,
};
