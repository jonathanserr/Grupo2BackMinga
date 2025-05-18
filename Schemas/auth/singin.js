import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().required().email().messages({
    "string.base": "Do not use numbers, this should be an email",
    "string.email": "It is text but not a valid email",
  }),

  password: Joi.string()
    .required()
    .min(6)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .messages({
      "string.pattern.base":
        "The password must contain at least one uppercase letter, one lowercase letter, and one number",
      "string.base": "The password must be a text",
    }),
});


export default schema