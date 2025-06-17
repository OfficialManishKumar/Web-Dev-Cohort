import { Router } from "express"
// Middlewares
import authUserLogin from "../middleware/auth.middleware.js"
import {validate} from "../middleware/validator.middleware.js"
import {authPermissions} from "../middleware/permissions.middleware.js"
// Controllers
import {createNote,getNotes,getNoteById,updateNote,deleteNote} from "../controller/note.controller.js"
// Validators
import {createNoteValidator,getNoteByIdValidator,updateNoteValidator,deleteNoteValidator} from "../validators/note-validator.js"



const router = Router()
// Routings
router.route("/createNote/:projectId")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],true),
        createNoteValidator,
        validate,
        createNote
    )

router.route("/getNotes")
    .get(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],false),
        validate,
        getNotes
    )

router.route("/getNoteById")
    .get(
        authUserLogin,
        authPermissions(["admin","project_admin","member","user"],false),
        getNoteByIdValidator,
        validate,
        getNoteById
    )

router.route("/updateNote/:noteId")
    .post(
        authUserLogin,
        authPermissions(["admin","project_admin"],false),
        updateNoteValidator,
        validate,
        updateNote
    )

router.route("/deleteNote/:noteId")
    .delete(
        authUserLogin,
        authPermissions(["admin","project_admin"],false),
        deleteNoteValidator,
        validate,
        deleteNote
    )


export default router