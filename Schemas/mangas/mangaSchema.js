import Joi from "joi";

const schema = Joi.object({
  title: Joi.string().required(),
  cover_photo: Joi.string().required(),
  description: Joi.string().required(),
  category_id: Joi.string().required()
});

export default schema;
