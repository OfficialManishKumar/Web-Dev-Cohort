import {Project} from "../models/projects.model.js"
import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

const getProjects = asyncHandler(async (req, res) => {
  // get all projects
});

const getProjectById = async (req, res) => {
  // get project by id
};

const createProject = asyncHandler(async (req, res) => {
  const {name,description,createdBy} = req.body;
  const user = await Project.create({name,description,createdBy},{timestamps:true})
  return ApiResponse(200,user,"Project created successfuly")
});

const updateProject = async (req, res) => {
  // update project
};

const deleteProject = async (req, res) => {
  // delete project
};

const getProjectMembers = async (req, res) => {
  // get project members
};

const addMemberToProject = async (req, res) => {
  // add member to project
};

const deleteMember = async (req, res) => {
  // delete member from project
};

const updateMemberRole = async (req, res) => {
  // update member role
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
