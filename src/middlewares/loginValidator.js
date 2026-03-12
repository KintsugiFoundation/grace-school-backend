/**
 * loginValidator.js
 * Joi validation middleware for user login input.
 * Validates email and password before passing to the controller.
 */
import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})
/** Validates user login request body against the Joi schema */
const validateLogin = (req, res, next) => {

    console.log(req.body)
    const {error} = loginSchema.validate(req.body)

    if(error) {
        return res.status(400).json({
            status: 400,
            message: error.details[0].message
        })
    }
    next()
}

export default validateLogin