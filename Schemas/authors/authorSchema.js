import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'Name is required'
  }),

  last_name: Joi.string().required().messages({
    'string.base': 'Last name must be a string',
    'any.required': 'Last name is required'
  }),

  city: Joi.string().required().messages({
    'string.base': 'City must be a string',
    'any.required': 'City is required'
  }),

  country: Joi.string().required().messages({
    'string.base': 'Country must be a string',
    'any.required': 'Country is required'
  }),

  date: Joi.date().required().messages({
    'date.base': 'Date must be a valid date',
    'date.format': 'Date must be in ISO format (YYYY-MM-DD)',
    'any.required': 'Date is required'
  }),

  photo: Joi.string().uri().required().messages({
    'string.base': 'Photo must be a string',
    'string.uri': 'Photo must be a valid URL',
    'any.required': 'Photo is required'
  })
});

export default schema;
