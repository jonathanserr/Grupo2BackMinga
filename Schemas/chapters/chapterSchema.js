import Joi from "joi";

const schema = Joi.object({
  title: Joi.string().required(),

  pages: Joi.array().items(Joi.string().required()).required(),

  order: Joi.number().required()
});

export default schema;
