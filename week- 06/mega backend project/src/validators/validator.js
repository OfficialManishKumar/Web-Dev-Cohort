import {body} from "express-validator"

const userRegistrationValidator = ()=>{
    return[
        body('email')
            .trim()
            .notEmpty().withMessage("Email is Required")
            .isEmail().withMessage("Email is Invaide"),

        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({min:3}).withMessage("Username is too short")
            .isLength({max:30}).withMessage("Username is too long"),
        body("password")
            .notEmpty().withMessage("Please Enter the password first")
            .isLength({min:8}).withMessage("Password should be more than 8 chars")
            .isStrongPassword().withMessage("Please Enter a Strong Password"),
    ]
}

const userLoginValidator = ()=>{
    return[
        body("email")
            .trim()
            .isEmail().withMessage("Email is not valid")
            .notEmpty().withMessage("Please Enter the Email first"),
        body("password")
            .trim()
            .notEmpty().withMessage("Please Enter the Password also.")
    ]
}

export {userLoginValidator,userRegistrationValidator};