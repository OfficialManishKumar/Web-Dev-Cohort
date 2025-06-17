import { Router } from "express"
import {createProject,getProjects,getProjectById,updateProject,deleteProject,getProjectMembers,addMemberToProject,deleteMember,updateMemberRole } from "../controller/project.controller.js"
import { createProjectValidator,getProjectsValidator,getprojectByIdValidator,updateProjectValidator,deleteProjectValidator,getProjectMembersValidator,addMemberToProjectValidator,deleteMemberValidator,updateMemberRoleValidator } from "../validators/project-validator.js"
import { validate } from "../middleware/validator.middleware.js"
import authUserLogin from "../middleware/auth.middleware.js"
import {authPermissions} from "../middleware/permissions.middleware.js"

const router = Router()

router.route("/createProject")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],false),
        createProjectValidator,
        validate,
        createProject
    )
router.route("/getProjects")
    .get(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],false),
        getProjectsValidator,
        validate,
        getProjects
    )
router.route("/getProjectById/:projectId")
    .get(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],true),
        getprojectByIdValidator,
        validate,
        getProjectById
    )
router.route("/updateProject/:projectId")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin"],true),
        updateProjectValidator,
        validate,
        updateProject
    )
router.route("/deleteProject/:projectId")
    .delete(
        authUserLogin,
        authPermissions(["admin","project_admin"],true),
        deleteProjectValidator,
        validate,
        deleteProject
    )
router.route("/addMember")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin"],true),
        addMemberToProjectValidator,
        validate,
        addMemberToProject
    )
router.route("/getMembers/:projectId")
    .get(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],true),
        getProjectMembersValidator,
        validate,
        getProjectMembers)
router.route("/deleteMember")
    .delete(
        authUserLogin,
        authPermissions(["admin","project_admin"],true),
        deleteMemberValidator,
        validate,
        deleteMember
    )
router.route("/updateMemberRole")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin"],true),
        updateMemberRoleValidator,
        validate,
        updateMemberRole
    )


export default router;