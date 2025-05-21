import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),

  website: Joi.string().required(),

  description: Joi.string().required(),

  photo: Joi.string().required()
});

export default schema;
