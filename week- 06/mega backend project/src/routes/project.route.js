import { Router } from "express"
import {createProject,getProjects,getProjectById,updateProject,deleteProject,getProjectMembers,addMemberToProject,deleteMember,updateMemberRole } from "../controller/project.controller.js"
import { createProjectValidator,getProjectsValidator,getprojectByIdValidator,updateProjectValidator,deleteProjectValidator,getProjectMembersValidator,addMemberToProjectValidator,deleteMemberValidator,updateMemberRoleValidator } from "../validators/project-validator.js"
import { validate } from "../middleware/validator.middleware.js"

const router = Router()

router.route("/createProject").post(createProjectValidator,validate,createProject)
router.route("/getProjects").get(getProjectsValidator,validate,getProjects)
router.route("/getProjectById/:projectId").get(getprojectByIdValidator,validate,getProjectById)
router.route("/updateProject/:projectId").post(updateProjectValidator,validate,updateProject)
router.route("/deleteProject/:projectId").delete(deleteProjectValidator,validate,deleteProject)
router.route("/addMember").post(addMemberToProjectValidator,validate,addMemberToProject)
router.route("/getMembers/:projectId").get(getProjectMembersValidator,validate,getProjectMembers)
router.route("/deleteMember").delete(deleteMemberValidator,validate,deleteMember)
router.route("/updateMemberRole").post(updateMemberRoleValidator,validate,updateMemberRole)


export default router;