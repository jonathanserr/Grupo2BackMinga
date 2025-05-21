import Joi from "joi";

const schema = Joi.object({
  reaction: Joi.number().required()
});

export default schema;
