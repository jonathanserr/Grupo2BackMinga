import Joi from "joi";

const schema = Joi.object({
  message: Joi.string().required()
});

export default schema;
