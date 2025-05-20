import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'Name is required'
  }),

  color: Joi.string().pattern(/^#([0-9a-fA-F]{3}){1,2}$/).required().messages({
    'string.base': 'Color must be a string',
    'string.pattern.base': 'Color must be a valid hex color (e.g., #1f8ef1)',
    'any.required': 'Color is required'
  }),

  hover: Joi.string().required().messages({
    'string.base': 'Hover must be a string',
    'string.pattern.base': 'Hover must be a valid hex color (e.g., #0056b3)',
    'any.required': 'Hover is required'
  }),

  description: Joi.string().required().messages({
    'string.base': 'Description must be a string',
    'any.required': 'Description is required'
  }),

  cover_photo: Joi.string().uri().required().messages({
    'string.base': 'Cover photo must be a string',
    'string.uri': 'Cover photo must be a valid URL',
    'any.required': 'Cover photo is required'
  }),

  character_photo: Joi.string().uri().required().messages({
    'string.base': 'Character photo must be a string',
    'string.uri': 'Character photo must be a valid URL',
    'any.required': 'Character photo is required'
  })
});

export default schema;
