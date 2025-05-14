import Joi from "joi";

const schema = Joi.object({
    name: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
        'string.pattern.base': 'The name can only contain letters, no numbers or symbols',
        'string.base': 'The name cannot contain numbers or symbols'
    }),

    lastname: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
        'string.pattern.base': 'The lastname can only contain letters, no numbers or symbols',
        'string.base': 'The lastname cannot contain numbers or symbols'
    }),

    email: Joi.string().required().email().messages({
        "string.base": 'Do not use numbers, this should be an email',
        'string.email': 'It is text but not a valid email'
    }),

    password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .messages({
        'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, and one number',
        'string.base': 'The password must be a text'
    }),

    urlPhoto: Joi.string().required(),
    
    country: Joi.string().required()
})

export default schema;
