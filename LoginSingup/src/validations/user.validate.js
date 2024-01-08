const Joi = require('joi');

const createUserSchema = Joi.object({
  email: Joi.string().email().lowercase().required().description("Honey is required"),
  userName: Joi.string().min(3).max(30).required().description("Honey is required"),
  password: Joi.string().min(2).required(),
});

const loginUserSchema = Joi.object({    
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
});

module.exports = { createUserSchema, loginUserSchema };