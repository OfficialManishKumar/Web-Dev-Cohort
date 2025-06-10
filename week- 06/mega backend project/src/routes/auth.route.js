import { Router } from "express"
import registerUser from "../controller/auth.controller.js"
import {validate} from "../middleware/validator.middleware.js"
import {userRegistrationValidator} from "../validators/validator.js"

const router = Router()

router.route("/").post(userRegistrationValidator(),validate,registerUser)       // we executed the "userRegistrationValidator", because we don't directly said to go to next file in that file.

export default router