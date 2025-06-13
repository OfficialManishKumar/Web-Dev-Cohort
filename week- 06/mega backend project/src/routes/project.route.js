import { Router } from "express"
import {createProject} from "../controller/project.controller.js"
import { createProjectValidator } from "../validators/project-validator.js"
import { validate } from "../middleware/validator.middleware.js"

const createProjectRouter = Router()
createProjectRouter.route("/createProject").post(createProjectValidator,validate,createProject)

export {createProjectRouter}